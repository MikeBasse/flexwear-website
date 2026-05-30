"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { mainNav, divisionsNav } from "@/data/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [divisionsOpen, setDivisionsOpen] = useState(false);
  const [mobileDivisionsOpen, setMobileDivisionsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileOpen(false);
    setDivisionsOpen(false);
    setMobileDivisionsOpen(false);
  }, [pathname]);

  // Lock scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href !== "#" && (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-ink/10 bg-bone/90 backdrop-blur-md"
          : "border-b border-transparent bg-bone/0"
      }`}
    >
      <nav className="shell flex h-[72px] items-center justify-between">
        <Logo />

        {/* Desktop nav */}
        <ul className="hidden items-center gap-7 lg:flex">
          {mainNav.map((item) =>
            item.children ? (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => setDivisionsOpen(true)}
                onMouseLeave={() => setDivisionsOpen(false)}
              >
                <button
                  className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                    divisionsOpen ? "text-ink" : "text-ink/70 hover:text-ink"
                  }`}
                  aria-expanded={divisionsOpen}
                  aria-haspopup="true"
                >
                  {item.label}
                  <svg
                    className={`h-3.5 w-3.5 transition-transform ${
                      divisionsOpen ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {/* Dropdown */}
                <div
                  className={`absolute left-1/2 top-full -translate-x-1/2 pt-3 transition-all duration-200 ${
                    divisionsOpen
                      ? "pointer-events-auto translate-y-0 opacity-100"
                      : "pointer-events-none translate-y-1 opacity-0"
                  }`}
                >
                  <div className="w-64 overflow-hidden rounded-2xl border border-ink/10 bg-white p-2 shadow-lift">
                    {divisionsNav.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-xl px-4 py-2.5 text-sm text-ink/75 transition-colors hover:bg-bone hover:text-ink"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </li>
            ) : (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-ink"
                      : "text-ink/70 hover:text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            )
          )}
          <li>
            <Link href="/partnerships" className="btn-gold !px-5 !py-2.5">
              Partner With Us
            </Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-ink transition-all ${
                mobileOpen ? "top-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 h-0.5 w-5 bg-ink transition-all ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-3 h-0.5 w-5 bg-ink transition-all ${
                mobileOpen ? "top-1.5 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden ${
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`fixed inset-0 top-[72px] z-40 bg-bone transition-opacity duration-300 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="shell flex h-full flex-col overflow-y-auto py-6">
            <ul className="flex flex-col gap-1">
              {mainNav.map((item) =>
                item.children ? (
                  <li key={item.label}>
                    <button
                      className="flex w-full items-center justify-between py-3 text-left font-display text-2xl font-bold text-ink"
                      onClick={() => setMobileDivisionsOpen((v) => !v)}
                      aria-expanded={mobileDivisionsOpen}
                    >
                      {item.label}
                      <svg
                        className={`h-5 w-5 transition-transform ${
                          mobileDivisionsOpen ? "rotate-180" : ""
                        }`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        mobileDivisionsOpen ? "max-h-96" : "max-h-0"
                      }`}
                    >
                      <div className="flex flex-col gap-1 border-l border-ink/10 pl-4">
                        {divisionsNav.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="py-2 text-base text-ink/70"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </li>
                ) : (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block py-3 font-display text-2xl font-bold text-ink"
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
            <Link href="/partnerships" className="btn-gold mt-6 w-full">
              Partner With Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
