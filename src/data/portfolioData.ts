import { PersonalInfo, SkillCategory, EducationEntry, MilestoneEntry, ProjectEntry } from "@/types/portfolio";

export const GMAIL_COMPOSE_URL = "https://mail.google.com/mail/?view=cm&fs=1&to=sabihamashruha74%40gmail.com";
export const RECIPIENT_EMAIL = "sabihamashruha74@gmail.com";

export const personalInfo: PersonalInfo = {
  name: "Sabiha Mashruha Dipita",
  role: "Full Stack Developer",
  tagline: "CSE Graduate & Full Stack Developer passionate about crafting performant, accessible, and user-centric web applications.",
  institution: "Daffodil International University",
  department: "Department of Computer Science and Engineering",
  location: "Rangpur, Bangladesh",
  
  bioIntro:
    "Full Stack Developer with strong problem-solving fundamentals, I build responsive, robust web applications using React, Next.js, MongoDB, JavaScript, Python, C++, and basic Laravel.",

  aboutStatement:
    "I'm a Computer Science and Engineering graduate from Daffodil International University, passionate about building modern, responsive, and user-friendly web applications. I enjoy solving problems, learning new technologies, and turning ideas into practical digital solutions. I'm continuously improving my skills in frontend and full-stack development.",
  
  bioFull: [
    "I'm a Computer Science and Engineering graduate from Daffodil International University, passionate about building modern, responsive, and user-friendly web applications. I enjoy solving problems, learning new technologies, and turning ideas into practical digital solutions. I'm continuously improving my skills in frontend and full-stack development.",
  ],

  // Resume file path: Add your resume file at public/resume.pdf
  resumeUrl: "/resume.pdf",

  avatarUrl: "/profile.png",

  socials: {
    github: "https://github.com/sabiha74",
    linkedin: "https://www.linkedin.com/in/sabiha-mashruha/",
    email: "sabihamashruha74@gmail.com",
  },

  openToRoles: [
    "Full Stack Developer",
    "Frontend Developer",
    "Junior Software Engineer",
    "Associate Software Engineer",
    "React / Next.js Developer",
  ],

  interests: [
    "Full Stack Web Development",
    "Algorithmic Problem Solving",
    "React & Next.js App Router Architecture",
    "RESTful API & Database Design",
    "Web Accessibility & Responsive UI/UX",
  ],
};

export const skillsData: SkillCategory[] = [
  {
    category: "Programming Languages",
    description: "Core languages for algorithmic problem solving, competitive programming, and modern software engineering.",
    skills: [
      { name: "C", highlight: true },
      { name: "C++", highlight: true },
      { name: "Python", highlight: true },
      { name: "JavaScript", highlight: true },
      { name: "TypeScript", highlight: true },
    ],
  },
  {
    category: "Frameworks",
    description: "Component-driven frontend architectures, full-stack frameworks, and server runtimes.",
    skills: [
      { name: "React", highlight: true },
      { name: "Next.js", highlight: true },
      { name: "Node.js", highlight: true },
      { name: "Express.js", highlight: true },
      { name: "Laravel", highlight: true },
    ],
  },
  {
    category: "Styling & UI",
    description: "Semantic markup, utility CSS frameworks, responsive systems, and interface design.",
    skills: [
      { name: "HTML5", highlight: true },
      { name: "CSS3", highlight: true },
      { name: "Tailwind CSS", highlight: true },
      { name: "Bootstrap", highlight: true },
      { name: "DaisyUI", highlight: true },
      { name: "Figma", highlight: true },
    ],
  },
  {
    category: "Database",
    description: "Document-oriented and relational database systems for full-stack data persistence.",
    skills: [
      { name: "MongoDB", highlight: true },
      { name: "SQL", highlight: true },
    ],
  },
];

export const educationData: EducationEntry = {
  degree: "Bachelor of Science (BSc) in Computer Science and Engineering",
  institution: "Daffodil International University",
  passed: "2026",
  graduationYear: "2026",
  department: "Department of Computer Science and Engineering",
  location: "Bangladesh",
  status: "Graduate",
  highlights: [],
  coursework: [],
};

