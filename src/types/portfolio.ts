export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
  phone?: string;
  whatsapp?: string;
}

export interface PersonalInfo {
  name: string;
  tagline: string;
  role: string;
  institution: string;
  department: string;
  location: string;
  bioIntro: string;
  bioFull: string[];
  aboutStatement: string;
  resumeUrl: string;
  avatarUrl?: string;
  socials: SocialLinks;
  openToRoles: string[];
  interests: string[];
}

export interface SkillCategory {
  category: "Programming Languages" | "Frameworks" | "Styling & UI" | "Database" | string;
  description: string;
  skills: {
    name: string;
    level?: string;
    highlight?: boolean;
  }[];
}

export interface EducationEntry {
  degree: string;
  institution: string;
  passed: string;
  graduationYear?: string;
  department?: string;
  location?: string;
  status?: string;
  highlights?: string[];
  coursework?: string[];
}

export interface MilestoneEntry {
  title: string;
  organization: string;
  period: string;
  type: "Contest" | "Academic" | "Career Objective";
  description: string;
  highlights: string[];
}

export interface ChallengeSolution {
  challenge: string;
  solution: string;
}

export interface ProjectEntry {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  status: "Live Project" | "Candidate Project" | "In Development" | "Prototype" | string;
  technologies: string[];
  summary: string;
  purpose: string;
  description: string;
  features: string[];
  roleAndContributions: string[];
  challengesAndSolutions: ChallengeSolution[];
  futureImprovements: string[];
  learningOutcomes: string[];
  liveUrl?: string;
  githubUrl?: string;
  liveUrlPlaceholder?: string;
  githubUrlPlaceholder?: string;
}
