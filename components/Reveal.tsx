"use client";

import { useEffect, useRef, useState, ReactNode, ElementType } from "react";

type RevealProps = {
  children: ReactNode;
  variant?: "up" | "fade" | "left" | "right" | "scale";
  index?: number;
  as?: ElementType;
  className?: string;
  repeat?: boolean;
};

/**
 * Fail-safe scroll-reveal wrapper.
 *
 * IMPORTANT: content is VISIBLE by default. The hide-then-reveal animation is
 * only ever applied after JS has confirmed IntersectionObserver works and has
 * "armed" the element. If JS doesn't run or the observer never fires, content
 * is never left invisible.
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
  const [armed, setArmed] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const rect = el.getBoundingClientRect();
    const inViewOnMount =
      rect.top < (window.innerHeight || document.documentElement.clientHeight);

    if (inViewOnMount) {
      setArmed(true);
      setVisible(true);
      return;
    }

    setArmed(true);

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

    const failSafe = window.setTimeout(() => setVisible(true), 1200);

    return () => {
      observer.disconnect();
      window.clearTimeout(failSafe);
    };
  }, [repeat]);

  const dataVal = variant === "up" ? "" : variant;

  return (
    <Tag
      ref={ref as never}
      data-reveal={armed ? dataVal || "up" : undefined}
      className={`${armed && visible ? "is-visible" : ""} ${className}`}
      style={armed ? ({ ["--reveal-index" as string]: index } as object) : undefined}
    >
      {children}
    </Tag>
  );
}
