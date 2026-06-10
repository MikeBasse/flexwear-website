import { redirect } from "next/navigation";

// The Atomic Digital Systems page lives at /atomic-digital-png (canonical route,
// already in the navbar and indexed). This alias keeps the more descriptive URL
// working and points it to the canonical page.
export default function AtomicDigitalSystemsAlias() {
  redirect("/atomic-digital-png");
}
