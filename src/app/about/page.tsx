import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui";
import {
  Navbar,
  About,
  MetricsBar,
  TeamMarquee,
  FooterCta,
  Footer,
} from "@/components/sections";

export const metadata: Metadata = {
  title: "About — Lemide Partners",
  description:
    "Learn about Lemide Partners — the operational infrastructure partner helping early-stage startups build, launch, and scale with confidence.",
};

const values = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Speed Without Shortcuts",
    description:
      "We move fast because startups demand it — but never at the expense of compliance, accuracy, or quality.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Trust & Transparency",
    description:
      "We handle sensitive operations — banking, credentials, compliance. Our clients trust us because we earn it every day.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Founder-First Mindset",
    description:
      "We embed with your team, not above it. Every decision we make is designed to let founders focus on building the product.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
    title: "Systems Over Heroics",
    description:
      "We build repeatable processes and durable infrastructure — not one-off fixes that break at scale.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-end overflow-hidden">
        {/* Fluid abstract background */}
        <div className="absolute inset-0" style={{ background: "#050d28" }}>
          {/* Base gradient layer */}
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse 80% 60% at 60% 40%, #1a3a7a 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 20% 60%, #0e2460 0%, transparent 60%), radial-gradient(ellipse 40% 35% at 80% 70%, #162d6b 0%, transparent 50%)",
            }}
          />
          {/* Flowing silk shapes via SVG */}
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
              <filter id="blur2">
                <feGaussianBlur stdDeviation="8" />
              </filter>
            </defs>
            {/* Large flowing shape — left to center */}
            <path
              d="M-100 200 C200 80, 500 350, 700 150 C900 -50, 1100 300, 1500 100 L1500 800 L-100 800Z"
              fill="url(#silk1)"
              filter="url(#blur1)"
            />
            {/* Second silk wave — right side */}
            <path
              d="M400 800 C500 500, 800 200, 1100 350 C1400 500, 1500 150, 1600 300 L1600 800Z"
              fill="url(#silk2)"
              filter="url(#blur1)"
            />
            {/* Gold accent ribbon */}
            <path
              d="M-50 500 C200 300, 400 550, 600 350 C800 150, 900 400, 1100 250 C1300 100, 1400 350, 1550 200"
              stroke="url(#gold1)"
              strokeWidth="120"
              fill="none"
              filter="url(#blur1)"
              strokeLinecap="round"
            />
            {/* Bright highlight wave */}
            <path
              d="M300 0 C450 200, 700 100, 900 300 C1100 500, 1200 200, 1440 350"
              stroke="url(#highlight)"
              strokeWidth="180"
              fill="none"
              filter="url(#blur1)"
              strokeLinecap="round"
            />
            {/* Top-right bright orb */}
            <circle cx="1100" cy="150" r="200" fill="#2a5099" fillOpacity="0.35" filter="url(#blur1)" />
            {/* Small gold accent spot */}
            <circle cx="250" cy="450" r="100" fill="#CC9E49" fillOpacity="0.15" filter="url(#blur1)" />
          </svg>
          {/* Vignette overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 30%, rgba(5,13,40,0.6) 100%)",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-40 pb-16 lg:pt-48 lg:pb-24">
          <span className="inline-block px-5 py-2 rounded-full bg-white/[0.08] border border-white/[0.12] type-caption text-white/90 backdrop-blur-sm mb-8">
            About Us
          </span>
          <h1 className="type-h1 text-inverse-fg max-w-3xl" style={{ fontSize: "clamp(2.5rem, 5vw, 3.75rem)", lineHeight: 1.1 }}>
            We build the backbone so founders can{" "}
            <span className="text-accent">build the future.</span>
          </h1>
          <p className="type-body-lg text-inverse-muted mt-6 max-w-2xl">
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

      <MetricsBar
        className="bg-white"
        metrics={[
          { value: "12+", label: "Years of Experience" },
          { value: "50+", label: "Startups Supported" },
          { value: "5+", label: "Countries Covered" },
          { value: "30", label: "Days to Readiness" },
        ]}
      />

      {/* Story */}
      <About
        className="bg-white py-20 lg:py-28"
        label="Our Story"
        heading="Born from the trenches of early-stage operations."
        description="Lemide was founded by operators who lived the pain of building startups from scratch — navigating state filings, banking hurdles, compliance deadlines, and credential management while trying to ship product. We built Lemide to be the partner we wished we had: one team, one point of contact, handling everything behind the scenes so founders never have to choose between moving fast and getting it right."
        ctaLabel="Get in Touch"
        ctaHref="/contact"
      />

      {/* Values */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <span className="type-caption text-accent">Our Values</span>
            <h2 className="type-h2 text-foreground mt-4 max-w-2xl mx-auto">
              What drives every{" "}
              <span className="text-muted-foreground">engagement.</span>
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {values.map((value) => (
              <div
                key={value.title}
                className="group rounded-xl border border-border p-8 hover:border-accent/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  {value.icon}
                </div>
                <h3 className="type-h5 text-foreground mt-5">{value.title}</h3>
                <p className="type-body text-muted-foreground mt-3">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 lg:py-28" style={{ background: "linear-gradient(135deg, #0B1D4B 0%, #091840 40%, #0B1D4B 70%, #1a2a52 100%)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <span className="type-caption text-accent">How We Work</span>
            <h2 className="type-h2 text-inverse-fg mt-4 max-w-2xl mx-auto">
              From first call to{" "}
              <span className="text-accent">full operations.</span>
            </h2>
            <p className="type-body-lg text-inverse-muted mt-6 max-w-xl mx-auto">
              A streamlined engagement model designed for speed and clarity.
            </p>
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
            ].map((phase) => (
              <div
                key={phase.step}
                className="rounded-xl border border-white/10 p-8 hover:border-accent/40 transition-colors duration-300"
              >
                <span className="type-h3 text-accent font-display">
                  {phase.step}
                </span>
                <h3 className="type-h5 text-inverse-fg mt-4">{phase.title}</h3>
                <p className="type-body text-inverse-muted mt-3">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <TeamMarquee
        label="Our Team"
        heading="Operators who"
        headingAccent="understand the grind."
        members={[
          {
            name: "Alex Morgan",
            title: "Managing Partner",
            experience: "15 years in startup ops",
          },
          {
            name: "Jordan Lee",
            title: "Head of Compliance",
            experience: "Former Big 4 advisory",
          },
          {
            name: "Taylor Chen",
            title: "Financial Operations Lead",
            experience: "Fintech & banking specialist",
          },
          {
            name: "Sam Adeyemi",
            title: "Access & Infra Lead",
            experience: "Enterprise security background",
          },
          {
            name: "Casey Rivera",
            title: "Client Success Manager",
            experience: "Startup ecosystem veteran",
          },
        ]}
      />

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
