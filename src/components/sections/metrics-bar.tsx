"use client";

import { Reveal } from "./reveal";

interface Metric {
  value: string;
  label: string;
}

interface MetricsBarProps {
  metrics: Metric[];
}

export function MetricsBar({ metrics }: MetricsBarProps) {
  return (
    <section className="bg-card border-y border-border py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {metrics.map((metric, i) => (
            <Reveal key={metric.label} delay={i * 0.1}>
              <div className="text-center">
                <div className="type-h2 text-accent font-display font-medium">
                  {metric.value}
                </div>
                <div className="type-body-sm text-muted-foreground mt-1">
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
