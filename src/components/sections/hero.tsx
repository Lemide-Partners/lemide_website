import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui";
import { Reveal } from "./reveal";

interface HeroProps {
  headline: string;
  headlineAccent?: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
  avatars?: { src: string; alt: string }[];
  avatarCtaLabel?: string;
}

export function Hero({
  headline,
  headlineAccent,
  description,
  ctaLabel = "Schedule a Call",
  ctaHref = "/contact",
  avatars = [],
  avatarCtaLabel = "Talk to a partner",
}: HeroProps) {
  return (
    <section className="bg-background py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <Reveal>
          <h1 className="type-h1 text-foreground max-w-4xl mx-auto">
            {headline}{" "}
            {headlineAccent && (
              <span className="text-accent">{headlineAccent}</span>
            )}
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="type-body-lg text-muted-foreground max-w-2xl mx-auto mt-6">
            {description}
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={ctaHref}>
              <Button variant="accent" size="lg">
                {ctaLabel}
              </Button>
            </Link>
          </div>
        </Reveal>

        {avatars.length > 0 && (
          <Reveal delay={0.3}>
            <div className="mt-10 flex items-center justify-center gap-3">
              <div className="flex -space-x-3">
                {avatars.map((avatar, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-background overflow-hidden"
                  >
                    <Image
                      src={avatar.src}
                      alt={avatar.alt}
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <Link
                href={ctaHref}
                className="type-body-sm text-foreground font-display font-medium hover:text-accent transition-colors duration-150"
              >
                {avatarCtaLabel}
                <span className="ml-1">&rarr;</span>
              </Link>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
