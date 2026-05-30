import Link from "next/link";
import { site } from "@/data/site";

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-bone">
      {/* Layered atmospheric background */}
      <div className="png-texture absolute inset-0" aria-hidden="true" />
      <div
        className="absolute inset-0 animate-slow-pan opacity-[0.55]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(60% 80% at 75% 10%, rgba(224,168,46,0.20), transparent 60%), radial-gradient(50% 60% at 15% 90%, rgba(200,16,46,0.18), transparent 55%)",
        }}
      />
      {/* Chevron motif strip */}
      <div
        className="png-chevrons absolute right-0 top-0 hidden h-full w-[34%] opacity-20 lg:block"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent"
        aria-hidden="true"
      />

      <div className="shell relative grid min-h-[88vh] items-center gap-12 py-28 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="animate-fade-up">
          <span className="eyebrow text-gold">
            {site.country} · Ecosystem
          </span>
          <h1 className="mt-6 font-display text-[2.6rem] font-extrabold leading-[1.02] sm:text-6xl lg:text-7xl">
            Building Better{" "}
            <span className="relative whitespace-nowrap text-gold">
              Systems
            </span>{" "}
            for Papua New Guinea
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-bone/75 text-pretty">
            {site.name} is a modern PNG ecosystem for apparel, education,
            leadership, innovation, digital systems, and community
            transformation.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="#divisions" className="btn-gold">
              Explore Divisions
            </Link>
            <Link href="/partnerships" className="btn-ghost-light">
              Partner With Us
            </Link>
            <Link href="/contact" className="btn-ghost-light">
              Contact Us
            </Link>
          </div>

          {/* Pillars */}
          <ul className="mt-12 flex flex-wrap gap-x-6 gap-y-2 text-xs font-semibold uppercase tracking-brand text-bone/55">
            {site.pillars.map((p) => (
              <li key={p} className="flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rotate-45 bg-blood" />
                {p}
              </li>
            ))}
          </ul>
        </div>

        {/* Emblem panel */}
        <div className="relative hidden animate-fade-in lg:block">
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <div className="absolute inset-0 rounded-full border border-gold/20" />
            <div className="absolute inset-6 rounded-full border border-bone/10" />
            <div
              className="absolute inset-10 rounded-full bg-gradient-to-br from-gold/15 via-transparent to-blood/15 blur-2xl"
              aria-hidden="true"
            />
            <div className="absolute inset-0 grid place-items-center">
              {/* Emblem from public/logo-badge.png */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo-badge.png"
                alt="FLEXWEAR TM LIMITED emblem"
                className="h-56 w-56 rounded-full object-cover shadow-lift"
              />
            </div>
          </div>
          <p className="mt-8 text-center font-display text-sm italic text-bone/50">
            {site.builtIn}
          </p>
        </div>
      </div>
    </section>
  );
}
