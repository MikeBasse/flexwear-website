import type { Project, ProjectStatus } from "@/data/projects";

const statusStyle: Record<ProjectStatus, string> = {
  "Available": "bg-emerald-500/12 text-emerald-700 border-emerald-500/30",
  "Pilot Ready": "bg-emerald-500/10 text-emerald-700 border-emerald-500/25",
  "In Development": "bg-gold/15 text-gold-bright border-gold/30",
  "Roadmap": "bg-blood/10 text-blood border-blood/30",
  "Future Development": "bg-ink/5 text-ink/60 border-ink/15",
  "Long-Term Vision": "bg-ink/5 text-ink/45 border-ink/10",
  "Coming Soon": "bg-ink/5 text-ink/55 border-ink/15",
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card flex flex-col p-7 hover:-translate-y-1 hover:shadow-lift">
      <div className="flex items-center justify-between gap-3">
        <span
          className={`rounded-full border px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-wide ${statusStyle[project.status]}`}
        >
          {project.status}
        </span>
        <span className="text-xs text-ink/40">{project.division}</span>
      </div>
      <h3 className="mt-5 font-display text-xl font-bold text-ink">
        {project.name}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/65">
        {project.summary}
      </p>
    </article>
  );
}
