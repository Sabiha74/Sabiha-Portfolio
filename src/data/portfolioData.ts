import { PersonalInfo, SkillCategory, EducationEntry, MilestoneEntry, ProjectEntry } from "@/types/portfolio";

export const personalInfo: PersonalInfo = {
  name: "Sabiha Mashruha Dipita",
  role: "Full Stack Developer",
  tagline: "CSE Graduate & Full Stack Developer passionate about crafting performant, accessible, and user-centric web applications.",
  institution: "Daffodil International University",
  department: "Department of Computer Science and Engineering",
  location: "Rangpur, Bangladesh",
  
  bioIntro:
    "Full Stack Developer with strong problem-solving fundamentals, I build responsive, robust web applications using React, Next.js, MongoDB, JavaScript, Python, C++, and basic Laravel.",
  
  bioFull: [
    "My journey in Computer Science and Engineering began with building algorithmic thinking and problem-solving intuition in C, C++, and Python. Competing in programming competitions—qualifying as a finalist in the National Girls Programming Contest (NGPC 2022) and participating in the prestigious ICPC 2024 Dhaka Regional Contest—sharpened my analytical skills, edge-case analysis, and collaborative programming abilities under strict constraints.",
    "As a Full Stack Developer, I love translating complex logic into seamless, intuitive digital experiences. On the frontend, I specialize in crafting clean, accessible, and mobile-first user interfaces using React, Next.js, and Tailwind CSS. On the backend, I leverage foundational knowledge of Laravel, RESTful APIs, and database architecture to build end-to-end web solutions.",
    "I am eager to contribute my technical foundation, quick learning ability, and dedication to engineering teams that value clean code, continuous growth, and high-impact products.",
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
    category: "Frontend",
    description: "Modern component architectures, typed applications, and core web fundamentals.",
    skills: [
      { name: "HTML5", highlight: true },
      { name: "CSS3", highlight: true },
      { name: "JavaScript", highlight: true },
      { name: "TypeScript", highlight: true },
      { name: "React", highlight: true },
      { name: "Next.js", highlight: true },
    ],
  },
  {
    category: "Programming Languages",
    description: "Strong problem-solving and algorithmic foundation developed through CS coursework and contests.",
    skills: [
      { name: "C", highlight: true },
      { name: "C++", highlight: true },
      { name: "Python", highlight: true },
    ],
  },
  {
    category: "Styling & UI",
    description: "Utility frameworks, responsive design systems, preprocessors, and UI wireframing.",
    skills: [
      { name: "Tailwind CSS", highlight: true },
      { name: "Bootstrap", highlight: true },
      { name: "DaisyUI", highlight: true },
      { name: "Sass", highlight: true },
      { name: "Figma", highlight: true },
    ],
  },
  {
    category: "Backend & Tools",
    description: "Server-side runtimes, APIs, MVC frameworks, and essential developer workflows.",
    skills: [
      { name: "Node.js", highlight: true },
      { name: "Express.js", highlight: true },
      { name: "Laravel", highlight: true },
      { name: "Git", highlight: true },
      { name: "GitHub", highlight: true },
      { name: "VS Code", highlight: true },
    ],
  },
];

