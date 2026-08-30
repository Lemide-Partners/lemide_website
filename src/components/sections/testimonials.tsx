"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { Reveal } from "./reveal";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  imageSrc?: string;
}

interface TestimonialsProps {
  label?: string;
  heading: string;
  headingAccent?: string;
  testimonials: Testimonial[];
}

export function Testimonials({
  label = "Testimonials",
  heading,
  headingAccent,
  testimonials,
}: TestimonialsProps) {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const current = testimonials[active];

  const goTo = useCallback(
    (index: number) => {
      if (index === active || animating) return;
      setAnimating(true);
      setTimeout(() => {
        setActive(index);
        setTimeout(() => setAnimating(false), 50);
      }, 300);
    },
    [active, animating]
  );

  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
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

        <Reveal delay={0.2} animation="fade-up">
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="relative aspect-[3/4] lg:aspect-[4/5] rounded-xl overflow-hidden bg-muted group">
              {current?.imageSrc ? (
                <Image
                  src={current.imageSrc}
                  alt={current.name}
                  fill
                  className="object-cover img-zoom transition-opacity duration-500"
                  style={{ opacity: animating ? 0 : 1 }}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  key={active}
                />
              ) : (
                <div className="w-full h-full bg-navy-50 flex items-center justify-center">
                  <span className="type-caption text-muted-foreground">
                    Photo
                  </span>
                </div>
              )}
            </div>

            <div>
              <div
                className="transition-all duration-500 ease-out"
                style={{
                  opacity: animating ? 0 : 1,
                  transform: animating ? "translateY(12px)" : "translateY(0)",
                }}
              >
                <blockquote className="type-h3 text-foreground font-display font-light leading-relaxed">
                  &ldquo;{current?.quote}&rdquo;
                </blockquote>
                <div className="mt-8">
                  <p className="type-h5 text-foreground">{current?.name}</p>
                  <p className="type-body-sm text-muted-foreground mt-1">
                    {current?.title}
                  </p>
                </div>
              </div>

              <div className="flex gap-2 mt-10">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`testimonial-dot h-1.5 rounded-full transition-all duration-500 ${
                      i === active
                        ? "bg-accent w-14"
                        : "bg-border w-10 hover:bg-muted-foreground"
                    }`}
                    aria-label={`View testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
