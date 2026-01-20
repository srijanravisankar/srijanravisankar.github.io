/**
 * Portfolio data for Srijan Ravisankar
 * Software Developer Portfolio
 */

export interface SocialLinks {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  location: string;
}

export interface Skill {
  category: string;
  items: string[];
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  highlights: string[];
  technologies: string[];
  period: string;
  liveDemo?: string;
  sourceCode?: string;
  frontendCode?: string;
  backendCode?: string;
  coverImage: string;
  icon: string;
  video?: string;
}

export interface Education {
  institution: string;
  degree: string;
  cgpa: string;
  location: string;
  expectedGraduation: string;
}

export interface Certification {
  name: string;
  provider: string;
  icon: string;
  link?: string;
  image: string;
  description?: string;
}

export interface Hackathon {
  name: string;
  award?: string;
  date: string;
  description: string[];
  link: string;
}

export interface Courses {
  name: string;
  code?: string;
  institution: string;
  grade?: number; 
}

export const portfolioInfo = {
  name: 'Srijan Ravisankar',
  title: 'Full-Stack Developer',
  tagline: 'Building performant, scalable applications.',
  heroIntro: 'Computer Science student passionate about crafting elegant solutions to complex problems. Specializing in full-stack development with React, TypeScript, and cloud technologies.',
  
  about: `I'm a Computer Science student at Lakehead University with a passion for building intuitive, high-performance applications. My expertise spans modern web technologies, from React and TypeScript on the frontend to Node.js, FastAPI, and Kotlin on the backend.

I believe in writing clean, maintainable code and creating user experiences that feel natural and effortless. Whether it's optimizing API performance, implementing real-time features, or designing scalable architectures, I approach every challenge with curiosity and determination.

When I'm not coding, I'm exploring new technologies, contributing to open-source projects, and continuously learning to stay at the forefront of software development.`,
  
  socialLinks: {
    email: 'srijanvr@gmail.com',
    phone: '807-620-0780',
    linkedin: 'https://linkedin.com/in/srijanravisankar',
    github: 'https://github.com/srijanravisankar',
    location: 'Thunder Bay, ON',
  } as SocialLinks,
};

