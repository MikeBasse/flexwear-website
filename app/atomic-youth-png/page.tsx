import { getDivision } from "@/data/divisions";
import DivisionPage from "@/components/DivisionPage";
import { buildMetadata } from "@/lib/seo";

const division = getDivision("atomic-youth-png")!;

export const metadata = buildMetadata({
  title: division.name,
  description: division.summary,
  path: "/atomic-youth-png",
  keywords: division.offerings,
});

export default function Page() {
  return <DivisionPage division={division} />;
}
