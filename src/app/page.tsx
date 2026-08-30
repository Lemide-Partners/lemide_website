import {
  Navbar,
  Hero,
  MetricsBar,
  MissionStatement,
  BrandTitle,
  About,
  Industries,
  Services,
  CaseStudies,
  TeamMarquee,
  BenefitsGrid,
  Partners,
  Testimonials,
  Faq,
  FooterCta,
  Footer,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero
        headline="Operational infrastructure for founders who"
        headlineAccent="move fast."
        description="Lemide Partners handles legal, compliance, banking, and entity management — so you can focus on building what matters."
        ctaLabel="Schedule a Call"
        ctaHref="/contact"
        videoSrc="/assets/videos/lemidehero.mp4"
      />

      <MetricsBar
        metrics={[
          { value: "50+", label: "Startups Served" },
          { value: "3", label: "Years Operating" },
          { value: "100%", label: "Client Retention" },
          { value: "24h", label: "Average Response" },
        ]}
      />

      <MissionStatement
        text="We don't bill by the hour or disappear after the deliverable."
        mutedText="We embed with your team, handle the operational complexity, and stay for the long run."
      />

      <BrandTitle />

      <About
        label="Who We Are"
        heading="An operating partner, not a vendor."
        description="Lemide Partners provides dedicated operational infrastructure for early-stage startups. From entity formation to banking to ongoing compliance, we handle the back-office so founders can stay focused on product and growth."
        ctaLabel="Learn More"
        ctaHref="/about"
      />

      <Industries
        label="Industries"
        heading="Deep experience across"
        headingAccent="the sectors that matter."
        description="We specialize in early-stage companies across industries where compliance, regulatory, and operational complexity can slow you down."
        industries={[
          { name: "Financial Services & Fintech" },
          { name: "Healthcare & Biotech" },
          { name: "SaaS & Enterprise Software" },
          { name: "E-Commerce & Marketplaces" },
          { name: "Climate & Clean Energy" },
          { name: "Consumer & CPG" },
        ]}
      />

      <Services
        label="What We Do"
        heading="Full-stack operational"
        headingAccent="infrastructure."
        services={[
          {
            title: "Legal Operations",
            description:
              "Entity formation, corporate governance, equity management, and ongoing legal ops — structured for startups, not Fortune 500s.",
            href: "/services/legal",
          },
          {
            title: "Compliance & Regulatory",
            description:
              "State registrations, annual filings, KYC/AML compliance, and regulatory monitoring across jurisdictions.",
            href: "/services/compliance",
          },
          {
            title: "Banking & Treasury",
            description:
              "Bank account setup, cash management, payment infrastructure, and treasury operations from day one.",
            href: "/services/banking",
          },
          {
            title: "Entity Management",
            description:
              "Multi-entity structures, subsidiary management, registered agent services, and corporate record maintenance.",
            href: "/services/entity",
          },
          {
            title: "Strategic Advisory",
            description:
              "Operational strategy, vendor selection, process design, and the kind of advice that comes from being in the trenches.",
            href: "/services/advisory",
          },
        ]}
      />

      <CaseStudies
        label="Case Studies"
        heading="Real outcomes from"
        headingAccent="real partnerships."
        description="See how we've helped early-stage startups build operational foundations that scale."
        studies={[
          {
            title: "From incorporation to Series A in 90 days",
            excerpt:
              "How we helped a fintech startup go from idea to fully operational — entity, banking, compliance — in record time.",
            tags: ["Fintech", "Legal", "Banking"],
            href: "/case-studies/fintech-series-a",
          },
          {
            title: "Multi-state compliance for a healthcare platform",
            excerpt:
              "Navigating 12-state regulatory requirements for a telehealth startup scaling faster than their ops team could handle.",
            tags: ["Healthcare", "Compliance", "Regulatory"],
            href: "/case-studies/healthcare-compliance",
          },
          {
            title: "Entity restructuring ahead of acquisition",
            excerpt:
              "Cleaning up a messy cap table and multi-entity structure before a successful exit to a strategic acquirer.",
            tags: ["M&A", "Entity", "Advisory"],
            href: "/case-studies/entity-restructuring",
          },
        ]}
      />

      <TeamMarquee
        label="Our Team"
        heading="Meet the operators"
        headingAccent="behind the infrastructure."
        members={[
          { name: "Partner One", title: "Managing Partner", experience: "12 years of experience" },
          { name: "Partner Two", title: "Senior Partner, Legal", experience: "10 years of experience" },
          { name: "Partner Three", title: "Senior Partner, Compliance", experience: "8 years of experience" },
          { name: "Partner Four", title: "Partner, Banking", experience: "7 years of experience" },
          { name: "Partner Five", title: "Partner, Entity Mgmt", experience: "6 years of experience" },
          { name: "Partner Six", title: "Associate, Legal Ops", experience: "4 years of experience" },
          { name: "Partner Seven", title: "Associate, Compliance", experience: "3 years of experience" },
          { name: "Partner Eight", title: "Associate, Advisory", experience: "3 years of experience" },
        ]}
      />

      <BenefitsGrid
        label="Why Lemide"
        heading="The value behind every partnership is"
        headingAccent="turning complexity into clarity."
        items={[
          { type: "metric", value: "90%", label: "Faster operational setup vs. doing it yourself" },
          {
            type: "feature",
            title: "Dedicated Partner",
            tag: "Always-on",
            description: "One senior partner owns your relationship end-to-end. No handoffs, no rotating associates.",
          },
          { type: "metric", value: "24h", label: "Average turnaround on operational requests" },
          {
            type: "feature",
            title: "Retainer Model",
            tag: "Predictable costs",
            description: "Flat monthly retainer. No surprise invoices, no billable-hour anxiety.",
          },
          { type: "metric", value: "50+", label: "Startups trust Lemide with their operations" },
          {
            type: "feature",
            title: "Full Stack",
            tag: "End-to-end",
            description: "Legal, compliance, banking, entity — all under one roof. No coordinating between 5 vendors.",
          },
        ]}
      />

      <Partners
        label="Trusted By"
        heading="We help startups"
        headingAccent="build with confidence."
        description="Working alongside the best founders, accelerators, and venture firms in the ecosystem."
        partners={[
          { name: "Partner Logo 1", logoSrc: "/placeholder-logo.svg" },
          { name: "Partner Logo 2", logoSrc: "/placeholder-logo.svg" },
          { name: "Partner Logo 3", logoSrc: "/placeholder-logo.svg" },
          { name: "Partner Logo 4", logoSrc: "/placeholder-logo.svg" },
          { name: "Partner Logo 5", logoSrc: "/placeholder-logo.svg" },
          { name: "Partner Logo 6", logoSrc: "/placeholder-logo.svg" },
          { name: "Partner Logo 7", logoSrc: "/placeholder-logo.svg" },
        ]}
      />

      <Testimonials
        label="What Founders Say"
        heading="Find out why founders trust"
        headingAccent="our operational expertise."
        testimonials={[
          {
            quote:
              "Lemide took our back-office from chaotic to institutional-grade in weeks. They understood exactly what an early-stage company needs.",
            name: "Founder A",
            title: "CEO at FinanceStartup",
          },
          {
            quote:
              "Having a dedicated partner who knows our business inside and out has been transformative. We don't think about ops anymore.",
            name: "Founder B",
            title: "CTO at HealthTech Co",
          },
          {
            quote:
              "The retainer model is genius. Predictable costs, immediate response, and they actually care about our success.",
            name: "Founder C",
            title: "CEO at CleanEnergy Inc",
          },
          {
            quote:
              "They handled our multi-state compliance so seamlessly that we were able to launch 3 months ahead of schedule.",
            name: "Founder D",
            title: "COO at SaaS Platform",
          },
          {
            quote:
              "Lemide is the operational co-founder every startup wishes they had. Reliable, fast, and deeply competent.",
            name: "Founder E",
            title: "Founder at Marketplace Co",
          },
        ]}
      />

      <Faq
        label="FAQs"
        heading="Frequently asked questions"
        items={[
          {
            question: "What types of startups do you work with?",
            answer:
              "We primarily work with early-stage startups (pre-seed through Series B) across sectors including fintech, healthtech, SaaS, e-commerce, and climate. Our solutions are tailored to your stage, industry, and specific operational needs.",
          },
          {
            question: "How is the retainer model structured?",
            answer:
              "We offer flat monthly retainers that cover your core operational needs — legal, compliance, banking, and entity management. No surprise invoices, no hourly billing. We scope the retainer based on your company's stage and complexity.",
          },
          {
            question: "What's the typical engagement timeline?",
            answer:
              "Most engagements start with a 2-week onboarding sprint to get the essentials in place (entity, banking, compliance baseline), then transition to an ongoing retainer relationship. We're built for long-term partnerships, not project-based work.",
          },
          {
            question: "How is Lemide different from a law firm or accounting firm?",
            answer:
              "We're operators, not outside counsel. We embed with your team, own the execution end-to-end, and provide a single point of contact for all back-office needs. A law firm gives you advice; we handle the work.",
          },
          {
            question: "Can you work with our existing legal and financial advisors?",
            answer:
              "Absolutely. We complement your existing advisors by handling day-to-day operational execution. We coordinate with outside counsel, accountants, and financial advisors to ensure everything stays aligned.",
          },
        ]}
      />

      <FooterCta
        heading="Ready to offload your operations?"
        headingAccent="Start here."
      />

      <Footer
        email="contact@lemide.com"
        socialLinks={[
          { platform: "linkedin", href: "#" },
          { platform: "twitter", href: "#" },
        ]}
      />
    </>
  );
}
