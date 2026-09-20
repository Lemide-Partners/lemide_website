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
  title: "Why Operational Infrastructure Is the Silent Killer of Series A Rounds | Lemide Partners",
  description:
    "Most founders don't lose funding because of a weak product. They lose it because investors find compliance gaps, messy cap tables, and no financial controls.",
  openGraph: {
    title: "Why Operational Infrastructure Is the Silent Killer of Series A Rounds",
    description: "Most founders don't lose funding because of a weak product. They lose it because investors find compliance gaps, messy cap tables, and no financial controls.",
    type: "article",
    publishedTime: "2026-08-15",
    authors: ["Lemide Partners"],
    images: [{ url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Operational Infrastructure Is the Silent Killer of Series A Rounds",
    description: "Most founders don't lose funding because of a weak product. They lose it because investors find compliance gaps.",
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
              background: "radial-gradient(ellipse 80% 60% at 60% 40%, #1a3a7a 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 20% 60%, #0e2460 0%, transparent 60%)",
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
              <linearGradient id="a1-silk" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2a4a8a" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#060e2a" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="a1-gold" x1="0%" y1="0%" x2="100%" y2="80%">
                <stop offset="0%" stopColor="#CC9E49" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#060e2a" stopOpacity="0" />
              </linearGradient>
              <filter id="a1-blur"><feGaussianBlur stdDeviation="20" /></filter>
            </defs>
            <path d="M-100 220 C200 90, 500 370, 700 170 C900 -30, 1100 320, 1500 120 L1500 800 L-100 800Z" fill="url(#a1-silk)" filter="url(#a1-blur)" />
            <path d="M-50 520 C200 320, 400 570, 600 370 C800 170, 900 420, 1100 270" stroke="url(#a1-gold)" strokeWidth="120" fill="none" filter="url(#a1-blur)" strokeLinecap="round" />
            <circle cx="1100" cy="200" r="160" fill="#CC9E49" fillOpacity="0.12" filter="url(#a1-blur)" />
          </svg>
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 30%, rgba(6,14,42,0.6) 100%)" }} />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-40 pb-16 lg:pt-48 lg:pb-24">
          <div className="flex items-center gap-3 mb-8">
            <Link href="/insights" className="type-caption text-white/60 hover:text-white/90 transition-colors">
              Insights
            </Link>
            <span className="text-white/30">/</span>
            <span className="type-caption text-white/90">Fundraising</span>
          </div>
          <h1 className="type-h1 text-inverse-fg max-w-4xl" style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)", lineHeight: 1.15 }}>
            Why operational infrastructure is the silent killer of{" "}
            <span className="text-accent">Series A rounds</span>
          </h1>
          <div className="flex flex-wrap items-center gap-4 mt-8">
            <span className="px-3 py-1 rounded-full bg-white/[0.08] border border-white/[0.12] type-caption text-white/80">Fundraising</span>
            <span className="type-caption text-white/60">Aug 2026</span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="type-caption text-white/60">6 min read</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="bg-white py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <Reveal animation="fade-up">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-12">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80"
                alt="Startup metrics dashboard and financial planning"
                fill
                unoptimized
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
                priority
              />
            </div>
          </Reveal>

          <Reveal animation="fade-up">
            <ShareButtons title="Why operational infrastructure is the silent killer of Series A rounds" className="mb-10 pb-10 border-b border-border/40" />
          </Reveal>

          <Reveal delay={0.1} animation="fade-up">
            <p className="type-body-lg text-muted-foreground leading-relaxed" style={{ textWrap: "pretty" }}>
              Every founder knows due diligence is coming. Few understand how
              deeply investors look at operational infrastructure before writing
              a check. The product might be strong, the market timing right, and
              the growth metrics compelling. But behind the pitch deck, investors
              are asking: does this company actually work?
            </p>
          </Reveal>

          <Reveal delay={0.1} animation="fade-up">
            <p className="type-body-lg text-muted-foreground leading-relaxed mt-6" style={{ textWrap: "pretty" }}>
              That question isn't about the product. It's about whether the
              company has the operational scaffolding to survive a funding round
              and scale responsibly afterward.
            </p>
          </Reveal>

          <Reveal delay={0.1} animation="fade-up">
            <h2 className="type-h3 text-foreground mt-16 mb-6">What investors actually look for</h2>
            <p className="type-body-lg text-muted-foreground leading-relaxed" style={{ textWrap: "pretty" }}>
              Seed-stage investors may tolerate informality. By Series A, the
              bar rises dramatically. Here is what due diligence teams typically
              request, and where founders most often stumble:
            </p>
          </Reveal>

          <Reveal delay={0.1} animation="fade-up">
            <div className="my-10 bg-[#f8f8f6] rounded-2xl p-8 lg:p-10">
              <h3 className="type-h5 text-foreground mb-6">The due diligence checklist that trips founders up</h3>
              <ul className="space-y-4">
                {[
                  "Cap table accuracy, including option pools, SAFEs, convertible notes, and pro-forma calculations for the new round",
                  "Entity structure and registrations in every province and state where the company operates or has employees",
                  "Employment agreements, IP assignment clauses, and contractor classification documentation",
                  "Financial controls: who approves spending, how expenses are tracked, and whether bank reconciliation is current",
                  "Compliance status: federal and provincial filings, annual returns, registered agents, and any pending regulatory obligations",
                  "Data privacy policies and security practices, especially for companies handling customer data",
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
            <h2 className="type-h3 text-foreground mt-16 mb-6">The cost of operational debt</h2>
            <p className="type-body-lg text-muted-foreground leading-relaxed" style={{ textWrap: "pretty" }}>
              Operational debt accumulates the same way technical debt does:
              invisibly, until it suddenly matters. A vendor agreement living in
              a Slack DM works fine until an investor asks to see your signed
              contracts. HR policies that exist only in the founder's memory are
              sufficient until a prospective acquirer needs documentation.
            </p>
          </Reveal>

          <Reveal delay={0.1} animation="fade-up">
            <blockquote className="my-12 border-l-2 border-accent pl-6 py-2">
              <p className="type-h5 text-foreground" style={{ lineHeight: 1.6 }}>
                The companies that lose rounds don't lose them because the
                product is weak. They lose them because the investor's legal
                team finds something the founder never thought to formalize.
              </p>
            </blockquote>
          </Reveal>

          <Reveal delay={0.1} animation="fade-up">
            <p className="type-body-lg text-muted-foreground leading-relaxed" style={{ textWrap: "pretty" }}>
              The most common gaps we see are not dramatic. They are quiet
              oversights: a missing provincial registration where you have
              a remote employee, a cap table that hasn't been updated since
              your last SAFE closed, contractor agreements that were never
              properly executed. Each one individually is a small fix. Together,
              they paint a picture of a company that hasn't built the
              infrastructure to scale.
            </p>
          </Reveal>

          <Reveal delay={0.1} animation="fade-up">
            <h2 className="type-h3 text-foreground mt-16 mb-6">How to get ahead of it</h2>
            <p className="type-body-lg text-muted-foreground leading-relaxed" style={{ textWrap: "pretty" }}>
              The fix is not complicated, but it does require intention. Start
              building your operational infrastructure at least six months
              before you expect to raise. Here is a practical timeline:
            </p>
          </Reveal>

          <Reveal delay={0.1} animation="fade-up">
            <div className="my-10 space-y-6">
              {[
                { time: "6 months before raise", action: "Audit your entity structure, file any missing provincial or state registrations, and clean up your cap table. Make sure all employee and contractor agreements are signed and properly classify every worker." },
                { time: "4 months before raise", action: "Set up financial controls: bank reconciliation, expense approval workflows, and basic bookkeeping. Create your board minute book and document any corporate governance decisions." },
                { time: "2 months before raise", action: "Run a mock due diligence process. Hand someone your data room and ask them to find holes. Fix what they find before an investor's legal team does." },
                { time: "Day of", action: "Have a clean data room ready to share within 24 hours of a term sheet. Speed signals competence. Delays signal problems." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="shrink-0 w-40">
                    <span className="type-body-sm font-display font-medium text-accent">{item.time}</span>
                  </div>
                  <p className="type-body text-muted-foreground" style={{ textWrap: "pretty" }}>{item.action}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} animation="fade-up">
            <h2 className="type-h3 text-foreground mt-16 mb-6">The bottom line</h2>
            <p className="type-body-lg text-muted-foreground leading-relaxed" style={{ textWrap: "pretty" }}>
              Investors are not looking for perfection. They are looking for
              evidence that the founders take operational rigor seriously. A
              clean cap table, signed agreements, current filings, and basic
              financial controls signal that this is a company built to last,
              not just a product looking for a home.
            </p>
          </Reveal>

          <Reveal delay={0.1} animation="fade-up">
            <p className="type-body-lg text-muted-foreground leading-relaxed mt-6" style={{ textWrap: "pretty" }}>
              The best time to build this infrastructure was a year ago. The
              second-best time is now, before the diligence clock starts ticking.
            </p>
          </Reveal>

          {/* Share + Nav */}
          <Reveal delay={0.1} animation="fade-up">
            <div className="mt-16 pt-10 border-t border-border/40">
              <ShareButtons title="Why operational infrastructure is the silent killer of Series A rounds" className="mb-8" />
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <Link href="/insights" className="type-body-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                  </svg>
                  All Insights
                </Link>
                <Link href="/insights/diy-compliance-costs" className="type-body-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                  Next: The True Cost of DIY Compliance
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
        heading="Ready to get your operations investor-ready?"
        headingAccent="Let's talk."
        ctaLabel="Book a Call"
        ctaHref="https://calendly.com/lemide/30min?month=2026-09"
      />

      <Footer />
    </>
  );
}