export const careerMilestones: MilestoneEntry[] = [
  {
    title: "ICPC 2024 Dhaka Regional Contestant",
    organization: "International Collegiate Programming Contest (Dhaka Regional)",
    period: "2024",
    type: "Contest",
    description:
      "Qualified and participated in the ICPC 2024 Dhaka Regional Onsite Contest with my university team. Tackled complex algorithmic challenges under strict time and resource constraints, demonstrating strong analytical problem-solving and teamwork skills.",
    highlights: [
      "Rigorous problem-solving involving advanced data structures, graph algorithms, and dynamic programming.",
      "Effective team communication and division of algorithmic problem-solving tasks under pressure.",
      "Demonstrated endurance, speed, and clean code implementation in C++.",
    ],
  },
  {
    title: "NGPC 2022 Finalist",
    organization: "National Girls Programming Contest",
    period: "2022",
    type: "Contest",
    description:
      "Earned finalist status in the National Girls Programming Contest (NGPC 2022), competing among the top female collegiate competitive programmers across Bangladesh.",
    highlights: [
      "Successfully solved competitive programming problems testing mathematical and algorithmic logic.",
      "Demonstrated precision, speed, and systematic debugging capabilities.",
      "Strengthened passion for competitive programming and continuous technical growth.",
    ],
  },
  {
    title: "Full Stack Engineering Focus",
    organization: "Professional Engineering Direction",
    period: "Current",
    type: "Career Objective",
    description:
      "Dedicated to building modern, robust web applications. Combining competitive programming logic with full-stack development skills across React, Next.js, and basic Laravel.",
    highlights: [
      "Ready to ramp up rapidly on engineering codebases, modern workflows, and best practices.",
      "Actively seeking full-stack and frontend software engineering roles and opportunities.",
      "Committed to writing maintainable, well-structured, and performant code.",
    ],
  },
];

