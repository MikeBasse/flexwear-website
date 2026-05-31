import Link from "next/link";
import Image from "next/image";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Atomic Schools PNG — Free Book",
  description:
    "Download Atomic Schools PNG free — a practical school-transformation framework for Papua New Guinean schools by Michael Basse. Building better habits, systems, and futures.",
  path: "/atomic-schools-png-book",
  keywords: ["PNG educational systems", "school systems PNG", "Atomic Schools PNG book", "PNG school transformation"],
});

const PDF = "/books/Atomic-Schools-PNG.pdf";

const whatsInside = [
  "A practical framework for building better school habits and systems",
  "Simple routines for attendance, reading culture, and daily operations",
  "Step-by-step school transformation guidance",
  "Ready-to-use templates and trackers",
  "Student development and discipline systems",
  "A 90-day implementation approach schools can start with",
];

const whoFor = [
  "Head teachers and school leaders",
  "Classroom teachers",
  "Education officers and trainers",
  "Boards, churches, and communities running schools",
];

export default function AtomicSchoolsBookPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink text-bone">
        <div className="png-texture absolute inset-0" aria-hidden="true" />
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-gold/10 blur-3xl" aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" aria-hidden="true" />
        <div className="shell relative grid items-center gap-12 pb-16 pt-32 sm:pb-20 sm:pt-40 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="order-2 lg:order-1">
            <div className="relative mx-auto w-full max-w-xs">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-gold/20 to-blood/10 blur-2xl" aria-hidden="true" />
              <Image
                src="/books/atomic-schools-png-cover.png"
                alt="Atomic Schools PNG book cover"
                width={1040}
                height={1470}
                className="relative rounded-xl shadow-lift ring-1 ring-bone/10"
                priority
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="eyebrow text-gold">Free Book · Atomic Schools PNG</span>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl">
              Atomic Schools PNG
            </h1>
            <p className="mt-4 font-display text-xl italic text-gold">Small Habits. Big Future.</p>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-bone/75 text-pretty">
              A practical school-transformation framework for Papua New Guinean schools — building
              better habits, systems, and futures, one small consistent step at a time. By Michael Basse.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={PDF} download className="btn-gold">Download Free (PDF)</a>
              <a href={PDF} target="_blank" rel="noopener noreferrer" className="btn-ghost-light">Read Online</a>
            </div>
            <p className="mt-4 text-sm text-bone/55">Free download · PDF · Opens on any phone or computer</p>
          </div>
        </div>
      </section>

      <Section
        eyebrow="What's Inside"
        title="A system, not just a book"
        intro="Atomic Schools PNG gives school leaders and teachers practical systems they can put to work straight away — not abstract theory."
      >
        <ul className="grid gap-4 md:grid-cols-2">
          {whatsInside.map((item) => (
            <li key={item} className="flex items-start gap-3 rounded-xl bg-white p-5 shadow-card">
              <span className="mt-1 inline-block h-2.5 w-2.5 shrink-0 rotate-45 bg-gold" aria-hidden="true" />
              <span className="text-sm leading-relaxed text-ink/75">{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="Who It's For" title="Written for PNG schools" className="bg-bone-deep/40">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whoFor.map((w) => (
            <div key={w} className="card p-6">
              <p className="text-sm font-medium leading-snug text-ink/75">{w}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <a href={PDF} download className="btn-ink">Download Your Free Copy</a>
        </div>
      </Section>

      <Section eyebrow="Next in the Series" title="Atomic Teacher PNG">
        <div className="card flex flex-col gap-6 p-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-xl">
            <h3 className="font-display text-xl font-bold text-ink">
              Atomic Teacher PNG — Better Teachers, Better Systems &amp; Better Schools
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink/65">
              The companion volume for teachers: productivity systems, classroom routines, lesson
              planning, assessment tracking, and educational leadership. Available to order.
            </p>
          </div>
          <Link href="/contact" className="btn-gold shrink-0">Enquire to Order</Link>
        </div>
      </Section>

      <CTASection
        title="Bring Atomic Schools to your school"
        intro="Want help putting these systems to work, or interested in school apparel, planners, and workshops? Let's talk."
        buttons={[
          { label: "Partner With Us", href: "/partnerships", variant: "gold" },
          { label: "Contact Us", href: "/contact", variant: "ghost" },
        ]}
      />
    </>
  );
}
