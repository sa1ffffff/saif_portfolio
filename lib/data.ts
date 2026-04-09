export type ProjectType = "Web App" | "Mobile App" | "Tools" | "C++ / Game";

export interface Project {
  title: string;
  type: ProjectType;
  year: string;
  stack: string[];
  description: string;
  highlight?: string;
  links: { label: string; href: string }[];
}

export interface ExperienceItem {
  date: string;
  title: string;
  location: string;
  details: string[];
  skills?: string[];
}

export const projects: Project[] = [
  {
    title: "NUST Lost & Found",
    type: "Web App",
    year: "2025",
    stack: ["React", "TypeScript", "Supabase", "PostgreSQL", "EmailJS", "Vercel"],
    description:
      "Full-stack web application centralizing lost and found item reporting across NUST campus. Built with PostgreSQL Row Level Security for role-based access control, automated email notifications via EmailJS, and a reactive UI with optimistic updates.",
    highlight: "Live in production · Used by NUST students & staff",
    links: [
      { label: "Live", href: "https://nustlostandfound.vercel.app" },
      { label: "GitHub", href: "https://github.com/sa1ffffff" }
    ]
  },
  {
    title: "SAFAR",
    type: "Mobile App",
    year: "2025–Present",
    stack: ["Kotlin", "Jetpack Compose", "Firebase", "Android"],
    description:
      "Ride-sharing mobile app designed for NUST students — dark-themed with emerald green design system, Firebase phone authentication, real-time location tracking, and an Inbox/Messages UI. Currently in active development.",
    highlight: "In development · Android",
    links: [{ label: "GitHub", href: "https://github.com/sa1ffffff" }]
  },
  {
    title: "Neon Racing 3D",
    type: "C++ / Game",
    year: "2025",
    stack: ["C++", "OOP", "Data Structures"],
    description:
      "Fully playable 3D racing game in C++ using object-oriented design, pointers, and structs. Architected reusable class hierarchies for vehicles, tracks, and collision logic. Demonstrates strong systems-level programming.",
    links: [{ label: "GitHub", href: "https://github.com/sa1ffffff/Neon-Racing-3d" }]
  }
];

export const experiences: ExperienceItem[] = [
  {
    date: "December 2024 – June 2025",
    title: "Technical Specialist · SquareTrade-Allstate",
    location: "Islamabad, Pakistan",
    details: [
      "Triaged and resolved 50+ inbound appliance insurance claims daily.",
      "Reduced average call handle time by streamlining troubleshooting workflows.",
      "Collaborated with cross-functional teams on escalated cases."
    ],
    skills: ["Customer Service", "Technical Communication", "Agile Problem Solving"]
  },
  {
    date: "September 2025 – Present",
    title: "B.S. Computer Science · NUST SEECS",
    location: "Islamabad, Pakistan",
    details: [
      "Focus areas: Digital Logic Design, Database Systems, OOP (Java/C++), Multivariable Calculus, Linear Algebra, AI/ML."
    ]
  }
];

export const aboutTechStacks: string[] = [
  "Java",
  "C++",
  "Python",
  "TypeScript",
  "JavaScript",
  "SQL",
  "React",
  "Next.js",
  "Supabase",
  "Firebase",
  "Tailwind",
  "PostgreSQL",
  "MongoDB",
  "Git",
  "Vercel",
  "Claude Code"
];