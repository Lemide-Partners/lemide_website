import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui";
import {
  Navbar,
  FooterCta,
  Footer,
  Reveal,
} from "@/components/sections";

export const metadata: Metadata = {
  title: "The Compliance Maze That Almost Cost a Funding Close | Lemide Partners",
  description:
    "How a payments startup building a Canada-to-Nigeria remittance corridor navigated regulatory complexity to close their funding round on schedule.",
};

export default function ComplianceMazePage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0" style={{ background: "#0c1528" }}>
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse 80% 60% at 60% 40%, #2a3d6a 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 20% 60%, #1a2d55 0%, transparent 60%), radial-gradient(ellipse 40% 35% at 80% 70%, #1e3058 0%, transparent 50%)",
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
              <linearGradient id="cs1-silk1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2a4070" stopOpacity="0.9" />
                <stop offset="40%" stopColor="#1a3060" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#0c1528" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="cs1-gold" x1="0%" y1="0%" x2="100%" y2="80%">
                <stop offset="0%" stopColor="#CC9E49" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#a07830" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#0c1528" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="cs1-highlight" x1="40%" y1="0%" x2="60%" y2="100%">
                <stop offset="0%" stopColor="#d4a94a" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#1a3060" stopOpacity="0" />
              </linearGradient>
              <filter id="cs1-blur">
                <feGaussianBlur stdDeviation="20" />
              </filter>
            </defs>
            <path
              d="M-100 200 C200 80, 500 350, 700 150 C900 -50, 1100 300, 1500 100 L1500 800 L-100 800Z"
              fill="url(#cs1-silk1)"
              filter="url(#cs1-blur)"
            />
            <path
              d="M-50 500 C200 300, 400 550, 600 350 C800 150, 900 400, 1100 250 C1300 100, 1400 350, 1550 200"
              stroke="url(#cs1-gold)"
              strokeWidth="140"
              fill="none"
              filter="url(#cs1-blur)"
              strokeLinecap="round"
            />
            <path
              d="M300 0 C450 200, 700 100, 900 300 C1100 500, 1200 200, 1440 350"
              stroke="url(#cs1-highlight)"
              strokeWidth="180"
              fill="none"
              filter="url(#cs1-blur)"
              strokeLinecap="round"
            />
            <circle cx="1100" cy="150" r="200" fill="#CC9E49" fillOpacity="0.2" filter="url(#cs1-blur)" />
            <circle cx="250" cy="450" r="120" fill="#CC9E49" fillOpacity="0.12" filter="url(#cs1-blur)" />
          </svg>
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 30%, rgba(12,21,40,0.6) 100%)",
            }}
          />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-40 pb-16 lg:pt-48 lg:pb-24">
          <div className="flex items-center gap-3 mb-8">
            <Link href="/case-studies" className="type-caption text-white/60 hover:text-white/90 transition-colors">
              Case Studies
            </Link>
            <span className="text-white/30">/</span>
            <span className="type-caption text-white/90">Compliance</span>
          </div>
          <h1 className="type-h1 text-inverse-fg max-w-4xl" style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)", lineHeight: 1.1 }}>
            The Compliance Maze That Almost Cost a{" "}
            <span className="text-accent">Funding Close</span>
          </h1>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mt-6">
            <p className="type-body-lg text-inverse-muted max-w-2xl" style={{ textWrap: "pretty" }}>
              A payments startup building a Canada-to-Nigeria remittance corridor
              discovered, six weeks before closing, that they weren&apos;t actually
              cleared to move money yet.
            </p>
            <div className="flex gap-3 shrink-0">
              <span className="px-3 py-1 rounded-full bg-white/[0.08] border border-white/[0.12] type-caption text-white/80">Payments</span>
              <span className="px-3 py-1 rounded-full bg-white/[0.08] border border-white/[0.12] type-caption text-white/80">Compliance</span>
              <span className="px-3 py-1 rounded-full bg-white/[0.08] border border-white/[0.12] type-caption text-white/80">Fundraising</span>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-white border-b border-border/40">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 py-6">
          <p className="type-body-sm text-muted-foreground italic">
            This is a composite, illustrative scenario reflecting challenges
            founders commonly face when entering the Canadian market. It does
            not describe a specific Lemide client or engagement.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <Reveal animation="fade-up">
            <h2 className="type-h3 text-foreground mb-6">The Situation</h2>
            <p className="type-body-lg text-muted-foreground leading-relaxed" style={{ textWrap: "pretty" }}>
              Six weeks before a term sheet was set to close, a payments startup
              building a Canada-to-Nigeria remittance corridor discovered
              something uncomfortable: they weren&apos;t actually cleared to move
              money yet.
            </p>
          </Reveal>

          <Reveal delay={0.1} animation="fade-up">
            <p className="type-body-lg text-muted-foreground leading-relaxed mt-6" style={{ textWrap: "pretty" }}>
              The founders had done what most first-time operators do well. They
              incorporated in Ontario, built a working product, signed early
              corridor partners, and treated compliance as a checklist they had
              already worked through. Registration, in their mind, was paperwork.
              A formality that happened somewhere in the background while the
              real work continued.
            </p>
          </Reveal>

          <Reveal delay={0.15} animation="fade-up">
            <blockquote className="my-12 border-l-2 border-accent pl-6 py-2">
              <p className="type-h5 text-foreground" style={{ lineHeight: 1.6 }}>
                Then investor counsel asked a simple question during diligence:
                what is the current status of your Retail Payment Activities Act
                registration with the Bank of Canada?
              </p>
            </blockquote>
          </Reveal>

          <Reveal delay={0.1} animation="fade-up">
            <p className="type-body-lg text-muted-foreground leading-relaxed" style={{ textWrap: "pretty" }}>
              The honest answer was that it hadn&apos;t been filed. Not because
              anyone had been negligent, but because nobody on the founding team
              had mapped out what payment service provider registration actually
              requires. It isn&apos;t a form. It&apos;s a documented risk assessment, a
              safeguarding of funds framework, and a set of reporting
              relationships that take real time to assemble properly, layered on
              top of CRA program accounts and provincial money services business
              registration that all have to be sequenced correctly or they stall
              each other out.
            </p>
          </Reveal>

          <Reveal delay={0.1} animation="fade-up">
            <p className="type-body-lg text-muted-foreground leading-relaxed mt-6" style={{ textWrap: "pretty" }}>
              Six weeks is not enough time to build that from a standing start,
              and everyone in the room knew it.
            </p>
          </Reveal>

          <Reveal delay={0.1} animation="fade-up">
            <h2 className="type-h3 text-foreground mt-16 mb-6">The Approach</h2>
            <p className="type-body-lg text-muted-foreground leading-relaxed" style={{ textWrap: "pretty" }}>
              This is where the founders brought in a fractional operations
              partner who already understood how these pieces interact for a
              payments business specifically, rather than assembling three
              separate specialists who would each need weeks just to get
              oriented on the file.
            </p>
          </Reveal>

          <Reveal delay={0.1} animation="fade-up">
            <p className="type-body-lg text-muted-foreground leading-relaxed mt-6" style={{ textWrap: "pretty" }}>
              The work wasn&apos;t glamorous. It was sequencing filings so
              nothing blocked the next one, building documentation the way a
              regulator actually wants to see it rather than the way a founder
              assumes it should look, and giving investor counsel an honest
              weekly status instead of an optimistic one.
            </p>
          </Reveal>

          {/* Key actions */}
          <Reveal delay={0.1} animation="fade-up">
            <div className="my-12 bg-[#f8f8f6] rounded-2xl p-8 lg:p-10">
              <h3 className="type-h5 text-foreground mb-6">What the operations partner handled</h3>
              <ul className="space-y-4">
                {[
                  "Mapped and sequenced four separate government filing relationships that don't talk to each other",
                  "Built Bank of Canada RPAA registration documentation from scratch, including the risk assessment and safeguarding framework",
                  "Coordinated CRA program accounts and provincial MSB registration in the correct dependency order",
                  "Provided investor counsel with honest, weekly progress updates on the regulatory timeline",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <div className="shrink-0 w-6 h-6 rounded-full bg-accent/10 text-accent flex items-center justify-center mt-0.5">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <p className="type-body text-muted-foreground">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1} animation="fade-up">
            <h2 className="type-h3 text-foreground mt-16 mb-6">The Outcome</h2>
            <p className="type-body-lg text-muted-foreground leading-relaxed" style={{ textWrap: "pretty" }}>
              The round closed on schedule. Not because of a last-minute
              miracle, but because there was finally a clear, accurate map of
              what had to happen and in what order, and someone whose full job
              was making sure that map got followed.
            </p>
          </Reveal>

          <Reveal delay={0.1} animation="fade-up">
            <blockquote className="my-12 border-l-2 border-accent pl-6 py-2">
              <p className="type-body-lg text-foreground" style={{ lineHeight: 1.8 }}>
                The founders were never careless. They were compliant with
                everything they could see clearly. What they couldn&apos;t see
                was the timeline risk sitting between four separate government
                relationships that don&apos;t talk to each other.
              </p>
            </blockquote>
          </Reveal>

          <Reveal delay={0.1} animation="fade-up">
            <p className="type-body-lg text-muted-foreground leading-relaxed" style={{ textWrap: "pretty" }}>
              That gap between what a founder can see and what a regulator
              actually requires is precisely what an operations partner is
              supposed to close, ideally before it becomes a closing risk
              instead of after.
            </p>
          </Reveal>

          {/* Navigation */}
          <Reveal delay={0.1} animation="fade-up">
            <div className="mt-16 pt-10 border-t border-border/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <Link href="/case-studies" className="type-body-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                All Case Studies
              </Link>
              <Link href="/case-studies/audit-ready-90-days" className="type-body-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                Next: Audit Ready in 90 Days
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <FooterCta
        heading="Facing a compliance challenge?"
        headingAccent="Let's talk."
        ctaLabel="Book a Call"
        ctaHref="/contact"
      />

      <Footer />
    </>
  );
}
