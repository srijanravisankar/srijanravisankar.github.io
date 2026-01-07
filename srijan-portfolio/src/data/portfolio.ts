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
}

export interface Hackathon {
  name: string;
  award: string;
  date: string;
  description: string[];
}

export const portfolioInfo = {
  name: 'Srijan Ravisankar',
  title: 'Full-Stack Developer',
  tagline: 'Building performant, scalable applications with modern technologies',
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
    liveDemo: '#',
    sourceCode: '#',
    coverImage: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80',
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
    liveDemo: '#',
    sourceCode: '#',
    coverImage: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80',
  },
  {
    id: '3',
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
    frontendCode: '#',
    backendCode: '#',
    coverImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80',
  },
  {
    id: '4',
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
    liveDemo: '#',
    sourceCode: '#',
    coverImage: 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=800&q=80',
  },
];

export const education: Education = {
  institution: 'Lakehead University',
  degree: 'Honors Bachelor of Science in Computer Science',
  cgpa: '86.8%',
  location: 'Thunder Bay, ON',
  expectedGraduation: 'June 2027',
};

export const coursework: string[] = [
  'Software Engineering',
  'Relational Databases',
  'Data Structures',
  'Cloud Computing',
  'Computer Security',
  'Cryptography',
  'Computer Networks',
  'Operating Systems',
  'Data Science',
];

export const certifications: Certification[] = [
  { name: 'Docker Certification', provider: 'Boot.dev', icon: 'Container' },
  { name: 'Linux Certification', provider: 'Boot.dev', icon: 'Terminal' },
  { name: 'Git Certification', provider: 'Boot.dev', icon: 'GitBranch' },
  { name: 'Infrastructure', provider: 'Google Cloud Skills', icon: 'Server' },
  { name: 'Networking & Security', provider: 'Google Cloud Skills', icon: 'Shield' },
  { name: 'Cloud Fundamentals', provider: 'Google Cloud Skills', icon: 'Cloud' },
];

export const hackathons: Hackathon[] = [
  {
    name: 'YuKeSong2025 Hackathon',
    award: 'Award of Excellence',
    date: 'November 2025',
    description: [
      'Ranked as a top participant for successfully architecting and deploying a functional AI-driven study tool',
      'Recognized for meeting 100% of technical submission requirements, including stable API integration',
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
