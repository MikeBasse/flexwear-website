import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import { site } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About",
  description:
    "The story, vision, mission, and values of FLEXWEAR TM LIMITED — a Papua New Guinean ecosystem building better systems across apparel, education, leadership, and innovation.",
  path: "/about",
});

const values = [
  { title: "Systems Thinking", body: "Lasting change comes from strong systems and consistent habits, not chance." },
  { title: "Professionalism", body: "High standards of quality and conduct in everything we produce." },
  { title: "Innovation", body: "Technology, creativity, and continuous improvement to solve real problems." },
  { title: "Integrity", body: "Honesty, transparency, and accountability in all we do." },
  { title: "Community", body: "Success measured by the lasting difference we make in communities." },
  { title: "Youth Empowerment", body: "Investing in young people as the foundation of the nation's future." },
];

const roadmap = [
  { phase: "Foundation", body: "Establish the ecosystem, brand, and core educational resources." },
  { phase: "Development", body: "Build out divisions, pilot programmes, and partnerships across PNG." },
  { phase: "Scale", body: "Grow proven systems, deepen institutional partnerships, and expand reach." },
  { phase: "Ecosystem", body: "A connected platform across apparel, education, leadership, and digital systems." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Building better systems for Papua New Guinea"
        intro={`${site.name} is a modern, multi-division ecosystem committed to transformation through systems, education, leadership, and innovation.`}
      />

      <Section eyebrow="Our Story" title="Where we began">
        <div className="grid gap-6 text-base leading-relaxed text-ink/70 lg:grid-cols-2">
          <p>
            FLEXWEAR TM LIMITED began with a simple conviction: that small,
            disciplined systems — repeated consistently — are what build better
            schools, better organisations, and better futures. What started in
            apparel has grown into a broader vision for Papua New Guinea.
          </p>
          <p>
            Today the company is structured as an ecosystem of divisions
            spanning apparel, education, leadership development, youth
            empowerment, and digital innovation — each sharing one identity and
            one purpose: to build better systems for Papua New Guinea, and to
            inspire beyond it.
          </p>
        </div>
      </Section>

      <Section className="bg-bone-deep/40">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card p-8">
            <span className="eyebrow text-blood">Mission</span>
            <p className="mt-4 font-display text-xl leading-snug text-ink">
              To build better systems, better people, and better futures across
              Papua New Guinea — turning small, disciplined daily actions into
              lasting institutional transformation.
            </p>
          </div>
          <div className="card p-8">
            <span className="eyebrow text-blood">Vision</span>
            <p className="mt-4 font-display text-xl leading-snug text-ink">
              To become a leading Papua New Guinean institution recognised for
              transforming education, leadership, and enterprise through systems
              thinking, innovation, and integrity.
            </p>
          </div>
        </div>
      </Section>

      {/* Founder */}
      <Section eyebrow="Leadership" title="Founder's Vision">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="card overflow-hidden">
            <div className="relative aspect-[4/5] bg-ink">
              <div className="png-texture absolute inset-0 opacity-80" aria-hidden="true" />
              <div className="absolute inset-0 grid place-items-center">
                <span className="font-display text-6xl font-extrabold text-bone/15">MB</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-bold text-ink">Michael Basse</h3>
              <p className="text-sm text-ink/50">Founder, FLEXWEAR TM LIMITED</p>
            </div>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-ink/70">
            <p>
              FLEXWEAR TM LIMITED is led by its founder, Michael Basse, whose
              vision drives the company&apos;s systems-development philosophy and
              its focus on educational transformation.
            </p>
            <p>
              That philosophy is straightforward: real, lasting change does not
              come from one-off effort or fleeting motivation. It comes from
              building strong systems and keeping them consistently — in
              classrooms, in organisations, and in communities. The same
              principle runs through every division of the ecosystem.
            </p>
            <p>
              The founder&apos;s focus on educational transformation places
              schools, teachers, and youth at the centre of the company&apos;s
              long-term vision: equipping the next generation of Papua New
              Guineans with the systems, discipline, and confidence to shape a
              stronger nation.
            </p>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section eyebrow="What Guides Us" title="Our Values" className="bg-bone-deep/40">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="card p-6">
              <h3 className="font-display text-lg font-bold text-ink">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{v.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Roadmap */}
      <Section eyebrow="Looking Ahead" title="Future Roadmap">
        <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {roadmap.map((r, i) => (
            <li key={r.phase} className="relative card p-6">
              <span className="font-display text-3xl font-extrabold text-gold">
                0{i + 1}
              </span>
              <h3 className="mt-3 font-display text-lg font-bold text-ink">
                {r.phase}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{r.body}</p>
            </li>
          ))}
        </ol>
        <p className="mt-8 text-xs text-ink/40">
          This roadmap describes intended direction and is provided for context;
          it is not a guarantee of specific outcomes or timelines.
        </p>
      </Section>

      <CTASection
        title="Be part of what we are building"
        buttons={[
          { label: "Partner With Us", href: "/partnerships", variant: "gold" },
          { label: "Contact Us", href: "/contact", variant: "ghost" },
        ]}
      />
    </>
  );
}
