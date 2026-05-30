import Image from "next/image";
import Link from "next/link";

/**
 * Brand logo. The official logo lives at /public/logo.png.
 * To replace, drop the new artwork at public/logo.png (and public/logo-badge.png
 * for the compact emblem) — no code changes required.
 */
export default function Logo({
  variant = "full",
  className = "",
  invert = false,
}: {
  variant?: "full" | "badge";
  className?: string;
  invert?: boolean;
}) {
  const src = variant === "badge" ? "/logo-badge.png" : "/logo.png";
  const isBadge = variant === "badge";

  return (
    <Link
      href="/"
      aria-label="FLEXWEAR TM LIMITED — Home"
      className={`group inline-flex items-center gap-3 ${className}`}
    >
      <span
        className={`relative inline-block shrink-0 overflow-hidden ${
          isBadge ? "h-10 w-10 rounded-full" : "h-11 w-11 rounded-full"
        } ring-1 ${invert ? "ring-bone/25" : "ring-ink/10"}`}
      >
        <Image
          src="/logo-badge.png"
          alt="FLEXWEAR TM LIMITED emblem"
          fill
          sizes="44px"
          className="object-cover"
          priority
        />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[1.05rem] font-extrabold tracking-tight ${
            invert ? "text-bone" : "text-ink"
          }`}
        >
          FLEX<span className="text-blood">WEAR</span>
        </span>
        <span
          className={`mt-0.5 text-[0.58rem] font-semibold uppercase tracking-brand ${
            invert ? "text-bone/60" : "text-ink/50"
          }`}
        >
          TM Limited
        </span>
      </span>
    </Link>
  );
}
