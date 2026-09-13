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
  title: "Case Studies | Lemide Partners",
  description:
    "Real-world scenarios showing how fractional operations support helps startups navigate compliance, due diligence, and cross-border challenges.",
};

const studies = [
  {
    title: "The Compliance Maze That Almost Cost a Funding Close",
    excerpt:
      "A payments startup building a Canada-to-Nigeria remittance corridor discovered, six weeks before closing, that they weren't actually cleared to move money. A fractional operations partner mapped the regulatory sequence and got the round closed on schedule.",
    tags: ["Payments", "Compliance", "Fundraising"],
    href: "/case-studies/compliance-maze",
    imageSrc: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
    imageAlt: "Financial documents and compliance review",
  },
  {
    title: "Audit Ready in 90 Days",
    excerpt:
      "A vertical SaaS company had grown fast on foundations nobody had time to formalize. When a term sheet arrived, an operations partner turned informal processes into audit-ready documentation before the closing date.",
    tags: ["Due Diligence", "Fundraising", "Operations"],
    href: "/case-studies/audit-ready-90-days",
    imageSrc: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    imageAlt: "Professional reviewing business documents",
  },
  {
    title: "Two Countries, One Payroll",
    excerpt:
      "A logistics and technology company with teams in Toronto and Lagos needed one coherent payroll process instead of two half-solutions. The fix wasn't a payroll app. It was someone who understood both regulatory systems.",
    tags: ["Payroll", "Cross-Border", "Operations"],
    href: "/case-studies/two-countries-one-payroll",
    imageSrc: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
    imageAlt: "International team collaboration",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
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
              <linearGradient id="csl-silk1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2a4a8a" stopOpacity="0.9" />
                <stop offset="40%" stopColor="#1a3570" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#0B1D4B" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="csl-silk2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3355a0" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#1e3d7a" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#0B1D4B" stopOpacity="0.2" />
              </linearGradient>
              <linearGradient id="csl-gold" x1="0%" y1="0%" x2="100%" y2="80%">
                <stop offset="0%" stopColor="#CC9E49" stopOpacity="0.5" />
                <stop offset="50%" stopColor="#a07830" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#0B1D4B" stopOpacity="0" />
              </linearGradient>
              <filter id="csl-blur">
                <feGaussianBlur stdDeviation="20" />
              </filter>
            </defs>
            <path
              d="M-100 200 C200 80, 500 350, 700 150 C900 -50, 1100 300, 1500 100 L1500 800 L-100 800Z"
              fill="url(#csl-silk1)"
              filter="url(#csl-blur)"
            />
            <path
              d="M400 800 C500 500, 800 200, 1100 350 C1400 500, 1500 150, 1600 300 L1600 800Z"
              fill="url(#csl-silk2)"
              filter="url(#csl-blur)"
            />
            <path
              d="M-50 500 C200 300, 400 550, 600 350 C800 150, 900 400, 1100 250"
              stroke="url(#csl-gold)"
              strokeWidth="120"
              fill="none"
              filter="url(#csl-blur)"
              strokeLinecap="round"
            />
            <circle cx="1100" cy="150" r="200" fill="#2a5099" fillOpacity="0.3" filter="url(#csl-blur)" />
            <circle cx="250" cy="450" r="100" fill="#CC9E49" fillOpacity="0.12" filter="url(#csl-blur)" />
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
            Case Studies
          </span>
          <h1 className="type-h1 text-inverse-fg max-w-4xl" style={{ fontSize: "clamp(2.5rem, 5vw, 3.75rem)", lineHeight: 1.1 }}>
            Real scenarios,{" "}
            <span className="text-accent">real outcomes.</span>
          </h1>
          <p className="type-body-lg text-inverse-muted mt-6 max-w-2xl" style={{ textWrap: "pretty" }}>
            These composite case studies reflect the kinds of challenges we see
            founders face every day, and the operational approach that gets them
            through.
          </p>
        </div>
      </section>

      {/* Case Study Cards */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-8">
            {studies.map((study, i) => (
              <Reveal key={study.href} delay={i * 0.15} animation="fade-up">
                <Link href={study.href} className="group block">
                  <article className="grid grid-cols-1 lg:grid-cols-2 bg-[#f8f8f6] rounded-2xl overflow-hidden border border-border/40 hover:shadow-lg transition-shadow duration-300">
                    <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[400px] overflow-hidden">
                      <Image
                        src={study.imageSrc}
                        alt={study.imageAlt}
                        fill
                        unoptimized
                        className="object-cover img-zoom"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                    <div className="p-8 lg:p-12 flex flex-col justify-between gap-6">
                      <div>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {study.tags.map((tag) => (
                            <span key={tag} className="px-3 py-1 rounded-full border border-border type-caption text-muted-foreground">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <h2 className="type-h3 text-foreground group-hover:text-primary transition-colors duration-300">
                          {study.title}
                        </h2>
                        <p className="type-body text-muted-foreground mt-4 line-clamp-3" style={{ textWrap: "pretty" }}>
                          {study.excerpt}
                        </p>
                      </div>
                      <span className="inline-flex items-center gap-2 type-body-sm text-foreground font-display font-medium group-hover:text-accent transition-colors duration-300">
                        Read the full story
                        <svg
                          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </span>
                    </div>
                  </article>
                </Link>
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
