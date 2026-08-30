import { forwardRef, type InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = "", id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="type-body-sm font-medium text-foreground"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={[
            "h-11 w-full rounded-md border px-4",
            "font-body text-sm text-foreground",
            "bg-card placeholder:text-muted-foreground",
            "transition-colors duration-150",
            "focus-ring",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            error
              ? "border-destructive"
              : "border-border hover:border-navy-200",
            className,
          ].join(" ")}
          {...props}
        />
        {error && (
          <p className="type-body-sm text-destructive">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
export { Input, type InputProps };
