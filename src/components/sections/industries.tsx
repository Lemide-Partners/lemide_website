"use client";

import Image from "next/image";
import { Reveal } from "./reveal";

interface Industry {
  name: string;
  href?: string;
}

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
            <div className="mt-10">
              {industries.map((industry, i) => (
                <Reveal key={industry.name} delay={0.2 + i * 0.06} animation="fade-up">
                  <div className="industry-item py-4 border-b border-border flex items-center justify-between cursor-pointer group">
                    <span className="type-h5 text-foreground group-hover:text-accent transition-colors duration-300">
                      {industry.name}
                    </span>
                    <svg
                      className="w-5 h-5 text-muted-foreground opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
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
                  </div>
                </Reveal>
              ))}
            </div>
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
