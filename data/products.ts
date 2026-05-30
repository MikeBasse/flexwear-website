export type Product = {
  slug: string;
  name: string;
  category: "Apparel" | "Books & Planners";
  price: string; // placeholder pricing
  blurb: string;
  division: string;
};

export const productCategories = ["All", "Apparel", "Books & Planners"] as const;

export const products: Product[] = [
  {
    slug: "leadership-hoodie",
    name: "Leadership Hoodie",
    category: "Apparel",
    price: "K—",
    blurb: "Premium hoodie carrying the Atomic leadership identity.",
    division: "FlexWear Apparel",
  },
  {
    slug: "teacher-polo",
    name: "Teacher Polo",
    category: "Apparel",
    price: "K—",
    blurb: "Smart, durable polo that presents teachers professionally.",
    division: "Atomic Teacher PNG",
  },
  {
    slug: "student-motivation-shirt",
    name: "Student Motivation Shirt",
    category: "Apparel",
    price: "K—",
    blurb: "Motivational shirt to inspire students and build school pride.",
    division: "Atomic Schools PNG",
  },
  {
    slug: "atomic-schools-workbook",
    name: "Atomic Schools Workbook",
    category: "Books & Planners",
    price: "K—",
    blurb: "Workbook of systems and habits for the PNG classroom.",
    division: "Atomic Schools PNG",
  },
  {
    slug: "teacher-productivity-planner",
    name: "Teacher Productivity Planner",
    category: "Books & Planners",
    price: "K—",
    blurb: "Weekly planning system that brings order to a teacher's week.",
    division: "Atomic Teacher PNG",
  },
  {
    slug: "youth-leadership-journal",
    name: "Youth Leadership Journal",
    category: "Books & Planners",
    price: "K—",
    blurb: "Journal for building discipline, leadership, and personal growth.",
    division: "Atomic Youth PNG",
  },
];
