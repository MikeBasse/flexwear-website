export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export const divisionsNav: NavItem[] = [
  { label: "FlexWear Apparel", href: "/apparel" },
  { label: "Atomic PNG Institute", href: "/atomic-png-institute" },
  { label: "Atomic Schools PNG", href: "/atomic-schools-png" },
  { label: "Atomic Teacher PNG", href: "/atomic-teacher-png" },
  { label: "Atomic Youth PNG", href: "/atomic-youth-png" },
  { label: "Atomic Digital PNG", href: "/atomic-digital-png" },
];

// Standalone link to the free book landing page (featured in nav + footer)
export const freeBook: NavItem = {
  label: "Free Book: Atomic Schools PNG",
  href: "/atomic-schools-png-book",
};

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Divisions", href: "#", children: divisionsNav },
  { label: "Shop", href: "/shop" },
  { label: "Projects", href: "/projects" },
  { label: "Media", href: "/media" },
  { label: "Partnerships", href: "/partnerships" },
  { label: "Contact", href: "/contact" },
];
