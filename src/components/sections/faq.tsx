"use client";

import { useState } from "react";
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

export function Faq({ label = "FAQs", heading, items }: FaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <Reveal>
            <span className="type-caption text-accent">{label}</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="type-h2 text-foreground mt-4">{heading}</h2>
          </Reveal>
        </div>

        <div>
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={i} delay={i * 0.05}>
                <div className="border-b border-border">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between py-5 text-left focus-ring rounded-md group"
                    aria-expanded={isOpen}
                  >
                    <span className="type-h5 text-foreground pr-4 group-hover:text-accent transition-colors duration-200">
                      {item.question}
                    </span>
                    <span
                      className={`shrink-0 w-8 h-8 rounded-full border border-border flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? "bg-accent border-accent rotate-45"
                          : "bg-transparent group-hover:border-accent"
                      }`}
                    >
                      <svg
                        className={`w-4 h-4 transition-colors duration-300 ${
                          isOpen ? "text-white" : "text-foreground"
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
                    className="overflow-hidden transition-all duration-300 ease-in-out"
                    style={{
                      maxHeight: isOpen ? "500px" : "0",
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <div className="pb-5 pr-12">
                      <p className="type-body text-muted-foreground">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
