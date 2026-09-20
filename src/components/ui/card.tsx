import { type HTMLAttributes, forwardRef } from "react";

type CardVariant = "default" | "elevated" | "outlined" | "inverse";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
}

const variantStyles: Record<CardVariant, string> = {
  default: "bg-card text-card-foreground border border-border",
  elevated: "bg-card text-card-foreground shadow-md",
  outlined: "bg-transparent text-foreground border border-border",
  inverse: "bg-inverse-bg text-inverse-fg",
};

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant = "default", className = "", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={[
          "rounded-lg p-6",
          variantStyles[variant],
          className,
        ].join(" ")}
        {...props}
      />
    );
  }
);

Card.displayName = "Card";

const CardHeader = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`mb-4 ${className}`} {...props} />
));
CardHeader.displayName = "CardHeader";

const CardTitle = forwardRef<
  HTMLHeadingElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ className = "", ...props }, ref) => (
  <h3
    ref={ref}
    className={`type-h4 text-current ${className}`}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardContent = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`type-body ${className}`} {...props} />
));
CardContent.displayName = "CardContent";

export { Card, CardHeader, CardTitle, CardContent, type CardProps };
