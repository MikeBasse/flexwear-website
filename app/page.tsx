import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import Section from "@/components/Section";
import DivisionCard from "@/components/DivisionCard";
import ProjectCard from "@/components/ProjectCard";
import ProductCard from "@/components/ProductCard";
import StatsSection from "@/components/StatsSection";
import CTASection from "@/components/CTASection";
import { divisions } from "@/data/divisions";
import { projects } from "@/data/projects";
import { products } from "@/data/products";
import { site } from "@/data/site";

const ecosystemRoles = [
  "A multi-division ecosystem",
  "An educational systems platform",
  "A leadership development company",
  "An innovation ecosystem",
  "A transformational PNG brand",
];

export default function HomePage() {
  const apparelShowcase = products.filter((p) => p.category === "Apparel");

  return (
    <>
      <HeroSection />

      <Section
        eyebrow="Who We Are"
        title="One ecosystem, built for Papua New Guinea"
        intro={`${site.name} brings together apparel, education, leadership, innovation, and digital systems under a single institutional vision \u2014 turning consistent, well-designed systems into lasting transformation.`}
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {ecosystemRoles.map((role, i) => (
            <div
              key={role}
              className="rounded-2xl border border-ink/10 bg-white p-5 shadow-card"
            >
              <span className="font-display text-3xl font-extrabold text-gold">
                0{i + 1}
              </span>
              <p className="mt-3 text-sm font-medium leading-snug text-ink/75">
                {role}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="divisions"
        eyebrow="The Ecosystem"
        title="Our Divisions"
        intro="Six divisions, one master brand. Each strengthens the others \u2014 apparel funds and brands education; education and leadership build talent; technology scales reach; community impact builds trust."
        className="bg-bone-deep/40"
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {divisions.map((d) => (
            <DivisionCard key={d.slug} division={d} />
          ))}
        </div>
      </Section>

      <section className="relative overflow-hidden bg-ink text-bone">
        <div className="png-texture absolute inset-0" aria-hidden="true" />
        <div className="shell relative flex flex-col items-center gap-6 py-14 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="max-w-2xl">
            <span className="eyebrow text-gold">Free Book</span>
            <h2 className="mt-3 font-display text-2xl font-extrabold sm:text-3xl">
              Download Atomic Schools PNG \u2014 free
            </h2>
            <p className="mt-3 text-bone/70">
              A practical school-transformation framework for Papua New Guinean
              schools. Small Habits. Big Future.
            </p>
          </div>
          <Link href="/atomic-schools-png-book" className="btn-gold shrink-0">
            Get the Free Book
          </Link>
        </div>
      </section>

      <Section
        eyebrow="In Motion"
        title="Featured Projects"
        intro="Honest about where we are: these initiatives are in active development and planning."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
        <div className="mt-10">
          <Link href="/projects" className="btn-ghost">
            View all projects
          </Link>
        </div>
      </Section>

      <Section
        eyebrow="FlexWear Apparel"
        title="Identity you can wear"
        intro="Uniforms, workwear, and leadership apparel that give schools, teams, and communities a unified, professional identity."
        className="bg-bone-deep/40"
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {apparelShowcase.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/apparel" className="btn-ink">
            Explore Apparel
          </Link>
          <Link href="/shop" className="btn-ghost">
            Visit the Shop
          </Link>
        </div>
      </Section>

      <StatsSection />

      <CTASection
        title="Join the movement to build better systems for Papua New Guinea"
        intro="Whether you are a school, a business, an NGO, or a community organisation, there is a place for you in this ecosystem."
        buttons={[
          { label: "Partner With Us", href: "/partnerships", variant: "gold" },
          { label: "Explore Atomic PNG Institute", href: "/atomic-png-institute", variant: "ghost" },
          { label: "Contact Us", href: "/contact", variant: "ghost" },
        ]}
      />
    </>
  );
}
