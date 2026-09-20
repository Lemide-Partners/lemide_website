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
  title: "The True Cost of DIY Compliance for Early-Stage Startups | Lemide Partners",
  description:
    "Founders spend an average of 12 hours per week on compliance tasks they could outsource. We break down the hidden costs and when it makes sense to bring in a partner.",
  openGraph: {
    title: "The True Cost of DIY Compliance for Early-Stage Startups",
    description: "Founders spend an average of 12 hours per week on compliance tasks they could outsource. We break down the hidden costs and when it makes sense to bring in a partner.",
    type: "article",
    publishedTime: "2026-07-10",
    authors: ["Lemide Partners"],
    images: [{ url: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The True Cost of DIY Compliance for Early-Stage Startups",
    description: "Founders spend an average of 12 hours per week on compliance tasks they could outsource.",
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
              background: "radial-gradient(ellipse 80% 60% at 40% 40%, #1a3a7a 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 75% 60%, #0e2460 0%, transparent 60%)",
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
              <linearGradient id="a2-silk" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2a4a8a" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#060e2a" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="a2-gold" x1="0%" y1="0%" x2="100%" y2="80%">
                <stop offset="0%" stopColor="#CC9E49" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#060e2a" stopOpacity="0" />
              </linearGradient>
              <filter id="a2-blur"><feGaussianBlur stdDeviation="20" /></filter>
            </defs>
            <path d="M-100 260 C250 100, 450 400, 750 200 C950 0, 1150 300, 1500 160 L1500 800 L-100 800Z" fill="url(#a2-silk)" filter="url(#a2-blur)" />
            <path d="M-50 480 C250 280, 450 530, 650 350 C850 170, 950 420, 1150 280" stroke="url(#a2-gold)" strokeWidth="120" fill="none" filter="url(#a2-blur)" strokeLinecap="round" />
            <circle cx="300" cy="250" r="140" fill="#CC9E49" fillOpacity="0.1" filter="url(#a2-blur)" />
          </svg>
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 30%, rgba(6,14,42,0.6) 100%)" }} />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-40 pb-16 lg:pt-48 lg:pb-24">
          <div className="flex items-center gap-3 mb-8">
            <Link href="/insights" className="type-caption text-white/60 hover:text-white/90 transition-colors">
              Insights
            </Link>
            <span className="text-white/30">/</span>
            <span className="type-caption text-white/90">Compliance</span>
          </div>
          <h1 className="type-h1 text-inverse-fg max-w-4xl" style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)", lineHeight: 1.15 }}>
            The true cost of DIY compliance for{" "}
            <span className="text-accent">early-stage startups</span>
          </h1>
          <div className="flex flex-wrap items-center gap-4 mt-8">
            <span className="px-3 py-1 rounded-full bg-white/[0.08] border border-white/[0.12] type-caption text-white/80">Compliance</span>
            <span className="type-caption text-white/60">Jul 2026</span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="type-caption text-white/60">4 min read</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="bg-white py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <Reveal animation="fade-up">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-12">
              <Image
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80"
                alt="Business compliance documents and checklists"
                fill
                unoptimized
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
                priority
              />
            </div>
          </Reveal>

          <Reveal animation="fade-up">
            <ShareButtons title="The true cost of DIY compliance for early-stage startups" className="mb-10 pb-10 border-b border-border/40" />
          </Reveal>

          <Reveal delay={0.1} animation="fade-up">
            <p className="type-body-lg text-muted-foreground leading-relaxed" style={{ textWrap: "pretty" }}>
              Compliance feels like a problem you can solve with a few Google
              searches and some late nights. Most early-stage founders try
              exactly that. They file their own annual reports, draft their own
              privacy policies, and track deadlines in a spreadsheet that no one
              else can find.
            </p>
          </Reveal>

          <Reveal delay={0.1} animation="fade-up">
            <p className="type-body-lg text-muted-foreground leading-relaxed mt-6" style={{ textWrap: "pretty" }}>
              It works until it does not. The real cost of DIY compliance is not
              in the filing fees. It is in the hours, the missed deadlines, and
              the problems that only surface when something goes wrong.
            </p>
          </Reveal>

          <Reveal delay={0.1} animation="fade-up">
            <h2 className="type-h3 text-foreground mt-16 mb-6">The hidden time tax</h2>
            <p className="type-body-lg text-muted-foreground leading-relaxed" style={{ textWrap: "pretty" }}>
              According to a 2025 survey by the National Small Business
              Association, founders at companies with fewer than 20 employees
              spend an average of 12 hours per week on regulatory and
              compliance tasks. That is over 600 hours per year, roughly 15
              full work weeks spent on activities that do not build your
              product, close deals, or serve customers.
            </p>
          </Reveal>

          <Reveal delay={0.1} animation="fade-up">
            <div className="my-10 bg-[#f8f8f6] rounded-2xl p-8 lg:p-10">
              <h3 className="type-h5 text-foreground mb-6">Where founder time actually goes</h3>
              <ul className="space-y-4">
                {[
                  "Researching province-specific or state-specific filing requirements whenever a new employee is hired remotely",
                  "Manually tracking annual return due dates across multiple provinces and states (each with different deadlines and forms)",
                  "Drafting and updating privacy policies, terms of service, and employee handbooks without legal review",
                  "Reconciling bookkeeping with actual bank statements, often months behind",
                  "Responding to government notices from CRA, provincial registries, or U.S. registered agents that arrive without context",
                  "Preparing documentation for investor calls that should already exist in a data room",
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
            <h2 className="type-h3 text-foreground mt-16 mb-6">The cost of getting it wrong</h2>
            <p className="type-body-lg text-muted-foreground leading-relaxed" style={{ textWrap: "pretty" }}>
              Missed compliance deadlines carry real financial consequences.
              In Canada, late annual return filings can trigger penalties and
              even involuntary dissolution of your corporation. In the U.S.,
              late annual report filings can result in penalties ranging from
              $50 to $500 per state, per filing. In both countries, failure to
              file can lead to administrative dissolution, meaning your company
              technically ceases to exist as a legal entity.
            </p>
          </Reveal>

          <Reveal delay={0.1} animation="fade-up">
            <p className="type-body-lg text-muted-foreground leading-relaxed mt-6" style={{ textWrap: "pretty" }}>
              In Canada, Corporations Canada charges a late filing fee for
              annual returns, and provinces like Ontario can cancel your
              business registration for non-compliance. If you also operate
              in the U.S., the costs compound further: California charges
              $250 to $500 in late filing penalties, and Delaware imposes a
              $200 late fee plus 1.5% monthly interest on unpaid franchise
              taxes.
            </p>
          </Reveal>

          <Reveal delay={0.1} animation="fade-up">
            <blockquote className="my-12 border-l-2 border-accent pl-6 py-2">
              <p className="type-h5 text-foreground" style={{ lineHeight: 1.6 }}>
                The founder who spends Sunday nights Googling CRA filing
                deadlines or provincial registration requirements is not
                saving money. They are spending their most valuable resource
                on their lowest-value task.
              </p>
            </blockquote>
          </Reveal>

          <Reveal delay={0.1} animation="fade-up">
            <h2 className="type-h3 text-foreground mt-16 mb-6">When to stop doing it yourself</h2>
            <p className="type-body-lg text-muted-foreground leading-relaxed" style={{ textWrap: "pretty" }}>
              There is no universal trigger, but the pattern is consistent.
              Most founders reach the breaking point when one of these happens:
            </p>
          </Reveal>

          <Reveal delay={0.1} animation="fade-up">
            <div className="my-10 space-y-6">
              {[
                { signal: "Multi-jurisdiction operations", detail: "The moment you have employees or customers in more than two provinces, or you expand into the U.S., tracking each jurisdiction's requirements manually becomes a full-time job. Extra-provincial registrations, payroll deductions, and tax filings each have their own deadlines and forms." },
                { signal: "Fundraising timeline", detail: "Investors expect a clean compliance record. If you are six months from a raise, every unfiled return and missing registration becomes a line item in due diligence that can slow or kill a deal." },
                { signal: "First employee hire", detail: "Employment law introduces an entirely new compliance surface: ROE filings, provincial employment standards, workers' compensation, and EI/CPP contributions. If you hire in the U.S., add I-9 verification and state-specific requirements. Missing any of these creates liability." },
                { signal: "Customer data handling", detail: "Privacy regulations like PIPEDA (federal), Quebec's Law 25, and provincial privacy statutes require documented policies and procedures. If you serve U.S. customers, CCPA and state-level breach notification laws apply too. A DIY privacy policy downloaded from the internet does not hold up under scrutiny." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="shrink-0 w-40">
                    <span className="type-body-sm font-display font-medium text-accent">{item.signal}</span>
                  </div>
                  <p className="type-body text-muted-foreground" style={{ textWrap: "pretty" }}>{item.detail}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} animation="fade-up">
            <h2 className="type-h3 text-foreground mt-16 mb-6">What smart outsourcing looks like in 2026</h2>
            <p className="type-body-lg text-muted-foreground leading-relaxed" style={{ textWrap: "pretty" }}>
              The best compliance partners in 2026 are not just filing
              paperwork. They are building systems that keep founders
              informed without requiring them to become compliance experts.
              Look for partners who provide:
            </p>
          </Reveal>

          <Reveal delay={0.1} animation="fade-up">
            <div className="my-10 bg-[#f8f8f6] rounded-2xl p-8 lg:p-10">
              <ul className="space-y-4">
                {[
                  "Automated deadline tracking with proactive reminders, not reactive scrambles",
                  "Centralized dashboards showing filing status across all jurisdictions",
                  "Integrated registered agent services that route government mail to the right person",
                  "Data room preparation that runs continuously, not just before a fundraise",
                  "Transparent pricing with no surprise fees for amendments or rush filings",
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
            <h2 className="type-h3 text-foreground mt-16 mb-6">The bottom line</h2>
            <p className="type-body-lg text-muted-foreground leading-relaxed" style={{ textWrap: "pretty" }}>
              DIY compliance is a reasonable choice when you are a solo founder
              operating in one province with no employees. Beyond that point, the
              math changes. Every hour you spend on compliance is an hour you
              are not spending on the work that actually grows your company.
            </p>
          </Reveal>

          <Reveal delay={0.1} animation="fade-up">
            <p className="type-body-lg text-muted-foreground leading-relaxed mt-6" style={{ textWrap: "pretty" }}>
              The question is not whether you can handle compliance yourself.
              You probably can. The question is whether you should.
            </p>
          </Reveal>

          {/* Share + Nav */}
          <Reveal delay={0.1} animation="fade-up">
            <div className="mt-16 pt-10 border-t border-border/40">
              <ShareButtons title="The true cost of DIY compliance for early-stage startups" className="mb-8" />
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <Link href="/insights/operational-infrastructure-series-a" className="type-body-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                  </svg>
                  Prev: Why Operational Infrastructure Is the Silent Killer
                </Link>
                <Link href="/insights/multi-state-operations-playbook" className="type-body-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                  Next: Multi-State Operations Playbook
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
        heading="Stop spending your weekends on compliance."
        headingAccent="Let us handle it."
        ctaLabel="Book a Call"
        ctaHref="https://calendly.com/lemide/30min?month=2026-09"
      />

      <Footer />
    </>
  );
}
