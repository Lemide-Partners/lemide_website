"use client";

import { type ReactNode, type CSSProperties } from "react";
import { useInView } from "@/hooks/use-in-view";

type AnimationType =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "fade-in"
  | "scale-up"
  | "slide-up";

const initialStyles: Record<AnimationType, CSSProperties> = {
  "fade-up": { opacity: 0, transform: "translateY(40px)" },
  "fade-down": { opacity: 0, transform: "translateY(-40px)" },
  "fade-left": { opacity: 0, transform: "translateX(-40px)" },
  "fade-right": { opacity: 0, transform: "translateX(40px)" },
  "fade-in": { opacity: 0 },
  "scale-up": { opacity: 0, transform: "scale(0.92)" },
  "slide-up": { opacity: 0, transform: "translateY(60px)" },
};

const activeStyles: CSSProperties = {
  opacity: 1,
  transform: "none",
};

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  animation?: AnimationType;
  once?: boolean;
}

export function Reveal({
  children,
  className = "",
  delay = 0,
  duration = 0.8,
  animation = "fade-up",
  once = true,
}: RevealProps) {
  const { ref, inView } = useInView({ once });

  const style: CSSProperties = {
    ...(inView ? activeStyles : initialStyles[animation]),
    transition: `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
    willChange: "opacity, transform",
  };

  return (
    <div ref={ref} className={className} style={style} data-revealed={inView || undefined}>
      {children}
    </div>
  );
}
