import Link from "next/link";
import { Reveal } from "./reveal";

interface Service {
  title: string;
  description: string;
  href?: string;
}

interface ServicesProps {
  label?: string;
  heading: string;
  headingAccent?: string;
  services: Service[];
  dark?: boolean;
}

export function Services({
  label = "Services",
  heading,
  headingAccent,
  services,
  dark = true,
}: ServicesProps) {
  const bg = dark ? "bg-inverse-bg" : "bg-background";
  const fg = dark ? "text-inverse-fg" : "text-foreground";
  const muted = dark ? "text-inverse-muted" : "text-muted-foreground";
  const divider = dark ? "border-white/10" : "border-border";

  return (
    <section className={`${bg} py-20 lg:py-28`}>
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <Reveal animation="fade-up">
          <div className="text-center mb-16">
            <span className="type-caption text-accent">{label}</span>
            <h2 className={`type-h2 ${fg} mt-4`}>
              {heading}{" "}
              {headingAccent && (
                <span className={muted}>{headingAccent}</span>
              )}
            </h2>
          </div>
        </Reveal>

        <div>
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.1} animation="fade-up">
              <div className={`service-item py-8 lg:py-10 border-b ${divider}`}>
                <div className="flex items-start gap-6 lg:gap-10">
                  <span className="service-number type-h2 font-display tabular-nums shrink-0 w-16 lg:w-20">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <h3 className={`service-title type-h4 ${fg}`}>
                      {service.title}
                    </h3>
                    <p className={`service-desc type-body ${muted} mt-3`}>
                      {service.description}
                    </p>
                    {service.href && (
                      <Link
                        href={service.href}
                        className="service-link inline-flex items-center gap-2 mt-5 type-body-sm text-accent font-display font-medium group/link"
                      >
                        Learn more
                        <svg
                          className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </Link>
                    )}
                  </div>
                </div>
                <div className="service-progress" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
