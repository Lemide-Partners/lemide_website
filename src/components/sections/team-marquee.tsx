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
  return (
    <section className="bg-background py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <Reveal>
          <span className="type-caption text-accent">{label}</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="type-h2 text-foreground mt-4 max-w-2xl mx-auto">
            {heading}{" "}
            {headingAccent && (
              <span className="text-muted-foreground">{headingAccent}</span>
            )}
          </h2>
        </Reveal>
      </div>

      <Reveal delay={0.2}>
        <div className="mt-12 relative">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

          <div className="flex animate-marquee w-max gap-6 hover:[animation-play-state:paused]">
            {[...members, ...members].map((member, i) => (
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
    <div className="shrink-0 w-56 group">
      <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-muted">
        {member.imageSrc ? (
          <Image
            src={member.imageSrc}
            alt={member.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="224px"
          />
        ) : (
          <div className="w-full h-full bg-navy-50 flex items-center justify-center">
            <span className="type-caption text-muted-foreground">Photo</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="mt-3 flex items-center justify-between">
        <h3 className="type-h6 text-foreground">{member.name}</h3>
        {member.linkedinHref && (
          <a
            href={member.linkedinHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors duration-150"
            aria-label={`${member.name} LinkedIn`}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        )}
      </div>
      <p className="type-body-sm text-muted-foreground mt-0.5">
        {member.title}
      </p>
      <p className="type-body-sm text-muted-foreground">{member.experience}</p>
    </div>
  );
}
