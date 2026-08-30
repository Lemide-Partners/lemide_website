import { Reveal } from "./reveal";

interface MissionStatementProps {
  text: string;
  mutedText?: string;
}

export function MissionStatement({ text, mutedText }: MissionStatementProps) {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <Reveal>
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
