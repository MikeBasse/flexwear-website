export type Article = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string; // ISO
  readingTime: string;
};

// Editorial topics for the Media section. Content is illustrative of the
// themes the company writes about; replace with real articles via CMS later.
export const articles: Article[] = [
  {
    slug: "why-systems-beat-motivation",
    title: "Why Systems Beat Motivation in PNG Schools",
    category: "Education Systems",
    excerpt:
      "Motivation fades; systems endure. How consistent routines quietly transform classrooms and outcomes.",
    date: "2026-01-15",
    readingTime: "5 min read",
  },
  {
    slug: "leadership-through-action",
    title: "Leadership Through Action, Not Title",
    category: "Leadership",
    excerpt:
      "Real leadership is built through daily conduct. A look at how influence is earned in schools and communities.",
    date: "2026-01-10",
    readingTime: "4 min read",
  },
  {
    slug: "building-reading-culture",
    title: "Building a Reading Culture From the Ground Up",
    category: "Education Systems",
    excerpt:
      "Practical, low-cost ways schools can grow a strong and lasting culture of reading.",
    date: "2026-01-05",
    readingTime: "6 min read",
  },
  {
    slug: "youth-discipline-enterprise",
    title: "Discipline and Enterprise: The Next Generation",
    category: "PNG Youth",
    excerpt:
      "Why discipline and enterprise belong together, and how young people can build both.",
    date: "2025-12-20",
    readingTime: "5 min read",
  },
  {
    slug: "ai-for-png-classrooms",
    title: "What AI Could Mean for PNG Classrooms",
    category: "AI & Innovation",
    excerpt:
      "A grounded look at how intelligent systems might responsibly support teachers and learners.",
    date: "2025-12-12",
    readingTime: "7 min read",
  },
  {
    slug: "teacher-wellness-matters",
    title: "Teacher Wellness Is Not a Luxury",
    category: "Teacher Productivity",
    excerpt:
      "Sustainable teaching requires healthy systems. How to protect energy without lowering standards.",
    date: "2025-12-01",
    readingTime: "4 min read",
  },
];
