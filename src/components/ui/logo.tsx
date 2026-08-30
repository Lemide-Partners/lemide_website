import { type CSSProperties } from "react";
import { logo as logoTokens } from "@/lib/design-tokens";

type LogoVariant = "full" | "mark";

interface LogoProps {
  variant?: LogoVariant;
  width?: number;
  inverse?: boolean;
}

const MIN_WIDTHS: Record<LogoVariant, number> = {
  full: logoTokens.minWidth,
  mark: logoTokens.minWidthMark,
};

export function Logo({
  variant = "full",
  width,
  inverse = false,
}: LogoProps) {
  const minWidth = MIN_WIDTHS[variant];
  const resolvedWidth = Math.max(width ?? minWidth, minWidth);

  // Clear space = 25% of rendered height on all sides
  const clearSpace = resolvedWidth * logoTokens.clearSpaceRatio;

  const wrapperStyle: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: clearSpace,
    // Block overrides that would distort the logo
    transform: "none",
    filter: "none",
    WebkitFilter: "none",
  };

  const color = inverse ? "var(--linen)" : "var(--deep-navy)";

  return (
    <div
      style={wrapperStyle}
      role="img"
      aria-label="Lemide Partners"
    >
      {/*
        Replace this placeholder with the actual logo SVG or <Image>.
        The wrapper enforces min width, clear space, and blocks distortion.
        Do NOT pass className to the inner element — style via the
        wrapper's inverse prop instead.
      */}
      <svg
        width={resolvedWidth}
        height={resolvedWidth * 0.28}
        viewBox="0 0 120 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block" }}
      >
        <text
          x="0"
          y="24"
          fontFamily="var(--font-display), 'Plus Jakarta Sans', sans-serif"
          fontSize="22"
          fontWeight="500"
          letterSpacing="0.08em"
          fill={color}
        >
          LEMIDE
        </text>
      </svg>
    </div>
  );
}
