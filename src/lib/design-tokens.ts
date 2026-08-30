export const colors = {
  // ── Brand primaries ──────────────────────────────────────────────
  deepNavy: "#0B1D4B",
  goldenBronze: "#CC9E49",
  linen: "#F7EBDF",
  shadowGrey: "#171721",

  // ── Derived palette ──────────────────────────────────────────────
  navy: {
    50: "#E8ECF3",
    100: "#C5CDDF",
    200: "#8B9BBF",
    300: "#51699F",
    400: "#2E4578",
    500: "#0B1D4B",
    600: "#091840",
    700: "#071234",
    800: "#050D28",
    900: "#03081C",
  },

  gold: {
    50: "#FBF5E8",
    100: "#F5E5C5",
    200: "#EBCB8B",
    300: "#D9AD5E",
    400: "#CC9E49",
    500: "#B8893A",
    600: "#9A712E",
    700: "#7C5A23",
    800: "#5E4319",
    900: "#3F2D10",
  },

  neutral: {
    50: "#FAFAF9",
    100: "#F5F5F4",
    200: "#E7E5E4",
    300: "#D6D3D1",
    400: "#A8A29E",
    500: "#78716C",
    600: "#57534E",
    700: "#44403C",
    800: "#292524",
    900: "#1C1917",
  },
} as const;

// ── Semantic tokens ──────────────────────────────────────────────────
export const semantic = {
  primary: colors.deepNavy,
  accent: colors.goldenBronze,
  background: colors.linen,
  foreground: colors.deepNavy,
  muted: colors.neutral[100],
  mutedForeground: colors.neutral[500],
  border: colors.neutral[200],
  ring: colors.goldenBronze,
  card: "#FFFFFF",
  cardForeground: colors.deepNavy,
  destructive: "#B91C1C",
  destructiveForeground: "#FFFFFF",
  success: "#15803D",
  successForeground: "#FFFFFF",

  // Dark sections (hero, footer, feature blocks)
  inverseBg: colors.shadowGrey,
  inverseFg: colors.linen,
  inverseMuted: colors.neutral[400],
} as const;

// ── Typography ───────────────────────────────────────────────────────
// Display: Plus Jakarta Sans (standing in for Bomstad Display)
// Body:    DM Sans (standing in for Satoshi)
export const fonts = {
  display: {
    family: "var(--font-display)",
    fallback:
      "'Plus Jakarta Sans', 'Helvetica Neue', 'Arial', sans-serif",
    weights: { light: 300, regular: 400, medium: 500 },
  },
  body: {
    family: "var(--font-body)",
    fallback: "'DM Sans', 'Helvetica Neue', 'Arial', sans-serif",
    weights: { light: 300, regular: 400, medium: 500 },
  },
} as const;

// ── Type scale (rem) ─────────────────────────────────────────────────
// Based on a 1.25 major-third scale from 1rem (16px)
export const typeScale = {
  h1: {
    size: "3rem",
    lineHeight: "1.1",
    weight: 300,
    letterSpacing: "-0.02em",
    font: "display",
  },
  h2: {
    size: "2.25rem",
    lineHeight: "1.15",
    weight: 400,
    letterSpacing: "-0.015em",
    font: "display",
  },
  h3: {
    size: "1.75rem",
    lineHeight: "1.2",
    weight: 400,
    letterSpacing: "-0.01em",
    font: "display",
  },
  h4: {
    size: "1.375rem",
    lineHeight: "1.3",
    weight: 500,
    letterSpacing: "-0.005em",
    font: "display",
  },
  h5: {
    size: "1.125rem",
    lineHeight: "1.4",
    weight: 500,
    letterSpacing: "0",
    font: "display",
  },
  h6: {
    size: "1rem",
    lineHeight: "1.4",
    weight: 500,
    letterSpacing: "0.01em",
    font: "display",
  },
  "body-lg": {
    size: "1.125rem",
    lineHeight: "1.7",
    weight: 400,
    letterSpacing: "0",
    font: "body",
  },
  body: {
    size: "1rem",
    lineHeight: "1.7",
    weight: 400,
    letterSpacing: "0",
    font: "body",
  },
  "body-sm": {
    size: "0.875rem",
    lineHeight: "1.6",
    weight: 400,
    letterSpacing: "0.005em",
    font: "body",
  },
  caption: {
    size: "0.75rem",
    lineHeight: "1.5",
    weight: 500,
    letterSpacing: "0.03em",
    font: "body",
  },
} as const;

// ── Spacing ──────────────────────────────────────────────────────────
// 4px base unit
export const spacing = {
  px: "1px",
  0: "0",
  0.5: "0.125rem",
  1: "0.25rem",
  1.5: "0.375rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  8: "2rem",
  10: "2.5rem",
  12: "3rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  32: "8rem",
  40: "10rem",
  48: "12rem",
} as const;

// ── Radii ────────────────────────────────────────────────────────────
export const radii = {
  none: "0",
  sm: "0.25rem",
  md: "0.5rem",
  lg: "0.75rem",
  xl: "1rem",
  full: "9999px",
} as const;

// ── Shadows ──────────────────────────────────────────────────────────
export const shadows = {
  sm: "0 1px 2px 0 rgba(11, 29, 75, 0.04)",
  md: "0 2px 8px -1px rgba(11, 29, 75, 0.06), 0 1px 3px -1px rgba(11, 29, 75, 0.04)",
  lg: "0 8px 24px -4px rgba(11, 29, 75, 0.08), 0 2px 6px -2px rgba(11, 29, 75, 0.04)",
} as const;

// ── Logo constraints ─────────────────────────────────────────────────
export const logo = {
  minWidth: 120,
  minWidthMark: 16,
  clearSpaceRatio: 0.25, // 25% of logo height as clear space on all sides
} as const;
