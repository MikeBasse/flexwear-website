import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/apparel",
    "/atomic-png-institute",
    "/atomic-schools-png",
    "/atomic-schools-png-book",
    "/atomic-schools-png-workbook",
    "/atomic-teacher-png",
    "/atomic-teacher-png-book",
    "/atomic-teacher-png-planner",
    "/atomic-youth-png",
    "/atomic-digital-png",
    "/shop",
    "/projects",
    "/media",
    "/partnerships",
    "/contact",
  ];
  const now = new Date();
  return routes.map((r) => ({
    url: `${site.url}${r}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: r === "" ? 1 : 0.7,
  }));
}
