"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Reveal } from "./reveal";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqProps {
  label?: string;
  heading: string;
  items: FaqItem[];
}

function FaqAccordion({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div className="border-b border-border">
      <button
        onClick={onToggle}
        className={`w-full flex items-center justify-between py-5 lg:py-6 px-5 text-left focus-ring rounded-lg group transition-all duration-300 ${
          isOpen ? "bg-primary" : ""
        }`}
        aria-expanded={isOpen}
      >
        <span className={`type-h5 pr-4 transition-colors duration-300 ${
          isOpen ? "text-white" : "text-foreground group-hover:text-primary"
        }`}>
          {item.question}
        </span>
        <span
          className={`faq-icon shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
            isOpen ? "border-white/30 bg-white/10" : "border-border group-hover:border-primary"
          }`}
        >
          <svg
            className={`w-4 h-4 transition-all duration-300 ${
              isOpen ? "text-white rotate-45" : "text-foreground"
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </span>
      </button>

      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-400 ease-out"
        style={{ height, opacity: isOpen ? 1 : 0 }}
      >
        <div className="pb-6 pr-12">
          <p className="type-body text-muted-foreground">{item.answer}</p>
        </div>
      </div>
    </div>
  );
}

export function Faq({ label = "FAQs", heading, items }: FaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = useCallback(
    (i: number) => setOpenIndex((prev) => (prev === i ? null : i)),
    []
  );

  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <Reveal animation="fade-up">
            <span className="type-caption text-accent">{label}</span>
          </Reveal>
          <Reveal delay={0.1} animation="fade-up">
            <h2 className="type-h2 text-foreground mt-4">{heading}</h2>
          </Reveal>
        </div>

        <div>
          {items.map((item, i) => (
            <Reveal key={i} delay={i * 0.05} animation="fade-up">
              <FaqAccordion
                item={item}
                isOpen={openIndex === i}
                onToggle={() => handleToggle(i)}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
