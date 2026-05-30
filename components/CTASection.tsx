import Link from "next/link";

type CTAButton = { label: string; href: string; variant?: "gold" | "ghost" };

export default function CTASection({
  title,
  intro,
  buttons,
}: {
  title: string;
  intro?: string;
  buttons: CTAButton[];
}) {
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-bone sm:py-28">
      <div className="png-texture absolute inset-0" aria-hidden="true" />
      <div
        className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold to-transparent"
        aria-hidden="true"
      />
      <div className="shell relative text-center">
        <h2 className="mx-auto max-w-3xl font-display text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        {intro && (
          <p className="mx-auto mt-5 max-w-xl text-base text-bone/70 text-pretty">
            {intro}
          </p>
        )}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {buttons.map((b) => (
            <Link
              key={b.href + b.label}
              href={b.href}
              className={b.variant === "ghost" ? "btn-ghost-light" : "btn-gold"}
            >
              {b.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
