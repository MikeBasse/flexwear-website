import Link from "next/link";
import Image from "next/image";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Atomic Youth PNG \u2014 Youth Leadership Journal",
  description:
    "Atomic Youth PNG Youth Leadership Journal by Michael Basse. A complete leadership guide and 90-day guided journal for young people in PNG (ages 10\u201325) \u2014 identity, habits, goals, leadership, money, wellbeing & service. Read a free preview; order the full journal for K79.",
  path: "/atomic-youth-png-journal",
  keywords: ["youth leadership PNG", "youth journal PNG", "Atomic Youth PNG", "leadership journal for students", "PNG youth development"],
});

const PREVIEW = "/books/Atomic-Youth-PNG-Journal-Preview.pdf";
const WHATSAPP = "https://wa.me/67571607693";
const PRICE = "K79";

const whatsInside = [
  "50 short, inspiring chapters across 10 parts",
  "A complete 90-day guided journal",
  "Identity, leadership, habits, goals & character",
  "Education, school leadership & helping others succeed",
  "Entrepreneurship, money & digital leadership",
  "Health, wellbeing, resilience & relationships",
  "The 8 Atomic Youth Systems frameworks",
  "10 printable trackers (habits, reading, goals, savings & more)",
];

const whoFor = [
  "Upper-primary & secondary students",
  "Prefects & student leaders",
  "Youth groups & church youth",
  "Young people aged 10\u201325",
];

export default function AtomicYouthJournalPage() {
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
                src="/books/atomic-youth-png-journal-cover.png"
                alt="Atomic Youth PNG Youth Leadership Journal cover"
                width={1040}
                height={1470}
                className="relative rounded-xl shadow-lift ring-1 ring-bone/10"
                priority
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="eyebrow text-gold">Journal \u00B7 Youth Leadership</span>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl">
              Atomic Youth PNG
            </h1>
            <p className="mt-4 font-display text-xl italic text-gold">
              Youth Leadership Journal
            </p>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-bone/75 text-pretty">
              A complete leadership guide and 90-day guided journal for the young people of
              Papua New Guinea \u2014 built on one idea: your future is built by what you do every day. By Michael Basse.
            </p>

            <div className="mt-6 flex items-center gap-4">
              <span className="font-display text-3xl font-extrabold text-bone">{PRICE}</span>
              <span className="text-sm text-bone/55">Full journal \u00B7 PDF</span>
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
              Free preview: cover, contents &amp; first chapter. Order the full journal and we&apos;ll send it to you.
            </p>
          </div>
        </div>
      </section>

      <Section
        eyebrow="What's Inside"
        title="A complete guide to building your future"
        intro="Part inspiring guide, part guided journal \u2014 helping young people build discipline, leadership, and a strong future, one day at a time."
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

      <Section eyebrow="Who It's For" title="Built for PNG youth" className="bg-bone-deep/40">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whoFor.map((w) => (
            <div key={w} className="card p-6">
              <p className="text-sm font-medium leading-snug text-ink/75">{w}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="How to Order" title="Get the full journal for K79">
        <div className="card p-8">
          <ol className="space-y-4">
            <li className="flex gap-4">
              <span className="font-display text-2xl font-extrabold text-gold">1</span>
              <p className="text-sm leading-relaxed text-ink/75">
                <strong className="font-semibold text-ink">Read the free preview</strong> to see the journal&apos;s style and full contents.
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
                <strong className="font-semibold text-ink">Receive your full journal</strong> by email once payment is confirmed. Schools, youth groups &amp; churches can order in bulk.
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
        title="Equip your school, youth group, or camp"
        intro="The Atomic Youth journal works beautifully as a group program for students, youth ministries, and leadership camps."
        buttons={[
          { label: "Contact Us", href: "/contact", variant: "gold" },
          { label: "Browse the Shop", href: "/shop", variant: "ghost" },
        ]}
      />
    </>
  );
}
