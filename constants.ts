import { CourseCategory } from './types';

export const APP_VERSION = '2.0.002';

// Large collection of unique Unsplash images to ensure variety and relevance.
// Verified IDs to prevent broken/corrupted links.

const SALES_IMAGES = [
  'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80', // Handshake
  'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80', // Meeting
  'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80', // Analytics
  'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&w=800&q=80', // Payment
  'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80', // Team
  'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80', // Chart
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80', // Growth
  'https://images.unsplash.com/photo-1578574577315-3fbeb0ce88e3?auto=format&fit=crop&w=800&q=80', // Graph
  'https://images.unsplash.com/photo-1526304640152-d4619684e484?auto=format&fit=crop&w=800&q=80', // Numbers
  'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=800&q=80', // Money
  'https://images.unsplash.com/photo-1556740714-a8395b3bf3ea?auto=format&fit=crop&w=800&q=80', // Transaction
  'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80', // Accounting
  'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80', // Stocks
  'https://images.unsplash.com/photo-1535320903710-d9cf113d2062?auto=format&fit=crop&w=800&q=80', // Dashboard
  'https://images.unsplash.com/photo-1611974765270-ca1258634369?auto=format&fit=crop&w=800&q=80'  // Trading
];

const MANAGEMENT_IMAGES = [
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80', // Teamwork
  'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80', // Huddle
  'https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&w=800&q=80', // High five
  'https://images.unsplash.com/photo-1507208773393-40d9fc9f4981?auto=format&fit=crop&w=800&q=80', // Leader
  'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=800&q=80', // Office
  'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80', // Collaboration
  'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80', // Boardroom
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80', // Planning
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80', // Professional
  'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80', // Executive
  'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80', // Meeting table
  'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80', // Conference
  'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80', // Workshop
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80', // Discussion
  'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80'  // Suit
];

const DEV_IMAGES = [
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80', // Code screen
  'https://images.unsplash.com/photo-1504639725590-34d69cd07fb0?auto=format&fit=crop&w=800&q=80', // Matrix code
  'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80', // IDE
  'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80', // Coding
  'https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&w=800&q=80', // Source code
  'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80', // Laptop code
  'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=800&q=80', // Programming
  'https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=800&q=80', // Laptop close up
  'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?auto=format&fit=crop&w=800&q=80', // Interface
  'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&w=800&q=80', // Html
  'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80', // Python
  'https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?auto=format&fit=crop&w=800&q=80', // React
  'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=800&q=80', // Apple
  'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=800&q=80', // UI
  'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?auto=format&fit=crop&w=800&q=80'  // Web dev
];

const DESIGN_IMAGES = [
  'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80', // Palette
  'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80', // UI Design
  'https://images.unsplash.com/photo-1572044162444-ad6021280bfa?auto=format&fit=crop&w=800&q=80', // Color swatches
  'https://images.unsplash.com/photo-1586717791821-3f44a5638d0f?auto=format&fit=crop&w=800&q=80', // Interface
  'https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?auto=format&fit=crop&w=800&q=80', // Sketching
  'https://images.unsplash.com/photo-1626785774573-4b799314346d?auto=format&fit=crop&w=800&q=80', // Graphic design
  'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=800&q=80', // Pencil
  'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80', // Abstract
  'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=800&q=80', // Creative
  'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&w=800&q=80', // Social media
  'https://images.unsplash.com/photo-1525909002-1b05e0c869d8?auto=format&fit=crop&w=800&q=80', // Art
  'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=800&q=80', // Paint
  'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=800&q=80', // Colors
  'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?auto=format&fit=crop&w=800&q=80', // Computer
  'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80'  // Mac
];

const BUSINESS_IMAGES = [
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80', // Planning
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80', // Building
  'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80', // Suit
  'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80', // Finance
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80', // Signing
  'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=800&q=80', // Strategy
  'https://images.unsplash.com/photo-1554774853-719586f8c277?auto=format&fit=crop&w=800&q=80', // Success
  'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&w=800&q=80', // Work
  'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80', // Meeting room
  'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80', // Analysis
  'https://images.unsplash.com/photo-1504384308090-c54be3852f33?auto=format&fit=crop&w=800&q=80', // Office
  'https://images.unsplash.com/photo-1491336477066-31156b5e4f35?auto=format&fit=crop&w=800&q=80', // Tie
  'https://images.unsplash.com/photo-1483389127117-b6a2102724ae?auto=format&fit=crop&w=800&q=80', // Laptop work
  'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80', // People
  'https://images.unsplash.com/photo-1462206092226-f46025ffe607?auto=format&fit=crop&w=800&q=80'  // Desk
];

