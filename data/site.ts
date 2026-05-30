export const site = {
  name: "FLEXWEAR TM LIMITED",
  shortName: "FlexWear",
  tagline: "Building Better Systems for Papua New Guinea",
  builtIn: "Built in PNG. Inspiring the World.",
  description:
    "FLEXWEAR TM LIMITED is a modern Papua New Guinean ecosystem for apparel, education, leadership, innovation, digital systems, and community transformation.",
  registrationNumber: "1-137944928",
  country: "Papua New Guinea",
  email: "enquiries@flexwearltd.com",
  domain: "flexwearltd.com",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://flexwearltd.com",
  pillars: ["Apparel", "Education", "Leadership", "Innovation"],
} as const;

export const socials = [
  { label: "Facebook", href: "#", handle: "/flexwearltd" },
  { label: "Instagram", href: "#", handle: "@flexwearltd" },
  { label: "TikTok", href: "#", handle: "@flexwearltd" },
  { label: "WhatsApp", href: "#", handle: "Message us" },
  { label: "YouTube", href: "#", handle: "FlexWear TM Limited" },
] as const;
