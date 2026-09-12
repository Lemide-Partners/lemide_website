interface LogoProps {
  inverse?: boolean;
  width?: number;
  height?: number;
}

export function Logo({
  inverse = false,
  width = 140,
  height = 38,
}: LogoProps) {
  const navy = "#0B1D4B";
  const gold = "#CC9E49";
  const markColor = inverse ? "#FFFFFF" : navy;
  const textColor = inverse ? "#FFFFFF" : navy;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 360 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 lg:h-9 w-auto"
      aria-label="Lemide Partners"
    >
      {/* L-shaped mark */}
      <path
        d="M0 0 L40 0 L40 55 L75 55 L75 95 L0 95 Z"
        fill={markColor}
      />
      {/* Gold square */}
      <rect x="28" y="18" width="32" height="32" fill={gold} />

      {/* "Lemide" text */}
      <text
        x="90"
        y="58"
        fontFamily="'Plus Jakarta Sans', 'DM Sans', system-ui, sans-serif"
        fontSize="52"
        fontWeight="600"
        fill={textColor}
        letterSpacing="-1"
      >
        Lemide
      </text>

      {/* Decorative lines around "Partners" */}
      <line x1="90" y1="78" x2="130" y2="78" stroke={textColor} strokeWidth="1" opacity="0.5" />
      <line x1="258" y1="78" x2="298" y2="78" stroke={textColor} strokeWidth="1" opacity="0.5" />

      {/* "Partners" text */}
      <text
        x="194"
        y="83"
        fontFamily="'Plus Jakarta Sans', 'DM Sans', system-ui, sans-serif"
        fontSize="16"
        fontWeight="400"
        fill={textColor}
        textAnchor="middle"
        letterSpacing="4"
      >
        Partners
      </text>
    </svg>
  );
}
