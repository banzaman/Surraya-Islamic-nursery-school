"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open,     setOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Track scroll for shadow depth
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      {/* ── Skip link ─────────────────────────────────── */}
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      {/* ── Navbar shell ──────────────────────────────── */}
      <header
        className={cn(
          "glass fixed inset-x-0 top-0 z-50 transition-shadow duration-300",
          scrolled && "shadow-md",
        )}
        style={{ height: "68px" }}
      >
        <nav
          className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
          aria-label="Main navigation"
        >
          {/* ── Logo ──────────────────────────────────── */}
          <Link
            href="/"
            className="flex items-center gap-3 no-underline"
            aria-label={`${SITE.name} — Home`}
          >
            {/* Star-and-crescent emblem */}
            <span
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white text-lg font-bold shadow"
              style={{ background: "var(--color-forest)" }}
              aria-hidden="true"
            >
              ☽
            </span>
            <span
              className="hidden sm:block font-serif text-xl leading-tight"
              style={{ color: "var(--color-forest-deep)" }}
            >
              Surraya
              <span
                className="block text-xs font-sans font-medium tracking-widest uppercase opacity-70"
                style={{ color: "var(--color-slate)" }}
              >
                Islamic Nursery
              </span>
            </span>
          </Link>

          {/* ── Desktop links ─────────────────────────── */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "relative px-4 py-2 rounded-lg text-sm font-semibold transition-colors",
                      active
                        ? "text-[var(--color-forest)]"
                        : "text-[var(--color-slate)] hover:text-[var(--color-forest)] hover:bg-[var(--color-forest-light)]",
                    )}
                    aria-current={active ? "page" : undefined}
                  >
                    {link.label}
                    {active && (
                      <span
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-4 rounded-full"
                        style={{ background: "var(--color-gold)" }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* ── Desktop CTA ───────────────────────────── */}
          <div className="hidden md:block">
            <Button href="/admissions" variant="primary" size="sm">
              Apply Now
            </Button>
          </div>

          {/* ── Mobile hamburger ──────────────────────── */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg"
            style={{ color: "var(--color-forest)" }}
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {/* ── Mobile slide-down menu ────────────────────── */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-x-0 top-[68px] z-40 md:hidden",
          "border-b border-[var(--color-border)]",
          "transition-all duration-300 ease-in-out overflow-hidden",
          open ? "max-h-screen opacity-100" : "max-h-0 opacity-0 pointer-events-none",
        )}
        style={{ background: "rgba(255,255,255,0.97)", backdropFilter: "blur(12px)" }}
        aria-hidden={!open}
      >
        <ul className="flex flex-col px-4 py-4 gap-1" role="list">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center px-4 py-3 rounded-xl text-base font-semibold transition-colors",
                    active
                      ? "bg-[var(--color-forest-light)] text-[var(--color-forest)]"
                      : "text-[var(--color-slate)] hover:bg-[var(--color-forest-light)] hover:text-[var(--color-forest)]",
                  )}
                  aria-current={active ? "page" : undefined}
                  tabIndex={open ? 0 : -1}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          <li className="pt-2 border-t border-[var(--color-border)]">
            <Button href="/admissions" variant="primary" size="md" fullWidth>
              Apply Now
            </Button>
          </li>
        </ul>
      </div>
    </>
  );
}
