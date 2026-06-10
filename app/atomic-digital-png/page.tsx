import Link from "next/link";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import RoadmapCard from "@/components/RoadmapCard";
import { buildMetadata } from "@/lib/seo";
import { roadmapPhases, osFlow, osUserTypes, signupSteps } from "@/data/digital";

export const metadata = buildMetadata({
  title: "Atomic Digital Systems",
  description:
    "Atomic Digital Systems is the technology division of Atomic PNG Institute \u2014 building Papua New Guinea's next generation learning and development platform. Currently under development: digital infrastructure, the Atomic PNG OS, Atomic AI assistants, and the Atomic PNG Knowledge Hub.",
  path: "/atomic-digital-png",
  keywords: [
    "Atomic Digital Systems",
    "PNG digital learning platform",
    "PNG AI education systems",
    "Atomic PNG OS",
    "Papua New Guinea education technology",
    "Atomic PNG Institute",
  ],
});

const WHATSAPP = "https://wa.me/67571607693";
const EMAIL = "mailto:enquiries@flexwearltd.com?subject=Atomic%20Digital%20Systems";
const REGISTER =
  "https://wa.me/67571607693?text=Hi%2C%20I%27d%20like%20to%20start%20my%20Atomic%20PNG%20journey.";

const backbone = [
  "Students",
  "Teachers",
  "Schools",
  "Youth",
  "Families",
  "Communities",
  "SMEs",
  "Governance education",
];

const exampleGoals = [
  "Improve student attendance",
  "Build reading culture",
  "Strengthen teacher productivity",
  "Develop youth leadership",
  "Improve family savings",
  "Launch a community project",
  "Build business systems",
  "Improve civic education",
];

export default function AtomicDigitalSystemsPage() {
  return (
    <>
      {/* Hero */}
      <header className="relative overflow-hidden bg-ink text-bone">
        <div className="png-texture absolute inset-0" aria-hidden="true" />
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-gold/10 blur-3xl" aria-hidden="true" />
        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-blood/10 blur-3xl" aria-hidden="true" />
        <div className="shell relative pb-16 pt-32 sm:pb-20 sm:pt-40">
          <div className="flex flex-wrap items-center gap-3">
            <span className="eyebrow text-gold">Technology Division \u00B7 Atomic PNG Institute</span>
            <span className="rounded-full border border-gold/30 bg-gold/15 px-3 py-1 text-xs font-semibold text-gold-bright">
              Currently Under Development
            </span>
          </div>
          <h1 className="mt-5 max-w-4xl font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
            Atomic Digital Systems
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-bone/75 text-pretty">
            Building Papua New Guinea&apos;s next generation learning and development platform.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-bone/60">
            Atomic Digital Systems is the technology division of the Atomic PNG Institute. It will
            become the digital backbone connecting every part of the ecosystem \u2014 built in PNG,
            for PNG.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-gold">
              Register Your Interest
            </a>
            <Link href="/partnerships" className="btn-ghost-light">
              Partner With Us
            </Link>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" aria-hidden="true" />
      </header>

      {/* The digital backbone */}
      <Section
        eyebrow="The Vision"
        title="One digital backbone for the whole ecosystem"
        intro="Atomic Digital Systems is being built to support and connect every part of the Atomic PNG movement."
      >
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {backbone.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-ink/10 bg-white p-5 text-center shadow-card"
            >
              <span className="text-sm font-semibold text-ink/80">{item}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Roadmap */}
      <Section
        eyebrow="The Roadmap"
        title="Four phases, built honestly and in order"
        intro="We are building this step by step. Each phase lays the foundation for the next. We will not claim a system is live until it is."
        className="bg-bone-deep/40"
      >
        <div className="grid gap-6 lg:grid-cols-2">
          {roadmapPhases.map((phase) => (
            <RoadmapCard key={phase.title} phase={phase} />
          ))}
        </div>
      </Section>

      {/* Atomic PNG OS concept */}
      <Section
        eyebrow="The Concept"
        title="Atomic PNG OS \u2014 a transformation operating system"
        intro="The heart of Phase 2. A simple journey that takes any user from signing up to completing a measurable 90-day transformation."
      >
        {/* Flow */}
        <div className="flex flex-wrap items-center gap-3">
          {osFlow.map((step, i) => (
            <div key={step} className="flex items-center gap-3">
              <span className="rounded-xl border border-ink/10 bg-white px-4 py-3 text-sm font-semibold text-ink shadow-card">
                {step}
              </span>
              {i < osFlow.length - 1 && (
                <span className="text-gold" aria-hidden="true">
                  &rarr;
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10">
          <h3 className="font-display text-lg font-bold text-ink">Built for every kind of user</h3>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {osUserTypes.map((u) => (
              <span
                key={u}
                className="rounded-full border border-ink/15 bg-bone-deep/40 px-4 py-1.5 text-sm text-ink/75"
              >
                {u}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* Start Your Atomic Journey */}
      <Section
        eyebrow="Start Your Atomic Journey"
        title="Let's build your system"
        intro="Choose your pathway and begin your 90-day transformation journey. While the full platform is under development, you can register your interest now and we'll help you begin."
        className="bg-ink text-bone"
        dark
      >
        <div className="grid gap-5 md:grid-cols-2">
          {signupSteps.map((s) => (
            <div
              key={s.step}
              className="rounded-2xl border border-bone/10 bg-bone/5 p-6"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold font-display text-lg font-extrabold text-ink">
                  {s.step}
                </span>
                <h3 className="font-display text-lg font-bold text-bone">{s.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-bone/70">{s.body}</p>
              {s.detail && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.detail.map((d) => (
                    <span
                      key={d}
                      className="rounded-full border border-bone/15 px-3 py-1 text-xs text-bone/65"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-gold/20 bg-gold/5 p-6 text-center">
          <p className="text-sm text-bone/70">
            The online platform is under development. To begin today, register your interest by
            WhatsApp or email and we&apos;ll set you up manually.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <a href={REGISTER} target="_blank" rel="noopener noreferrer" className="btn-gold">
              Start Building
            </a>
            <a href={EMAIL} className="btn-ghost-light">
              Email enquiries@flexwearltd.com
            </a>
          </div>
        </div>
      </Section>

      <CTASection
        title="Help us build Papua New Guinea's learning platform"
        intro="We're looking for schools, partners, and sponsors to help bring Atomic Digital Systems to life. If you share the vision, let's talk."
        buttons={[
          { label: "Explore Partnerships", href: "/partnerships", variant: "gold" },
          { label: "Contact Us", href: "/contact", variant: "ghost" },
        ]}
      />
    </>
  );
}
