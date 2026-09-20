import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Navbar,
  FooterCta,
  Footer,
  Reveal,
} from "@/components/sections";

export const metadata: Metadata = {
  title: "Insights | Lemide Partners",
  description:
    "Practical guides and perspectives for founders building the operational backbone of their company.",
};

const insights = [
  {
    title: "Why operational infrastructure is the silent killer of Series A rounds",
    excerpt:
      "Most founders don't lose funding because of a weak product. They lose it because investors find compliance gaps, messy cap tables, and no financial controls. Here's how to fix it before the due diligence clock starts.",
    category: "Fundraising",
    date: "Aug 2026",
    readTime: "6 min read",
    href: "/insights/operational-infrastructure-series-a",
    imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    imageAlt: "Startup metrics dashboard and financial planning",
  },
  {
    title: "The true cost of DIY compliance for early-stage startups",
    excerpt:
      "Founders spend an average of 12 hours per week on compliance tasks they could outsource. We break down the hidden costs and when it makes sense to bring in a partner.",
    category: "Compliance",
    date: "Jul 2026",
    readTime: "4 min read",
    href: "/insights/diy-compliance-costs",
    imageSrc: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    imageAlt: "Business compliance documents and checklists",
  },
  {
    title: "Multi-jurisdiction operations: a founder's playbook",
    excerpt:
      "Expanding across provinces or into the U.S. means navigating a maze of registrations, tax obligations, and employment law. Our step-by-step guide keeps you compliant as you scale.",
    category: "Operations",
    date: "Jun 2026",
    readTime: "8 min read",
    href: "/insights/multi-state-operations-playbook",
    imageSrc: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    imageAlt: "Modern office buildings representing cross-border expansion",
  },
  {
    title: "Banking setup mistakes that slow down your first 90 days",
    excerpt:
      "From picking the wrong bank to missing fraud controls, these are the treasury missteps we see most often, and how to avoid them.",
    category: "Banking",
    date: "May 2026",
    readTime: "5 min read",
    href: "/insights/banking-setup-mistakes",
    imageSrc: "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?w=800&q=80",
    imageAlt: "Bank building facade and financial district",
  },
];

export default function InsightsPage() {
  const [featured, ...rest] = insights;

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0" style={{ background: "#060e2a" }}>
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse 80% 60% at 50% 40%, #1a3a7a 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 80% 60%, #0e2460 0%, transparent 60%), radial-gradient(ellipse 40% 35% at 20% 70%, #162d6b 0%, transparent 50%)",
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
              <linearGradient id="ins-silk1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2a4a8a" stopOpacity="0.8" />
                <stop offset="40%" stopColor="#1a3570" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#060e2a" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="ins-gold" x1="0%" y1="0%" x2="100%" y2="80%">
                <stop offset="0%" stopColor="#CC9E49" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#a07830" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#060e2a" stopOpacity="0" />
              </linearGradient>
              <filter id="ins-blur">
                <feGaussianBlur stdDeviation="20" />
              </filter>
            </defs>
            <path
              d="M-100 230 C200 100, 500 380, 700 180 C900 -20, 1100 330, 1500 130 L1500 800 L-100 800Z"
              fill="url(#ins-silk1)"
              filter="url(#ins-blur)"
            />
            <path
              d="M-50 500 C200 300, 400 550, 600 350 C800 150, 900 400, 1100 250"
              stroke="url(#ins-gold)"
              strokeWidth="120"
              fill="none"
              filter="url(#ins-blur)"
              strokeLinecap="round"
            />
            <circle cx="1100" cy="200" r="170" fill="#2a5099" fillOpacity="0.2" filter="url(#ins-blur)" />
            <circle cx="250" cy="480" r="100" fill="#CC9E49" fillOpacity="0.1" filter="url(#ins-blur)" />
          </svg>
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 30%, rgba(6,14,42,0.6) 100%)",
            }}
          />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-40 pb-16 lg:pt-48 lg:pb-24">
          <span className="inline-block px-5 py-2 rounded-full bg-white/[0.08] border border-white/[0.12] type-caption text-white/90 backdrop-blur-sm mb-8">
            Insights
          </span>
          <h1 className="type-h1 text-inverse-fg max-w-4xl" style={{ fontSize: "clamp(2.5rem, 5vw, 3.75rem)", lineHeight: 1.1 }}>
            Latest thinking on{" "}
            <span className="text-accent">startup operations.</span>
          </h1>
          <p className="type-body-lg text-inverse-muted mt-6 max-w-2xl" style={{ textWrap: "pretty" }}>
            Practical guides and perspectives for founders building the
            operational backbone of their company.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      {featured && (
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Reveal animation="fade-up">
              <Link href={featured.href} className="group block">
                <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 bg-[#f8f8f6] rounded-2xl overflow-hidden border border-border/40 hover:shadow-lg transition-shadow duration-300">
                  <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[400px] overflow-hidden">
                    <Image
                      src={featured.imageSrc}
                      alt={featured.imageAlt}
                      fill
                      unoptimized
                      className="object-cover img-zoom"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 rounded-full bg-accent/10 type-caption text-accent font-medium">
                        {featured.category}
                      </span>
                      <span className="type-caption text-muted-foreground">
                        {featured.date}
                      </span>
                      {featured.readTime && (
                        <>
                          <span className="w-1 h-1 rounded-full bg-border" />
                          <span className="type-caption text-muted-foreground">
                            {featured.readTime}
                          </span>
                        </>
                      )}
                    </div>
                    <h2 className="type-h3 text-foreground group-hover:text-primary transition-colors duration-300">
                      {featured.title}
                    </h2>
                    <p className="type-body-lg text-muted-foreground mt-4" style={{ textWrap: "pretty" }}>
                      {featured.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-2 mt-6 type-body-sm text-foreground font-display font-medium group-hover:text-accent transition-colors duration-300">
                      Read article
                      <svg
                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </article>
              </Link>
            </Reveal>
          </div>
        </section>
      )}

      {/* All Articles Grid */}
      <section className="bg-white pb-20 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal animation="fade-up">
            <h2 className="type-h3 text-foreground mb-10">All articles</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((insight, i) => (
              <Reveal key={insight.href} delay={i * 0.1} animation="fade-up">
                <Link href={insight.href} className="group block h-full">
                  <article className="h-full rounded-2xl overflow-hidden border border-border/40 bg-[#f8f8f6] hover:shadow-lg transition-shadow duration-300">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={insight.imageSrc}
                        alt={insight.imageAlt}
                        fill
                        unoptimized
                        className="object-cover img-zoom"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 rounded-full bg-accent/10 type-caption text-accent font-medium">
                          {insight.category}
                        </span>
                        <span className="type-caption text-muted-foreground">
                          {insight.readTime}
                        </span>
                      </div>
                      <h3 className="type-h5 text-foreground group-hover:text-primary transition-colors duration-300">
                        {insight.title}
                      </h3>
                      <p className="type-body-sm text-muted-foreground mt-2 line-clamp-2">
                        {insight.excerpt}
                      </p>
                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/40">
                        <span className="type-caption text-muted-foreground">
                          {insight.date}
                        </span>
                        <span className="inline-flex items-center gap-1.5 type-body-sm text-foreground font-display font-medium group-hover:text-accent transition-colors duration-300">
                          Read
                          <svg
                            className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FooterCta
        heading="Want operational insights for your startup?"
        headingAccent="Subscribe."
        ctaLabel="Book a Call"
        ctaHref="https://calendly.com/lemide/30min?month=2026-09"
      />

      <Footer />
    </>
  );
}
