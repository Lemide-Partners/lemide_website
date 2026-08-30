"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "./reveal";

interface Metric {
  value: string;
  label: string;
}

interface MetricsBarProps {
  metrics: Metric[];
}

function AnimatedValue({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [displayed, setDisplayed] = useState(value);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || hasAnimated.current) return;

    const match = value.match(/^(\d+)/);
    if (!match) return;

    const target = parseInt(match[1], 10);
    const suffix = value.slice(match[1].length);
    const duration = 1800;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        hasAnimated.current = true;
        const start = performance.now();

        function tick(now: number) {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 4);
          const current = Math.round(eased * target);
          setDisplayed(`${current}${suffix}`);
          if (progress < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return <span ref={ref}>{displayed}</span>;
}

export function MetricsBar({ metrics }: MetricsBarProps) {
  return (
    <section className="bg-card border-y border-border py-14 lg:py-18">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {metrics.map((metric, i) => (
            <Reveal key={metric.label} delay={i * 0.12} animation="fade-up">
              <div className="text-center">
                <div className="type-h2 text-accent font-display font-medium">
                  <AnimatedValue value={metric.value} />
                </div>
                <div className="type-body-sm text-muted-foreground mt-2">
                  {metric.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
