export type Product = {
  slug: string;
  name: string;
  category: "Apparel" | "Books & Planners";
  price: string; // placeholder pricing
  blurb: string;
  division: string;
  href?: string; // if set, the card links to a real page (e.g. a book)
  badge?: string; // optional small label, e.g. "Free" or "New"
  image?: string; // optional photo, e.g. "/images/products/leadership-hoodie.jpg"
};

export const productCategories = ["All", "Books & Planners", "Apparel"] as const;

export const products: Product[] = [
  // --- Books people can get right now ---
  {
    slug: "atomic-schools-png-workbook",
    name: "Atomic Schools PNG Workbook",
    category: "Books & Planners",
    price: "K120",
    blurb: "Complete school-transformation workbook: 31 chapters, a 90-day program, and printable templates. Free preview available.",
    division: "Atomic Schools PNG",
    href: "/atomic-schools-png-workbook",
    badge: "New",
    image: "/books/atomic-schools-png-workbook-cover.png",
  },
  {
    slug: "atomic-schools-png-book",
    name: "Atomic Schools PNG (Book)",
    category: "Books & Planners",
    price: "Free",
    blurb: "Practical school-transformation framework. Free PDF download.",
    division: "Atomic Schools PNG",
    href: "/atomic-schools-png-book",
    badge: "Free",
    image: "/books/atomic-schools-png-cover.png",
  },
  {
    slug: "atomic-teacher-png-book",
    name: "Atomic Teacher PNG (Book)",
    category: "Books & Planners",
    price: "K49",
    blurb: "Teacher productivity, classroom routines, and educational leadership. Free preview available.",
    division: "Atomic Teacher PNG",
    href: "/atomic-teacher-png-book",
    badge: "New",
    image: "/books/atomic-teacher-png-cover.png",
  },

  // --- Apparel ---
  {
    slug: "leadership-hoodie",
    name: "Leadership Hoodie",
    category: "Apparel",
    price: "K150",
    blurb: "Premium hoodie carrying the Atomic leadership identity.",
    division: "FlexWear Apparel",
    image: "/images/products/leadership-hoodie.jpg",
  },
  {
    slug: "teacher-polo",
    name: "Teacher Polo",
    category: "Apparel",
    price: "K90",
    blurb: "Smart, durable polo that presents teachers professionally.",
    division: "Atomic Teacher PNG",
    image: "/images/products/teacher-polo.jpg",
  },
  {
    slug: "student-motivation-shirt",
    name: "Student Motivation Shirt",
    category: "Apparel",
    price: "K50",
    blurb: "Motivational shirt to inspire students and build school pride.",
    division: "Atomic Schools PNG",
    image: "/images/products/student-motivation-shirt.jpg",
  },

  // --- Planners & workbooks (coming soon) ---
  {
    slug: "teacher-productivity-planner",
    name: "Teacher Productivity Planner",
    category: "Books & Planners",
    price: "K—",
    blurb: "Weekly planning system that brings order to a teacher's week.",
    division: "Atomic Teacher PNG",
    badge: "Coming Soon",
  },
  {
    slug: "youth-leadership-journal",
    name: "Youth Leadership Journal",
    category: "Books & Planners",
    price: "K—",
    blurb: "Journal for building discipline, leadership, and personal growth.",
    division: "Atomic Youth PNG",
    badge: "Coming Soon",
  },
];
