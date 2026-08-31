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
  Insights,
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
        ctaLabel="Book a Call"
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
        text="5% of startups fail due to operational bottlenecks at their early stage."
        mutedText="Lemide helps founders build the systems that fix such problems."
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
        heading="Discover how we help businesses turn"
        headingAccent="challenges into achievements."
        description="Explore case studies that showcase how we've helped businesses overcome challenges and achieve lasting success through tailored consulting solutions."
        studies={[
          {
            title: "From incorporation to Series A in 90 days",
            excerpt:
              "How we helped a fintech startup go from idea to fully operational — entity, banking, compliance — in record time. Millions saved through streamlined processes.",
            tags: ["Fintech", "Legal", "Banking"],
            href: "/case-studies/fintech-series-a",
            imageSrc: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
            imageAlt: "Fintech team collaborating in modern office",
          },
          {
            title: "Multi-state compliance for a healthcare platform",
            excerpt:
              "Navigating 12-state regulatory requirements for a telehealth startup scaling faster than their ops team could handle. Real-time dashboards and automated filings.",
            tags: ["Healthcare", "Compliance", "Regulatory"],
            href: "/case-studies/healthcare-compliance",
            imageSrc: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
            imageAlt: "Healthcare technology and compliance",
          },
          {
            title: "A logistics transformation that moves with precision",
            excerpt:
              "How a manufacturing giant achieved end-to-end supply chain agility by land, air, and sea. Millions saved, smarter analytics, real-time dashboards, and streamlined operations.",
            tags: ["Logistics", "Supply Chain", "Manufacturing"],
            href: "/case-studies/logistics-transformation",
            imageSrc: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
            imageAlt: "Logistics and supply chain operations",
          },
        ]}
      />

      <BenefitsGrid
        label="Why Lemide"
        heading="The value behind every partnership is"
        headingAccent="turning strategy into impact."
        items={[
          {
            type: "feature",
            title: "Cut Costs",
            tag: "Popular Solution",
            description: "We identify cost-saving opportunities without compromising value — from automation to smart resource allocation.",
            stat: "2x",
            statLabel: "Is an **average result** in cost optimization services.",
          },
          {
            type: "avatars",
            count: "20+",
            label: "Business Partners",
          },
          { type: "metric", value: "78%", label: "Of businesses don't check their **analytics**." },
          {
            type: "feature",
            title: "Average investment",
            description: "Even modest strategic investments can lead to visible improvements in efficiency and growth.",
            stat: "$15K",
          },
          {
            type: "feature",
            title: "Focusing",
            tag: "Measurable results",
            description: "Forget about blind decisions and lost revenue. We help you build a data-driven culture.",
          },
          {
            type: "feature",
            title: "Tailored Solutions",
            tag: "Personalized plans",
            description: "We analyze your specific goals and challenges to build solutions **that truly fit**.",
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

      <Insights
        label="Insights"
        heading="Latest thinking on"
        headingAccent="startup operations."
        description="Practical guides and perspectives for founders building the operational backbone of their company."
        insights={[
          {
            title: "Why operational infrastructure is the silent killer of Series A rounds",
            excerpt:
              "Most founders don't lose funding because of a weak product — they lose it because investors find compliance gaps, messy cap tables, and no financial controls. Here's how to fix it before the due diligence clock starts.",
            category: "Fundraising",
            date: "Aug 2026",
            readTime: "6 min read",
            href: "/insights/operational-infrastructure-series-a",
            imageSrc: "https://images.unsplash.com/photo-1553729459-uj1ef-1a-f4e2-8b51-dbe8e14261?w=800&q=80",
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
          },
          {
            title: "Multi-state operations: a founder's playbook",
            excerpt:
              "Expanding across state lines means navigating a maze of registrations, tax obligations, and employment law. Our step-by-step guide keeps you compliant as you scale.",
            category: "Operations",
            date: "Jun 2026",
            readTime: "8 min read",
            href: "/insights/multi-state-operations-playbook",
            imageSrc: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
          },
          {
            title: "Banking setup mistakes that slow down your first 90 days",
            excerpt:
              "From picking the wrong bank to missing fraud controls, these are the treasury missteps we see most often — and how to avoid them.",
            category: "Banking",
            date: "May 2026",
            readTime: "5 min read",
            href: "/insights/banking-setup-mistakes",
            imageSrc: "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?w=800&q=80",
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
