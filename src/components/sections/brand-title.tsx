import { Reveal } from "./reveal";

interface BrandTitleProps {
  text?: string;
}

export function BrandTitle({ text = "LEMIDE" }: BrandTitleProps) {
  return (
    <section className="bg-background py-8 lg:py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal>
          <div
            className="font-display font-light text-foreground/[0.04] select-none text-center"
            style={{
              fontSize: "clamp(5rem, 15vw, 14rem)",
              lineHeight: 1,
              letterSpacing: "-0.03em",
            }}
          >
            {text}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
