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
    title: "SubtrakX",
    type: "Web App",
    year: "2026",
    stack: ["React", "TypeScript", "Vite", "Supabase", "PostgreSQL", "Tailwind CSS", "Recharts", "Vitest"],
    description:
      "Subscription intelligence platform that tracks recurring spend, detects idle high-cost services, predicts monthly burn, and computes a health score using SQL-first analytics.",
    highlight: "Live SaaS dashboard · Waste detection + predictive insights",
    links: [
      { label: "Live", href: "https://subtrak-insights.vercel.app" },
      { label: "GitHub", href: "https://github.com/sa1ffffff/subtrak-insights" }
    ]
  },
  {
    title: "Zones Mess Menu",
    type: "Web App",
    year: "2026",
    stack: ["React", "TypeScript", "TanStack Router", "Supabase", "PostgreSQL", "Tailwind CSS", "shadcn/ui"],
    description:
      "Internal web app for Zones LLC Islamabad to browse the monthly cafeteria menu by week and day, rate dinners with aggregated rating summaries, and submit feedback/queries to admins. Features Google OAuth via Supabase Auth, real-time PostgreSQL backend, and a responsive mobile-first UI.",
    highlight: "Live in production · Used daily by Zones LLC staff",
    links: [
      { label: "Live", href: "https://zones-mess-menu.vercel.app/" },
      { label: "GitHub", href: "https://github.com/sa1ffffff/zones_mess_menu" }
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
  "SQL",
  "Firebase",
  "TanStack",
  "Git",
  "Vercel",
  "Claude Code",
  "AI Coding IDEs"
];
