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
  title: "Audit Ready in 90 Days | Lemide Partners",
  description:
    "How a vertical SaaS company went from informal operations to fully audit-ready in 90 days, closing their funding round on schedule with no renegotiated terms.",
};

export default function AuditReadyPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0" style={{ background: "#070f30" }}>
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse 80% 60% at 60% 40%, #1e3570 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 20% 60%, #142860 0%, transparent 60%), radial-gradient(ellipse 40% 35% at 80% 70%, #1a3075 0%, transparent 50%)",
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
              <linearGradient id="cs2-silk1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2a4590" stopOpacity="0.9" />
                <stop offset="40%" stopColor="#1a3578" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#070f30" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="cs2-silk2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3355b0" stopOpacity="0.5" />
                <stop offset="50%" stopColor="#1e3d80" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#070f30" stopOpacity="0.2" />
              </linearGradient>
              <linearGradient id="cs2-accent" x1="0%" y1="0%" x2="100%" y2="80%">
                <stop offset="0%" stopColor="#4a7ad4" stopOpacity="0.5" />
                <stop offset="50%" stopColor="#2a5aaa" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#070f30" stopOpacity="0" />
              </linearGradient>
              <filter id="cs2-blur">
                <feGaussianBlur stdDeviation="20" />
              </filter>
            </defs>
            <path
              d="M-100 250 C200 100, 500 400, 700 200 C900 0, 1100 350, 1500 150 L1500 800 L-100 800Z"
              fill="url(#cs2-silk1)"
              filter="url(#cs2-blur)"
            />
            <path
              d="M400 800 C500 450, 800 150, 1100 300 C1400 450, 1500 100, 1600 250 L1600 800Z"
              fill="url(#cs2-silk2)"
              filter="url(#cs2-blur)"
            />
            <path
              d="M-50 450 C200 250, 400 500, 600 300 C800 100, 900 350, 1100 200"
              stroke="url(#cs2-accent)"
              strokeWidth="140"
              fill="none"
              filter="url(#cs2-blur)"
              strokeLinecap="round"
            />
            <circle cx="1000" cy="200" r="180" fill="#3366cc" fillOpacity="0.25" filter="url(#cs2-blur)" />
            <circle cx="300" cy="500" r="100" fill="#CC9E49" fillOpacity="0.1" filter="url(#cs2-blur)" />
          </svg>
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 30%, rgba(7,15,48,0.6) 100%)",
            }}
          />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-40 pb-16 lg:pt-48 lg:pb-24">
          <div className="flex items-center gap-3 mb-8">
            <Link href="/case-studies" className="type-caption text-white/60 hover:text-white/90 transition-colors">
              Case Studies
            </Link>
            <span className="text-white/30">/</span>
            <span className="type-caption text-white/90">Due Diligence</span>
          </div>
          <h1 className="type-h1 text-inverse-fg max-w-4xl" style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)", lineHeight: 1.1 }}>
            Audit Ready in{" "}
            <span className="text-accent">90 Days</span>
          </h1>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mt-6">
            <p className="type-body-lg text-inverse-muted max-w-2xl" style={{ textWrap: "pretty" }}>
              A vertical SaaS company had grown fast on foundations nobody had
              time to formalize. Then a term sheet arrived, and the due
              diligence request list landed a week later.
            </p>
            <div className="flex gap-3 shrink-0">
              <span className="px-3 py-1 rounded-full bg-white/[0.08] border border-white/[0.12] type-caption text-white/80">Due Diligence</span>
              <span className="px-3 py-1 rounded-full bg-white/[0.08] border border-white/[0.12] type-caption text-white/80">Fundraising</span>
              <span className="px-3 py-1 rounded-full bg-white/[0.08] border border-white/[0.12] type-caption text-white/80">Operations</span>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-white border-b border-border/40">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 py-6">
          <p className="type-body-sm text-muted-foreground italic">
            This is a composite, illustrative scenario reflecting challenges
            founders commonly face ahead of a funding round. It does not
            describe a specific Lemide client or engagement.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <Reveal animation="fade-up">
            <blockquote className="mb-12 border-l-2 border-accent pl-6 py-2">
              <p className="type-h5 text-foreground" style={{ lineHeight: 1.6 }}>
                A term sheet doesn&apos;t ask whether your company works. It
                asks whether you can prove it.
              </p>
            </blockquote>
          </Reveal>

          <Reveal delay={0.1} animation="fade-up">
            <h2 className="type-h3 text-foreground mb-6">The Situation</h2>
            <p className="type-body-lg text-muted-foreground leading-relaxed" style={{ textWrap: "pretty" }}>
              A vertical SaaS company serving skilled trades scheduling had
              grown the way most early-stage companies grow: fast, and on
              foundations nobody had time to formalize. Vendor agreements lived
              in email threads. HR practices lived in the founder&apos;s memory.
              A couple of long-term contractors had never signed anything more
              formal than a Slack message confirming a rate.
            </p>
          </Reveal>

          <Reveal delay={0.1} animation="fade-up">
            <p className="type-body-lg text-muted-foreground leading-relaxed mt-6" style={{ textWrap: "pretty" }}>
              None of that had mattered, until a term sheet arrived and the due
              diligence request list landed a week later. Reading it felt less
              like a checklist and more like an inventory of everything the
              company had never written down. Signed vendor contracts.
              Documented HR policies. Clear contractor classification. A paper
              trail behind decisions that had, until that point, only ever
              existed as shared understanding between two co-founders.
            </p>
          </Reveal>

          <Reveal delay={0.1} animation="fade-up">
            <p className="type-body-lg text-muted-foreground leading-relaxed mt-6 font-medium text-foreground/80">
              The clock on the raise didn&apos;t stop for any of this to get
              sorted out.
            </p>
          </Reveal>

          <Reveal delay={0.1} animation="fade-up">
            <h2 className="type-h3 text-foreground mt-16 mb-6">The Approach</h2>
            <p className="type-body-lg text-muted-foreground leading-relaxed" style={{ textWrap: "pretty" }}>
              The founders brought in an operations partner to run exactly that
              workstream while they kept running the raise itself, because those
              two jobs don&apos;t combine well under deadline pressure.
            </p>
          </Reveal>

          <Reveal delay={0.1} animation="fade-up">
            <p className="type-body-lg text-muted-foreground leading-relaxed mt-6" style={{ textWrap: "pretty" }}>
              Contracts got pulled out of inboxes and turned into actual signed
              agreements. Policy gaps got closed, not for their own sake, but
              because a diligence team was going to ask for precisely this, and
              there was a closing date attached to the answer. Nothing here was
              invented to look tidy. It was the real operational picture,
              documented properly for the first time.
            </p>
          </Reveal>

          {/* Key actions */}
          <Reveal delay={0.1} animation="fade-up">
            <div className="my-12 bg-[#f8f8f6] rounded-2xl p-8 lg:p-10">
              <h3 className="type-h5 text-foreground mb-6">What the operations partner handled</h3>
              <ul className="space-y-4">
                {[
                  "Pulled vendor agreements out of email threads and turned them into signed, structured contracts",
                  "Documented HR policies that had previously lived only in the founder's memory",
                  "Resolved contractor classification for long-term team members who had never been formally classified",
                  "Built a paper trail behind decisions that had only existed as shared understanding between co-founders",
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
              The round closed on schedule, with no renegotiated terms triggered
              by anything diligence turned up.
            </p>
          </Reveal>

          <Reveal delay={0.1} animation="fade-up">
            <blockquote className="my-12 border-l-2 border-accent pl-6 py-2">
              <p className="type-body-lg text-foreground" style={{ lineHeight: 1.8 }}>
                None of this reflected sloppiness on the founders&apos; part. It
                reflected where their hours had correctly gone for two years:
                product and customers, not paperwork nobody was asking to see
                yet.
              </p>
            </blockquote>
          </Reveal>

          <Reveal delay={0.1} animation="fade-up">
            <p className="type-body-lg text-muted-foreground leading-relaxed" style={{ textWrap: "pretty" }}>
              The debt only becomes a problem on the one day someone else needs
              to trust what you built without you standing there to explain it
              in person. Getting ahead of that day, rather than discovering it
              mid-raise, is the entire point of building the operational
              scaffolding early.
            </p>
          </Reveal>

          {/* Navigation */}
          <Reveal delay={0.1} animation="fade-up">
            <div className="mt-16 pt-10 border-t border-border/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <Link href="/case-studies/compliance-maze" className="type-body-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                Previous: The Compliance Maze
              </Link>
              <Link href="/case-studies/two-countries-one-payroll" className="type-body-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                Next: Two Countries, One Payroll
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <FooterCta
        heading="Need to get audit-ready fast?"
        headingAccent="Let's talk."
        ctaLabel="Book a Call"
        ctaHref="https://calendly.com/lemide/30min?month=2026-09"
      />

      <Footer />
    </>
  );
}
