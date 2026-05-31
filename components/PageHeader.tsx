import { ReactNode } from "react";

export default function PageHeader({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  children?: ReactNode;
}) {
  return (
    <header className="relative overflow-hidden bg-ink text-bone">
      <div className="png-texture absolute inset-0" aria-hidden="true" />
      <div
        className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-gold/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-blood/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="shell relative pb-16 pt-32 sm:pb-20 sm:pt-40">
        {eyebrow && (
          <span className="eyebrow animate-fade-up text-gold">{eyebrow}</span>
        )}
        <h1
          className="mt-5 max-w-4xl animate-fade-up font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl"
          style={{ animationDelay: "80ms" }}
        >
          {title}
        </h1>
        {intro && (
          <p
            className="mt-6 max-w-2xl animate-fade-up text-lg leading-relaxed text-bone/70 text-pretty"
            style={{ animationDelay: "160ms" }}
          >
            {intro}
          </p>
        )}
        {children && (
          <div className="mt-8 animate-fade-up" style={{ animationDelay: "240ms" }}>
            {children}
          </div>
        )}
      </div>
      <div
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent"
        aria-hidden="true"
      />
    </header>
  );
}
