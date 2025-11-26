import { supabase, isSupabaseConfigured } from './supabaseClient';
import { Course, CourseCategory } from '../types';
import { CATEGORY_IMAGES_LIST, GLOBAL_FALLBACK_IMAGES, DEFAULT_THUMBNAILS } from '../constants';

// Helper to handle flexible column names (snake_case or Title Case)
const getCol = (row: any, keys: string[]): any => {
  for (const key of keys) {
    if (row[key] !== undefined) return row[key];
  }
  return null;
};

const parseDurationToMinutes = (durationStr: string): number => {
  if (!durationStr) return 0;
  const lower = durationStr.toLowerCase();
  let minutes = 0;

  // Format: "3h 45m" or "3h" or "45m"
  const hMatch = lower.match(/(\d+)\s*h/);
  const mMatch = lower.match(/(\d+)\s*m/);

  // Format: "1 hour 23 minutes"
  const hourTextMatch = lower.match(/(\d+)\s*hour/);
  const minTextMatch = lower.match(/(\d+)\s*minute/);

  if (hMatch) minutes += parseInt(hMatch[1]) * 60;
  else if (hourTextMatch) minutes += parseInt(hourTextMatch[1]) * 60;

  if (mMatch) minutes += parseInt(mMatch[1]);
  else if (minTextMatch) minutes += parseInt(minTextMatch[1]);

  return minutes;
};

// Logic to assign a unique image to a course from our available pools
const assignUniqueImage = (
  category: string, 
  courseName: string, 
  usedImages: Set<string>
): string => {
  // 1. Try Category specific images
  const categoryImages = CATEGORY_IMAGES_LIST[category] || [];
  
  // Deterministic preference based on name hash
  const hash = courseName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const preferredIndex = hash % (categoryImages.length || 1);
  
  // Check preferred first
  if (categoryImages.length > 0 && !usedImages.has(categoryImages[preferredIndex])) {
    usedImages.add(categoryImages[preferredIndex]);
    return categoryImages[preferredIndex];
  }
  
  // Check other free images in category
  const freeCategoryImg = categoryImages.find(img => !usedImages.has(img));
  if (freeCategoryImg) {
    usedImages.add(freeCategoryImg);
    return freeCategoryImg;
  }
  
  // 2. Try Global Fallback
  const freeGlobal = GLOBAL_FALLBACK_IMAGES.find(img => !usedImages.has(img));
  if (freeGlobal) {
    usedImages.add(freeGlobal);
    return freeGlobal;
  }
  
  // 3. Last Resort: Use any image from any category that isn't used
  const allImages = Object.values(CATEGORY_IMAGES_LIST).flat();
  const freeAny = allImages.find(img => !usedImages.has(img));
  if (freeAny) {
    usedImages.add(freeAny);
    return freeAny;
  }
  
  // 4. Absolute fallback (reuse preferred if we exhausted 100+ images)
  return categoryImages[preferredIndex] || DEFAULT_THUMBNAILS[0];
};

export const fetchCoursesFromSupabase = async (): Promise<Course[]> => {
  if (!isSupabaseConfigured() || !supabase) {
    throw new Error("SUPABASE_NOT_CONFIGURED");
  }

  // Attempt 1: Try 'courses'
  let { data, error } = await supabase
    .from('courses') 
    .select('*');

  // Attempt 2: Try 'Courses'
  if (error && (error.code === '42P01' || error.message.includes('does not exist') || error.message.includes('Could not find the table'))) {
    console.warn("Table 'courses' not found, attempting 'Courses'...");
    const retry = await supabase.from('Courses').select('*');
    if (!retry.error) {
      data = retry.data;
      error = retry.error;
    }
  }

  if (error) {
    console.error('Supabase Error Details:', JSON.stringify(error, null, 2));
    if (
      error.code === '42P01' || 
      error.message.includes('Could not find the table') || 
      error.message.includes('does not exist')
    ) {
      throw new Error("TABLE_NOT_FOUND");
    }
    throw new Error(`Database Error: ${error.message}`);
  }

  if (!data) return [];

  const coursesMap = new Map<string, Course>();
  const usedImages = new Set<string>();

  // Group flat rows into Course objects
  data.forEach((row: any) => {
    // Extract values using flexible keys
    const courseName = getCol(row, ['course_name', 'Course Name', 'name']);
    const lecturer = getCol(row, ['lecturer', 'Lecturer']);
    const categoryRaw = getCol(row, ['course_category', 'Course Category', 'category']);
    const source = getCol(row, ['source', 'Source']);
    const totalDuration = getCol(row, ['total_duration', 'Total Duration']);
    const totalVideos = getCol(row, ['total_videos', 'Total Videos']);
    const videoTopic = getCol(row, ['video_topic', 'Video Topic', 'topic']);
    const videoDuration = getCol(row, ['video_duration', 'Video Duration']);
    const videoLink = getCol(row, ['video_link', 'Video Link', 'link']);

    if (!courseName || !videoLink) return; // Skip invalid rows

    const courseKey = `${courseName}-${lecturer}`;

    if (!coursesMap.has(courseKey)) {
      // Initialize course if not exists
      let category = CourseCategory.BUSINESS;
      
      // Simple fuzzy match for category
      Object.values(CourseCategory).forEach(cat => {
        if ((categoryRaw || '').toLowerCase().includes(cat.toLowerCase())) {
          category = cat;
        }
      });

      // Assign a unique thumbnail
      const thumbnail = assignUniqueImage(category, courseName, usedImages);

      coursesMap.set(courseKey, {
        id: courseKey,
        name: courseName,
        category: category,
        source: source || 'Unknown Source',
        lecturer: lecturer || 'Unknown Lecturer',
        duration: totalDuration || '0h',
        durationMinutes: parseDurationToMinutes(totalDuration || ''),
        videoCount: parseInt(totalVideos || '0'),
        topics: [],
        videos: [],
        link: '',
        thumbnail: thumbnail,
        description: `Learn ${courseName} with ${lecturer}. Comprehensive training from ${source}.`,
        rating: 4.8
      });
    }

    const course = coursesMap.get(courseKey)!;
    
    // Add video info
    course.videos.push({
      title: videoTopic || `Lesson ${course.videos.length + 1}`,
      duration: videoDuration || '0m',
      link: videoLink
    });

    // Set the main course link to the first video if not set
    if (!course.link) {
      course.link = videoLink;
    }
    
    // Add topic to search index if unique
    if (videoTopic && !course.topics.includes(videoTopic)) {
      course.topics.push(videoTopic);
    }
  });

  return Array.from(coursesMap.values());
};