"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Logo } from "@/components/ui";

interface NavLink {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

interface NavbarProps {
  links?: NavLink[];
  ctaLabel?: string;
  ctaHref?: string;
}

const defaultLinks: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export function Navbar({
  links = defaultLinks,
  ctaLabel = "Book a Call",
  ctaHref = "/contact",
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 transition-all duration-500" style={{ padding: scrolled ? "10px 16px 0" : "0" }}>
      <nav
        className="transition-all duration-500"
        style={{
          background: scrolled ? "rgba(11, 29, 75, 0.88)" : "transparent",
          boxShadow: scrolled ? "0 4px 30px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.08)" : "none",
          backdropFilter: scrolled ? "blur(20px) saturate(1.4)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px) saturate(1.4)" : "none",
          borderRadius: scrolled ? "9999px" : "0",
          border: scrolled ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid transparent",
          maxWidth: scrolled ? "1100px" : "100%",
          margin: "0 auto",
        }}
      >
        <div className="mx-auto px-6 lg:px-8 flex items-center justify-between h-14 lg:h-16">
          <Link href="/" className="shrink-0">
            <Logo inverse />
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 type-body-sm font-display font-medium text-white/90 hover:text-accent transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={ctaHref}
              className="ml-3 inline-flex items-center h-9 px-5 rounded-full text-white type-body-sm font-display font-medium transition-colors duration-200"
              style={{
                background: scrolled ? "var(--accent)" : "var(--primary)",
              }}
            >
              {ctaLabel}
            </Link>
          </div>

          <button
            className="lg:hidden relative w-8 h-8 flex items-center justify-center focus-ring rounded"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className="absolute w-5 h-0.5 bg-white transition-all duration-300"
              style={{ transform: mobileOpen ? "rotate(45deg)" : "translateY(-4px)" }}
            />
            <span
              className="absolute w-5 h-0.5 bg-white transition-all duration-300"
              style={{ opacity: mobileOpen ? 0 : 1 }}
            />
            <span
              className="absolute w-5 h-0.5 bg-white transition-all duration-300"
              style={{ transform: mobileOpen ? "rotate(-45deg)" : "translateY(4px)" }}
            />
          </button>
        </div>

        <div
          className="lg:hidden overflow-hidden transition-all duration-400"
          style={{
            maxHeight: mobileOpen ? "500px" : "0",
            opacity: mobileOpen ? 1 : 0,
            borderTop: mobileOpen ? "1px solid rgba(255,255,255,0.1)" : "none",
          }}
        >
          <div className="px-6 py-4 space-y-1">
            {links.map((link, i) => (
              <div
                key={link.label}
                style={{
                  opacity: mobileOpen ? 1 : 0,
                  transform: mobileOpen ? "translateY(0)" : "translateY(8px)",
                  transition: `opacity 0.3s ease ${i * 0.05}s, transform 0.3s ease ${i * 0.05}s`,
                }}
              >
                <Link
                  href={link.href}
                  className="block py-3 type-body-sm font-display font-medium text-white/90 hover:text-accent transition-colors duration-150"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </div>
            ))}
            <div className="pt-3">
              <Link
                href={ctaHref}
                className="block text-center py-3 rounded-full text-white type-body-sm font-display font-medium"
                style={{
                  background: scrolled ? "var(--accent)" : "var(--primary)",
                }}
                onClick={() => setMobileOpen(false)}
              >
                {ctaLabel}
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
