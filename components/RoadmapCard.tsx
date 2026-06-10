import { RoadmapPhase, RoadmapStatus } from "@/data/digital";

const statusStyle: Record<RoadmapStatus, string> = {
  "In Development": "bg-gold/15 text-gold-bright border-gold/30",
  "Roadmap": "bg-blood/10 text-blood border-blood/30",
  "Future Development": "bg-ink/5 text-ink/60 border-ink/15",
  "Long-Term Vision": "bg-ink/5 text-ink/45 border-ink/10",
};

export default function RoadmapCard({ phase }: { phase: RoadmapPhase }) {
  return (
    <div className="relative flex h-full flex-col rounded-2xl border border-ink/10 bg-white p-7 shadow-card">
      <div className="flex items-center justify-between gap-3">
        <span className="eyebrow text-blood">{phase.phase}</span>
        <span
          className={`rounded-full border px-3 py-1 text-xs font-semibold ${statusStyle[phase.status]}`}
        >
          {phase.status}
        </span>
      </div>
      <h3 className="mt-3 font-display text-2xl font-extrabold leading-tight text-ink">
        {phase.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-ink/70">{phase.description}</p>
      <ul className="mt-5 grid gap-2 border-t border-ink/10 pt-5">
        {phase.items.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm text-ink/75">
            <span
              className="mt-1.5 inline-block h-2 w-2 shrink-0 rotate-45 bg-gold"
              aria-hidden="true"
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