export const educationData: EducationEntry = {
  degree: "BSc in Computer Science and Engineering",
  institution: "Daffodil International University",
  department: "Department of Computer Science and Engineering",
  location: "Bangladesh",
  status: "Graduate",
  highlights: [
    "Solid grounding in Computer Science fundamentals: Data Structures, Algorithms, OOP, Database Systems, Operating Systems, and Software Engineering.",
    "Qualified and participated in the ICPC 2024 Dhaka Regional Contest.",
    "Finalist in the National Girls Programming Contest (NGPC 2022).",
    "Active participant in university programming bootcamps and competitive problem-solving workshops.",
  ],
  coursework: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming (OOP)",
    "Database Management Systems",
    "Web Engineering & Internet Computing",
    "Software Engineering & Design Patterns",
    "Computer Networks",
  ],
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
    id: "dev-stack",
    slug: "dev-stack",
    title: "Dev Stack",
    tagline: "Developer utility and resource directory built with a modern React stack.",
    status: "Candidate Project",
    technologies: ["React", "TypeScript", "Tailwind CSS", "DaisyUI"],
    summary:
      "A curated developer workbench interface designed to showcase responsive layout architecture, component composition, and TypeScript safety.",
    purpose:
      "To provide software engineers and developers with a centralized catalog of modern development utilities and toolchains while serving as a practical project for clean React component composition and Tailwind CSS / DaisyUI theming.",
    description:
      "Dev Stack is an exploratory candidate project focused on building modular UI components for developer tooling and resources. It emphasizes clean categorization, search/filtering states, responsive grid systems, and consistent typography using Tailwind CSS combined with DaisyUI component styling.",
    features: [
      "Modular card grid system with responsive breakpoints for desktop, tablet, and mobile devices.",
      "Strict TypeScript typings for state management, component props, and category filters.",
      "Clean UI component styling leveraging Tailwind CSS with DaisyUI design patterns.",
      "Accessible interactive buttons, modal previews, and search inputs with visible focus rings.",
      "Cohesive dark/light theme support with customizable color tokens.",
    ],
    roleAndContributions: [
      "Designed and coded the frontend interface from the ground up using React and TypeScript.",
      "Configured Tailwind CSS utility tokens and integrated DaisyUI component styles.",
      "Implemented strict TypeScript interfaces for developer resource models and filter state.",
      "Ensured semantic HTML elements and accessible keyboard navigation across all interactive cards.",
    ],
    challengesAndSolutions: [
      {
        challenge: "Managing component prop types and avoiding repetitive type declarations across multiple nested card components.",
        solution: "Established a dedicated centralized types module with generic interfaces for resource items and filter predicates, ensuring strong compile-time safety.",
      },
      {
        challenge: "Harmonizing custom Tailwind color variables with pre-styled DaisyUI utility classes in dark mode.",
        solution: "Configured explicit CSS custom property mappings in Tailwind config, ensuring DaisyUI components smoothly respect the user-selected dark/light theme state.",
      },
    ],
    futureImprovements: [
      "Add user-submitted resource submission with client-side form validation.",
      "Implement local storage persistence so users can bookmark their favorite developer tools.",
      "Introduce multi-tag filtering with fuzzy search query matching.",
    ],
    learningOutcomes: [
      "Deepening TypeScript interface typing in React component trees.",
      "Structuring clean reusable presentation and container components.",
      "Implementing accessible keyboard navigation for list filtering.",
    ],
  },
  {
    id: "fit-log",
    slug: "fit-log",
    title: "Fit Log",
    tagline: "Activity and workout tracking dashboard concept with Next.js App Router.",
    status: "Candidate Project",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    summary:
      "A modern web dashboard concept for logging daily fitness routines, exploring Next.js App Router conventions and responsive dashboard layouts.",
    purpose:
      "To explore modern dashboard ergonomics and client-side data entry flows, allowing individuals to record exercise sets, repetitions, and cardio routines with an intuitive, distraction-free interface.",
    description:
      "Fit Log explores dashboard ergonomics and client-side data entry flows. Developed as a candidate project to master Next.js page routing, layouts, state handling, and interactive form controls using clean Tailwind CSS styling.",
    features: [
      "Clean dashboard overview with metric summary cards for daily and weekly workouts.",
      "Structured log entry forms with responsive input controls for exercise sets, reps, and weights.",
      "Status chips and date-based visual groupings for quick exercise log history review.",
      "Dark-mode first interface designed for high contrast and readability in gym environments.",
      "Mobile-first responsive drawer and table layout for on-the-go routine tracking.",
    ],
    roleAndContributions: [
      "Architected the project using Next.js App Router structure with dedicated route groups.",
      "Developed interactive form components in React and TypeScript with client-side state validation.",
      "Created responsive data display cards and statistics widgets using Tailwind CSS.",
      "Ensured mobile viewports have touch-friendly tap targets and high-contrast dark theme colors.",
    ],
    challengesAndSolutions: [
      {
        challenge: "Handling dynamic multi-row exercise set entries without causing redundant component re-renders.",
        solution: "Structured local state updates using immutable array helper patterns and memoized individual row components.",
      },
      {
        challenge: "Maintaining consistent styling between SSR-rendered shell pages and client-interactive form modals.",
        solution: "Separated static layout containers from client-interactive components in Next.js App Router to prevent hydration mismatches.",
      },
    ],
    futureImprovements: [
      "Connect client-side form state with a persistent backend API or database.",
      "Add graphical trend charts to visualize strength progression over time.",
      "Include customizable workout templates and routine export to PDF/CSV.",
    ],
    learningOutcomes: [
      "Leveraging Next.js App Router nested layouts and route groups.",
      "Managing component state transitions and responsive sidebars.",
      "Designing clean data visualization placeholders with semantic HTML.",
    ],
  },
  {
    id: "devconf",
    slug: "devconf",
    title: "DevConf",
    tagline: "Tech conference landing page focused on semantic HTML and responsive CSS.",
    status: "Candidate Project",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    summary:
      "A responsive conference landing page emphasizing core frontend fundamentals, semantic hierarchy, and vanilla JavaScript interactions.",
    purpose:
      "To build an accessible, responsive tech conference landing page from scratch, demonstrating strong fundamentals in pure CSS Grid/Flexbox layouts and vanilla JavaScript DOM manipulation without framework dependencies.",
    description:
      "DevConf is a foundational candidate project designed to master the fundamentals of the web: semantic HTML5 markup, flexible CSS Grid and Flexbox layouts, and vanilla JavaScript for DOM manipulation (interactive FAQs, modal popups, and smooth mobile navigation).",
    features: [
      "100% semantic HTML structure adhering to Web Content Accessibility Guidelines (WCAG).",
      "Pure CSS responsive layouts leveraging CSS Grid and Flexbox without framework overhead.",
      "Interactive schedule filter tabs allowing attendees to browse sessions by track.",
      "Accessible modal popups with focus trapping for speaker biographies.",
      "Smooth scroll navigation and lightweight vanilla JavaScript mobile navigation toggle.",
    ],
    roleAndContributions: [
      "Authored semantic HTML5 document structure with appropriate ARIA roles and landmark tags.",
      "Built mobile-first responsive stylesheets utilizing custom CSS properties and media queries.",
      "Implemented vanilla JavaScript event listeners for interactive tabs, accordions, and modal dialogs.",
      "Tested keyboard navigation, tab order, and screen reader compatibility across multiple browsers.",
    ],
    challengesAndSolutions: [
      {
        challenge: "Implementing an accessible modal dialog in vanilla JavaScript without third-party dialog libraries.",
        solution: "Programmed custom keydown listeners for Escape key handling, backdrop click detection, and focus trapping within the modal container.",
      },
      {
        challenge: "Building a complex multi-column schedule grid that remains readable on small smartphone screens.",
        solution: "Utilized CSS Grid with minmax() and media queries to dynamically collapse track columns into stacked time cards on mobile viewports.",
      },
    ],
    futureImprovements: [
      "Add interactive ticket registration form with real-time field validation.",
      "Implement offline caching using a Service Worker for conference venue connectivity drops.",
      "Include interactive venue map with geolocation hints.",
    ],
    learningOutcomes: [
      "Mastering vanilla CSS Flexbox and Grid without utility frameworks.",
      "Understanding browser event bubbling and DOM event listeners.",
      "Building accessible accordion and modal patterns from scratch.",
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
