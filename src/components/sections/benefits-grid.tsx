"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "./reveal";

interface BenefitMetric {
  type: "metric";
  value: string;
  label: string;
}

interface BenefitFeature {
  type: "feature";
  title: string;
  tag?: string;
  description: string;
  stat?: string;
}

interface BenefitAvatars {
  type: "avatars";
  count: string;
  label: string;
}

type BenefitItem = BenefitMetric | BenefitFeature | BenefitAvatars;

interface BenefitsGridProps {
  label?: string;
  heading: string;
  headingAccent?: string;
  items: BenefitItem[];
}

function AnimatedMetricValue({ value }: { value: string }) {
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

function AvatarStack() {
  const colors = ["#CC9E49", "#2E4578", "#51699F", "#8B9BBF", "#0B1D4B"];
  return (
    <div className="flex -space-x-2">
      {colors.map((bg, i) => (
        <div
          key={i}
          className="w-10 h-10 rounded-full border-2 border-navy-800 flex items-center justify-center overflow-hidden"
          style={{ background: bg, zIndex: 5 - i }}
        >
          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white/70">
            <circle cx="12" cy="8" r="4" fill="currentColor" />
            <path d="M4 20c0-3.3 3.6-6 8-6s8 2.7 8 6" fill="currentColor" />
          </svg>
        </div>
      ))}
    </div>
  );
}

function BenefitCard({ item }: { item: BenefitItem }) {
  if (item.type === "avatars") {
    return (
      <div className="benefit-card bg-white/[0.05] border border-white/[0.08] rounded-xl p-6 lg:p-8 h-full flex items-center gap-4">
        <AvatarStack />
        <p className="type-h6 text-inverse-fg">
          <span className="text-accent font-semibold">{item.count}</span>{" "}
          {item.label}
        </p>
      </div>
    );
  }

  if (item.type === "metric") {
    return (
      <div className="benefit-card bg-white/[0.05] border border-white/[0.08] rounded-xl p-6 lg:p-8 h-full flex items-center gap-4">
        <div
          className="font-display font-light text-accent shrink-0"
          style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}
        >
          <AnimatedMetricValue value={item.value} />
        </div>
        <p className="type-body-sm text-inverse-muted">
          {item.label.split("**").map((part, i) =>
            i % 2 === 1 ? (
              <span key={i} className="text-inverse-fg font-semibold">{part}</span>
            ) : (
              <span key={i}>{part}</span>
            )
          )}
        </p>
      </div>
    );
  }

  if (item.stat) {
    return (
      <div className="benefit-card bg-white/[0.05] border border-white/[0.08] rounded-xl p-6 lg:p-8 h-full flex flex-col">
        <h3 className="type-h6 text-inverse-fg">{item.title}</h3>
        <p className="type-body-sm text-inverse-muted mt-3">{item.description}</p>
        <div
          className="font-display font-light text-accent mt-auto pt-4"
          style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}
        >
          <AnimatedMetricValue value={item.stat} />
        </div>
      </div>
    );
  }

  return (
    <div className="benefit-card bg-white/[0.05] border border-white/[0.08] rounded-xl p-6 lg:p-8 h-full flex flex-col">
      <div className="flex items-center justify-between gap-3 mb-3">
        <h3 className="type-h6 text-inverse-fg">{item.title}</h3>
        {item.tag && (
          <span className="type-caption text-inverse-muted bg-white/[0.08] px-3 py-1 rounded-full whitespace-nowrap border border-white/[0.1]">
            {item.tag}
          </span>
        )}
      </div>
      <p className="type-body-sm text-inverse-muted">{item.description}</p>
    </div>
  );
}

export function BenefitsGrid({
  label = "Benefits",
  heading,
  headingAccent,
  items,
}: BenefitsGridProps) {
  return (
    <section className="bg-inverse-bg py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <Reveal animation="fade-up">
            <span className="type-caption text-accent">{label}</span>
          </Reveal>
          <Reveal delay={0.1} animation="fade-up">
            <h2 className="type-h2 text-inverse-fg mt-4 max-w-3xl mx-auto">
              {heading}{" "}
              {headingAccent && (
                <span className="text-inverse-muted">{headingAccent}</span>
              )}
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 lg:gap-5">
          {/* Row 1: feature (2col) | avatars (2col) | metric (2col) */}
          <Reveal delay={0} animation="fade-up" className="md:col-span-2">
            <BenefitCard item={items[0]} />
          </Reveal>
          <Reveal delay={0.06} animation="fade-up" className="md:col-span-2">
            <BenefitCard item={items[1]} />
          </Reveal>
          <Reveal delay={0.12} animation="fade-up" className="md:col-span-2">
            <BenefitCard item={items[2]} />
          </Reveal>

          {/* Row 2: gap (1col) | feature+stat (3col) | feature (2col) */}
          <div className="hidden md:block md:col-span-1" />
          <Reveal delay={0.18} animation="fade-up" className="md:col-span-3">
            <BenefitCard item={items[3]} />
          </Reveal>
          <Reveal delay={0.24} animation="fade-up" className="md:col-span-2">
            <BenefitCard item={items[4]} />
          </Reveal>

          {/* Row 3: metric (2col) | feature (3col) | gap (1col) */}
          <Reveal delay={0.30} animation="fade-up" className="md:col-span-2">
            <BenefitCard item={items[5]} />
          </Reveal>
          <Reveal delay={0.36} animation="fade-up" className="md:col-span-3">
            <BenefitCard item={items[6]} />
          </Reveal>
          <div className="hidden md:block md:col-span-1" />
        </div>
      </div>
    </section>
  );
}
