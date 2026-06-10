import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import InterestForm from "@/components/InterestForm";
import { buildMetadata } from "@/lib/seo";
import { signupSteps } from "@/data/digital";

export const metadata = buildMetadata({
  title: "Start Your Atomic Journey",
  description:
    "Begin your transformation journey with Atomic PNG Institute. Choose your pathway, set your Big 3 goals, and start your 90-day transformation. Register your interest today.",
  path: "/start",
  keywords: [
    "Atomic PNG Institute",
    "Atomic Digital Systems",
    "PNG leadership programs",
    "PNG development systems",
    "90-day transformation PNG",
  ],
});

export default function StartPage() {
  return (
    <>
      <PageHeader
        eyebrow="Start Your Atomic Journey"
        title="Let's build your system"
        intro="Choose your pathway and begin your transformation journey. While the full platform is under development, you can register your interest now and we'll help you begin."
      />

      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          {signupSteps.map((s) => (
            <div key={s.step} className="card p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold font-display text-lg font-extrabold text-ink">
                  {s.step}
                </span>
                <h3 className="font-display text-lg font-bold text-ink">{s.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">{s.body}</p>
              {s.detail && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.detail.map((d) => (
                    <span
                      key={d}
                      className="rounded-full border border-ink/15 bg-bone-deep/40 px-3 py-1 text-xs text-ink/65"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Register Your Interest"
        title="Tell us where you'd like to begin"
        intro="Complete the form and our team will be in touch through enquiries@flexwearltd.com to help you start."
        className="bg-bone-deep/40"
      >
        <div className="mx-auto max-w-2xl rounded-2xl bg-white p-6 shadow-card sm:p-8">
          <InterestForm />
        </div>
      </Section>
    </>
  );
}
