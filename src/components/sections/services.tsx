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
  const iconMap: Record<string, React.ReactNode> = {
    compliance_filings: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="service-icon-svg w-7 h-7">
        <path className="service-icon-base" d="M9 2h6l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
        <path className="service-icon-base" d="M14 2v6h6" />
        <path className="service-icon-checkmark" d="M9 13l2 2 4-4" />
      </svg>
    ),
    financial_ops: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="service-icon-svg w-7 h-7">
        <path className="service-icon-base" d="M12 1v22" />
        <path className="service-icon-dollar-curve" d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    access_governance: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="service-icon-svg w-7 h-7">
        <path className="service-icon-shield" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path className="service-icon-lock-shackle" d="M9 11V9a3 3 0 0 1 6 0v2" />
        <rect className="service-icon-base" x="8" y="11" width="8" height="6" rx="1" />
      </svg>
    ),
    workflow_automation: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="service-icon-svg w-7 h-7">
        <circle className="service-icon-gear-main" cx="12" cy="12" r="3" />
        <path className="service-icon-gear-main" d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
    ops_visibility: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="service-icon-svg w-7 h-7">
        <path className="service-icon-eye-outline" d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle className="service-icon-eye-pupil" cx="12" cy="12" r="3" />
      </svg>
    ),
  };

  const entry = iconMap[icon] || iconMap.compliance_filings;

  return (
    <div className="service-icon-wrapper shrink-0 w-12 h-12 lg:w-14 lg:h-14 rounded-xl border border-white/10 flex items-center justify-center text-accent">
      {entry}
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
  ctaHref = "https://calendly.com/lemide/30min?month=2026-09",
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
            <a href={ctaHref} target="_blank" rel="noopener noreferrer">
              <Button variant="accent" size="lg">
                {ctaLabel}
              </Button>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
