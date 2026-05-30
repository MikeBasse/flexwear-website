import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import BlogCard from "@/components/BlogCard";
import { articles } from "@/data/articles";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Media",
  description:
    "Articles and ideas on leadership, education systems, PNG youth, AI and innovation, teacher productivity, and community transformation.",
  path: "/media",
});

export default function MediaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Media"
        title="Ideas & Insights"
        intro="Writing on the systems, leadership, and innovation behind the ecosystem. New articles are added as they are published."
      />
      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <BlogCard key={a.slug} article={a} />
          ))}
        </div>
        <p className="mt-10 text-xs text-ink/40">
          This section is ready to connect to a CMS or blog backend. Topics shown
          reflect the themes we write about.
        </p>
      </Section>
    </>
  );
}
