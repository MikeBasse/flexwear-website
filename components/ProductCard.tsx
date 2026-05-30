import type { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="card group flex flex-col overflow-hidden hover:-translate-y-1 hover:shadow-lift">
      {/* Placeholder visual — replace with product imagery later */}
      <div className="relative aspect-[4/3] overflow-hidden bg-bone-deep">
        <div className="png-chevrons absolute inset-0 opacity-30" aria-hidden="true" />
        <div className="absolute inset-0 grid place-items-center">
          <span className="font-display text-5xl font-extrabold text-ink/10">
            FW
          </span>
        </div>
        <span className="absolute left-3 top-3 rounded-full bg-ink/85 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-bone">
          {product.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-bold text-ink">{product.name}</h3>
        <p className="mt-1 text-xs text-ink/45">{product.division}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/65">
          {product.blurb}
        </p>
        <div className="mt-5 flex items-center justify-between">
          <span className="font-display text-lg font-bold text-ink">
            {product.price}
            <span className="ml-1 text-xs font-normal text-ink/40">PGK</span>
          </span>
          <button
            type="button"
            className="btn-ink !px-4 !py-2 text-xs"
            aria-label={`Enquire about ${product.name}`}
          >
            Enquire
          </button>
        </div>
      </div>
    </article>
  );
}
