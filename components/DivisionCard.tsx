import Link from "next/link";
import type { Division } from "@/data/divisions";

const accentMap: Record<Division["accent"], string> = {
  gold: "before:bg-gold",
  blood: "before:bg-blood",
  ink: "before:bg-ink",
  flame: "before:bg-paradise-flame",
};

const tagAccent: Record<Division["accent"], string> = {
  gold: "text-gold",
  blood: "text-blood",
  ink: "text-ink",
  flame: "text-paradise-flame",
};

export default function DivisionCard({ division }: { division: Division }) {
  return (
    <Link
      href={division.href}
      className={`card group relative overflow-hidden p-7 hover:-translate-y-1 hover:shadow-lift before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:content-[''] ${accentMap[division.accent]}`}
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-display text-xl font-bold text-ink">
          {division.name}
        </h3>
        <span
          className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-ink/10 text-ink/40 transition-all group-hover:border-gold group-hover:bg-gold group-hover:text-ink"
          aria-hidden="true"
        >
          <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 15L15 5M15 5H7M15 5V13" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
      <p className={`mt-1 text-sm font-semibold ${tagAccent[division.accent]}`}>
        {division.tagline}
      </p>
      <p className="mt-4 text-sm leading-relaxed text-ink/65">
        {division.summary}
      </p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {division.offerings.map((o) => (
          <li
            key={o}
            className="rounded-full bg-bone-deep px-3 py-1 text-[0.7rem] font-medium text-ink/60"
          >
            {o}
          </li>
        ))}
      </ul>
    </Link>
  );
}
