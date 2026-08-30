"use client";

import Link from "next/link";
import { Reveal } from "./reveal";
import { Button } from "@/components/ui";

interface Service {
  title: string;
  description: string;
  href?: string;
  icon?: string;
}

interface ServicesProps {
  label?: string;
  heading: string;
  headingAccent?: string;
  services: Service[];
  dark?: boolean;
  ctaLabel?: string;
  ctaHref?: string;
}

function ServiceIcon({ icon }: { icon: string }) {
  const iconMap: Record<string, { default: React.ReactNode; hover: React.ReactNode }> = {
    legal: {
      default: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="service-icon-svg w-7 h-7">
          <path className="service-icon-base" d="M12 3v18" />
          <path className="service-icon-base" d="M5 6l7-3 7 3" />
          <path className="service-icon-animate" d="M5 6v0" style={{ transitionDelay: "0s" }} />
          <path className="service-icon-animate" d="M19 6v0" style={{ transitionDelay: "0.05s" }} />
          <path className="service-icon-base" d="M5 21h14" />
          <circle className="service-icon-animate" cx="5" cy="6" r="0" style={{ transitionDelay: "0.1s" }} />
          <circle className="service-icon-animate" cx="19" cy="6" r="0" style={{ transitionDelay: "0.1s" }} />
        </svg>
      ),
      hover: null,
    },
    compliance: {
      default: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="service-icon-svg w-7 h-7">
          <rect className="service-icon-base" x="3" y="11" width="18" height="11" rx="2" />
          <path className="service-icon-lock-shackle" d="M7 11V7a5 5 0 0 1 10 0v4" />
          <circle className="service-icon-base" cx="12" cy="16" r="1" />
        </svg>
      ),
      hover: null,
    },
    banking: {
      default: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="service-icon-svg w-7 h-7">
          <path className="service-icon-base" d="M2 17h20" />
          <path className="service-icon-base" d="M4 21h16" />
          <path className="service-icon-base" d="M12 2l10 6H2l10-6z" />
          <path className="service-icon-pillar" d="M6 8v9" style={{ transitionDelay: "0s" }} />
          <path className="service-icon-pillar" d="M10 8v9" style={{ transitionDelay: "0.06s" }} />
          <path className="service-icon-pillar" d="M14 8v9" style={{ transitionDelay: "0.12s" }} />
          <path className="service-icon-pillar" d="M18 8v9" style={{ transitionDelay: "0.18s" }} />
        </svg>
      ),
      hover: null,
    },
    entity: {
      default: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="service-icon-svg w-7 h-7">
          <rect className="service-icon-base" x="3" y="3" width="7" height="7" rx="1" />
          <rect className="service-icon-grid-item" x="14" y="3" width="7" height="7" rx="1" style={{ transitionDelay: "0.05s" }} />
          <rect className="service-icon-grid-item" x="3" y="14" width="7" height="7" rx="1" style={{ transitionDelay: "0.1s" }} />
          <rect className="service-icon-grid-item" x="14" y="14" width="7" height="7" rx="1" style={{ transitionDelay: "0.15s" }} />
        </svg>
      ),
      hover: null,
    },
    advisory: {
      default: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="service-icon-svg w-7 h-7">
          <circle className="service-icon-base" cx="12" cy="12" r="10" />
          <path className="service-icon-compass-needle" d="M16.24 7.76l-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z" />
        </svg>
      ),
      hover: null,
    },
  };

  const entry = iconMap[icon] || iconMap.legal;

  return (
    <div className="service-icon-wrapper shrink-0 w-12 h-12 lg:w-14 lg:h-14 rounded-xl border border-white/10 flex items-center justify-center text-accent">
      {entry.default}
    </div>
  );
}

export function Services({
  label = "Services",
  heading,
  headingAccent,
  services,
  dark = true,
  ctaLabel = "Book a Call",
  ctaHref = "/contact",
}: ServicesProps) {
  const bg = dark ? "bg-inverse-bg" : "bg-background";
  const fg = dark ? "text-inverse-fg" : "text-foreground";
  const muted = dark ? "text-inverse-muted" : "text-muted-foreground";
  const divider = dark ? "border-white/10" : "border-border";

  return (
    <section className={`${bg} py-20 lg:py-28`}>
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <Reveal animation="fade-up">
          <div className="text-center mb-16">
            <span className="type-caption text-accent">{label}</span>
            <h2 className={`type-h2 ${fg} mt-4`}>
              {heading}{" "}
              {headingAccent && (
                <span className={muted}>{headingAccent}</span>
              )}
            </h2>
          </div>
        </Reveal>

        <div>
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.1} animation="fade-up">
              <div className={`service-item py-8 lg:py-10 border-b ${divider}`}>
                <div className="flex items-start gap-5 lg:gap-8">
                  <ServiceIcon icon={service.icon || "legal"} />
                  <div className="flex-1">
                    <h3 className={`service-title type-h4 ${fg}`}>
                      {service.title}
                    </h3>
                    <p className={`service-desc type-body ${muted} mt-3`}>
                      {service.description}
                    </p>
                    {service.href && (
                      <Link
                        href={service.href}
                        className="service-link inline-flex items-center gap-2 mt-5 type-body-sm text-accent font-display font-medium group/link"
                      >
                        Learn more
                        <svg
                          className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </Link>
                    )}
                  </div>
                </div>
                <div className="service-progress" />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal animation="fade-up" delay={services.length * 0.1 + 0.1}>
          <div className="mt-12 text-center">
            <Link href={ctaHref}>
              <Button variant="accent" size="lg">
                {ctaLabel}
              </Button>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
