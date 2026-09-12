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
  statLabel?: string;
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
  const avatars = [
    { skin: "#D4A574", hair: "#3D2314", shirt: "#CC9E49", initials: "AM" },
    { skin: "#F5D0A9", hair: "#1A1A2E", shirt: "#2E4578", initials: "JL" },
    { skin: "#8D5524", hair: "#0D0D0D", shirt: "#51699F", initials: "TC" },
    { skin: "#E8C39E", hair: "#4A2C17", shirt: "#0B1D4B", initials: "SA" },
    { skin: "#C68642", hair: "#1B1B2F", shirt: "#8B9BBF", initials: "CR" },
  ];
  return (
    <div className="flex -space-x-3">
      {avatars.map((a, i) => (
        <div
          key={i}
          className="w-11 h-11 rounded-full border-[2.5px] border-navy-800 overflow-hidden shadow-md"
          style={{ zIndex: 5 - i }}
        >
          <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="44" height="44" rx="22" fill={a.shirt} />
            <circle cx="22" cy="17" r="8" fill={a.skin} />
            <ellipse cx="22" cy="17" rx="8" ry="8" fill={a.skin} />
            <circle cx="19" cy="16" r="1" fill="#1a1a2e" />
            <circle cx="25" cy="16" r="1" fill="#1a1a2e" />
            <path d="M20 19.5 Q22 21 24 19.5" stroke="#1a1a2e" strokeWidth="0.7" fill="none" strokeLinecap="round" />
            <ellipse cx="22" cy="38" rx="14" ry="12" fill={a.shirt} />
            <path d={
              i === 0 ? "M14 14c0-5 3.5-9 8-9s8 4 8 9c0 1-1 2-2 1-.5-3-2.5-5-6-5s-5.5 2-6 5c-1 1-2 0-2-1z" :
              i === 1 ? "M13 16c0-7 4-12 9-12s9 5 9 12c-1-1-3-5-9-5s-8 4-9 5z" :
              i === 2 ? "M14 13c0-4 3-7 8-7s8 3 8 7c0 2-1 3-2 2-.5-2-2.5-4-6-4s-5.5 2-6 4c-1 1-2 0-2-2z" :
              i === 3 ? "M15 17c-1-8 3-13 7-13s8 5 7 13c-.5-3-3-6-7-6s-6.5 3-7 6z" :
              "M14 14c1-6 4-9 8-9s7 3 8 9c-2-2-4-5-8-5s-6 3-8 5z"
            } fill={a.hair} />
            {i === 1 && <ellipse cx="15" cy="17" rx="1.5" ry="2" fill={a.skin} />}
            {i === 1 && <ellipse cx="29" cy="17" rx="1.5" ry="2" fill={a.skin} />}
          </svg>
        </div>
      ))}
    </div>
  );
}

function RichText({ text, className }: { text: string; className?: string }) {
  const parts = text.split("**");
  if (parts.length === 1) return <p className={className}>{text}</p>;
  return (
    <p className={className}>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <span key={i} className="text-inverse-fg font-semibold">{part}</span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </p>
  );
}

function BenefitCard({ item, compact }: { item: BenefitItem; compact?: boolean }) {
  const pad = compact ? "p-5 lg:p-6" : "p-6 lg:p-8";

  if (item.type === "avatars") {
    return (
      <div className={`benefit-card bg-white/[0.05] border border-white/[0.08] rounded-xl ${pad} h-full flex flex-col items-center justify-center gap-3 text-center`}>
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
      <div className={`benefit-card bg-white/[0.05] border border-white/[0.08] rounded-xl ${pad} h-full flex items-center gap-4`}>
        <div
          className="font-display font-light text-accent shrink-0"
          style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}
        >
          <AnimatedMetricValue value={item.value} />
        </div>
        <RichText text={item.label} className="type-body-sm text-inverse-muted" />
      </div>
    );
  }

  if (item.stat) {
    return (
      <div className={`benefit-card bg-white/[0.05] border border-white/[0.08] rounded-xl ${pad} h-full flex flex-col`}>
        <div className="flex items-center justify-between gap-3 mb-3">
          <h3 className="type-h6 text-inverse-fg">{item.title}</h3>
          {item.tag && (
            <span className="type-caption text-inverse-muted bg-white/[0.08] px-3 py-1 rounded-full whitespace-nowrap border border-white/[0.1]">
              {item.tag}
            </span>
          )}
        </div>
        <RichText text={item.description} className="type-body-sm text-inverse-muted" />
        <div className="mt-auto pt-6 flex items-center gap-4">
          <div
            className="font-display font-light text-accent shrink-0"
            style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}
          >
            <AnimatedMetricValue value={item.stat} />
          </div>
          {item.statLabel && (
            <RichText text={item.statLabel} className="type-body-sm text-inverse-muted" />
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`benefit-card bg-white/[0.05] border border-white/[0.08] rounded-xl ${pad} h-full flex flex-col`}>
      <div className="flex items-center justify-between gap-3 mb-3">
        <h3 className="type-h6 text-inverse-fg">{item.title}</h3>
        {item.tag && (
          <span className="type-caption text-inverse-muted bg-white/[0.08] px-3 py-1 rounded-full whitespace-nowrap border border-white/[0.1]">
            {item.tag}
          </span>
        )}
      </div>
      <RichText text={item.description} className="type-body-sm text-inverse-muted" />
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

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-4 lg:gap-5">
          {/* Left: tall card spanning full height */}
          <Reveal delay={0} animation="fade-up">
            <BenefitCard item={items[0]} />
          </Reveal>

          {/* Right: nested grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
            <Reveal delay={0.06} animation="fade-up">
              <BenefitCard item={items[1]} compact />
            </Reveal>
            <Reveal delay={0.12} animation="fade-up">
              <BenefitCard item={items[2]} compact />
            </Reveal>
            <Reveal delay={0.18} animation="fade-up">
              <BenefitCard item={items[3]} compact />
            </Reveal>
            <Reveal delay={0.24} animation="fade-up">
              <BenefitCard item={items[4]} compact />
            </Reveal>
            <Reveal delay={0.30} animation="fade-up" className="sm:col-span-2">
              <BenefitCard item={items[5]} />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
