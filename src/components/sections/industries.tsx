import Image from "next/image";
import { Reveal } from "./reveal";

interface Industry {
  name: string;
  href?: string;
}

interface IndustriesProps {
  label?: string;
  heading: string;
  headingAccent?: string;
  description: string;
  industries: Industry[];
  imageSrc?: string;
  imageAlt?: string;
}

export function Industries({
  label = "Industries",
  heading,
  headingAccent,
  description,
  industries,
  imageSrc,
  imageAlt = "Industries we serve",
}: IndustriesProps) {
  return (
    <section className="bg-inverse-bg py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal>
          <span className="type-caption text-accent">{label}</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="type-h2 text-inverse-fg mt-4">
            {heading}{" "}
            {headingAccent && (
              <span className="text-inverse-muted">{headingAccent}</span>
            )}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mt-12">
          <div>
            <Reveal delay={0.2}>
              <p className="type-body-lg text-inverse-muted">{description}</p>
            </Reveal>
            <div className="mt-10">
              {industries.map((industry, i) => (
                <Reveal key={industry.name} delay={0.2 + i * 0.05}>
                  <div className="py-4 border-b border-white/10 flex items-center justify-between group">
                    <span className="type-h5 text-inverse-fg group-hover:text-accent transition-colors duration-200">
                      {industry.name}
                    </span>
                    <svg
                      className="w-4 h-4 text-inverse-muted opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.3}>
            <div className="relative rounded-xl overflow-hidden bg-navy-800 aspect-[4/3]">
              {imageSrc ? (
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              ) : (
                <div className="w-full h-full bg-navy-800 flex items-center justify-center">
                  <span className="type-caption text-inverse-muted">
                    Image Placeholder
                  </span>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
