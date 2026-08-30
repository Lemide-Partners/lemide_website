import Image from "next/image";
import { Reveal } from "./reveal";

interface Partner {
  name: string;
  logoSrc: string;
  href?: string;
}

interface PartnersProps {
  label?: string;
  heading: string;
  headingAccent?: string;
  description?: string;
  partners: Partner[];
  dark?: boolean;
}

export function Partners({
  label = "Partners",
  heading,
  headingAccent,
  description,
  partners,
  dark = true,
}: PartnersProps) {
  const bg = dark ? "bg-inverse-bg" : "bg-background";
  const fg = dark ? "text-inverse-fg" : "text-foreground";
  const muted = dark ? "text-inverse-muted" : "text-muted-foreground";

  return (
    <section className={`${bg} py-20 lg:py-28 overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <Reveal>
          <span className="type-caption text-accent">{label}</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className={`type-h2 ${fg} mt-4 max-w-2xl mx-auto`}>
            {heading}{" "}
            {headingAccent && (
              <span className={muted}>{headingAccent}</span>
            )}
          </h2>
        </Reveal>
        {description && (
          <Reveal delay={0.2}>
            <p className={`type-body-lg ${muted} mt-4 max-w-xl mx-auto`}>
              {description}
            </p>
          </Reveal>
        )}
      </div>

      <Reveal delay={0.3}>
        <div className="mt-14 relative">
          <div
            className={`pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 ${
              dark
                ? "bg-gradient-to-r from-inverse-bg to-transparent"
                : "bg-gradient-to-r from-background to-transparent"
            }`}
          />
          <div
            className={`pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 ${
              dark
                ? "bg-gradient-to-l from-inverse-bg to-transparent"
                : "bg-gradient-to-l from-background to-transparent"
            }`}
          />

          <div className="flex animate-marquee w-max items-center gap-16 hover:[animation-play-state:paused]">
            {[...partners, ...partners].map((partner, i) => (
              <div
                key={`${partner.name}-${i}`}
                className="shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
              >
                {partner.href ? (
                  <a
                    href={partner.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={partner.logoSrc}
                      alt={partner.name}
                      width={120}
                      height={40}
                      className="h-8 lg:h-10 w-auto object-contain"
                    />
                  </a>
                ) : (
                  <Image
                    src={partner.logoSrc}
                    alt={partner.name}
                    width={120}
                    height={40}
                    className="h-8 lg:h-10 w-auto object-contain"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
