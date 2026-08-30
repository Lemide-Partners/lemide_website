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
    <section className="relative bg-background">
      <div
        className="absolute top-0 left-0 right-0 h-20 lg:h-28"
        style={{ overflow: "hidden" }}
      >
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-full"
        >
          <path
            d="M0,0 L0,80 Q360,120 720,80 Q1080,40 1440,80 L1440,0 Z"
            fill="#0B1D4B"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 lg:pt-40 pb-20 lg:pb-28">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          {metrics.map((metric, i) => (
            <Reveal key={metric.label} delay={i * 0.12} animation="fade-up">
              <div className="text-left">
                <div className="text-shadow-grey type-body-sm font-display mb-3 lg:mb-4">
                  {metric.label}
                </div>
                <div className="text-deep-navy font-display font-light stat-value">
                  <AnimatedValue value={metric.value} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
