import { forwardRef, type TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
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
        <textarea
          ref={ref}
          id={inputId}
          className={[
            "min-h-28 w-full rounded-md border px-4 py-3",
            "font-body text-sm text-foreground",
            "bg-card placeholder:text-muted-foreground",
            "transition-colors duration-150",
            "focus-ring resize-y",
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

Textarea.displayName = "Textarea";
export { Textarea, type TextareaProps };
