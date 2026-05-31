import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import type { Division } from "@/data/divisions";

export default function DivisionPage({ division }: { division: Division }) {
  return (
    <>
      <PageHeader
        eyebrow={`Division · ${division.short}`}
        title={division.name}
        intro={division.tagline}
      />

      <Section title="Overview" intro={division.intro} />

      <Section
        eyebrow="What We Do"
        title="Focus Areas"
        className="bg-bone-deep/40"
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {division.focusAreas.map((f, i) => (
            <Reveal key={f.title} index={i % 3} className="card p-6">
              <h3 className="font-display text-lg font-bold text-ink">
                {f.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/65">
                {f.body}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection
        title={`Partner with ${division.name}`}
        intro="Tell us about your school, organisation, or community, and we will explore how we can work together."
        buttons={[
          { label: "Partner With Us", href: "/partnerships", variant: "gold" },
          { label: "Contact Us", href: "/contact", variant: "ghost" },
        ]}
      />
    </>
  );
}
