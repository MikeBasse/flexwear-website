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

      {/* 2. Company Introduction */}
      <Section
        eyebrow="Who We Are"
        title="One ecosystem, built for Papua New Guinea"
        intro={`${site.name} brings together apparel, education, leadership, innovation, and digital systems under a single institutional vision — turning consistent, well-designed systems into lasting transformation.`}
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

      {/* 3. Divisions */}
      <Section
        id="divisions"
        eyebrow="The Ecosystem"
        title="Our Divisions"
        intro="Six divisions, one master brand. Each strengthens the others — apparel funds and brands education; education and leadership build talent; technology scales reach; community impact builds trust."
        className="bg-bone-deep/40"
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {divisions.map((d) => (
            <DivisionCard key={d.slug} division={d} />
          ))}
        </div>
      </Section>

      {/* 4. Featured Projects */}
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

      {/* 5. Apparel Showcase */}
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

      {/* 6. Impact / Stats */}
      <StatsSection />

      {/* 7. Call To Action */}
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
