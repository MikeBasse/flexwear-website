import type { Article } from "@/data/articles";

export default function BlogCard({ article }: { article: Article }) {
  const date = new Date(article.date).toLocaleDateString("en-AU", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <article className="card group flex flex-col overflow-hidden hover:-translate-y-1 hover:shadow-lift">
      <div className="relative aspect-[16/9] overflow-hidden bg-ink">
        <div className="png-texture absolute inset-0 opacity-80" aria-hidden="true" />
        <span className="absolute bottom-3 left-4 rounded-full bg-gold px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-ink">
          {article.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-bold leading-snug text-ink group-hover:text-blood">
          {article.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/65">
          {article.excerpt}
        </p>
        <div className="mt-5 flex items-center gap-3 text-xs text-ink/45">
          <span>{date}</span>
          <span aria-hidden="true">·</span>
          <span>{article.readingTime}</span>
        </div>
      </div>
    </article>
  );
}
