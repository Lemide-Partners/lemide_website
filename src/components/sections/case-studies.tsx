"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui";
import { Reveal } from "./reveal";

interface CaseStudy {
  title: string;
  excerpt: string;
  tags: string[];
  imageSrc?: string;
  imageAlt?: string;
  href: string;
}

interface CaseStudiesProps {
  label?: string;
  heading: string;
  headingAccent?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  studies: CaseStudy[];
}

export function CaseStudies({
  label = "Case Studies",
  heading,
  headingAccent,
  description,
  ctaLabel = "Read all cases",
  ctaHref = "/case-studies",
  studies,
}: CaseStudiesProps) {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-16">
          <div>
            <Reveal animation="fade-up">
              <span className="inline-block px-4 py-1.5 rounded-full border border-border type-caption text-foreground">
                {label}
              </span>
            </Reveal>
            <Reveal delay={0.1} animation="fade-up">
              <h2 className="type-h2 text-foreground mt-6">
                {heading}{" "}
                {headingAccent && (
                  <span className="text-muted-foreground">{headingAccent}</span>
                )}
              </h2>
            </Reveal>
          </div>
          {description && (
            <Reveal delay={0.2} animation="fade-up">
              <div className="lg:pt-12">
                <p className="type-body-lg text-muted-foreground">{description}</p>
                <div className="mt-6">
                  <Link href={ctaHref}>
                    <Button variant="primary" size="lg">
                      {ctaLabel}
                    </Button>
                  </Link>
                </div>
              </div>
            </Reveal>
          )}
        </div>

        <div className="case-studies-stack space-y-6">
          {studies.map((study, i) => (
            <div
              key={study.href}
              className="case-study-card sticky"
              style={{ top: `${80 + i * 30}px`, zIndex: i + 1 }}
            >
              <Reveal delay={i * 0.15} animation="fade-up">
                <Link href={study.href} className="group block">
                  <article className="grid grid-cols-1 lg:grid-cols-2 bg-linen rounded-2xl overflow-hidden shadow-sm border border-border/40">
                    <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[440px] overflow-hidden">
                      {study.imageSrc ? (
                        <Image
                          src={study.imageSrc}
                          alt={study.imageAlt ?? study.title}
                          fill
                          className="object-cover img-zoom"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      ) : (
                        <div className="w-full h-full bg-navy-100 flex items-center justify-center">
                          <svg viewBox="0 0 120 80" fill="none" className="w-24 h-16 text-navy-200">
                            <rect x="10" y="10" width="100" height="60" rx="4" stroke="currentColor" strokeWidth="1.5" />
                            <circle cx="40" cy="35" r="10" stroke="currentColor" strokeWidth="1.5" />
                            <path d="M10 55l25-15 20 10 25-20 30 25" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                          </svg>
                        </div>
                      )}
                    </div>
                    <div className="p-8 lg:p-12 flex flex-col justify-between">
                      <h3 className="type-h3 text-foreground">
                        {study.title}
                      </h3>
                      <div>
                        <p className="type-body text-muted-foreground line-clamp-4">
                          {study.excerpt}
                        </p>
                        <span className="inline-flex items-center gap-2 mt-6 type-body-sm text-foreground font-display font-medium group-hover:text-accent transition-colors duration-300">
                          Learn more
                          <svg
                            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5"
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
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
