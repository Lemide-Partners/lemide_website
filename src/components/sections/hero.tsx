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
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  avatars?: { src: string; alt: string }[];
  avatarCtaLabel?: string;
  videoSrc?: string;
}

export function Hero({
  headline,
  headlineAccent,
  description,
  ctaLabel = "Schedule a Call",
  ctaHref = "/contact",
  secondaryCtaLabel,
  secondaryCtaHref,
  avatars = [],
  avatarCtaLabel = "Talk to a partner",
  videoSrc,
}: HeroProps) {
  return (
    <section className="relative bg-inverse-bg min-h-screen overflow-hidden flex items-center justify-center">
      {videoSrc && (
        <>
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover brightness-[0.4]"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.5) 50%, rgba(11,29,75,0.85) 100%)",
            }}
          />
        </>
      )}

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 text-center py-32 lg:py-40">
        <Reveal animation="fade-up" duration={1}>
          <h1 className="type-h1 text-inverse-fg max-w-[18ch] mx-auto">
            {headline}{" "}
            {headlineAccent && (
              <span className="text-accent">{headlineAccent}</span>
            )}
          </h1>
        </Reveal>

        <Reveal animation="fade-up" delay={0.15} duration={0.9}>
          <p className="type-body-lg text-inverse-muted max-w-2xl mx-auto mt-6 lg:mt-8">
            {description}
          </p>
        </Reveal>

        <Reveal animation="scale-up" delay={0.3} duration={0.8}>
          <div className="mt-10 lg:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={ctaHref}>
              <Button variant="accent" size="lg">
                {ctaLabel}
              </Button>
            </Link>
            {secondaryCtaLabel && secondaryCtaHref && (
              <Link href={secondaryCtaHref}>
                <Button variant="outline" size="lg">
                  {secondaryCtaLabel}
                </Button>
              </Link>
            )}
          </div>
        </Reveal>

        {avatars.length > 0 && (
          <Reveal animation="fade-up" delay={0.45}>
            <div className="mt-12 flex items-center justify-center gap-4">
              <div className="flex -space-x-3">
                {avatars.map((avatar, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-inverse-bg overflow-hidden transition-transform duration-300 hover:scale-110 hover:z-10 relative"
                    style={{ zIndex: avatars.length - i }}
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
                className="type-body-sm text-inverse-fg font-display font-medium hover:text-accent transition-colors duration-200 group"
              >
                {avatarCtaLabel}
                <span className="inline-block ml-1.5 transition-transform duration-200 group-hover:translate-x-1">
                  &rarr;
                </span>
              </Link>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
