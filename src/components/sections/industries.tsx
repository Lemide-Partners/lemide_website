"use client";

import Image from "next/image";
import { Reveal } from "./reveal";

interface Industry {
  name: string;
  href?: string;
  icon?: string;
}

const industryIcons: Record<string, React.ReactNode> = {
  fintech: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M2 10h20" />
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M6 15h2" />
      <path d="M12 15h6" />
    </svg>
  ),
  education: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5" />
    </svg>
  ),
  energy: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  ),
  healthcare: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M11 2a2 2 0 0 1 2 0l1.5.87a2 2 0 0 0 1 .26H17a2 2 0 0 1 1.73 1l.87 1.5a2 2 0 0 0 .5.87l.87.87a2 2 0 0 1 0 2.83l-.87.87a2 2 0 0 0-.5.87l-.87 1.5A2 2 0 0 1 17 14.37h-1.5a2 2 0 0 0-1 .26L13 15.5a2 2 0 0 1-2 0l-1.5-.87a2 2 0 0 0-1-.26H7a2 2 0 0 1-1.73-1l-.87-1.5a2 2 0 0 0-.5-.87l-.87-.87a2 2 0 0 1 0-2.83l.87-.87a2 2 0 0 0 .5-.87l.87-1.5A2 2 0 0 1 7 2.63h1.5a2 2 0 0 0 1-.26z" />
      <path d="M12 8v4" />
      <path d="M10 10h4" />
    </svg>
  ),
  agriculture: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 17 3.5s1 2.5-1 6.5c2.5-.5 4-1.5 4-1.5s0 3.5-4 6.5c-2 1.5-3.5 2.5-5 5z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  ),
  logistics: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.63l-2.78-3.47A1 1 0 0 0 14.22 10H14v8z" />
      <circle cx="7" cy="18" r="2" />
      <path d="M15 18h-4" />
      <circle cx="19" cy="18" r="2" />
    </svg>
  ),
};

interface IndustriesProps {
  label?: string;
  heading: string;
  headingAccent?: string;
  description: string;
  industries: Industry[];
  imageSrc?: string;
  imageAlt?: string;
}

function DashboardCard() {
  return (
    <div className="absolute bottom-4 right-4 left-4 sm:left-auto sm:w-72 bg-white/95 backdrop-blur-md rounded-xl shadow-lg border border-border/60 p-4 z-10">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[11px] font-medium tracking-wide uppercase text-muted-foreground">
          Operations Dashboard
        </span>
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
      </div>

      <div className="grid grid-cols-3 gap-3 mb-3">
        <div>
          <p className="text-lg font-semibold text-foreground leading-none">98%</p>
          <p className="text-[10px] text-muted-foreground mt-0.5">Compliance</p>
        </div>
        <div>
          <p className="text-lg font-semibold text-foreground leading-none">12</p>
          <p className="text-[10px] text-muted-foreground mt-0.5">Active Filings</p>
        </div>
        <div>
          <p className="text-lg font-semibold text-foreground leading-none">5d</p>
          <p className="text-[10px] text-muted-foreground mt-0.5">Avg. Resolve</p>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
          <span className="text-[11px] text-foreground flex-1">DE Annual Report</span>
          <span className="text-[10px] text-emerald-600 font-medium">Filed</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
          <span className="text-[11px] text-foreground flex-1">KYC Refresh — Q3</span>
          <span className="text-[10px] text-amber-600 font-medium">In Progress</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
          <span className="text-[11px] text-foreground flex-1">Bank Access Provisioned</span>
          <span className="text-[10px] text-emerald-600 font-medium">Done</span>
        </div>
      </div>

      <div className="mt-3 pt-3 border-t border-border/60">
        <div className="flex items-center justify-between">
          <span className="text-[10px] text-muted-foreground">Task Completion</span>
          <span className="text-[10px] font-medium text-foreground">86%</span>
        </div>
        <div className="mt-1.5 h-1.5 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full rounded-full"
            style={{
              width: "86%",
              background: "linear-gradient(90deg, var(--golden-bronze), #d4a94e)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export function Industries({
  label = "Industries",
  heading,
  headingAccent,
  description,
  industries,
  imageSrc,
  imageAlt = "Industries we serve",
}: IndustriesProps) {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <Reveal animation="fade-up">
              <span className="type-caption text-accent">{label}</span>
            </Reveal>
            <Reveal delay={0.1} animation="fade-up">
              <h2 className="type-h2 text-foreground mt-4">
                <span className="block">{heading}</span>
                {headingAccent && (
                  <span className="block text-muted-foreground">{headingAccent}</span>
                )}
              </h2>
            </Reveal>
            <Reveal delay={0.15} animation="fade-right">
              <p className="type-body-lg text-muted-foreground mt-5">{description}</p>
            </Reveal>
            <Reveal delay={0.2} animation="fade-up">
              <div className="mt-10 grid grid-cols-2 gap-x-1">
                {industries.map((industry) => (
                  <div key={industry.name} className="industry-item py-4 border-b border-border flex items-center gap-3 cursor-pointer group">
                    <span className="shrink-0 text-muted-foreground group-hover:text-accent transition-colors duration-300">
                      {industry.icon && industryIcons[industry.icon]
                        ? industryIcons[industry.icon]
                        : industryIcons.fintech}
                    </span>
                    <span className="type-h5 text-foreground group-hover:text-accent transition-colors duration-300">
                      {industry.name}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.25} animation="fade-left">
            <div className="relative rounded-xl overflow-hidden bg-muted aspect-[4/3] group">
              {imageSrc ? (
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover img-zoom"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              ) : (
                <div className="w-full h-full bg-muted flex items-center justify-center">
                  <span className="type-caption text-muted-foreground">
                    Image Placeholder
                  </span>
                </div>
              )}
              <DashboardCard />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
