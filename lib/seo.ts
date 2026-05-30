import type { Metadata } from "next";
import { site } from "@/data/site";

const baseKeywords = [
  "Papua New Guinea uniforms",
  "PNG workwear",
  "PNG educational systems",
  "PNG leadership development",
  "teacher productivity PNG",
  "youth leadership PNG",
  "AI systems PNG",
  "custom apparel PNG",
  "school systems PNG",
  "FlexWear",
  "Atomic PNG",
];

export function buildMetadata({
  title,
  description,
  path = "/",
  keywords = [],
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
}): Metadata {
  const fullTitle =
    title === site.name ? `${site.name} — ${site.tagline}` : `${title} · ${site.shortName}`;
  const url = `${site.url}${path}`;

  return {
    title: fullTitle,
    description,
    keywords: [...baseKeywords, ...keywords],
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: site.name,
      title: fullTitle,
      description,
      url,
      locale: "en",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
