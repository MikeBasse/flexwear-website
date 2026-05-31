import Link from "next/link";
import { getDivision } from "@/data/divisions";
import DivisionPage from "@/components/DivisionPage";
import { buildMetadata } from "@/lib/seo";

const division = getDivision("atomic-schools-png")!;

export const metadata = buildMetadata({
  title: division.name,
  description: division.summary,
  path: "/atomic-schools-png",
  keywords: division.offerings,
});

export default function Page() {
  return (
    <>
      {/* Free book banner */}
      <div className="bg-gold">
        <div className="shell flex flex-col items-center justify-between gap-3 py-3 text-center sm:flex-row sm:text-left">
          <p className="text-sm font-semibold text-ink">
            📘 The Atomic Schools PNG book is free to download — Small Habits. Big Future.
          </p>
          <Link
            href="/atomic-schools-png-book"
            className="shrink-0 rounded-full bg-ink px-5 py-2 text-xs font-semibold text-gold transition-colors hover:bg-ink-soft"
          >
            Get the Free Book
          </Link>
        </div>
      </div>
      <DivisionPage division={division} />
    </>
  );
}
