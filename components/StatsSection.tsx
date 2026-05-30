type Stat = { value: string; label: string };

// Honest, forward-looking metrics only — no fabricated achievements.
const defaultStats: Stat[] = [
  { value: "5+", label: "Projects in development" },
  { value: "Planned", label: "Pilot programmes" },
  { value: "6", label: "Educational & enterprise divisions" },
  { value: "Open", label: "Partnerships welcome" },
];

export default function StatsSection({
  stats = defaultStats,
  note = "Figures reflect current development status. We do not claim achievements we have not yet earned.",
}: {
  stats?: Stat[];
  note?: string;
}) {
  return (
    <section className="border-y border-ink/10 bg-bone-deep/60 py-16">
      <div className="shell">
        <dl className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center sm:text-left">
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="block font-display text-4xl font-extrabold text-ink sm:text-5xl">
                  {s.value}
                </span>
                <span className="mt-2 block text-sm text-ink/55">{s.label}</span>
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-10 text-center text-xs text-ink/40 sm:text-left">{note}</p>
      </div>
    </section>
  );
}