export const projectCandidates: ProjectEntry[] = [
  {
    id: "bazardor",
    slug: "bazardor",
    title: "BazarDor (বাজার দর)",
    tagline: "Bengali market-price tracking and essential commodity comparison platform.",
    status: "Live Project",
    githubUrl: "https://github.com/Sabiha74/A07-Bazar-Dor",
    liveUrl: "https://a07-bazar-dor-nu.vercel.app/",
    summary:
      "A Bengali market-price tracking application that helps users explore daily prices of essential products in Bangladesh, compare current and previous prices, and view market-wise price information.",
    purpose:
      "To bring daily commodity price transparency across local markets in Bangladesh, empowering consumers to track price movements, compare market extremes, and verify authentic rates.",
    description:
      "A Bengali market-price tracking application that helps users explore daily prices of essential products in Bangladesh, compare current and previous prices, and view market-wise price information.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "MongoDB", "Better Auth"],
    features: [
      "Daily market price updates.",
      "Product categories such as চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম-দুধ, and মসলা.",
      "Price increase and decrease comparisons.",
      "Market-wise minimum, maximum, and average prices.",
      "Email/password and Google/GitHub authentication.",
    ],
    roleAndContributions: [
      "Architected the full-stack web application using Next.js App Router and TypeScript.",
      "Designed MongoDB database schemas for daily commodity pricing, market categories, and vendor rates.",
      "Implemented secure multi-provider authentication using Better Auth (Email/Password, Google, and GitHub).",
      "Crafted responsive Bengali UI components with dynamic price fluctuation badges using Tailwind CSS.",
    ],
    challengesAndSolutions: [
      {
        challenge: "Aggregating market-wise price variance (minimum, maximum, and average) across diverse regional markets in Bangladesh.",
        solution: "Formulated optimized MongoDB aggregation pipelines to compute real-time analytical metrics per commodity category.",
      },
      {
        challenge: "Managing seamless session persistence across both credentials and social OAuth providers.",
        solution: "Configured Better Auth unified session handling with server-side middleware validation in Next.js.",
      },
    ],
    futureImprovements: [
      "Interactive historical commodity price trend graphs and inflation charts.",
      "Crowdsourced price verification with location-based proximity sorting.",
    ],
    learningOutcomes: [
      "Production full-stack development with Next.js App Router and MongoDB.",
      "Implementing Better Auth for versatile, secure user authentication.",
    ],
  },
  {
    id: "fitlog",
    slug: "fitlog",
    title: "FitLog",
    tagline: "Responsive workout library and personal daily exercise planning application.",
    status: "Live Project",
    githubUrl: "https://github.com/Sabiha74/Assignment06-Fit-Log",
    liveUrl: "https://assignment06-fit-log.vercel.app/",
    summary:
      "A responsive workout library and personal workout planning application. Users can explore exercises, view workout details, create daily workout plans, and save exercises for later.",
    purpose:
      "To provide workout enthusiasts and beginners with an intuitive, clutter-free exercise directory and customizable workout scheduler to achieve personal fitness targets.",
    description:
      "A responsive workout library and personal workout planning application. Users can explore exercises, view workout details, create daily workout plans, and save exercises for later.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "DaisyUI",
      "React Toastify",
      "REST API",
      "LocalStorage",
    ],
    features: [
      "Workout library with exercise information.",
      "Detailed workout instructions and information.",
      "Add up to five exercises to today's workout plan.",
      "Mark completed workouts as done.",
      "Save workouts for later.",
      "Responsive design, sorting, notifications, loading states, and custom 404 page.",
    ],
    roleAndContributions: [
      "Developed the workout planner using Next.js, React, and TypeScript.",
      "Implemented interactive plan builder with 5-exercise daily limit and completion status toggles.",
      "Built persistent exercise bookmarking using browser LocalStorage.",
      "Styled the application with responsive Tailwind CSS utilities and DaisyUI components.",
      "Integrated React Toastify notifications for real-time user action confirmations.",
    ],
    challengesAndSolutions: [
      {
        challenge: "Synchronizing exercise additions and completions between library views and the daily planner without state drift.",
        solution: "Centralized client-side state management with LocalStorage event hooks, ensuring instant reactivity across components.",
      },
      {
        challenge: "Preventing Next.js SSR hydration mismatches when reading saved routines from client storage.",
        solution: "Structured safe client-side hydration gates with dedicated loading placeholders and skeleton states.",
      },
    ],
    futureImprovements: [
      "Rest interval timers and audio cues between exercise sets.",
      "Export workout routines to PDF and calendar integration.",
    ],
    learningOutcomes: [
      "State persistence strategies in Next.js client components.",
      "Designing responsive workout grids with sorting and interactive feedback.",
    ],
  },
  {
    id: "devstack",
    slug: "devstack",
    title: "DevStack",
    tagline: "Responsive technology explorer and interactive developer stack builder.",
    status: "Live Project",
    githubUrl: "https://github.com/Sabiha74/Assignment05",
    liveUrl: "https://cool-caramel-4b6bfc.netlify.app/",
    summary:
      "A responsive technology explorer that helps developers discover technologies, understand their difficulty and ratings, and build their own development stack.",
    purpose:
      "To help engineers, students, and teams compare modern software technologies, evaluate learning difficulty curves and ratings, and curate customized development stacks.",
    description:
      "A responsive technology explorer that helps developers discover technologies, understand their difficulty and ratings, and build their own development stack.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "DaisyUI",
      "React Toastify",
      "Vite",
      "HTML5",
      "CSS3",
      "JavaScript (ES6)",
    ],
    features: [
      "Browse technologies by category.",
      "View technology details, descriptions, difficulty, and ratings.",
      "Add technologies to a personal developer stack.",
      "Remove individual technologies.",
      "Clear the entire stack.",
      "Notifications for stack interactions.",
      "Responsive desktop, tablet, and mobile layouts.",
    ],
    roleAndContributions: [
      "Built the tech explorer from scratch using React, TypeScript, and Vite.",
      "Designed the interactive stack drawer allowing developers to add, inspect, and remove tools.",
      "Crafted category filtering and visual rating badges using Tailwind CSS and DaisyUI.",
      "Integrated React Toastify alerts for stack additions, removal warnings, and clearing operations.",
    ],
    challengesAndSolutions: [
      {
        challenge: "Handling real-time stack updates and preventing duplicate technology additions with graceful feedback.",
        solution: "Implemented set-based validation with instant React Toastify warning alerts when duplicate technologies are selected.",
      },
      {
        challenge: "Maintaining consistent responsive layout behavior across desktop, tablet, and smartphone screens.",
        solution: "Constructed mobile-first flex and grid containers with touch-friendly tap targets and collapsible filter tabs.",
      },
    ],
    futureImprovements: [
      "Stack sharing via unique short URLs.",
      "Community technology reviews and alternative tool suggestions.",
    ],
    learningOutcomes: [
      "Interactive item collection management and filter composition in React.",
      "Structuring clean UI design systems with Tailwind CSS and DaisyUI.",
    ],
  },
];

export const navigationLinks = [
  { name: "Home", href: "/#hero" },
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Education", href: "/#education" },
  { name: "Projects", href: "/#projects" },
  { name: "Contact", href: "/#contact" },
];
