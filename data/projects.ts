export type ProjectStatus = "In Development" | "Pilot Ready" | "Coming Soon";

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
    status: "In Development",
    summary:
      "A complete school-systems framework with planners, habit trackers, and implementation guidance for PNG schools.",
    division: "Atomic Schools PNG",
  },
  {
    slug: "atomic-teacher-png",
    name: "Atomic Teacher PNG",
    status: "In Development",
    summary:
      "Teacher productivity and classroom-systems resources, including books, planners, and workshops.",
    division: "Atomic Teacher PNG",
  },
  {
    slug: "atomic-youth-png",
    name: "Atomic Youth PNG",
    status: "Coming Soon",
    summary:
      "Youth leadership, discipline, and enterprise programmes with a modern identity for young Papua New Guineans.",
    division: "Atomic Youth PNG",
  },
  {
    slug: "leadership-apparel",
    name: "Leadership Apparel",
    status: "Pilot Ready",
    summary:
      "A leadership-focused apparel line connecting identity, pride, and the wider Atomic movement.",
    division: "FlexWear Apparel",
  },
  {
    slug: "atomic-digital-systems",
    name: "Atomic Digital Systems",
    status: "Coming Soon",
    summary:
      "AI assistants, dashboards, and automation tools designed to extend the ecosystem's reach.",
    division: "Atomic Digital PNG",
  },
];
