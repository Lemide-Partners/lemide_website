import { Button } from "@/components/ui";
import { Reveal } from "./reveal";

interface FooterCtaProps {
  heading: string;
  headingAccent?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export function FooterCta({
  heading,
  headingAccent,
  ctaLabel = "Book an Appointment",
  ctaHref = "https://calendly.com/lemide/30min?month=2026-09",
}: FooterCtaProps) {
  return (
    <section className="bg-inverse-bg py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <Reveal animation="fade-up" duration={1}>
          <h2 className="type-h1 text-inverse-fg">
            {heading}{" "}
            {headingAccent && (
              <span className="text-accent">{headingAccent}</span>
            )}
          </h2>
        </Reveal>
        <Reveal delay={0.2} animation="scale-up">
          <div className="mt-10">
            <a href={ctaHref} target="_blank" rel="noopener noreferrer">
              <Button variant="accent" size="lg">
                {ctaLabel}
              </Button>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
