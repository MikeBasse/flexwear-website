export type Division = {
  slug: string;
  name: string;
  short: string;
  href: string;
  tagline: string;
  summary: string;
  accent: "gold" | "blood" | "ink" | "flame";
  offerings: string[];
  // Long-form content for the division page
  intro: string;
  focusAreas: { title: string; body: string }[];
};

export const divisions: Division[] = [
  {
    slug: "apparel",
    name: "FlexWear Apparel",
    short: "Apparel",
    href: "/apparel",
    tagline: "Identity you can wear.",
    summary:
      "Uniforms, workwear, branding, and merchandise — built to give organisations and communities a strong, unified identity.",
    accent: "blood",
    offerings: ["Uniforms", "Workwear", "Branding", "Merchandise"],
    intro:
      "FlexWear Apparel is the founding division of FLEXWEAR TM LIMITED. It designs and produces uniforms, workwear, and branded merchandise that help schools, businesses, and communities present themselves with pride and professionalism.",
    focusAreas: [
      { title: "Uniforms", body: "School, corporate, and team uniforms designed for durability, comfort, and a unified identity." },
      { title: "Workwear", body: "Practical, hard-wearing workwear suited to Papua New Guinean conditions and industries." },
      { title: "Branding & Embroidery", body: "Logo embroidery, printing, and branding services that turn apparel into identity." },
      { title: "Merchandise", body: "Custom merchandise for events, campaigns, schools, and organisations." },
    ],
  },
  {
    slug: "atomic-png-institute",
    name: "Atomic PNG Institute",
    short: "Institute",
    href: "/atomic-png-institute",
    tagline: "Systems that build nations.",
    summary:
      "Leadership, systems development, and innovation — the institutional heart of the Atomic PNG ecosystem.",
    accent: "gold",
    offerings: ["Leadership", "Systems Development", "Innovation"],
    intro:
      "Atomic PNG Institute is the institutional and intellectual core of the ecosystem. It develops leadership programmes, systems frameworks, and innovation initiatives intended to support transformation across education, enterprise, and community life in Papua New Guinea.",
    focusAreas: [
      { title: "Leadership Systems", body: "Programmes that build practical, principled leadership grounded in systems thinking." },
      { title: "Workshops", body: "Facilitated workshops for schools, organisations, and communities." },
      { title: "Educational Transformation", body: "Frameworks that connect schools, teachers, and youth into one development pathway." },
      { title: "Innovation Systems", body: "Initiatives exploring how technology and systems can advance national development." },
      { title: "Publishing", body: "Original books, planners, and learning resources developed for the PNG context." },
      { title: "National Transformation Vision", body: "A long-term vision for building better systems across the nation." },
    ],
  },
  {
    slug: "atomic-schools-png",
    name: "Atomic Schools PNG",
    short: "Schools",
    href: "/atomic-schools-png",
    tagline: "Better systems, better schools.",
    summary:
      "Educational systems, school transformation frameworks, planners, and books for Papua New Guinean schools.",
    accent: "gold",
    offerings: ["Educational Systems", "School Transformation", "Planners & Books"],
    intro:
      "Atomic Schools PNG develops practical systems and resources that help schools build better habits, routines, and culture — turning everyday consistency into lasting student outcomes.",
    focusAreas: [
      { title: "School Systems", body: "Practical frameworks for attendance, routines, and daily school operations." },
      { title: "Habit Trackers", body: "Tools that help students and schools build positive habits over time." },
      { title: "Reading Culture", body: "Programmes and resources that grow a strong culture of reading." },
      { title: "Attendance Systems", body: "Simple, consistent systems for improving and tracking attendance." },
      { title: "Planners", body: "Student and school planners designed for the PNG classroom." },
      { title: "School Transformation Frameworks", body: "Step-by-step frameworks for whole-school improvement." },
      { title: "Implementation Systems", body: "Guidance that helps schools put systems into practice and sustain them." },
      { title: "Student Development", body: "Resources focused on discipline, character, and student growth." },
    ],
  },
  {
    slug: "atomic-teacher-png",
    name: "Atomic Teacher PNG",
    short: "Teacher",
    href: "/atomic-teacher-png",
    tagline: "Better teachers, better futures.",
    summary:
      "Teacher productivity systems, classroom routines, and educational leadership for PNG educators.",
    accent: "ink",
    offerings: ["Teacher Productivity", "Classroom Systems", "Educational Leadership"],
    intro:
      "Atomic Teacher PNG equips teachers with the systems, routines, and tools to work effectively, reduce burnout, and lift student outcomes — a practical, PNG-context approach to the profession.",
    focusAreas: [
      { title: "Teacher Productivity Systems", body: "Weekly planning rhythms that bring order to a busy teaching week." },
      { title: "Classroom Routines", body: "Routines that reduce disruption and create a calm, focused classroom." },
      { title: "Lesson Planning", body: "Clear, consistent lesson planning systems and templates." },
      { title: "Assessment Tracking", body: "Simple systems for recording, tracking, and reporting student progress." },
      { title: "Teacher Wellness", body: "Healthy, sustainable approaches to managing workload and wellbeing." },
      { title: "Workshops", body: "Professional development workshops for teachers and school leaders." },
      { title: "Educational Leadership Systems", body: "Tools for head teachers leading schools through systems." },
    ],
  },
  {
    slug: "atomic-youth-png",
    name: "Atomic Youth PNG",
    short: "Youth",
    href: "/atomic-youth-png",
    tagline: "Discipline. Enterprise. Leadership.",
    summary:
      "Youth empowerment, entrepreneurship, leadership, and a strong streetwear identity for the next generation.",
    accent: "flame",
    offerings: ["Youth Empowerment", "Entrepreneurship", "Leadership"],
    intro:
      "Atomic Youth PNG focuses on the next generation — building discipline, enterprise, digital skills, and leadership, with a modern identity young Papua New Guineans can be proud of.",
    focusAreas: [
      { title: "Youth Discipline", body: "Programmes that build personal discipline and positive daily habits." },
      { title: "Entrepreneurship", body: "Foundations of enterprise and small-business thinking for young people." },
      { title: "Leadership", body: "Practical leadership development for emerging young leaders." },
      { title: "Digital Skills", body: "Building the digital capability young people need for the future." },
      { title: "Personal Development", body: "Character, mindset, and personal-growth resources." },
      { title: "Streetwear Identity", body: "A modern apparel identity that connects youth to the movement." },
      { title: "Youth Transformation Systems", body: "Structured pathways for personal and community transformation." },
    ],
  },
  {
    slug: "atomic-digital-png",
    name: "Atomic Digital PNG",
    short: "Digital",
    href: "/atomic-digital-png",
    tagline: "Intelligent systems for PNG.",
    summary:
      "AI systems, automation, digital learning, and the future technology infrastructure of the ecosystem.",
    accent: "ink",
    offerings: ["AI Systems", "Automation", "Educational Technology"],
    intro:
      "Atomic Digital PNG is the technology division — exploring AI systems, automation, and digital learning tools designed to extend the reach and effectiveness of the wider ecosystem.",
    focusAreas: [
      { title: "AI Systems", body: "Applied artificial intelligence tools designed for real, local use cases." },
      { title: "WhatsApp Assistants", body: "Conversational assistants that meet people on the platforms they already use." },
      { title: "Digital Learning", body: "Digital tools and platforms that support education at scale." },
      { title: "Dashboards", body: "Data dashboards for schools, projects, and organisations." },
      { title: "Automation Tools", body: "Automation that reduces manual work and increases consistency." },
      { title: "Innovation Systems", body: "Experimental systems exploring the future of technology in PNG." },
      { title: "Future Technology Infrastructure", body: "Building the digital foundations for a growing ecosystem." },
    ],
  },
];

export const getDivision = (slug: string) =>
  divisions.find((d) => d.slug === slug);
