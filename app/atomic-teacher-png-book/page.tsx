import Link from "next/link";
import Image from "next/image";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Atomic Teacher PNG \u2014 Book",
  description:
    "Atomic Teacher PNG by Michael Basse \u2014 teacher productivity systems, classroom routines, and educational leadership for Papua New Guinean teachers. Read a free preview; order the full book for K49.",
  path: "/atomic-teacher-png-book",
  keywords: ["teacher productivity PNG", "PNG educational systems", "Atomic Teacher PNG book", "classroom systems PNG"],
});

const PREVIEW = "/books/Atomic-Teacher-PNG-Preview.pdf";
const WHATSAPP = "https://wa.me/67571607693";
const PRICE = "K49";

const whatsInside = [
  "Teacher productivity systems for a calmer, more effective week",
  "Classroom routines that reduce disruption and build focus",
  "Lesson planning systems and templates",
  "Assessment tracking made simple",
  "Healthy, sustainable approaches to teacher wellness",
  "Educational leadership systems for head teachers",
  "18 chapters plus practical templates and trackers",
];

const whoFor = [
  "Classroom teachers",
  "Head teachers and school leaders",
  "Teacher trainers and education officers",
  "Anyone supporting teachers in PNG",
];

export default function AtomicTeacherBookPage() {
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
                src="/books/atomic-teacher-png-cover.png"
                alt="Atomic Teacher PNG book cover"
                width={1040}
                height={1470}
                className="relative rounded-xl shadow-lift ring-1 ring-bone/10"
                priority
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="eyebrow text-gold">Book \u00B7 Atomic Teacher PNG</span>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl">
              Atomic Teacher PNG
            </h1>
            <p className="mt-4 font-display text-xl italic text-gold">
              Better Teachers. Better Systems. Better Futures.
            </p>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-bone/75 text-pretty">
              Practical productivity systems, classroom routines, and educational
              leadership for the Papua New Guinean teacher. By Michael Basse.
            </p>

            <div className="mt-6 flex items-center gap-4">
              <span className="font-display text-3xl font-extrabold text-bone">{PRICE}</span>
              <span className="text-sm text-bone/55">Full book \u00B7 PDF</span>
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
              Free preview: introduction + Chapter 1. Order the full book and we&apos;ll send it to you.
            </p>
          </div>
        </div>
      </section>

      <Section
        eyebrow="What's Inside"
        title="Systems for the PNG teacher"
        intro="Atomic Teacher PNG gives teachers and school leaders practical systems they can put to work straight away \u2014 not abstract theory."
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

      <Section eyebrow="Who It's For" title="Written for PNG educators" className="bg-bone-deep/40">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whoFor.map((w) => (
            <div key={w} className="card p-6">
              <p className="text-sm font-medium leading-snug text-ink/75">{w}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="How to Order" title="Get the full book for K49">
        <div className="card p-8">
          <ol className="space-y-4">
            <li className="flex gap-4">
              <span className="font-display text-2xl font-extrabold text-gold">1</span>
              <p className="text-sm leading-relaxed text-ink/75">
                <strong className="font-semibold text-ink">Read the free preview</strong> (introduction and Chapter 1) to see if it&apos;s right for you.
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
                <strong className="font-semibold text-ink">Receive your full book</strong> by email once payment is confirmed.
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
        title="Looking for the free book first?"
        intro="Atomic Schools PNG is available to download free \u2014 a great place to start."
        buttons={[
          { label: "Get the Free Book", href: "/atomic-schools-png-book", variant: "gold" },
          { label: "Contact Us", href: "/contact", variant: "ghost" },
        ]}
      />
    </>
  );
}