export const skills: Skill[] = [
  {
    category: 'Languages',
    items: ['Python', 'TypeScript', 'JavaScript', 'Kotlin', 'PostgreSQL', 'HTML/CSS', 'MongoDB', 'SQLite'],
    icon: 'Code2',
  },
  {
    category: 'Libraries & Frameworks',
    items: ['ReactJS', 'React Native', 'NodeJS', 'FastAPI', 'Flask', 'Ktor', 'TailwindCSS', 'MUI'],
    icon: 'Layers',
  },
  {
    category: 'Developer Tools',
    items: ['Google Cloud', 'Azure', 'Kubernetes', 'Docker', 'Git', 'Linux', 'Postman', 'Supabase', 'Gradle'],
    icon: 'Wrench',
  },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Odsseyelp',
    slug: 'odsseyelp',
    description: 'AI-powered travel discovery platform with real-time collaborative features',
    highlights: [
      'Integrated Google Gemini and Yelp Fusion APIs to transform natural language into a Travel Engine',
      'Reduced potential API overhead by 60% through 300ms debounced search implementation',
      'Leveraged WebSockets to reduce data sync lag from seconds to 100ms',
      'Built zero-latency collaborative group chats with secure invite systems and community voting',
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind', 'Shadcn', 'Supabase', 'PostgreSQL', 'Gemini'],
    period: 'November 2025 – December 2025',
    liveDemo: 'https://odysseyelp.vercel.app/',
    sourceCode: 'https://github.com/srijanravisankar/odysseyelp',
    coverImage: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80',
    icon: 'Binoculars',
    video: 'https://youtu.be/434eIXuXy24?si=OlAsf0kFuiktDs13',
  },
  {
    id: '6',
    title: 'CleverCourse',
    slug: 'clevercourse',
    description: 'An AI-powered, ADHD-optimized, Bite-sized learning for distracted minds',
    highlights: [
      'Architected a non-linear Course Graph via Gemini 2.0, mapping complex educational topics into interactive nodes in a sub-3s generation window', 
      'Engineered a dual-coding "Podcast Mode" using Web Speech API, synchronizing real-time text highlighting with 0ms visual-audio latency',
      'Secured "Moonshot" Honorable Mention at United Hacks (150+ projects, 1200+ participants)'
    ],
    technologies: ['Next.js', 'TypeScript', 'Zustand', 'TailwindCSS', 'Google Gemini', 'SQLite'],
    period: 'December 2025',
    liveDemo: 'https://clevercourse.vercel.app/',
    sourceCode: 'https://github.com/srijanravisankar/clevercourse',
    coverImage: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80',
    video: 'https://www.youtube.com/watch?v=2AZWmEggLpg',
    icon: 'Notebook',
  },
  {
    id: '2',
    title: 'Heyday',
    slug: 'heyday',
    description: 'Universal cross-platform productivity application with offline persistence',
    highlights: [
      'Engineered Universal Cross-Platform Productivity Application using React Native and TypeScript',
      'Implemented unified codebase for 3 different OS with dynamic database adapters',
      'Built platform-agnostic pipeline dynamically swapping database adapters',
      'Achieved 0-latency UI with complex CRUD operations for custom routines',
    ],
    technologies: ['React Native (Expo)', 'TypeScript', 'WatermeloDB', 'SQLite', 'CSS'],
    period: 'December 2025',
    liveDemo: 'https://heydayweb.vercel.app/',
    sourceCode: 'https://github.com/srijanravisankar/heyday',
    coverImage: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80',
    icon: 'Timer',
  },
  {
    id: '3',
    title: 'Memento',
    slug: 'memento',
    description: 'Full-stack flashcard app with AI-powered spaced repetition',
    highlights: [
      'Built modular full-stack flashcard app using React.js and FastAPI',
      'Implemented FSRS-based spaced repetition algorithm',
      'Integrated open-source LLMs for robust AI flashcard generation',
      'Released installable binaries through GitHub Releases for public usage',
    ],
    technologies: ['JavaScript', 'React.js', 'Python', 'FastAPI', 'SQLAlchemy', 'SQLite'],
    period: 'May 2025 – July 2025',
    liveDemo: 'https://github.com/srijanravisankar/memento',
    sourceCode: 'https://github.com/srijanravisankar/TheFlashcardProject',
    coverImage: 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=800&q=80',
    icon: 'Brain',
    video: 'https://youtu.be/MDP3K2xdjAo?si=MfszniurfmXO-TA3',
  },
  {
    id: '4',
    title: 'Wallet',
    slug: 'wallet',
    description: 'High-performance financial API with secure, Dockerized backend',
    highlights: [
      'Architected high-performance Kotlin/Ktor API using custom JDBC persistence',
      'Optimized PostgreSQL schemas to scale complex financial operations',
      'Engineered secure, Dockerized backend with thread-safe concurrency (ReentrantLocks)',
      'Used functional patterns to ensure high-performance data integrity',
    ],
    technologies: ['Ktor', 'Kotlin', 'Gradle', 'PostgreSQL', 'JDBC', 'BCrypt', 'Docker'],
    period: 'October 2025 – November 2025',
    frontendCode: 'https://github.com/srijanravisankar/wallet-frontend',
    backendCode: 'https://github.com/srijanravisankar/wallet',
    coverImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80',
    video: 'https://www.youtube.com/watch?v=DRINEXERaqk&t=1s',
    icon: 'Wallet',
  },
  {
    id: '5',
    title: 'CipherSonic',
    slug: 'ciphersonic',
    description: 'Secure Key & Message Exchange via Sound & HTTP',
    highlights: [
      'Engineered a sovereign cryptographic orchestration engine utilizing dual-layer RSA-4096 and AES-256 protocols',
      'Formulated near-field ultrasonic data-link protocols via GGWave to transmit URL-encoded cipher-fragments',
      'Architected real-time WebSocket telemetry via Flask-SocketIO to synchronize local HTTP encrypted nodes',
    ],
    technologies: ['Python', 'Flask', 'GGWave', 'PyCryptodome', 'RSA', 'AES', 'WebSockets', 'PortAudio'],
    period: 'October 2025 – November 2025',
    sourceCode: 'https://github.com/srijanravisankar/CryptographyProjects/tree/main/CipherSonic',
    coverImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80',
    icon: 'AudioWaveform',
  },
];

