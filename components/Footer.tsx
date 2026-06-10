import Link from "next/link";
import Logo from "./Logo";
import { site, socials } from "@/data/site";
import { divisionsNav } from "@/data/navigation";

const quickLinks = [
  { label: "Atomic Digital Systems", href: "/atomic-digital-png" },
  { label: "Start Your Journey", href: "/start" },
  { label: "Projects", href: "/projects" },
  { label: "Books", href: "/books" },
  { label: "Partnerships", href: "/partnerships" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-24 overflow-hidden bg-ink text-bone">
      <div className="png-texture absolute inset-0 opacity-70" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" aria-hidden="true" />

      <div className="shell relative py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <Logo invert />
            <p className="mt-5 max-w-xs font-display text-lg leading-snug text-bone/85">
              {site.tagline}
            </p>
            <p className="mt-4 text-sm text-bone/55">
              Company Registration No: {site.registrationNumber}
            </p>
            <p className="text-sm text-bone/55">{site.country}</p>
            <p className="mt-4 text-xs uppercase tracking-brand text-gold">
              {site.builtIn}
            </p>
          </div>

          {/* Divisions */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-brand text-bone/50">
              Divisions
            </h3>
            <ul className="mt-5 space-y-3">
              {divisionsNav.map((d) => (
                <li key={d.href}>
                  <Link
                    href={d.href}
                    className="link-underline text-sm text-bone/75 hover:text-bone"
                  >
                    {d.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-brand text-bone/50">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="link-underline text-sm text-bone/75 hover:text-bone"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + social */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-brand text-bone/50">
              Contact
            </h3>
            <a
              href={`mailto:${site.email}`}
              className="mt-5 block text-sm text-bone/85 hover:text-gold"
            >
              {site.email}
            </a>
            <p className="mt-2 text-sm text-bone/55">
              Papua New Guinea
            </p>

            <h3 className="mt-7 text-xs font-semibold uppercase tracking-brand text-bone/50">
              Follow
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="inline-flex h-9 items-center rounded-full border border-bone/20 px-3 text-xs text-bone/70 transition-colors hover:border-gold hover:text-gold"
                    aria-label={s.label}
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-bone/15 pt-6 text-xs text-bone/45 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="text-gold/70">
            Atomic Digital Systems is currently under development.
          </p>
        </div>
      </div>
    </footer>
  );
}
