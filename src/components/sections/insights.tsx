"use client";

import Link from "next/link";
import Image from "next/image";
import { Reveal } from "./reveal";

interface Insight {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime?: string;
  href: string;
  imageSrc?: string;
  imageAlt?: string;
}

interface InsightsProps {
  label?: string;
  heading: string;
  headingAccent?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  insights: Insight[];
}

export function Insights({
  label = "Insights",
  heading,
  headingAccent,
  description,
  ctaLabel = "View all insights",
  ctaHref = "/insights",
  insights,
}: InsightsProps) {
  const [featured, ...rest] = insights;

  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <Reveal animation="fade-up">
              <span className="type-caption text-accent">{label}</span>
            </Reveal>
            <Reveal delay={0.1} animation="fade-up">
              <h2 className="type-h2 text-foreground mt-4 max-w-2xl">
                {heading}{" "}
                {headingAccent && (
                  <span className="text-muted-foreground">{headingAccent}</span>
                )}
              </h2>
            </Reveal>
            {description && (
              <Reveal delay={0.15} animation="fade-up">
                <p className="type-body-lg text-muted-foreground mt-4 max-w-xl">
                  {description}
                </p>
              </Reveal>
            )}
          </div>
          <Reveal delay={0.2} animation="fade-up">
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-2 type-body-sm font-display font-medium text-foreground hover:text-accent transition-colors duration-200 group whitespace-nowrap"
            >
              {ctaLabel}
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Featured article */}
          {featured && (
            <Reveal delay={0} animation="fade-up">
              <Link href={featured.href} className="group block h-full">
                <article className="h-full rounded-2xl overflow-hidden border border-border/40 bg-white">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    {featured.imageSrc ? (
                      <Image
                        src={featured.imageSrc}
                        alt={featured.imageAlt ?? featured.title}
                        fill
                        unoptimized
                        className="object-cover img-zoom"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    ) : (
                      <div className="w-full h-full bg-navy-50 flex items-center justify-center">
                        <svg viewBox="0 0 120 80" fill="none" className="w-24 h-16 text-navy-200">
                          <rect x="10" y="10" width="100" height="60" rx="4" stroke="currentColor" strokeWidth="1.5" />
                          <circle cx="40" cy="35" r="10" stroke="currentColor" strokeWidth="1.5" />
                          <path d="M10 55l25-15 20 10 25-20 30 25" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="p-6 lg:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="type-caption text-accent font-medium">{featured.category}</span>
                      <span className="w-1 h-1 rounded-full bg-border" />
                      <span className="type-caption text-muted-foreground">{featured.date}</span>
                      {featured.readTime && (
                        <>
                          <span className="w-1 h-1 rounded-full bg-border" />
                          <span className="type-caption text-muted-foreground">{featured.readTime}</span>
                        </>
                      )}
                    </div>
                    <h3 className="type-h4 text-foreground group-hover:text-accent transition-colors duration-300">
                      {featured.title}
                    </h3>
                    <p className="type-body text-muted-foreground mt-3 line-clamp-3">
                      {featured.excerpt}
                    </p>
                  </div>
                </article>
              </Link>
            </Reveal>
          )}

          {/* Stacked articles */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {rest.map((insight, i) => (
              <Reveal key={insight.href} delay={0.1 + i * 0.08} animation="fade-up">
                <Link href={insight.href} className="group block">
                  <article className="grid grid-cols-[120px_1fr] sm:grid-cols-[160px_1fr] gap-4 sm:gap-6 rounded-2xl overflow-hidden border border-border/40 bg-white p-4 sm:p-5">
                    <div className="relative aspect-square rounded-xl overflow-hidden shrink-0">
                      {insight.imageSrc ? (
                        <Image
                          src={insight.imageSrc}
                          alt={insight.imageAlt ?? insight.title}
                          fill
                          unoptimized
                          className="object-cover img-zoom"
                          sizes="160px"
                        />
                      ) : (
                        <div className="w-full h-full bg-navy-50 flex items-center justify-center">
                          <svg viewBox="0 0 120 80" fill="none" className="w-10 h-7 text-navy-200">
                            <rect x="10" y="10" width="100" height="60" rx="4" stroke="currentColor" strokeWidth="1.5" />
                            <circle cx="40" cy="35" r="10" stroke="currentColor" strokeWidth="1.5" />
                            <path d="M10 55l25-15 20 10 25-20 30 25" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                          </svg>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col justify-center min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="type-caption text-accent font-medium">{insight.category}</span>
                        <span className="w-1 h-1 rounded-full bg-border" />
                        <span className="type-caption text-muted-foreground">{insight.date}</span>
                      </div>
                      <h3 className="type-h6 text-foreground group-hover:text-accent transition-colors duration-300 line-clamp-2">
                        {insight.title}
                      </h3>
                      <p className="type-body-sm text-muted-foreground mt-1.5 line-clamp-2 hidden sm:block">
                        {insight.excerpt}
                      </p>
                    </div>
                  </article>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
