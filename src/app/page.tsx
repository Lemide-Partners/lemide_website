import {
  Navbar,
  Hero,
  MetricsBar,
  Problem,
  Services,
  Industries,
  CaseStudies,
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
        description="We help startups set up and run the operations behind the company: incorporation, banking, compliance, tools, and credentials."
        ctaLabel="Schedule a Call"
        ctaHref="/contact"
        videoSrc="/assets/videos/lemidehero.mp4"
      />

      <MetricsBar
        metrics={[
          { value: "12+", label: "Years of Experience" },
          { value: "30", label: "Time to Readiness (Days)" },
          { value: "36%", label: "Avg. Cost Savings Rate" },
          { value: "5+", label: "Countries Supported" },
        ]}
      />

      <Problem
        text="Early-stage founders are too busy chasing the market to build the operations behind it."
        mutedText="Lemide builds it for them, so growth never outpaces the foundation underneath."
      />

      <Services
        label="What we Offer"
        heading="Full-stack operational"
        headingAccent="infrastructure."
        services={[
          {
            title: "Compliance & Filings",
            description:
              "State registrations, annual filings, regulatory reporting, and ongoing compliance management — handled end-to-end so you never miss a deadline.",
            href: "/services/compliance",
            icon: "compliance_filings",
          },
          {
            title: "Financial Operations",
            description:
              "Bank account setup, payment infrastructure, bookkeeping coordination, and treasury operations — from day one through Series B.",
            href: "/services/financial-operations",
            icon: "financial_ops",
          },
          {
            title: "Access Governance Automation",
            description:
              "Automated provisioning, role-based access controls, and credential management across your entire tool stack — secure by default.",
            href: "/services/access-governance",
            icon: "access_governance",
          },
          {
            title: "Workflow Automation",
            description:
              "Streamlined onboarding, vendor management, document workflows, and operational processes — built to scale without adding headcount.",
            href: "/services/workflow-automation",
            icon: "workflow_automation",
          },
          {
            title: "Operations Visibility",
            description:
              "Real-time dashboards, compliance status tracking, and operational reporting — so you always know where things stand.",
            href: "/services/operations-visibility",
            icon: "ops_visibility",
          },
        ]}
      />

      <Industries
        label="Industries"
        heading="Deep experience across"
        headingAccent="focus verticals."
        description="We specialize in early-stage companies across industries where compliance, regulatory, and operational complexity can slow you down."
        industries={[
          { name: "Fintech", icon: "fintech" },
          { name: "Education", icon: "education" },
          { name: "Energy", icon: "energy" },
          { name: "Healthcare", icon: "healthcare" },
          { name: "Agriculture", icon: "agriculture" },
          { name: "Logistics", icon: "logistics" },
        ]}
        imageSrc="/assets/images/industries.jpg"
        imageAlt="Industries Lemide serves"
      />

      <CaseStudies
        label="Case Studies"
        heading="Discover how we help businesses"
        headingAccent="turn challenges into achievements."
        description="Explore case studies that showcase how we've helped businesses overcome challenges and achieve lasting success through tailored consulting solutions."
        studies={[
          {
            title: "From incorporation to Series A in 90 days",
            excerpt:
              "How we helped a fintech startup go from idea to fully operational — entity, banking, compliance — in record time. Millions saved through streamlined processes.",
            tags: ["Fintech", "Legal", "Banking"],
            href: "/case-studies/fintech-series-a",
          },
          {
            title: "Multi-state compliance for a healthcare platform",
            excerpt:
              "Navigating 12-state regulatory requirements for a telehealth startup scaling faster than their ops team could handle. Real-time dashboards and automated filings.",
            tags: ["Healthcare", "Compliance", "Regulatory"],
            href: "/case-studies/healthcare-compliance",
          },
          {
            title: "A logistics transformation that moves with precision",
            excerpt:
              "How a manufacturing giant achieved end-to-end supply chain agility by land, air, and sea. Millions saved, smarter analytics, real-time dashboards, and streamlined operations.",
            tags: ["Logistics", "Supply Chain", "Manufacturing"],
            href: "/case-studies/logistics-transformation",
          },
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
