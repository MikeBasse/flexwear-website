import Link from "next/link";
import { getDivision } from "@/data/divisions";
import DivisionPage from "@/components/DivisionPage";
import { buildMetadata } from "@/lib/seo";

const division = getDivision("atomic-teacher-png")!;

export const metadata = buildMetadata({
  title: division.name,
  description: division.summary,
  path: "/atomic-teacher-png",
  keywords: division.offerings,
});

export default function Page() {
  return (
    <>
      <div className="bg-gold">
        <div className="shell flex flex-col items-center justify-between gap-3 py-3 text-center sm:flex-row sm:text-left">
          <p className="text-sm font-semibold text-ink">
            📗 The Atomic Teacher PNG book is available now — read a free preview, full book K49.
          </p>
          <Link
            href="/atomic-teacher-png-book"
            className="shrink-0 rounded-full bg-ink px-5 py-2 text-xs font-semibold text-gold transition-colors hover:bg-ink-soft"
          >
            View the Book
          </Link>
        </div>
      </div>
      <DivisionPage division={division} />
    </>
  );
}
