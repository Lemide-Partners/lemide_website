import { Reveal } from "./reveal";

interface ProblemProps {
  text: string;
  mutedText?: string;
}

export function Problem({ text, mutedText }: ProblemProps) {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <Reveal animation="fade-up" duration={1}>
          <p className="type-h2 text-foreground text-center lg:text-left leading-snug">
            {text}{" "}
            {mutedText && (
              <span className="text-muted-foreground">{mutedText}</span>
            )}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
