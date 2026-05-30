import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import ProductCard from "@/components/ProductCard";
import CTASection from "@/components/CTASection";
import { products } from "@/data/products";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "FlexWear Apparel",
  description:
    "Uniforms, workwear, hoodies, t-shirts, teacher polos, branding, embroidery, printing, and corporate merchandise — custom apparel built in Papua New Guinea.",
  path: "/apparel",
  keywords: ["Papua New Guinea uniforms", "PNG workwear", "custom apparel PNG", "teacher polos PNG"],
});

const catalogue = [
  { title: "Uniforms", body: "School, corporate, and team uniforms designed for durability and a unified identity." },
  { title: "Workwear", body: "Hard-wearing workwear built for Papua New Guinean industries and conditions." },
  { title: "Hoodies", body: "Premium hoodies for leadership lines, schools, and community identity." },
  { title: "T-Shirts", body: "Comfortable, custom-printed t-shirts for events, campaigns, and teams." },
  { title: "Teacher Polos", body: "Smart, professional polos that present educators with pride." },
  { title: "Branding Services", body: "Brand development and application across apparel and merchandise." },
  { title: "Embroidery", body: "Precise logo embroidery for a premium, lasting finish." },
  { title: "Printing", body: "Quality printing for designs, slogans, and full-colour artwork." },
  { title: "Corporate Merchandise", body: "Branded merchandise for organisations, events, and campaigns." },
];

export default function ApparelPage() {
  const apparel = products.filter((p) => p.category === "Apparel");

  return (
    <>
      <PageHeader
        eyebrow="Division · Apparel"
        title="FlexWear Apparel"
        intro="Identity you can wear — uniforms, workwear, and branded apparel built in Papua New Guinea."
      >
        <div className="flex flex-wrap gap-3">
          <Link href="/shop" className="btn-gold">
            Browse the Shop
          </Link>
          <Link href="/contact" className="btn-ghost-light">
            Request a Quote
          </Link>
        </div>
      </PageHeader>

      <Section
        eyebrow="What We Make"
        title="Products & Services"
        intro="From a single team kit to a full organisational rollout, FlexWear Apparel delivers a consistent, professional identity."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {catalogue.map((c) => (
            <div key={c.title} className="card p-6">
              <h3 className="font-display text-lg font-bold text-ink">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/65">{c.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="From the Shop"
        title="Featured Apparel"
        className="bg-bone-deep/40"
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {apparel.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </Section>

      <CTASection
        title="Outfit your school, team, or organisation"
        intro="Tell us what you need and we will help you build a strong, unified identity."
        buttons={[
          { label: "Request a Quote", href: "/contact", variant: "gold" },
          { label: "Visit the Shop", href: "/shop", variant: "ghost" },
        ]}
      />
    </>
  );
}
