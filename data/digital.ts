export type RoadmapStatus =
  | "In Development"
  | "Roadmap"
  | "Future Development"
  | "Long-Term Vision";

export type RoadmapPhase = {
  phase: string;
  title: string;
  status: RoadmapStatus;
  description: string;
  items: string[];
};

export const roadmapPhases: RoadmapPhase[] = [
  {
    phase: "Phase 1 — Foundation",
    title: "Atomic Digital Systems",
    status: "In Development",
    description:
      "Building the digital infrastructure for Atomic Schools PNG, Atomic Teacher PNG, Atomic Youth PNG, Atomic Communities PNG, and Atomic Governance PNG — a professional public home for every programme.",
    items: [
      "Program pages",
      "Online registration",
      "Digital resource library",
      "Book and workbook access",
      "Contact and partnership forms",
    ],
  },
  {
    phase: "Phase 2 — Platform",
    title: "Atomic PNG OS",
    status: "Roadmap",
    description:
      "A transformation operating system for students, teachers, schools, families, and communities — where a user joins a programme and tracks their 90-day transformation.",
    items: [
      "User accounts",
      "Goal setting",
      "Habit tracking",
      "Progress tracking",
      "School dashboards",
      "Teacher dashboards",
      "Student dashboards",
      "Certification tracking",
    ],
  },
  {
    phase: "Phase 3 — Intelligence",
    title: "Atomic AI Assistants",
    status: "Future Development",
    description:
      "AI-powered coaching and support tools for education, leadership, community development, and governance — designed to extend the reach of every programme.",
    items: [
      "Teacher AI",
      "Student AI",
      "School AI",
      "Youth AI",
      "Community AI",
      "SME AI",
      "Governance AI",
    ],
  },
  {
    phase: "Phase 4 — Knowledge",
    title: "Atomic PNG Knowledge Hub",
    status: "Long-Term Vision",
    description:
      "A searchable digital knowledge platform bringing together books, courses, templates, leadership stories, cultural knowledge, and development resources in one place.",
    items: [
      "Digital books",
      "Courses",
      "Templates",
      "PNG leadership stories",
      "Cultural knowledge",
      "School resources",
      "Development tools",
      "Research library",
    ],
  },
];

export const osFlow: string[] = [
  "Account",
  "Program",
  "Big 3 Goals",
  "90-Day Dashboard",
  "Progress Report",
  "Certification",
];

export const osUserTypes: string[] = [
  "Student",
  "Teacher",
  "Head Teacher",
  "School",
  "Youth Group",
  "Church Group",
  "Community Group",
  "SME",
  "Sponsor",
  "Partner",
];

export const signupSteps: {
  step: number;
  title: string;
  body: string;
  detail?: string[];
}[] = [
  {
    step: 1,
    title: "Create Your Account",
    body:
      "Register as a student, teacher, school, youth group, church group, SME, community organisation, sponsor, or partner.",
  },
  {
    step: 2,
    title: "Choose Your Program",
    body: "Select your Atomic PNG pathway.",
    detail: [
      "Atomic Schools PNG",
      "Atomic Teacher PNG",
      "Atomic Youth PNG",
      "Atomic Communities PNG",
      "Atomic Governance PNG",
      "Atomic SME PNG",
      "Atomic Digital Systems",
    ],
  },
  {
    step: 3,
    title: "Set Your Big 3 Goals",
    body: "Choose your three main transformation goals.",
    detail: [
      "Improve student attendance",
      "Build reading culture",
      "Strengthen teacher productivity",
      "Develop youth leadership",
      "Improve family savings",
      "Launch a community project",
      "Build business systems",
      "Improve civic education",
    ],
  },
  {
    step: 4,
    title: "Begin Your 90-Day Transformation",
    body: "Track actions, progress, reflections, results, and reports.",
  },
];
