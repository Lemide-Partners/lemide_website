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
        <Reveal>
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
            <Reveal key={service.title} delay={i * 0.08}>
              <div
                className={`py-8 border-b ${divider} group`}
              >
                <div className="flex items-start gap-6 lg:gap-10">
                  <span
                    className={`type-h3 ${muted} font-display tabular-nums shrink-0 w-12`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <h3
                      className={`type-h4 ${fg} group-hover:text-accent transition-colors duration-200`}
                    >
                      {service.title}
                    </h3>
                    <p className={`type-body ${muted} mt-2`}>
                      {service.description}
                    </p>
                    {service.href && (
                      <Link
                        href={service.href}
                        className="inline-flex items-center gap-1.5 mt-4 type-body-sm text-accent font-display font-medium hover:gap-3 transition-all duration-200"
                      >
                        Learn more
                        <svg
                          className="w-4 h-4"
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
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
