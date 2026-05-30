import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { site, socials } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Get in touch with FLEXWEAR TM LIMITED. Enquiries about apparel, education systems, partnerships, and more.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in touch"
        intro="Whether you have a question, a project, or a partnership in mind, we would be glad to hear from you."
      />

      <section className="py-16 sm:py-20">
        <div className="shell grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          {/* Form */}
          <div className="card p-7 sm:p-9">
            <h2 className="font-display text-2xl font-bold text-ink">
              Send us a message
            </h2>
            <p className="mt-2 text-sm text-ink/60">
              Fields marked with * are required.
            </p>
            <div className="mt-7">
              <ContactForm />
            </div>
          </div>

          {/* Details */}
          <aside className="space-y-8">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-brand text-ink/50">
                Email
              </h3>
              <a
                href={`mailto:${site.email}`}
                className="mt-2 block font-display text-lg font-bold text-ink hover:text-blood"
              >
                {site.email}
              </a>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-brand text-ink/50">
                WhatsApp
              </h3>
              <p className="mt-2 text-sm text-ink/70">
                {/* WhatsApp number placeholder — add NEXT_PUBLIC_WHATSAPP */}
                Available on request — message us to connect.
              </p>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-brand text-ink/50">
                Company
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">
                {site.name}
                <br />
                {site.country}
                <br />
                Registration No: {site.registrationNumber}
              </p>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-brand text-ink/50">
                Follow
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      className="inline-flex h-9 items-center rounded-full border border-ink/15 px-3 text-xs text-ink/65 transition-colors hover:border-gold hover:text-ink"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
