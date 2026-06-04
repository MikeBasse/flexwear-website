import Link from "next/link";
import Image from "next/image";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Atomic Schools PNG Workbook \u2014 Book",
  description:
    "Atomic Schools PNG: Building Better Systems, Better Schools & Better Futures \u2014 by Michael Basse. A complete school-transformation workbook with 31 chapters, a 90-day program, and printable templates. Read a free preview; order the full book for K120.",
  path: "/atomic-schools-png-workbook",
  keywords: ["school transformation PNG", "school improvement workbook", "Atomic Schools PNG workbook", "head teacher PNG", "education systems PNG"],
});

const PREVIEW = "/books/Atomic-Schools-PNG-Workbook-Preview.pdf";
const WHATSAPP = "https://wa.me/67571607693";
const PRICE = "K120";

const whatsInside = [
  "31 chapters across 8 practical parts",
  "A complete 90-Day School Transformation Program",
  "Systems for attendance, classrooms, teaching, students, and culture",
  "The Head Teacher Playbook for leading through systems",
  "10 printable templates \u2014 audits, trackers, planners, dashboards",
  "Frameworks, activities, reflection questions, and checklists",
  "Grounded in the real conditions of Papua New Guinean schools",
];

const whoFor = [
  "Head teachers and deputy head teachers",
  "Primary and secondary teachers",
  "Church education agencies",
  "Education officers and school boards",
];

export default function AtomicSchoolsWorkbookPage() {
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
                src="/books/atomic-schools-png-workbook-cover.png"
                alt="Atomic Schools PNG workbook cover"
                width={1040}
                height={1470}
                className="relative rounded-xl shadow-lift ring-1 ring-bone/10"
                priority
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="eyebrow text-gold">Book \u00B7 School Transformation Workbook</span>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl">
              Atomic Schools PNG
            </h1>
            <p className="mt-4 font-display text-xl italic text-gold">
              Building Better Systems, Better Schools &amp; Better Futures
            </p>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-bone/75 text-pretty">
              A complete, practical school-transformation workbook for Papua New Guinea \u2014
              built on one principle: schools do not rise above their systems. By Michael Basse.
            </p>

            <div className="mt-6 flex items-center gap-4">
              <span className="font-display text-3xl font-extrabold text-bone">{PRICE}</span>
              <span className="text-sm text-bone/55">Full workbook \u00B7 PDF</span>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-gold">
                Order on WhatsApp
              </a>
              <a href={PREVIEW} target="_blank" rel="noopener noreferrer" className="btn-ghost-light">
                Read Free Preview
              </a>
            </div>
            <p className="mt-4 text-sm text-bone/55">
              Free preview: introduction + Chapter 1. Order the full workbook and we&apos;ll send it to you.
            </p>
          </div>
        </div>
      </section>

      <Section
        eyebrow="What's Inside"
        title="A complete school-transformation toolkit"
        intro="More than a book \u2014 a working manual that schools can use to build better systems, with the resources they already have."
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
      </Section>

      <Section eyebrow="How to Order" title="Get the full workbook for K120">
        <div className="card p-8">
          <ol className="space-y-4">
            <li className="flex gap-4">
              <span className="font-display text-2xl font-extrabold text-gold">1</span>
              <p className="text-sm leading-relaxed text-ink/75">
                <strong className="font-semibold text-ink">Read the free preview</strong> (introduction and Chapter 1) to see if it&apos;s right for your school.
              </p>
            </li>
            <li className="flex gap-4">
              <span className="font-display text-2xl font-extrabold text-gold">2</span>
              <p className="text-sm leading-relaxed text-ink/75">
                <strong className="font-semibold text-ink">Message us on WhatsApp</strong> at +675 7160 7693 (or email enquiries@flexwearltd.com) to order. We&apos;ll share payment details.
              </p>
            </li>
            <li className="flex gap-4">
              <span className="font-display text-2xl font-extrabold text-gold">3</span>
              <p className="text-sm leading-relaxed text-ink/75">
                <strong className="font-semibold text-ink">Receive your full workbook</strong> by email once payment is confirmed.
              </p>
            </li>
          </ol>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-gold">
              Order on WhatsApp
            </a>
            <Link href="/contact" className="btn-ghost">Enquire by Email</Link>
          </div>
        </div>
      </Section>

      <CTASection
        title="New to Atomic Schools?"
        intro="Start with the free Atomic Schools PNG book \u2014 a great introduction before the full workbook."
        buttons={[
          { label: "Get the Free Book", href: "/atomic-schools-png-book", variant: "gold" },
          { label: "Contact Us", href: "/contact", variant: "ghost" },
        ]}
      />
    </>
  );
}
