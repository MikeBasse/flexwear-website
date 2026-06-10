export type ProjectStatus =
  | "Available"
  | "Pilot Ready"
  | "In Development"
  | "Roadmap"
  | "Future Development"
  | "Long-Term Vision"
  | "Coming Soon";

export type Project = {
  slug: string;
  name: string;
  status: ProjectStatus;
  summary: string;
  division: string;
};

export const projects: Project[] = [
  {
    slug: "atomic-schools-png",
    name: "Atomic Schools PNG",
    status: "Pilot Ready",
    summary:
      "School transformation programs, workbooks, reading culture, attendance systems and leadership development.",
    division: "Atomic Schools PNG",
  },
  {
    slug: "atomic-teacher-png",
    name: "Atomic Teacher PNG",
    status: "In Development",
    summary:
      "Teacher productivity planner, classroom systems, assessment tools and professional development.",
    division: "Atomic Teacher PNG",
  },
  {
    slug: "atomic-youth-png",
    name: "Atomic Youth PNG",
    status: "In Development",
    summary:
      "Youth leadership journal, goal setting, habits, discipline and future pathway development.",
    division: "Atomic Youth PNG",
  },
  {
    slug: "atomic-communities-png",
    name: "Atomic Communities PNG",
    status: "Roadmap",
    summary:
      "Family systems, parenting, village development, community leadership and ward-level transformation.",
    division: "Atomic Communities PNG",
  },
  {
    slug: "atomic-governance-png",
    name: "Atomic Governance PNG",
    status: "Roadmap",
    summary:
      "Civic education, Parliament Watch, district development tracking and leadership literacy.",
    division: "Atomic Governance PNG",
  },
  {
    slug: "atomic-sme-png",
    name: "Atomic SME PNG",
    status: "Roadmap",
    summary:
      "Business systems, bookkeeping, customer service, marketing and small business development.",
    division: "Atomic SME PNG",
  },
  {
    slug: "atomic-digital-systems",
    name: "Atomic Digital Systems",
    status: "In Development",
    summary:
      "Technology division building the digital backbone for Atomic PNG Institute.",
    division: "Atomic Digital PNG",
  },
  {
    slug: "atomic-png-os",
    name: "Atomic PNG OS",
    status: "Roadmap",
    summary:
      "Future operating system for tracking goals, habits, progress, dashboards and certification.",
    division: "Atomic Digital PNG",
  },
  {
    slug: "atomic-ai",
    name: "Atomic AI",
    status: "Future Development",
    summary:
      "AI assistants for teachers, students, schools, communities, SMEs and governance education.",
    division: "Atomic Digital PNG",
  },
  {
    slug: "atomic-png-knowledge-hub",
    name: "Atomic PNG Knowledge Hub",
    status: "Long-Term Vision",
    summary:
      "Digital library for books, courses, templates, PNG leadership stories and cultural knowledge.",
    division: "Atomic Digital PNG",
  },
];
