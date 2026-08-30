import Link from "next/link";
import Image from "next/image";
import { Button, Badge } from "@/components/ui";
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
  ctaLabel = "View All",
  ctaHref = "/case-studies",
  studies,
}: CaseStudiesProps) {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <Reveal animation="fade-up">
              <span className="type-caption text-accent">{label}</span>
            </Reveal>
            <Reveal delay={0.1} animation="fade-up">
              <h2 className="type-h2 text-foreground mt-4">
                {heading}{" "}
                {headingAccent && (
                  <span className="text-muted-foreground">{headingAccent}</span>
                )}
              </h2>
            </Reveal>
          </div>
          {description && (
            <Reveal delay={0.2} animation="fade-left">
              <div className="lg:max-w-sm">
                <p className="type-body text-muted-foreground">{description}</p>
                <div className="mt-5">
                  <Link href={ctaHref}>
                    <Button variant="outline">{ctaLabel}</Button>
                  </Link>
                </div>
              </div>
            </Reveal>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {studies.map((study, i) => (
            <Reveal key={study.href} delay={i * 0.12} animation="fade-up">
              <Link href={study.href} className="group block h-full">
                <article className="card-hover bg-card border border-border rounded-xl overflow-hidden h-full flex flex-col">
                  <div className="relative aspect-[16/10] bg-muted overflow-hidden">
                    {study.imageSrc ? (
                      <Image
                        src={study.imageSrc}
                        alt={study.imageAlt ?? study.title}
                        fill
                        className="object-cover img-zoom"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full bg-navy-50 flex items-center justify-center">
                        <span className="type-caption text-muted-foreground">
                          Image
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.tags.map((tag) => (
                        <Badge key={tag} variant="muted">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="type-h4 text-foreground group-hover:text-accent transition-colors duration-300 flex-1">
                      {study.title}
                    </h3>
                    <p className="type-body-sm text-muted-foreground mt-3 line-clamp-2">
                      {study.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-2 mt-5 type-body-sm text-accent font-display font-medium">
                      Read case
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
                </article>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
