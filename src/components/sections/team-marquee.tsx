"use client";

import Image from "next/image";
import { Reveal } from "./reveal";

interface TeamMember {
  name: string;
  title: string;
  experience: string;
  imageSrc?: string;
  linkedinHref?: string;
}

interface TeamMarqueeProps {
  label?: string;
  heading: string;
  headingAccent?: string;
  members: TeamMember[];
}

export function TeamMarquee({
  label = "Experts",
  heading,
  headingAccent,
  members,
}: TeamMarqueeProps) {
  const tripled = [...members, ...members, ...members];

  return (
    <section className="bg-background py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <Reveal animation="fade-up">
          <span className="type-caption text-accent">{label}</span>
        </Reveal>
        <Reveal delay={0.1} animation="fade-up">
          <h2 className="type-h2 text-foreground mt-4 max-w-2xl mx-auto">
            {heading}{" "}
            {headingAccent && (
              <span className="text-muted-foreground">{headingAccent}</span>
            )}
          </h2>
        </Reveal>
      </div>

      <Reveal delay={0.25} animation="fade-up">
        <div className="mt-14 relative marquee-container">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

          <div className="flex animate-marquee w-max gap-6">
            {tripled.map((member, i) => (
              <TeamCard key={`${member.name}-${i}`} member={member} />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="shrink-0 w-60 group">
      <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-muted">
        {member.imageSrc ? (
          <Image
            src={member.imageSrc}
            alt={member.name}
            fill
            className="object-cover img-zoom"
            sizes="240px"
          />
        ) : (
          <div className="w-full h-full bg-navy-50 flex items-center justify-center">
            <span className="type-caption text-muted-foreground">Photo</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
        {member.linkedinHref && (
          <a
            href={member.linkedinHref}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
            aria-label={`${member.name} LinkedIn`}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        )}
      </div>
      <div className="mt-4">
        <h3 className="type-h6 text-foreground">{member.name}</h3>
        <p className="type-body-sm text-muted-foreground mt-0.5">
          {member.title}
        </p>
        <p className="type-body-sm text-muted-foreground">{member.experience}</p>
      </div>
    </div>
  );
}
