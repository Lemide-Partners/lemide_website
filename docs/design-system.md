# Lemide Partners — Design System

## Brand Position

Operational partner for early-stage startups. The visual language communicates
**precision, trust, and quiet authority** — the aesthetic of a firm you'd hand
your cap table to, not a firm trying to sell you a SaaS product.

## Theme Strategy

**Single theme — no dark mode toggle.**

The Linen/Navy palette IS the brand identity. Offering a dark mode would dilute
recognition and split every component decision in two. Institutional peers
(law firms, private banks, accounting firms) don't offer dark mode on their
marketing sites — consistency signals reliability.

Dark surfaces exist via the `inverse` section pattern (Shadow Grey #171721)
for hero blocks, footers, and feature callouts. This gives visual contrast
within the single-theme system.

## Color Philosophy

| Token           | Value     | Usage |
|-----------------|-----------|-------|
| `primary`       | Deep Navy | All text, headings, primary buttons, structural UI |
| `accent`        | Golden Bronze | CTAs, emphasis links, active states — used sparingly |
| `background`    | Linen     | Page background, section backgrounds |
| `card`          | White     | Card surfaces, form backgrounds, modals |
| `muted`         | Stone 100 | Secondary backgrounds, disabled states |
| `border`        | Stone 200 | Card borders, dividers, input borders |
| `inverse-bg`    | Shadow Grey | Dark sections (hero, footer, feature blocks) |

**The golden bronze accent is rationed.** Use it for:
- Primary CTA buttons (one per viewport, max)
- Key metrics or numbers you want the eye drawn to
- Active nav indicator
- Never for body text, backgrounds, or decorative borders

## Typography

### Font pairing
- **Display (headings):** Plus Jakarta Sans (standing in for Bomstad Display)
- **Body:** DM Sans (standing in for Satoshi)

### Licensing note
Bomstad Display and Satoshi are Pangram Pangram commercial fonts. The current
build uses Google Fonts substitutes. Before shipping to production, either:
1. License Bomstad Display + Satoshi from Pangram Pangram and self-host via
   `next/font/local`, or
2. Confirm Plus Jakarta Sans + DM Sans are acceptable permanent substitutes.

### Type scale
- `type-h1` — 48/1.1, Light 300, -0.02em (page titles, hero headlines)
- `type-h2` — 36/1.15, Regular 400, -0.015em (section headlines)
- `type-h3` — 28/1.2, Regular 400, -0.01em (subsection headlines)
- `type-h4` — 22/1.3, Medium 500, -0.005em (card titles, feature names)
- `type-h5` — 18/1.4, Medium 500 (small headings, labels)
- `type-h6` — 16/1.4, Medium 500, +0.01em (overlines, nav items)
- `type-body-lg` — 18/1.7 (lead paragraphs, callout text)
- `type-body` — 16/1.7 (default body text)
- `type-body-sm` — 14/1.6, +0.005em (captions, metadata, form hints)
- `type-caption` — 12/1.5, Medium 500, +0.03em, uppercase (labels, badges)

## Spacing

4px base grid. Use Tailwind's default scale (which already uses 4px steps).
Key rhythm values:
- **Component internal padding:** 16–24px (p-4 to p-6)
- **Section vertical padding:** 64–96px (py-16 to py-24)
- **Card gap in grids:** 24–32px (gap-6 to gap-8)
- **Max content width:** 1200px (max-w-7xl) for text-heavy pages,
  1440px (max-w-[90rem]) for dashboard/admin

## Component Styling

### Buttons
- Rounded-md (0.5rem) — not pill-shaped, not square. Moderate, professional.
- Minimum height: 44px (accessibility touch target)
- Font: display face, medium weight
- Transitions: color only, 150ms — no scale/shadow theatrics
- Primary (Navy) for main actions, Accent (Gold) for the single most
  important CTA, Outline for secondary, Ghost for tertiary
- Never stack two accent buttons in the same viewport

### Cards
- White surface on Linen background (subtle lift without heavy shadows)
- 1px border in border color, rounded-lg (0.75rem)
- No hover-lift animations — hover changes border color or adds a subtle
  shadow-sm, nothing more
- Padding: 24px (p-6)

### Navigation
- Logo top-left, always
- Nav links in display font, medium weight, type-body-sm size
- Active state: golden bronze underline (2px, offset 4px)
- No dropdowns if avoidable — if needed, simple overlay, not mega-menu

### Form Inputs
- Height: 44px (matching button height)
- White background, 1px border
- Placeholder text in muted-foreground
- Focus: golden bronze ring (2px outline, 2px offset)
- Error: destructive red border + message below
- Labels above inputs, never floating/inside

### Dark Sections (Inverse)
- Background: Shadow Grey
- Text: Linen
- Muted text: neutral-400
- Buttons in these sections: accent (gold) primary, outline with white border
- Used for: hero, footer, feature highlight blocks, testimonial sections
