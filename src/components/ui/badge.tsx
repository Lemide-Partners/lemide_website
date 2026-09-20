import { type HTMLAttributes, forwardRef } from "react";

type BadgeVariant = "default" | "accent" | "outline" | "muted";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-primary text-primary-foreground",
  accent: "bg-gold-50 text-gold-700 border border-gold-200",
  outline: "bg-transparent text-foreground border border-border",
  muted: "bg-muted text-muted-foreground",
};

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = "default", className = "", ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={[
          "inline-flex items-center",
          "rounded-full px-3 py-1",
          "type-caption",
          variantStyles[variant],
          className,
        ].join(" ")}
        {...props}
      />
    );
  }
);

Badge.displayName = "Badge";
export { Badge, type BadgeProps };
