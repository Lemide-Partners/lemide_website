"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/ui";

interface NavLink {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

interface NavbarProps {
  links?: NavLink[];
}

const defaultLinks: NavLink[] = [
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Legal Operations", href: "/services/legal" },
      { label: "Compliance & Regulatory", href: "/services/compliance" },
      { label: "Banking & Treasury", href: "/services/banking" },
      { label: "Entity Management", href: "/services/entity" },
      { label: "Strategic Advisory", href: "/services/advisory" },
    ],
  },
  { label: "Industries", href: "/industries" },
  { label: "Team", href: "/team" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact", href: "/contact" },
];

export function Navbar({ links = defaultLinks }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="focus-ring rounded-md">
            <Logo width={120} />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() =>
                  link.children && setDropdownOpen(link.label)
                }
                onMouseLeave={() => setDropdownOpen(null)}
              >
                <Link
                  href={link.href}
                  className="font-display font-medium type-body-sm text-foreground px-4 py-2 rounded-md hover:bg-muted transition-colors duration-150 focus-ring inline-flex items-center gap-1"
                >
                  {link.label}
                  {link.children && (
                    <svg
                      className="w-3.5 h-3.5 text-muted-foreground"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </Link>

                {link.children && dropdownOpen === link.label && (
                  <div className="absolute top-full left-0 pt-1">
                    <div className="bg-card border border-border rounded-lg shadow-lg py-2 min-w-[220px]">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 type-body-sm text-foreground hover:bg-muted transition-colors duration-150"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-md focus-ring text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-card px-6 py-4">
          {links.map((link) => (
            <div key={link.label}>
              <Link
                href={link.href}
                className="block py-3 font-display font-medium type-body text-foreground border-b border-border"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
              {link.children?.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="block py-2.5 pl-4 type-body-sm text-muted-foreground border-b border-border"
                  onClick={() => setMobileOpen(false)}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
