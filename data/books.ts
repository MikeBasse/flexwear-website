export type Book = {
  slug: string;
  title: string;
  category: string;
  status: "Available" | "In Development" | "Planned";
  blurb?: string;
  href?: string; // internal product page, if one exists
};

export const currentBooks: Book[] = [
  {
    slug: "from-tari-to-the-nation",
    title: "From Tari to the Nation: Institute Edition",
    category: "Leadership, Culture & Development",
    status: "Available",
    blurb:
      "The story of Hon. James Marape, the Hela people, and the ancient trading systems of the highlands — a leadership, culture and nation-building work.",
  },
  {
    slug: "atomic-schools-png-workbook",
    title: "Atomic Schools PNG Workbook",
    category: "School Transformation",
    status: "Available",
    blurb:
      "A complete school-systems workbook with frameworks, trackers and a 90-day program for PNG schools.",
    href: "/atomic-schools-png-workbook",
  },
  {
    slug: "atomic-teacher-png-planner",
    title: "Atomic Teacher PNG Productivity Planner",
    category: "Teacher Systems",
    status: "Available",
    blurb:
      "A full teacher productivity planner — yearly to daily planning, classroom systems, wellbeing tools and trackers.",
    href: "/atomic-teacher-png-planner",
  },
  {
    slug: "atomic-youth-png-journal",
    title: "Atomic Youth PNG Leadership Journal",
    category: "Youth Leadership",
    status: "Available",
    blurb:
      "A leadership guide and 90-day guided journal for young Papua New Guineans — identity, habits, goals and service.",
    href: "/atomic-youth-png-journal",
  },
];

export const futureBooks: Book[] = [
  { slug: "atomic-communities-png", title: "Atomic Communities PNG", category: "Community Development", status: "Planned" },
  { slug: "atomic-sme-png", title: "Atomic SME PNG", category: "Enterprise & Business", status: "Planned" },
  { slug: "atomic-financial-png", title: "Atomic Financial PNG", category: "Financial Literacy", status: "Planned" },
  { slug: "atomic-agriculture-png", title: "Atomic Agriculture PNG", category: "Agriculture & Livelihoods", status: "Planned" },
  { slug: "leaders-of-png-series", title: "Leaders of Papua New Guinea Series", category: "Biography & Leadership", status: "Planned" },
  { slug: "atomic-governance-png", title: "Atomic Governance PNG", category: "Civic Education & Governance", status: "Planned" },
];
