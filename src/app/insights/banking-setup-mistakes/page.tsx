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
  title: "Banking Setup Mistakes That Slow Down Your First 90 Days | Lemide Partners",
  description:
    "From picking the wrong bank to missing fraud controls, these are the treasury missteps we see most often, and how to avoid them.",
  openGraph: {
    title: "Banking Setup Mistakes That Slow Down Your First 90 Days",
    description: "From picking the wrong bank to missing fraud controls, these are the treasury missteps we see most often, and how to avoid them.",
    type: "article",
    publishedTime: "2026-05-22",
    authors: ["Lemide Partners"],
    images: [{ url: "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?w=1200&q=80" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Banking Setup Mistakes That Slow Down Your First 90 Days",
    description: "From picking the wrong bank to missing fraud controls, these are the treasury missteps we see most often.",
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
              background: "radial-gradient(ellipse 80% 60% at 65% 40%, #1a3a7a 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 30% 55%, #0e2460 0%, transparent 60%)",
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
              <linearGradient id="a4-silk" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2a4a8a" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#060e2a" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="a4-gold" x1="0%" y1="0%" x2="100%" y2="80%">
                <stop offset="0%" stopColor="#CC9E49" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#060e2a" stopOpacity="0" />
              </linearGradient>
              <filter id="a4-blur"><feGaussianBlur stdDeviation="20" /></filter>
            </defs>
            <path d="M-100 240 C200 110, 480 380, 720 180 C960 -20, 1120 310, 1500 140 L1500 800 L-100 800Z" fill="url(#a4-silk)" filter="url(#a4-blur)" />
            <path d="M-50 500 C200 300, 420 550, 640 360 C860 170, 960 420, 1180 270" stroke="url(#a4-gold)" strokeWidth="120" fill="none" filter="url(#a4-blur)" strokeLinecap="round" />
            <circle cx="1050" cy="220" r="160" fill="#CC9E49" fillOpacity="0.1" filter="url(#a4-blur)" />
          </svg>
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 30%, rgba(6,14,42,0.6) 100%)" }} />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-40 pb-16 lg:pt-48 lg:pb-24">
          <div className="flex items-center gap-3 mb-8">
            <Link href="/insights" className="type-caption text-white/60 hover:text-white/90 transition-colors">
              Insights
            </Link>
            <span className="text-white/30">/</span>
            <span className="type-caption text-white/90">Banking</span>
          </div>
          <h1 className="type-h1 text-inverse-fg max-w-4xl" style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)", lineHeight: 1.15 }}>
            Banking setup mistakes that slow down{" "}
            <span className="text-accent">your first 90 days</span>
          </h1>
          <div className="flex flex-wrap items-center gap-4 mt-8">
            <span className="px-3 py-1 rounded-full bg-white/[0.08] border border-white/[0.12] type-caption text-white/80">Banking</span>
            <span className="type-caption text-white/60">May 2026</span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="type-caption text-white/60">5 min read</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="bg-white py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <Reveal animation="fade-up">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-12">
              <Image
                src="https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?w=1200&q=80"
                alt="Bank building facade and financial district"
                fill
                unoptimized
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
                priority
              />
            </div>
          </Reveal>

          <Reveal animation="fade-up">
            <ShareButtons title="Banking setup mistakes that slow down your first 90 days" className="mb-10 pb-10 border-b border-border/40" />
          </Reveal>

          <Reveal delay={0.1} animation="fade-up">
            <p className="type-body-lg text-muted-foreground leading-relaxed" style={{ textWrap: "pretty" }}>
              Opening a business bank account should be one of the simplest
              steps in starting a company. In practice, it is one of the
              most frequent sources of delay, frustration, and downstream
              problems. The choices you make in your first 90 days about
              banking infrastructure affect everything from how fast you can
              accept investor wire transfers to how clean your books look at
              tax time.
            </p>
          </Reveal>

          <Reveal delay={0.1} animation="fade-up">
            <h2 className="type-h3 text-foreground mt-16 mb-6">Mistake 1: choosing a bank based on convenience</h2>
            <p className="type-body-lg text-muted-foreground leading-relaxed" style={{ textWrap: "pretty" }}>
              Many founders open their business account at the same bank
              where they have their personal checking account. This is
              understandable but often short-sighted. Consumer banks and
              startup-friendly banks are fundamentally different products.
            </p>
          </Reveal>

          <Reveal delay={0.1} animation="fade-up">
            <div className="my-10 bg-[#f8f8f6] rounded-2xl p-8 lg:p-10">
              <h3 className="type-h5 text-foreground mb-6">What to look for in a startup bank in 2026</h3>
              <ul className="space-y-4">
                {[
                  "API integrations with your accounting software (QuickBooks, Xero, or similar)",
                  "Support for wire transfers, ACH, and international payments without branch visits",
                  "Multi-user access with role-based permissions so your bookkeeper and CFO see different things",
                  "CDIC insurance in Canada (or FDIC in the U.S.), and for larger balances, sweep networks that extend coverage across multiple institutions",
                  "Dedicated support for startups, not a 1-800 number and a 45-minute hold queue",
                  "No minimum balance fees during pre-revenue stages",
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
            <h2 className="type-h3 text-foreground mt-16 mb-6">Mistake 2: skipping fraud controls</h2>
            <p className="type-body-lg text-muted-foreground leading-relaxed" style={{ textWrap: "pretty" }}>
              Early-stage companies are disproportionately targeted by fraud.
              According to the Association of Certified Fraud Examiners,
              businesses with fewer than 100 employees suffer the highest
              median fraud losses. The most common vector is not a
              sophisticated cyber attack. It is a simple business email
              compromise where someone impersonates a vendor or founder and
              requests a wire transfer.
            </p>
          </Reveal>

          <Reveal delay={0.1} animation="fade-up">
            <blockquote className="my-12 border-l-2 border-accent pl-6 py-2">
              <p className="type-h5 text-foreground" style={{ lineHeight: 1.6 }}>
                The startup that sets up dual authorization on wire transfers
                from day one never has to explain to investors why $50,000
                left the account on a fraudulent request.
              </p>
            </blockquote>
          </Reveal>

          <Reveal delay={0.1} animation="fade-up">
            <p className="type-body-lg text-muted-foreground leading-relaxed" style={{ textWrap: "pretty" }}>
              At minimum, set up these controls before you process your first
              transaction:
            </p>
            <div className="my-8 space-y-3">
              {[
                "Dual authorization for any transfer over $5,000",
                "Positive pay or payee validation for outgoing checks",
                "Email and phone verification procedures for new vendor payment details",
                "Separate user credentials for each person with account access",
                "Daily balance and transaction alerts sent to the founder and bookkeeper",
              ].map((item, i) => (
                <div key={i} className="flex gap-3">
                  <div className="shrink-0 w-5 h-5 rounded-full bg-accent/10 text-accent flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <p className="type-body text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} animation="fade-up">
            <h2 className="type-h3 text-foreground mt-16 mb-6">Mistake 3: mixing personal and business finances</h2>
            <p className="type-body-lg text-muted-foreground leading-relaxed" style={{ textWrap: "pretty" }}>
              This one seems obvious, but it happens more often than founders
              admit. Paying a vendor from a personal credit card because the
              business account is not set up yet. Running early revenue
              through a personal PayPal account. Using a personal Amazon
              account for business purchases.
            </p>
          </Reveal>

          <Reveal delay={0.1} animation="fade-up">
            <p className="type-body-lg text-muted-foreground leading-relaxed mt-6" style={{ textWrap: "pretty" }}>
              Every one of these shortcuts creates a bookkeeping headache that
              compounds over time. More critically, commingling funds can
              pierce the corporate veil, the legal protection that separates
              your personal assets from the company&apos;s liabilities. If an
              investor or court finds that you treated the company&apos;s
              money and your personal money as interchangeable, the corporate
              structure that protects you may not hold up.
            </p>
          </Reveal>

          <Reveal delay={0.1} animation="fade-up">
            <h2 className="type-h3 text-foreground mt-16 mb-6">Mistake 4: not planning for investor funds</h2>
            <p className="type-body-lg text-muted-foreground leading-relaxed" style={{ textWrap: "pretty" }}>
              When your seed round closes and a $500,000 wire hits your
              account, your bank needs to be ready for it. Some banks flag
              large incoming transfers as suspicious activity, which can
              freeze your account for days. Others have daily or weekly
              deposit limits that prevent the transfer from clearing.
            </p>
          </Reveal>

          <Reveal delay={0.1} animation="fade-up">
            <div className="my-10 bg-[#f8f8f6] rounded-2xl p-8 lg:p-10">
              <h3 className="type-h5 text-foreground mb-6">Before your funding round closes</h3>
              <ul className="space-y-4">
                {[
                  "Notify your bank that you expect a large incoming wire transfer and provide the approximate amount and date",
                  "Confirm that your account type supports the expected balance (some basic business accounts have balance caps)",
                  "Verify your wire transfer instructions, including routing number, account number, and bank address, and have them ready to share securely with your investors",
                  "Set up a high-yield savings or sweep account for funds you do not need in the next 30 days",
                  "Review your CDIC coverage in Canada (or FDIC in the U.S.) and consider extended coverage through deposit sweep networks if your balance will exceed insurance limits",
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
            <h2 className="type-h3 text-foreground mt-16 mb-6">Mistake 5: ignoring bookkeeping integration</h2>
            <p className="type-body-lg text-muted-foreground leading-relaxed" style={{ textWrap: "pretty" }}>
              Your bank is the source of truth for every dollar that moves
              through your company. If your bank does not integrate cleanly
              with your accounting software, you are guaranteeing hours of
              manual reconciliation every month. In 2026, there is no excuse
              for a bank that cannot connect directly to QuickBooks, Xero, or
              your bookkeeper&apos;s platform.
            </p>
          </Reveal>

          <Reveal delay={0.1} animation="fade-up">
            <p className="type-body-lg text-muted-foreground leading-relaxed mt-6" style={{ textWrap: "pretty" }}>
              Test the integration before you move money. Connect the bank
              feed to your accounting software, run a few test transactions,
              and confirm that categories, payees, and amounts sync correctly.
              An hour of testing now saves dozens of hours of manual data
              entry later.
            </p>
          </Reveal>

          <Reveal delay={0.1} animation="fade-up">
            <h2 className="type-h3 text-foreground mt-16 mb-6">The bottom line</h2>
            <p className="type-body-lg text-muted-foreground leading-relaxed" style={{ textWrap: "pretty" }}>
              Banking infrastructure is not glamorous, but it is foundational.
              The decisions you make in your first 90 days about where to
              bank, how to secure your accounts, and how your financial data
              flows into your books will either accelerate or slow down
              everything you do after that.
            </p>
          </Reveal>

          <Reveal delay={0.1} animation="fade-up">
            <p className="type-body-lg text-muted-foreground leading-relaxed mt-6" style={{ textWrap: "pretty" }}>
              Get it right early, and banking becomes invisible. Get it
              wrong, and you will feel it every month at reconciliation time,
              every quarter at tax time, and every fundraise when investors
              ask for your financials.
            </p>
          </Reveal>

          {/* Share + Nav */}
          <Reveal delay={0.1} animation="fade-up">
            <div className="mt-16 pt-10 border-t border-border/40">
              <ShareButtons title="Banking setup mistakes that slow down your first 90 days" className="mb-8" />
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <Link href="/insights/multi-state-operations-playbook" className="type-body-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                  </svg>
                  Prev: Multi-State Operations Playbook
                </Link>
                <Link href="/insights" className="type-body-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                  All Insights
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
        heading="Need help setting up your banking infrastructure?"
        headingAccent="We'll get it right."
        ctaLabel="Book a Call"
        ctaHref="/contact"
      />

      <Footer />
    </>
  );
}
