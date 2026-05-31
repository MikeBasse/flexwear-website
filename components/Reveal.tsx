"use client";

import { useEffect, useRef, useState, ReactNode, ElementType } from "react";

type RevealProps = {
  children: ReactNode;
  /** Animation style. Default rises up; others slide or scale in. */
  variant?: "up" | "fade" | "left" | "right" | "scale";
  /** Stagger index — multiplies an 80ms delay so grids cascade. */
  index?: number;
  /** Render as a different element (e.g. "li", "section"). Default "div". */
  as?: ElementType;
  className?: string;
  /** Re-animate every time it enters the viewport (default: once). */
  repeat?: boolean;
};

/**
 * Lightweight scroll-reveal wrapper. Adds `.is-visible` when the element
 * scrolls into view; the actual motion is defined in globals.css and is
 * automatically disabled for users who prefer reduced motion.
 */
export default function Reveal({
  children,
  variant = "up",
  index = 0,
  as: Tag = "div",
  className = "",
  repeat = false,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If IntersectionObserver is unavailable, just show the content.
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (!repeat) observer.unobserve(entry.target);
          } else if (repeat) {
            setVisible(false);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [repeat]);

  const dataVal = variant === "up" ? "" : variant;

  return (
    <Tag
      ref={ref as never}
      data-reveal={dataVal}
      className={`${visible ? "is-visible" : ""} ${className}`}
      style={{ ["--reveal-index" as string]: index }}
    >
      {children}
    </Tag>
  );
}
