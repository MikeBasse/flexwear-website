import { ReactNode } from "react";
import Reveal from "./Reveal";

export default function Section({
  children,
  className = "",
  eyebrow,
  title,
  intro,
  dark = false,
  center = false,
  id,
}: {
  children?: ReactNode;
  className?: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
  dark?: boolean;
  center?: boolean;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`relative py-20 sm:py-24 ${dark ? "bg-ink text-bone" : ""} ${className}`}
    >
      <div className="shell">
        {(eyebrow || title || intro) && (
          <Reveal className={`mb-12 max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
            {eyebrow && (
              <span className={`eyebrow ${dark ? "text-gold" : "text-blood"}`}>
                {eyebrow}
              </span>
            )}
            {title && (
              <h2
                className={`mt-4 font-display text-3xl font-extrabold leading-tight sm:text-4xl ${
                  dark ? "text-bone" : "text-ink"
                }`}
              >
                {title}
              </h2>
            )}
            {intro && (
              <p
                className={`mt-4 text-base leading-relaxed text-pretty ${
                  dark ? "text-bone/70" : "text-ink/65"
                }`}
              >
                {intro}
              </p>
            )}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
