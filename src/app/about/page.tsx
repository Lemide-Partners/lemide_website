import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui";
import {
  Navbar,
  FooterCta,
  Footer,
  Reveal,
} from "@/components/sections";

export const metadata: Metadata = {
  title: "About — Lemide Partners",
  description:
    "Learn about Lemide Partners — the operational infrastructure partner helping early-stage startups build, launch, and scale with confidence.",
};

const advantages = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Confidentiality & Compliance",
    description:
      "We handle sensitive operations — banking, credentials, compliance filings — with the discretion and rigor your startup demands.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 9.749c0 .894-.13 1.757-.372 2.573m-15.256 0A11.953 11.953 0 0112 13.5c2.998 0 5.74-1.1 7.843-2.918" />
      </svg>
    ),
    title: "Multi-Market Expertise",
    description:
      "From U.S. state filings to international compliance, we navigate the regulatory landscape across 5+ countries so you don't have to.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Founder-First Approach",
    description:
      "We embed with your team, not above it. Every decision is designed to let founders focus on building the product while we handle the rest.",
  },
];

const values = [
  {
    title: "Speed Without Shortcuts",
    description:
      "We move fast because startups demand it — but never at the expense of compliance, accuracy, or quality.",
  },
  {
    title: "Trust & Transparency",
    description:
      "Our clients trust us because we earn it every day through clear communication and honest counsel.",
  },
  {
    title: "Systems Over Heroics",
    description:
      "We build repeatable processes and durable infrastructure — not one-off fixes that break at scale.",
  },
];

