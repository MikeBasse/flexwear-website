"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import ProductCard from "@/components/ProductCard";
import { products, productCategories } from "@/data/products";

export default function ShopPage() {
  const [active, setActive] = useState<(typeof productCategories)[number]>("All");

  const filtered =
    active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <>
      <PageHeader
        eyebrow="Shop"
        title="The FlexWear Shop"
        intro="Apparel, books, and planners from across the ecosystem. Pricing shown is placeholder while the store is being prepared."
      />

      <section className="py-16 sm:py-20">
        <div className="shell">
          {/* Filters */}
          <div className="mb-10 flex flex-wrap items-center gap-2">
            {productCategories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                  active === c
                    ? "bg-ink text-bone"
                    : "border border-ink/15 text-ink/65 hover:border-ink hover:text-ink"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>

          <p className="mt-12 rounded-2xl border border-ink/10 bg-bone-deep/50 p-6 text-sm text-ink/60">
            <strong className="font-semibold text-ink">Store coming soon.</strong>{" "}
            Online checkout and live pricing are being prepared. In the meantime,
            use the <span className="font-medium">Enquire</span> button or the
            contact page to request items and pricing. The product grid is built
            to connect to an ecommerce backend in future.
          </p>
        </div>
      </section>
    </>
  );
}
