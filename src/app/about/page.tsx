import type { Metadata } from "next";
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
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28" style={{ background: "linear-gradient(135deg, #0B1D4B 0%, #091840 40%, #0B1D4B 70%, #1a2a52 100%)" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="type-caption text-accent">About Us</span>
          <h1 className="type-h1 text-inverse-fg mt-4">
            We build the backbone so founders can{" "}
            <span className="text-accent">build the future.</span>
          </h1>
          <p className="type-body-lg text-inverse-muted mt-6 max-w-2xl mx-auto">
            Lemide Partners is the operational infrastructure partner for
            early-stage startups. We handle incorporation, compliance, banking,
            tooling, and credentials — so you can focus on product and growth.
          </p>
        </div>
      </section>

      <MetricsBar
        metrics={[
          { value: "12+", label: "Years of Experience" },
          { value: "50+", label: "Startups Supported" },
          { value: "5+", label: "Countries Covered" },
          { value: "30", label: "Days to Readiness" },
        ]}
      />

      {/* Story */}
      <About
        label="Our Story"
        heading="Born from the trenches of early-stage operations."
        description="Lemide was founded by operators who lived the pain of building startups from scratch — navigating state filings, banking hurdles, compliance deadlines, and credential management while trying to ship product. We built Lemide to be the partner we wished we had: one team, one point of contact, handling everything behind the scenes so founders never have to choose between moving fast and getting it right."
        ctaLabel="Get in Touch"
        ctaHref="/contact"
      />

      {/* Values */}
      <section className="bg-background py-20 lg:py-28">
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