const team = [
  {
    name: "Alex Morgan",
    title: "Managing Partner",
    experience: "15 years in startup ops",
    imageSrc: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=faces",
  },
  {
    name: "Jordan Lee",
    title: "Head of Compliance",
    experience: "Former Big 4 advisory",
    imageSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=faces",
  },
  {
    name: "Taylor Chen",
    title: "Financial Operations Lead",
    experience: "Fintech & banking specialist",
    imageSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=800&fit=crop&crop=faces",
  },
  {
    name: "Sam Adeyemi",
    title: "Access & Infra Lead",
    experience: "Enterprise security background",
    imageSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=faces",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-end overflow-hidden">
        <div className="absolute inset-0" style={{ background: "#050d28" }}>
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse 80% 60% at 60% 40%, #1a3a7a 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 20% 60%, #0e2460 0%, transparent 60%), radial-gradient(ellipse 40% 35% at 80% 70%, #162d6b 0%, transparent 50%)",
            }}
          />
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1440 800"
            preserveAspectRatio="xMidYMid slice"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="silk1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2a4a8a" stopOpacity="0.9" />
                <stop offset="40%" stopColor="#1a3570" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#0B1D4B" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="silk2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3355a0" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#1e3d7a" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#0B1D4B" stopOpacity="0.2" />
              </linearGradient>
              <linearGradient id="gold1" x1="0%" y1="0%" x2="100%" y2="80%">
                <stop offset="0%" stopColor="#CC9E49" stopOpacity="0.5" />
                <stop offset="50%" stopColor="#a07830" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#0B1D4B" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="highlight" x1="40%" y1="0%" x2="60%" y2="100%">
                <stop offset="0%" stopColor="#4a7ad4" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#1a3570" stopOpacity="0" />
              </linearGradient>
              <filter id="blur1">
                <feGaussianBlur stdDeviation="20" />
              </filter>
            </defs>
            <path
              d="M-100 200 C200 80, 500 350, 700 150 C900 -50, 1100 300, 1500 100 L1500 800 L-100 800Z"
              fill="url(#silk1)"
              filter="url(#blur1)"
            />
            <path
              d="M400 800 C500 500, 800 200, 1100 350 C1400 500, 1500 150, 1600 300 L1600 800Z"
              fill="url(#silk2)"
              filter="url(#blur1)"
            />
            <path
              d="M-50 500 C200 300, 400 550, 600 350 C800 150, 900 400, 1100 250 C1300 100, 1400 350, 1550 200"
              stroke="url(#gold1)"
              strokeWidth="120"
              fill="none"
              filter="url(#blur1)"
              strokeLinecap="round"
            />
            <path
              d="M300 0 C450 200, 700 100, 900 300 C1100 500, 1200 200, 1440 350"
              stroke="url(#highlight)"
              strokeWidth="180"
              fill="none"
              filter="url(#blur1)"
              strokeLinecap="round"
            />
            <circle cx="1100" cy="150" r="200" fill="#2a5099" fillOpacity="0.35" filter="url(#blur1)" />
            <circle cx="250" cy="450" r="100" fill="#CC9E49" fillOpacity="0.15" filter="url(#blur1)" />
          </svg>
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 30%, rgba(5,13,40,0.6) 100%)",
            }}
          />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-40 pb-16 lg:pt-48 lg:pb-24">
          <span className="inline-block px-5 py-2 rounded-full bg-white/[0.08] border border-white/[0.12] type-caption text-white/90 backdrop-blur-sm mb-8">
            About Us
          </span>
          <h1 className="type-h1 text-inverse-fg max-w-[720px]" style={{ fontSize: "clamp(2.5rem, 5vw, 3.75rem)", lineHeight: 1.1, textWrap: "balance" }}>
            We build the backbone so founders can{" "}
            <span className="text-accent">build the future.</span>
          </h1>
          <p className="type-body-lg text-inverse-muted mt-6 max-w-lg" style={{ textWrap: "pretty" }}>
            Lemide Partners is the operational infrastructure partner for
            early-stage startups. We handle incorporation, compliance, banking,
            tooling, and credentials — so you can focus on product and growth.
          </p>
          <div className="mt-10">
            <Link href="/contact">
              <Button variant="outline" className="bg-white text-foreground border-white hover:bg-white/90">
                Book a Call
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* History / Our Story */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-20 items-start">
            <div className="lg:col-span-4">
              <Reveal animation="fade-right">
                <span className="inline-block px-4 py-1.5 rounded-full border border-border type-caption text-foreground mb-6">
                  History
                </span>
                <h2 className="type-h2 text-foreground" style={{ textWrap: "balance" }}>
                  From vision to impact —{" "}
                  <span className="text-muted-foreground">
                    our journey in operational excellence.
                  </span>
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-7 lg:col-start-6 lg:pt-14">
              <Reveal delay={0.15} animation="fade-left">
                <p className="type-body-lg text-muted-foreground" style={{ textWrap: "pretty" }}>
                  Lemide was founded by operators who lived the pain of building
                  startups from scratch — navigating state filings, banking
                  hurdles, compliance deadlines, and credential management while
                  trying to ship product.
                </p>
              </Reveal>
              <Reveal delay={0.25} animation="fade-left">
                <p className="type-body-lg text-muted-foreground mt-6" style={{ textWrap: "pretty" }}>
                  We built Lemide to be the partner we wished we had: one team,
                  one point of contact, handling everything behind the scenes so
                  founders never have to choose between moving fast and getting
                  it right.
                </p>
              </Reveal>
            </div>
          </div>

          {/* Horizontal image strip */}
          <Reveal delay={0.3} animation="fade-up">
            <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { alt: "Strategic planning session", src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=450&fit=crop" },
                { alt: "Team collaboration", src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=450&fit=crop" },
                { alt: "Office workspace", src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=450&fit=crop" },
                { alt: "Client meeting", src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=450&fit=crop" },
              ].map((img, i) => (
                <div
                  key={i}
                  className="relative aspect-[4/3] rounded-xl overflow-hidden bg-navy-50 group"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    unoptimized
                    className="object-cover img-zoom"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Advantages */}
      <section className="bg-white py-20 lg:py-28 border-t border-border/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-14">
            <Reveal animation="fade-up">
              <h2 className="type-h2 text-foreground max-w-md" style={{ textWrap: "balance" }}>
                Why leading startups{" "}
                <span className="text-muted-foreground">choose Lemide.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1} animation="fade-up">
              <span className="inline-block px-4 py-1.5 rounded-full border border-border type-caption text-foreground shrink-0">
                Advantages
              </span>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {advantages.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.12} animation="fade-up">
                <div className="rounded-2xl bg-[#f8f8f6] p-8 lg:p-10 h-full group hover:shadow-lg transition-shadow duration-300">
                  <div className="w-14 h-14 rounded-xl bg-deep-navy text-white flex items-center justify-center mb-6">
                    {item.icon}
                  </div>
                  <h3 className="type-h5 text-foreground">{item.title}</h3>
                  <p className="type-body text-muted-foreground mt-3" style={{ textWrap: "pretty" }}>
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20 lg:py-28 border-t border-border/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <Reveal animation="fade-up">
              <span className="type-caption text-accent">Our Values</span>
            </Reveal>
            <Reveal delay={0.1} animation="fade-up">
              <h2 className="type-h2 text-foreground mt-4 max-w-lg mx-auto" style={{ textWrap: "balance" }}>
                Principles that guide{" "}
                <span className="text-muted-foreground">every engagement.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.15} animation="fade-up">
              <p className="type-body-lg text-muted-foreground mt-6 max-w-md mx-auto" style={{ textWrap: "pretty" }}>
                These aren&apos;t aspirational slogans — they&apos;re the operational
                standards we hold ourselves to on every project.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-10">
              {values.map((value, i) => (
                <Reveal key={value.title} delay={i * 0.12} animation="fade-right">
                  <div className="flex gap-5">
                    <div className="shrink-0 w-11 h-11 rounded-full bg-deep-navy text-white flex items-center justify-center mt-0.5">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="type-h5 text-foreground">{value.title}</h3>
                      <p className="type-body text-muted-foreground mt-2" style={{ textWrap: "pretty" }}>
                        {value.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2} animation="fade-left">
              <div className="relative rounded-2xl overflow-hidden bg-navy-50 aspect-[3/4] group">
                <Image
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=800&fit=crop"
                  alt="Team working together"
                  fill
                  unoptimized
                  className="object-cover img-zoom"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-white py-20 lg:py-28 border-t border-border/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <Reveal animation="fade-right">
              <div className="relative rounded-2xl overflow-hidden bg-navy-50 aspect-[4/5] group">
                <Image
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=750&fit=crop&crop=faces"
                  alt="Sola Oyegbile — Founder & Managing Partner"
                  fill
                  unoptimized
                  className="object-cover img-zoom"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </Reveal>

            <div className="lg:max-w-lg">
              <Reveal animation="fade-left">
                <span className="inline-block px-4 py-1.5 rounded-full border border-border type-caption text-foreground">
                  Leadership
                </span>
              </Reveal>
              <Reveal delay={0.1} animation="fade-left">
                <h2 className="type-h2 text-foreground mt-6" style={{ textWrap: "balance" }}>
                  A message from{" "}
                  <span className="text-accent">our founder.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.2} animation="fade-left">
                <blockquote className="mt-8 text-muted-foreground type-body-lg border-l-2 border-accent pl-6" style={{ lineHeight: 1.8, textWrap: "pretty" }}>
                  &ldquo;I built Lemide because I saw too many brilliant founders
                  burning out on operational busywork — state filings, banking
                  setups, compliance deadlines — instead of building the products
                  the world needs. We exist to carry that weight so they
                  don&apos;t have to.&rdquo;
                </blockquote>
              </Reveal>
              <Reveal delay={0.3} animation="fade-left">
                <div className="mt-8 flex items-center gap-4">
                  <div>
                    <p className="type-h5 text-foreground">Sola Oyegbile</p>
                    <p className="type-body-sm text-muted-foreground">
                      Founder &amp; Managing Partner
                    </p>
                  </div>
                  <a
                    href="https://www.linkedin.com/in/solaoyegbile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-colors duration-300"
                    aria-label="Sola Oyegbile LinkedIn"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 lg:py-28" style={{ background: "linear-gradient(135deg, #0B1D4B 0%, #091840 40%, #0B1D4B 70%, #1a2a52 100%)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <Reveal animation="fade-up">
              <span className="type-caption text-accent">How We Work</span>
            </Reveal>
            <Reveal delay={0.1} animation="fade-up">
              <h2 className="type-h2 text-inverse-fg mt-4 max-w-md mx-auto" style={{ textWrap: "balance" }}>
                From first call to{" "}
                <span className="text-accent">full operations.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.15} animation="fade-up">
              <p className="type-body-lg text-inverse-muted mt-6 max-w-sm mx-auto" style={{ textWrap: "pretty" }}>
                A streamlined engagement model designed for speed and clarity.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Discover",
                description:
                  "We learn your business, stage, and operational gaps through a focused intake call. No questionnaires — just a conversation.",
              },
              {
                step: "02",
                title: "Design & Build",
                description:
                  "We scope and execute your operational buildout: entity setup, banking, compliance filings, tooling, and access governance.",
              },
              {
                step: "03",
                title: "Launch & Grow",
                description:
                  "We transition to an ongoing retainer — monitoring deadlines, managing renewals, and scaling your ops as you grow.",
              },
            ].map((phase, i) => (
              <Reveal key={phase.step} delay={i * 0.12} animation="fade-up">
                <div className="rounded-xl border border-white/10 p-8 hover:border-accent/40 transition-colors duration-300 h-full">
                  <span className="type-h3 text-accent font-display">
                    {phase.step}
                  </span>
                  <h3 className="type-h5 text-inverse-fg mt-4">{phase.title}</h3>
                  <p className="type-body text-inverse-muted mt-3" style={{ textWrap: "pretty" }}>
                    {phase.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <Reveal animation="fade-up">
              <span className="type-caption text-accent">Our Team</span>
            </Reveal>
            <Reveal delay={0.1} animation="fade-up">
              <h2 className="type-h2 text-foreground mt-4 max-w-sm mx-auto" style={{ textWrap: "balance" }}>
                Operators who{" "}
                <span className="text-muted-foreground">understand the grind.</span>
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.1} animation="fade-up">
                <div className="group">
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-navy-50">
                    <Image
                      src={member.imageSrc}
                      alt={member.name}
                      fill
                      unoptimized
                      className="object-cover img-zoom"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-deep-navy/15 mix-blend-multiply" />
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center gap-2">
                      <h3 className="type-h6 text-foreground whitespace-nowrap">{member.name}</h3>
                      <svg className="w-3.5 h-3.5 shrink-0 text-muted-foreground/50 hover:text-accent transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </div>
                    <p className="type-body-sm text-muted-foreground mt-1">
                      {member.title}
                    </p>
                    <p className="type-body-sm text-muted-foreground/70 mt-0.5">
                      {member.experience}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FooterCta
        heading="Ready to offload your operations?"
        headingAccent="Let's talk."
        ctaLabel="Book a Call"
        ctaHref="/contact"
      />

      <Footer />
    </>
  );
}
