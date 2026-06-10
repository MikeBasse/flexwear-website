import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import { buildMetadata } from "@/lib/seo";
import { currentBooks, futureBooks } from "@/data/books";

export const metadata = buildMetadata({
  title: "Atomic PNG Publishing",
  description:
    "Books, workbooks, journals and leadership resources built in PNG by the Atomic PNG Institute — including From Tari to the Nation, the Atomic Schools Workbook, the Teacher Productivity Planner and the Youth Leadership Journal.",
  path: "/books",
  keywords: [
    "PNG leadership books",
    "Atomic PNG Institute",
    "Papua New Guinea publishing",
    "PNG school resources",
    "From Tari to the Nation",
  ],
});

const WHATSAPP = "https://wa.me/67571607693";

export default function BooksPage() {
  return (
    <>
      <PageHeader
        eyebrow="Atomic PNG Publishing"
        title="Books, workbooks, journals and leadership resources — built in PNG"
        intro="Original publications developed by the Atomic PNG Institute for the Papua New Guinean context — practical, cultural, and leadership-focused."
      />

      <Section eyebrow="Available Now" title="Current publications">
        <div className="grid gap-6 md:grid-cols-2">
          {currentBooks.map((b) => (
            <article key={b.slug} className="card flex flex-col p-7">
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full border border-emerald-500/30 bg-emerald-500/12 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-wide text-emerald-700">
                  {b.status}
                </span>
                <span className="text-xs text-ink/40">{b.category}</span>
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-ink">{b.title}</h3>
              {b.blurb && (
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/65">{b.blurb}</p>
              )}
              <div className="mt-6 flex flex-wrap gap-3">
                {b.href ? (
                  <Link href={b.href} className="btn-gold">View Book</Link>
                ) : (
                  <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-gold">
                    Enquire to Order
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="In the Pipeline"
        title="Future publications"
        intro="Planned titles extending the Atomic PNG library across communities, enterprise, finance, agriculture, governance, and leadership."
        className="bg-bone-deep/40"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {futureBooks.map((b) => (
            <div key={b.slug} className="rounded-xl border border-ink/10 bg-white p-6 shadow-card">
              <span className="rounded-full border border-ink/15 bg-ink/5 px-3 py-1 text-[0.66rem] font-semibold uppercase tracking-wide text-ink/45">
                {b.status}
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-ink">{b.title}</h3>
              <p className="mt-2 text-xs text-ink/50">{b.category}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTASection
        title="Order books or partner with us"
        intro="To order any available publication, or to discuss bulk orders for schools and organisations, get in touch. Email enquiries@flexwearltd.com."
        buttons={[
          { label: "Order on WhatsApp", href: WHATSAPP, variant: "gold" },
          { label: "Contact Us", href: "/contact", variant: "ghost" },
        ]}
      />
    </>
  );
}