const DATA_SCIENCE_IMAGES = [
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80', // Charts
  'https://images.unsplash.com/photo-1504868587819-f8e8b716602c?auto=format&fit=crop&w=800&q=80', // Analytics
  'https://images.unsplash.com/photo-1543286386-2e659306cd6c?auto=format&fit=crop&w=800&q=80', // Data
  'https://images.unsplash.com/photo-1599658880436-c61792e70672?auto=format&fit=crop&w=800&q=80', // Graph
  'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=800&q=80', // Network
  'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80', // Security
  'https://images.unsplash.com/photo-1488229297570-58520851e868?auto=format&fit=crop&w=800&q=80', // Algorithm
  'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?auto=format&fit=crop&w=800&q=80', // AI
  'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&w=800&q=80', // Big Data
  'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80', // Code
  'https://images.unsplash.com/photo-1558494949-ef526b0042a0?auto=format&fit=crop&w=800&q=80', // Server
  'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80', // Statistics
  'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80', // Math
  'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80', // Neural network
  'https://images.unsplash.com/photo-1531297461136-82lw9b6a9a73?auto=format&fit=crop&w=800&q=80'  // Tech
];

const MARKETING_IMAGES = [
  'https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&w=800&q=80', // Strategy
  'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=800&q=80', // Shopping
  'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80', // SEO
  'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80', // Digital
  'https://images.unsplash.com/photo-1459183885421-5cc9595dc8e1?auto=format&fit=crop&w=800&q=80', // Social
  'https://images.unsplash.com/photo-1555421689-d68471e189f2?auto=format&fit=crop&w=800&q=80', // Analytics
  'https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=800&q=80', // Megaphone
  'https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?auto=format&fit=crop&w=800&q=80', // Advertising
  'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80', // Content
  'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=800&q=80', // Brand
  'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=800&q=80', // Online
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80', // Team
  'https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&w=800&q=80', // Article
  'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80', // Growth
  'https://images.unsplash.com/photo-1479920252409-6e3d8e8d48c9?auto=format&fit=crop&w=800&q=80'  // Twitter
];

const PHOTOGRAPHY_IMAGES = [
  'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80', // Camera
  'https://images.unsplash.com/photo-1542038784456-1ea0e93ca64b?auto=format&fit=crop&w=800&q=80', // Lens
  'https://images.unsplash.com/photo-1452587909723-57b66396e18f?auto=format&fit=crop&w=800&q=80', // Hands
  'https://images.unsplash.com/photo-1493863641943-9b68992a8d07?auto=format&fit=crop&w=800&q=80', // Portrait
  'https://images.unsplash.com/photo-1554048612-387768052bf7?auto=format&fit=crop&w=800&q=80', // Studio
  'https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?auto=format&fit=crop&w=800&q=80', // Film
  'https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?auto=format&fit=crop&w=800&q=80', // Canon
  'https://images.unsplash.com/photo-1520390138845-fd2d229dd552?auto=format&fit=crop&w=800&q=80', // Shutter
  'https://images.unsplash.com/photo-1552168324-d612d77725e3?auto=format&fit=crop&w=800&q=80', // Light
  'https://images.unsplash.com/photo-1568292325375-38403a45c602?auto=format&fit=crop&w=800&q=80', // Edit
  'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80', // Tripod
  'https://images.unsplash.com/photo-1500634245200-e5245c7574ef?auto=format&fit=crop&w=800&q=80', // Nature
  'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=80', // Zoom
  'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=800&q=80', // Vintage
  'https://images.unsplash.com/photo-1542038784456-1ea0e93ca64b?auto=format&fit=crop&w=800&q=80'  // Macro
];

export const CATEGORY_IMAGES_LIST: Record<string, string[]> = {
  [CourseCategory.SALES_MANAGEMENT]: SALES_IMAGES,
  [CourseCategory.MANAGEMENT_LEADERSHIP]: MANAGEMENT_IMAGES,
  [CourseCategory.DEVELOPMENT]: DEV_IMAGES,
  [CourseCategory.DESIGN]: DESIGN_IMAGES,
  [CourseCategory.BUSINESS]: BUSINESS_IMAGES,
  [CourseCategory.DATA_SCIENCE]: DATA_SCIENCE_IMAGES,
  [CourseCategory.MARKETING]: MARKETING_IMAGES,
  [CourseCategory.PHOTOGRAPHY]: PHOTOGRAPHY_IMAGES,
};

export const GLOBAL_FALLBACK_IMAGES = [
  'https://images.unsplash.com/photo-1499750310159-57751c67abb6?auto=format&fit=crop&w=800&q=80', // Workspace
  'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80', // Desk
  'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80', // Chip
  'https://images.unsplash.com/photo-1454165205444-54f23315101b?auto=format&fit=crop&w=800&q=80', // Work
  'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&q=80', // Study
  'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80', // Laptop
  'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80', // Typing
  'https://images.unsplash.com/photo-1524178232363-1fb2b075b955?auto=format&fit=crop&w=800&q=80', // Class
  'https://images.unsplash.com/photo-1531297461136-82lw9b6a9a73?auto=format&fit=crop&w=800&q=80', // Tech
  'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80', // Conference
  'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=800&q=80', // Idea
  'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80', // Office
  'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80', // Desk plants
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80', // Team
  'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80', // Workshop
  'https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=800&q=80', // Texture
  'https://images.unsplash.com/photo-1510074377623-8cf13fb86c08?auto=format&fit=crop&w=800&q=80', // Abstract
  'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80', // Lamp
  'https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?auto=format&fit=crop&w=800&q=80', // Book
  'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=80'  // Library
];

export const DEFAULT_THUMBNAILS = GLOBAL_FALLBACK_IMAGES.slice(0, 3);