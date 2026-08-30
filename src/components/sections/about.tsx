import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui";
import { Reveal } from "./reveal";

interface AboutProps {
  label?: string;
  heading: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
  mediaSrc?: string;
  mediaType?: "image" | "video";
  mediaAlt?: string;
}

export function About({
  label = "About Us",
  heading,
  description,
  ctaLabel = "Learn More",
  ctaHref = "/about",
  mediaSrc,
  mediaType = "image",
  mediaAlt = "",
}: AboutProps) {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <Reveal>
              <span className="type-caption text-accent">{label}</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="type-h2 text-foreground mt-4">{heading}</h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="type-body-lg text-muted-foreground mt-6">
                {description}
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-8">
                <Link href={ctaHref}>
                  <Button variant="primary">{ctaLabel}</Button>
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="relative rounded-xl overflow-hidden bg-muted aspect-[4/3]">
              {mediaSrc && mediaType === "video" ? (
                <video
                  src={mediaSrc}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : mediaSrc ? (
                <Image
                  src={mediaSrc}
                  alt={mediaAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              ) : (
                <div className="w-full h-full bg-navy-50 flex items-center justify-center">
                  <span className="type-caption text-muted-foreground">
                    Media Placeholder
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