export const education: Education = {
  institution: 'Lakehead University',
  degree: 'Honors Bachelor of Science in Computer Science',
  cgpa: '86.8%',
  location: 'Thunder Bay, ON',
  expectedGraduation: 'June 2027',
};

export const coursework: Courses[] = [
  {code: 'CSC 108', name: 'Introduction to Computer Programming', institution: 'University of Toronto', grade: 81},
  {code: 'CSC 148', name: 'Introduction to Computer Science', institution: 'University of Toronto', grade: 63},
  {code: 'MAT 102', name: 'Introduction to Mathematical Proofs', institution: 'University of Toronto', grade: 84},
  {code: 'MAT 135', name: 'Differential Calculus', institution: 'University of Toronto', grade: 79},
  {code: 'MAT 136', name: 'Integral Calculus', institution: 'University of Toronto', grade: 75},
  {code: 'ECO 101', name: 'Principles of Microeconomics', institution: 'University of Toronto', grade: 90},
  {code: 'ISP 100', name: 'Writing for University and Beyond', institution: 'University of Toronto', grade: 85},
  {code: 'CPSC 121', name: 'Models of Computation', institution: 'University of British Columbia', grade: 86},
  {code: 'CPSC 210', name: 'Software Construction', institution: 'University of British Columbia', grade: 75},
  {code: 'CPSC 213', name: 'Introduction to Computer Systems', institution: 'University of British Columbia', grade: 68},
  {code: 'CPSC 221', name: 'Basic Algorithms and Data Structures', institution: 'University of British Columbia', grade: 80},
  {code: 'CPSC 304', name: 'Introduction to Relational Databases', institution: 'University of British Columbia', grade: 73},
  {code: 'DSCI 100', name: 'Introduction to Data Science', institution: 'University of British Columbia', grade: 82},
  {code: 'MATH 200', name: 'Calculus III', institution: 'University of British Columbia', grade: 70},
  {code: 'MATH 215', name: 'Elementary Differential Equations', institution: 'University of British Columbia', grade: 82},
  {code: 'MATH 221', name: 'Matrix Algebra', institution: 'University of British Columbia', grade: 73},
  {code: 'MATH 302', name: 'Introduction to Probability', institution: 'University of British Columbia', grade: 72},
  {code: 'STAT 251', name: 'Elementary Statistics', institution: 'University of British Columbia', grade: 72},
  {code: 'WRDS 150', name: 'Writing and Research', institution: 'University of British Columbia', grade: 75},
  {code: 'BIOL 111', name: 'Introduction to Modern Biology', institution: 'University of British Columbia', grade: 82},
  {code: 'SPAN 101', name: "Beginners' Spanish I", institution: 'University of British Columbia', grade: 77},
  {code: 'COMP 2430', name: 'Mobile Computing Technology', institution: 'Lakehead University', grade: 78},
  // {code: 'COMP 2476', name: 'Introduction to Assembly Language & Operating Systems', institution: 'Lakehead University', grade: 100},
  {code: 'COMP 3415', name: 'Software Engineering', institution: 'Lakehead University', grade: 88},
  {code: 'COMP 3473', name: 'Operating Systems', institution: 'Lakehead University', grade: 88},
  {code: 'COMP 4312', name: 'Cloud Computing', institution: 'Lakehead University', grade: 94},
  // {code: 'COMP 4311', name: 'Big Data', institution: 'Lakehead University', grade: 100},
  {code: 'COMP 4411', name: 'Programming Languages', institution: 'Lakehead University', grade: 86},
  // {code: 'COMP 4431', name: 'Advanced Project', institution: 'Lakehead University', grade: 100},
  // {code: 'COMP 4433', name: 'Algorithm Design and Analysis', institution: 'Lakehead University', grade: 100},
  {code: 'COMP 4453', name: 'Computer Networks & Distribute', institution: 'Lakehead University', grade: 79},
  {code: 'COMP 4476', name: 'Cryptography Network Security', institution: 'Lakehead University', grade: 90},
  {code: 'MATH 1271', name: 'Discrete Mathematics', institution: 'Lakehead University', grade: 100},
  {code: 'SOCI 2755', name: 'Tech, Soc, and Indi People in Canada', institution: 'Lakehead University', grade: 78},
];

