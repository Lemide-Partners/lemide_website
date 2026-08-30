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
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal animation="fade-up">
          <span className="type-caption text-accent">{label}</span>
        </Reveal>
        <Reveal delay={0.1} animation="fade-up">
          <h2 className="type-h2 text-foreground mt-4">
            {heading}{" "}
            {headingAccent && (
              <span className="text-muted-foreground">{headingAccent}</span>
            )}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mt-12">
          <div>
            <Reveal delay={0.15} animation="fade-right">
              <p className="type-body-lg text-muted-foreground">{description}</p>
            </Reveal>
            <div className="mt-10">
              {industries.map((industry, i) => (
                <Reveal key={industry.name} delay={0.2 + i * 0.06} animation="fade-up">
                  <div className="industry-item py-4 border-b border-border flex items-center justify-between cursor-pointer group">
                    <span className="type-h5 text-foreground group-hover:text-accent transition-colors duration-300">
                      {industry.name}
                    </span>
                    <svg
                      className="w-5 h-5 text-muted-foreground opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
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
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.25} animation="fade-left">
            <div className="relative rounded-xl overflow-hidden bg-muted aspect-[4/3] group">
              {imageSrc ? (
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover img-zoom"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              ) : (
                <div className="w-full h-full bg-muted flex items-center justify-center">
                  <span className="type-caption text-muted-foreground">
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
