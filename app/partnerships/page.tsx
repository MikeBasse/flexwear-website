import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Partnerships",
  description:
    "Partner with FLEXWEAR TM LIMITED — opportunities for schools, churches, NGOs, government, sponsors, businesses, and community organisations in Papua New Guinea.",
  path: "/partnerships",
});

const audiences = [
  { title: "Schools", body: "Bring proven systems, planners, and apparel into your school community." },
  { title: "Churches", body: "Partner on education and youth programmes rooted in service and values." },
  { title: "NGOs", body: "Collaborate on community development and educational outreach." },
  { title: "Government", body: "Work together on systems and capacity-building initiatives." },
  { title: "Sponsors", body: "Support programmes that build the next generation of leaders." },
  { title: "Businesses", body: "Co-develop apparel, local content, and enterprise opportunities." },
  { title: "Community Organisations", body: "Reach young people and families with transformational programmes." },
];

const benefits = [
  "Access to practical, PNG-context systems and resources",
  "A credible, governance-focused partner",
  "Shared commitment to transparency and accountability",
  "Long-term, sustainable collaboration",
  "Connection to a growing multi-division ecosystem",
];

export default function PartnershipsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Partnerships"
        title="Let's build better systems together"
        intro="We collaborate with organisations across Papua New Guinea that share our commitment to education, leadership, and community transformation."
      >
        <Link href="/contact" className="btn-gold">
          Start a Conversation
        </Link>
      </PageHeader>

      <Section eyebrow="Who We Work With" title="Partnership Opportunities">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {audiences.map((a) => (
            <div key={a.title} className="card p-6">
              <h3 className="font-display text-lg font-bold text-ink">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{a.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Why Partner" title="What partnership offers" className="bg-bone-deep/40">
        <ul className="grid gap-4 md:grid-cols-2">
          {benefits.map((b) => (
            <li key={b} className="flex items-start gap-3 rounded-xl bg-white p-5 shadow-card">
              <span className="mt-1 inline-block h-2.5 w-2.5 shrink-0 rotate-45 bg-gold" aria-hidden="true" />
              <span className="text-sm leading-relaxed text-ink/75">{b}</span>
            </li>
          ))}
        </ul>
      </Section>

      <CTASection
        title="Begin a partnership inquiry"
        intro="Tell us about your organisation and what you would like to achieve. We will respond personally."
        buttons={[
          { label: "Contact Us", href: "/contact", variant: "gold" },
          { label: "Explore Divisions", href: "/#divisions", variant: "ghost" },
        ]}
      />
    </>
  );
}