export const certifications: Certification[] = [
  { name: 'Docker Certification', provider: 'Boot.dev', icon: 'Container', image: '/certificates/bootdev-docker-certificate.png', link: 'https://www.boot.dev/certificates/cda502ea-0d08-403d-9835-1a4774cfe68c' },
  { name: 'Linux Certification', provider: 'Boot.dev', icon: 'Terminal', image: '/certificates/bootdev-linux-certificate.png', link: 'https://www.boot.dev/certificates/2a5b7444-2363-4ae1-8b6d-c561acd84ef9' },
  { name: 'Git Certification', provider: 'Boot.dev', icon: 'GitBranch', image: '/certificates/bootdev-git-certificate.png', link: 'https://www.boot.dev/certificates/63512354-c6a1-48d5-b8bc-5af068cae3db' },
  { name: 'Go Certification', provider: 'Boot.dev', icon: 'Languages', image: '/certificates/bootdev-go-certificate.png', link: 'https://www.boot.dev/certificates/1dc854b6-f2a6-4191-a34c-572e8251a142' },
  { name: 'Infrastructure', provider: 'Google Cloud Skills', icon: 'Server', image: '/certificates/google-cloud-infrastructure-certificate.png', link: 'https://www.skills.google/public_profiles/f2b700c8-1dd1-4830-a906-78b14469b07f/badges/20438357' },
  { name: 'Networking & Security', provider: 'Google Cloud Skills', icon: 'Shield', image: '/certificates/google-cloud-networking-certificate.png', link: 'https://www.skills.google/public_profiles/f2b700c8-1dd1-4830-a906-78b14469b07f/badges/20579851' },
  { name: 'Cloud Fundamentals', provider: 'Google Cloud Skills', icon: 'Cloud', image: '/certificates/google-cloud-fundamentals-certificate.png', link: 'https://www.skills.google/public_profiles/f2b700c8-1dd1-4830-a906-78b14469b07f/badges/20161988' },
  { name: 'Next.js Certification', provider: 'Vercel', icon: 'Frame', image: '/certificates/next.js-vercel-certification.png', link: 'https://nextjs.org/learn/certificate?course=dashboard-app&user=126184&certId=dashboard-app-126184-1767889164506' },
];

export const hackathons: Hackathon[] = [
  {
    name: 'YuKeSong2025 Hack',
    award: 'Award of Excellence',
    date: 'November 2025',
    link: 'https://devpost.com/software/memento-fme0yb',
    description: [
      'Ranked as a top participant for successfully architecting and deploying a functional AI-driven study tool',
      'Recognized for meeting 100% of technical submission requirements, including stable API integration',
    ],
  },
  {
    name: 'Yelp AI API Hackathon',
    date: 'December 2025',
    link: 'https://devpost.com/software/odysseyelp',
    description: [
      'Integrated Google Gemini and Yelp Fusion APIs to transform natural language into a Travel Engine and reduced potential API overhead by 60%',
      'Leveraged WebSockets to reduce data sync lag from several seconds to 100ms, enabling a zero-latency collaborative group chats',
    ],
  },
];

// Helper functions
export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

export const getFeaturedProjects = (): Project[] => {
  return projects.slice(0, 4);
};
