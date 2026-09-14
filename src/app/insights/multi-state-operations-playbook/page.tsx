import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Navbar,
  FooterCta,
  Footer,
  Reveal,
  ShareButtons,
} from "@/components/sections";

export const metadata: Metadata = {
  title: "Multi-State Operations: A Founder's Playbook | Lemide Partners",
  description:
    "Expanding across state lines means navigating a maze of registrations, tax obligations, and employment law. Our step-by-step guide keeps you compliant as you scale.",
  openGraph: {
    title: "Multi-State Operations: A Founder's Playbook",
    description: "Expanding across state lines means navigating a maze of registrations, tax obligations, and employment law. Our step-by-step guide keeps you compliant as you scale.",
    type: "article",
    publishedTime: "2026-06-18",
    authors: ["Lemide Partners"],
    images: [{ url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Multi-State Operations: A Founder's Playbook",
    description: "Expanding across state lines means navigating registrations, tax obligations, and employment law.",
  },
};

export default function ArticlePage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0" style={{ background: "#060e2a" }}>
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse 80% 60% at 55% 35%, #1a3a7a 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 25% 65%, #0e2460 0%, transparent 60%)",
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
              <linearGradient id="a3-silk" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2a4a8a" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#060e2a" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="a3-gold" x1="0%" y1="0%" x2="100%" y2="80%">
                <stop offset="0%" stopColor="#CC9E49" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#060e2a" stopOpacity="0" />
              </linearGradient>
              <filter id="a3-blur"><feGaussianBlur stdDeviation="20" /></filter>
            </defs>
            <path d="M-100 200 C300 80, 550 350, 750 150 C950 -50, 1100 280, 1500 100 L1500 800 L-100 800Z" fill="url(#a3-silk)" filter="url(#a3-blur)" />
            <path d="M-50 540 C200 340, 400 590, 650 390 C850 190, 950 440, 1200 290" stroke="url(#a3-gold)" strokeWidth="120" fill="none" filter="url(#a3-blur)" strokeLinecap="round" />
            <circle cx="1200" cy="180" r="150" fill="#CC9E49" fillOpacity="0.12" filter="url(#a3-blur)" />
            <circle cx="200" cy="400" r="100" fill="#2a5099" fillOpacity="0.15" filter="url(#a3-blur)" />
          </svg>
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 30%, rgba(6,14,42,0.6) 100%)" }} />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-40 pb-16 lg:pt-48 lg:pb-24">
          <div className="flex items-center gap-3 mb-8">
            <Link href="/insights" className="type-caption text-white/60 hover:text-white/90 transition-colors">
              Insights
            </Link>
            <span className="text-white/30">/</span>
            <span className="type-caption text-white/90">Operations</span>
          </div>
          <h1 className="type-h1 text-inverse-fg max-w-4xl" style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)", lineHeight: 1.15 }}>
            Multi-state operations:{" "}
            <span className="text-accent">a founder&apos;s playbook</span>
          </h1>
          <div className="flex flex-wrap items-center gap-4 mt-8">
            <span className="px-3 py-1 rounded-full bg-white/[0.08] border border-white/[0.12] type-caption text-white/80">Operations</span>
            <span className="type-caption text-white/60">Jun 2026</span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="type-caption text-white/60">8 min read</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="bg-white py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <Reveal animation="fade-up">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-12">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80"
                alt="Modern office buildings representing multi-state expansion"
                fill
                unoptimized
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
                priority
              />
            </div>
          </Reveal>

          <Reveal animation="fade-up">
            <ShareButtons title="Multi-state operations: a founder's playbook" className="mb-10 pb-10 border-b border-border/40" />
          </Reveal>

          <Reveal delay={0.1} animation="fade-up">
            <p className="type-body-lg text-muted-foreground leading-relaxed" style={{ textWrap: "pretty" }}>
              Your first remote hire in another state feels like progress. You
              are growing, expanding your talent pool, and building a team
              that is not limited by geography. What most founders do not
              realize is that this single hire just triggered a cascade of
              legal and tax obligations in a state where your company may not
              be registered to do business.
            </p>
          </Reveal>

          <Reveal delay={0.1} animation="fade-up">
            <p className="type-body-lg text-muted-foreground leading-relaxed mt-6" style={{ textWrap: "pretty" }}>
              Multi-state operations are one of the most common compliance
              traps for growing startups. Here is a practical guide to
              navigating it in 2026.
            </p>
          </Reveal>

          <Reveal delay={0.1} animation="fade-up">
            <h2 className="type-h3 text-foreground mt-16 mb-6">What triggers nexus in a new state</h2>
            <p className="type-body-lg text-muted-foreground leading-relaxed" style={{ textWrap: "pretty" }}>
              &quot;Nexus&quot; is the legal term for having enough presence in
              a state to trigger tax and registration obligations. In 2026,
              the most common triggers for startups include:
            </p>
          </Reveal>

          <Reveal delay={0.1} animation="fade-up">
            <div className="my-10 bg-[#f8f8f6] rounded-2xl p-8 lg:p-10">
              <h3 className="type-h5 text-foreground mb-6">Common nexus triggers</h3>
              <ul className="space-y-4">
                {[
                  "Hiring a W-2 employee who lives and works in the state, even if they work from home",
                  "Having a physical office, co-working membership, or mailing address in the state",
                  "Storing inventory, equipment, or other tangible property in the state",
                  "Exceeding economic nexus thresholds for sales tax (commonly $100,000 in sales or 200 transactions per year in the state)",
                  "Sending employees to the state regularly for client meetings, conferences, or training",
                  "Hiring independent contractors in states with broad nexus rules (California, New York, Massachusetts)",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <div className="shrink-0 w-5 h-5 rounded-full bg-accent/10 text-accent flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
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
            <h2 className="type-h3 text-foreground mt-16 mb-6">The registration checklist</h2>
            <p className="type-body-lg text-muted-foreground leading-relaxed" style={{ textWrap: "pretty" }}>
              Once you establish nexus in a new state, here is the sequence of
              steps to follow. Missing any of these creates compounding
              problems, so treat this as a sequential process rather than a
              menu:
            </p>
          </Reveal>

          <Reveal delay={0.1} animation="fade-up">
            <div className="my-10 space-y-8">
              {[
                { step: "1. Foreign qualification", detail: "File a foreign qualification (sometimes called a certificate of authority) with the new state's Secretary of State. This registers your existing entity to do business there without forming a new company. Processing times vary from 1 day (online in Delaware) to 6 weeks (paper filing in New York)." },
                { step: "2. Registered agent", detail: "Appoint a registered agent in the new state. This is legally required and ensures you receive official government correspondence, including tax notices and legal service. Use a professional service rather than listing a team member's home address." },
                { step: "3. State tax registrations", detail: "Register for state income tax withholding (if you have employees), sales tax (if you sell taxable goods or services), and any applicable state-level business taxes. Each state has its own registration portal and timeline." },
                { step: "4. Unemployment insurance", detail: "Register with the state's unemployment insurance agency. This is separate from federal unemployment tax and carries its own rates, reporting schedules, and payment deadlines." },
                { step: "5. Workers' compensation", detail: "Secure workers' compensation coverage that includes the new state. Requirements vary: some states allow private insurance, others require coverage through a state fund. Texas and a few other states make it optional, but lenders and investors often require it regardless." },
                { step: "6. Local business licenses", detail: "Check whether the city or county where your employee works requires a local business license or permit. Cities like San Francisco, Chicago, and Philadelphia have their own business tax registrations on top of state requirements." },
                { step: "7. Employment law compliance", detail: "Review the new state's employment laws. Minimum wage, paid leave requirements, non-compete enforceability, and pay transparency rules all vary by state. In 2026, over 20 states have their own paid leave mandates." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="shrink-0 w-44">
                    <span className="type-body-sm font-display font-medium text-accent">{item.step}</span>
                  </div>
                  <p className="type-body text-muted-foreground" style={{ textWrap: "pretty" }}>{item.detail}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} animation="fade-up">
            <blockquote className="my-12 border-l-2 border-accent pl-6 py-2">
              <p className="type-h5 text-foreground" style={{ lineHeight: 1.6 }}>
                The companies that scale smoothly across state lines are the
                ones that treat each new hire as a compliance event, not just
                a headcount addition.
              </p>
            </blockquote>
          </Reveal>

          <Reveal delay={0.1} animation="fade-up">
            <h2 className="type-h3 text-foreground mt-16 mb-6">The states that surprise founders most</h2>
            <p className="type-body-lg text-muted-foreground leading-relaxed" style={{ textWrap: "pretty" }}>
              Not all states are created equal. Based on our work with
              early-stage companies, these are the jurisdictions that generate
              the most unexpected compliance burdens:
            </p>
          </Reveal>

          <Reveal delay={0.1} animation="fade-up">
            <div className="my-10 bg-[#f8f8f6] rounded-2xl p-8 lg:p-10 space-y-6">
              {[
                { state: "California", note: "Requires a $800 minimum franchise tax regardless of revenue, has its own privacy law (CPRA), and applies strict independent contractor classification rules under AB5." },
                { state: "New York", note: "Paper-only foreign qualification filing with 4 to 6 week processing, publication requirement in two newspapers for LLCs (can cost $1,000 or more), and city-level taxes in NYC." },
                { state: "Massachusetts", note: "Broad nexus interpretation that can include remote employees of out-of-state companies. Non-compete agreements are heavily restricted." },
                { state: "Washington", note: "No state income tax, but has a Business & Occupation tax that applies to gross receipts, not profits. Even pre-revenue startups with employees there may owe B&O tax." },
              ].map((item, i) => (
                <div key={i}>
                  <h4 className="type-body font-display font-semibold text-foreground mb-1">{item.state}</h4>
                  <p className="type-body text-muted-foreground">{item.note}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} animation="fade-up">
            <h2 className="type-h3 text-foreground mt-16 mb-6">Building a system that scales</h2>
            <p className="type-body-lg text-muted-foreground leading-relaxed" style={{ textWrap: "pretty" }}>
              The difference between a company that struggles with multi-state
              compliance and one that handles it smoothly is not expertise. It
              is systems. Build these three practices into your operations
              early:
            </p>
          </Reveal>

          <Reveal delay={0.1} animation="fade-up">
            <div className="my-10 space-y-6">
              {[
                { practice: "Centralize your state map", detail: "Maintain a single document that lists every state where you have nexus, what triggered it, and what registrations and filings are active. Update it every time you hire, fire, or open a new location." },
                { practice: "Automate deadline tracking", detail: "Annual reports, tax filings, and registration renewals all have different due dates in different states. Use a compliance calendar or partner who tracks these proactively." },
                { practice: "Build compliance into hiring", detail: "Before extending an offer to someone in a new state, run through the registration checklist above. The cost of compliance in a new state is a real business expense that should factor into hiring decisions." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="shrink-0 w-52">
                    <span className="type-body-sm font-display font-medium text-accent">{item.practice}</span>
                  </div>
                  <p className="type-body text-muted-foreground" style={{ textWrap: "pretty" }}>{item.detail}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} animation="fade-up">
            <h2 className="type-h3 text-foreground mt-16 mb-6">The bottom line</h2>
            <p className="type-body-lg text-muted-foreground leading-relaxed" style={{ textWrap: "pretty" }}>
              Multi-state operations are inevitable for any startup that hires
              remotely or sells nationally. The compliance burden is real, but
              it is manageable if you approach it methodically rather than
              reactively.
            </p>
          </Reveal>

          <Reveal delay={0.1} animation="fade-up">
            <p className="type-body-lg text-muted-foreground leading-relaxed mt-6" style={{ textWrap: "pretty" }}>
              Every new state you enter is a small version of starting a
              business all over again. Treat it that way, and the surprises
              become routine steps in a playbook you have already written.
            </p>
          </Reveal>

          {/* Share + Nav */}
          <Reveal delay={0.1} animation="fade-up">
            <div className="mt-16 pt-10 border-t border-border/40">
              <ShareButtons title="Multi-state operations: a founder's playbook" className="mb-8" />
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <Link href="/insights/diy-compliance-costs" className="type-body-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                  </svg>
                  Prev: The True Cost of DIY Compliance
                </Link>
                <Link href="/insights/banking-setup-mistakes" className="type-body-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                  Next: Banking Setup Mistakes
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </article>

      <FooterCta
        heading="Expanding across state lines?"
        headingAccent="We'll keep you compliant."
        ctaLabel="Book a Call"
        ctaHref="/contact"
      />

      <Footer />
    </>
  );
}
