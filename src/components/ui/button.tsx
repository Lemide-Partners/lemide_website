import { forwardRef, type ButtonHTMLAttributes } from "react";

type Variant = "primary" | "accent" | "outline" | "ghost" | "destructive";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-primary text-primary-foreground hover:bg-navy-600 active:bg-navy-700",
  accent:
    "bg-accent text-white hover:bg-gold-500 active:bg-gold-600",
  outline:
    "border border-border bg-transparent text-foreground hover:bg-muted active:bg-navy-50",
  ghost:
    "bg-transparent text-foreground hover:bg-muted active:bg-navy-50",
  destructive:
    "bg-destructive text-destructive-foreground hover:bg-red-800 active:bg-red-900",
};

const sizeStyles: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-13 px-8 text-base",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className = "", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={[
          "inline-flex items-center justify-center gap-2",
          "font-display font-medium",
          "rounded-md",
          "transition-colors duration-150",
          "focus-ring",
          "disabled:opacity-50 disabled:pointer-events-none",
          variantStyles[variant],
          sizeStyles[size],
          className,
        ].join(" ")}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
export { Button, type ButtonProps };
