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
  title: "Two Countries, One Payroll | Lemide Partners",
  description:
    "How a logistics and technology company unified payroll across Toronto and Lagos, turning a monthly fire drill into a reliable, compliant process.",
};

export default function TwoCountriesPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0" style={{ background: "#0a1525" }}>
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse 80% 60% at 55% 40%, #1e3050 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 25% 60%, #162845 0%, transparent 60%), radial-gradient(ellipse 40% 35% at 75% 70%, #1a2d48 0%, transparent 50%)",
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
              <linearGradient id="cs3-silk1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#243d60" stopOpacity="0.9" />
                <stop offset="40%" stopColor="#1a3050" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#0a1525" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="cs3-silk2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#2d4a70" stopOpacity="0.5" />
                <stop offset="50%" stopColor="#1a3555" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#0a1525" stopOpacity="0.2" />
              </linearGradient>
              <linearGradient id="cs3-bronze" x1="0%" y1="0%" x2="100%" y2="80%">
                <stop offset="0%" stopColor="#CC9E49" stopOpacity="0.45" />
                <stop offset="40%" stopColor="#b8893a" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#0a1525" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="cs3-warm" x1="40%" y1="0%" x2="60%" y2="100%">
                <stop offset="0%" stopColor="#d4a94a" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#1a3050" stopOpacity="0" />
              </linearGradient>
              <filter id="cs3-blur">
                <feGaussianBlur stdDeviation="20" />
              </filter>
            </defs>
            <path
              d="M-100 180 C200 60, 500 330, 700 130 C900 -70, 1100 280, 1500 80 L1500 800 L-100 800Z"
              fill="url(#cs3-silk1)"
              filter="url(#cs3-blur)"
            />
            <path
              d="M350 800 C450 480, 750 180, 1050 330 C1350 480, 1450 130, 1550 280 L1600 800Z"
              fill="url(#cs3-silk2)"
              filter="url(#cs3-blur)"
            />
            <path
              d="M-50 480 C200 280, 400 530, 600 330 C800 130, 900 380, 1100 230 C1300 80, 1400 330, 1550 180"
              stroke="url(#cs3-bronze)"
              strokeWidth="130"
              fill="none"
              filter="url(#cs3-blur)"
              strokeLinecap="round"
            />
            <path
              d="M250 0 C400 180, 650 80, 850 280 C1050 480, 1150 180, 1440 330"
              stroke="url(#cs3-warm)"
              strokeWidth="160"
              fill="none"
              filter="url(#cs3-blur)"
              strokeLinecap="round"
            />
            <circle cx="1050" cy="180" r="180" fill="#CC9E49" fillOpacity="0.15" filter="url(#cs3-blur)" />
            <circle cx="200" cy="400" r="130" fill="#2a4a70" fillOpacity="0.3" filter="url(#cs3-blur)" />
          </svg>
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 30%, rgba(10,21,37,0.6) 100%)",
            }}
          />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-40 pb-16 lg:pt-48 lg:pb-24">
          <div className="flex items-center gap-3 mb-8">
            <Link href="/case-studies" className="type-caption text-white/60 hover:text-white/90 transition-colors">
              Case Studies
            </Link>
            <span className="text-white/30">/</span>
            <span className="type-caption text-white/90">Cross-Border</span>
          </div>
          <h1 className="type-h1 text-inverse-fg max-w-4xl" style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)", lineHeight: 1.1 }}>
            Two Countries,{" "}
            <span className="text-accent">One Payroll</span>
          </h1>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mt-6">
            <p className="type-body-lg text-inverse-muted max-w-2xl" style={{ textWrap: "pretty" }}>
              The Toronto office ran payroll on the first of every month, without
              fail. The Lagos team never quite knew when they&apos;d actually get
              paid.
            </p>
            <div className="flex gap-3 shrink-0">
              <span className="px-3 py-1 rounded-full bg-white/[0.08] border border-white/[0.12] type-caption text-white/80">Payroll</span>
              <span className="px-3 py-1 rounded-full bg-white/[0.08] border border-white/[0.12] type-caption text-white/80">Cross-Border</span>
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
            founders commonly face when operating teams across Canada and
            Nigeria. It does not describe a specific Lemide client or
            engagement.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <Reveal animation="fade-up">
            <h2 className="type-h3 text-foreground mb-6">The Situation</h2>
            <p className="type-body-lg text-muted-foreground leading-relaxed" style={{ textWrap: "pretty" }}>
              It wasn&apos;t a budget problem. The company, a small logistics
              and technology outfit with a founder based in Toronto and an
              operating team based in Lagos, had the money. What it didn&apos;t
              have was one clean process that treated both teams as equally real.
            </p>
          </Reveal>

          <Reveal delay={0.1} animation="fade-up">
            <p className="type-body-lg text-muted-foreground leading-relaxed mt-6" style={{ textWrap: "pretty" }}>
              Contractor and employee classification had never been formally
              resolved on either side. Someone was manually recalculating PAYE,
              CRA withholding, and pension lines every month, by hand, and
              getting something slightly wrong often enough that it stopped
              feeling like an accident.
            </p>
          </Reveal>

          <Reveal delay={0.1} animation="fade-up">
            <p className="type-body-lg text-muted-foreground leading-relaxed mt-6" style={{ textWrap: "pretty" }}>
              The cost showed up quietly at first. A missed payment date here, a
              confused message about deductions there. Then it showed up less
              quietly, as good people on the Lagos side started treating late
              pay as a signal about how seriously the company took them, which
              is a reasonable read of the situation even if it wasn&apos;t the
              founder&apos;s intent.
            </p>
          </Reveal>

          <Reveal delay={0.1} animation="fade-up">
            <blockquote className="my-12 border-l-2 border-accent pl-6 py-2">
              <p className="type-h5 text-foreground" style={{ lineHeight: 1.6 }}>
                Late pay became a signal about how seriously the company took
                its Lagos team, which is a reasonable read of the situation
                even when it wasn&apos;t the founder&apos;s intent.
              </p>
            </blockquote>
          </Reveal>

          <Reveal delay={0.1} animation="fade-up">
            <h2 className="type-h3 text-foreground mt-16 mb-6">The Approach</h2>
            <p className="type-body-lg text-muted-foreground leading-relaxed" style={{ textWrap: "pretty" }}>
              Fixing this wasn&apos;t a matter of finding a payroll app that
              supported two currencies. It required someone who genuinely
              understood both regulatory logics well enough to design one
              coherent process instead of two half-solutions duct-taped
              together.
            </p>
          </Reveal>

          {/* Key actions */}
          <Reveal delay={0.1} animation="fade-up">
            <div className="my-12 bg-[#f8f8f6] rounded-2xl p-8 lg:p-10">
              <h3 className="type-h5 text-foreground mb-6">What the operations partner built</h3>
              <ul className="space-y-4">
                {[
                  "A unified payroll process covering CRA and Canadian employment standards on one side, and Nigerian PAYE and pension structuring on the other",
                  "Formal contractor and employee classification decisions on both sides that would survive a real audit",
                  "One coherent payment schedule that treated both the Toronto and Lagos teams equally",
                  "Documentation behind every classification decision that holds up under scrutiny from either jurisdiction",
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
              Once that was built, payroll stopped being a monthly fire drill.
              Both teams got paid on the same reliable schedule, with
              documentation behind every classification decision that would
              hold up under scrutiny from either jurisdiction.
            </p>
          </Reveal>

          <Reveal delay={0.1} animation="fade-up">
            <blockquote className="my-12 border-l-2 border-accent pl-6 py-2">
              <p className="type-body-lg text-foreground" style={{ lineHeight: 1.8 }}>
                The lesson wasn&apos;t that cross-border teams are inherently
                harder to manage. It&apos;s that &quot;just figure out
                payroll&quot; usually means someone has to own two entirely
                different regulatory systems at once, correctly, every month,
                indefinitely.
              </p>
            </blockquote>
          </Reveal>

          <Reveal delay={0.1} animation="fade-up">
            <p className="type-body-lg text-muted-foreground leading-relaxed" style={{ textWrap: "pretty" }}>
              Underestimating that doesn&apos;t show up as a compliance letter
              right away. It shows up first as attrition on a team the founder
              never meant to build with two classes of paycheck.
            </p>
          </Reveal>

          {/* Navigation */}
          <Reveal delay={0.1} animation="fade-up">
            <div className="mt-16 pt-10 border-t border-border/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <Link href="/case-studies/audit-ready-90-days" className="type-body-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                Previous: Audit Ready in 90 Days
              </Link>
              <Link href="/case-studies" className="type-body-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                All Case Studies
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <FooterCta
        heading="Running a cross-border team?"
        headingAccent="Let's talk."
        ctaLabel="Book a Call"
        ctaHref="/contact"
      />

      <Footer />
    </>
  );
}
