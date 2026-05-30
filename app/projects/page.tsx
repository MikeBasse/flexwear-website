import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import CTASection from "@/components/CTASection";
import { projects } from "@/data/projects";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Projects",
  description:
    "Initiatives in development across the FLEXWEAR TM LIMITED ecosystem — education systems, teacher programmes, youth leadership, apparel, and digital systems.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="What we are building"
        intro="An honest view of where each initiative stands today — in development, pilot ready, or coming soon."
      />
      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
        <p className="mt-10 text-xs text-ink/40">
          Status labels reflect current development stage and are updated as work
          progresses. We do not present planned work as completed.
        </p>
      </Section>
      <CTASection
        title="Want to help bring a project to life?"
        intro="We welcome partners, sponsors, and pilot schools."
        buttons={[
          { label: "Partner With Us", href: "/partnerships", variant: "gold" },
          { label: "Contact Us", href: "/contact", variant: "ghost" },
        ]}
      />
    </>
  );
}
