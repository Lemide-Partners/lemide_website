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
  const gradientFrom = dark ? "from-inverse-bg" : "from-background";
  const tripled = [...partners, ...partners, ...partners];

  return (
    <section className={`${bg} py-20 lg:py-28 overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <Reveal animation="fade-up">
          <span className="type-caption text-accent">{label}</span>
        </Reveal>
        <Reveal delay={0.1} animation="fade-up">
          <h2 className={`type-h2 ${fg} mt-4 max-w-2xl mx-auto`}>
            {heading}{" "}
            {headingAccent && (
              <span className={muted}>{headingAccent}</span>
            )}
          </h2>
        </Reveal>
        {description && (
          <Reveal delay={0.2} animation="fade-up">
            <p className={`type-body-lg ${muted} mt-4 max-w-xl mx-auto`}>
              {description}
            </p>
          </Reveal>
        )}
      </div>

      <Reveal delay={0.3} animation="fade-up">
        <div className="mt-14 relative marquee-container">
          <div
            className={`pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r ${gradientFrom} to-transparent`}
          />
          <div
            className={`pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l ${gradientFrom} to-transparent`}
          />

          <div className="flex animate-marquee-slow w-max items-center gap-16">
            {tripled.map((partner, i) => (
              <div
                key={`${partner.name}-${i}`}
                className="shrink-0 partner-logo"
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
                      className="h-9 lg:h-11 w-auto object-contain"
                    />
                  </a>
                ) : (
                  <Image
                    src={partner.logoSrc}
                    alt={partner.name}
                    width={120}
                    height={40}
                    className="h-9 lg:h-11 w-auto object-contain"
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
