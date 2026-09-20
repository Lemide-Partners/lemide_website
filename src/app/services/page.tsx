import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui";
import {
  Navbar,
  FooterCta,
  Footer,
  Faq,
  Reveal,
} from "@/components/sections";

export const metadata: Metadata = {
  title: "Services | Lemide Partners",
  description:
    "Full-stack operational infrastructure for Canadian startups. Compliance, financial operations, access governance, workflow automation, and operations visibility across Canada and the U.S.",
};

const services = [
  {
    id: "compliance",
    title: "Compliance & Filings",
    subtitle: "Stay compliant, stay focused.",
    description:
      "Federal, provincial, and state registrations, annual filings, regulatory reporting, and ongoing compliance management across Canada and the U.S. Handled end-to-end so you never miss a deadline.",
    details: [
      "Entity formation and registrations across Canadian provinces and U.S. states",
      "Annual report filings and registered agent coordination in both countries",
      "Regulatory compliance monitoring and deadline tracking",
      "Multi-province and multi-state tax registration and nexus analysis",
      "Extra-provincial and foreign qualification filings for cross-border expansion",
      "Corporate governance documentation and minute books",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    id: "financial-operations",
    title: "Financial Operations",
    subtitle: "From day one through Series B.",
    description:
      "Bank account setup, payment infrastructure, bookkeeping coordination, and treasury operations. Built for the way startups actually move money.",
    details: [
      "Business bank account setup and merchant account coordination",
      "Payment infrastructure design and processor integration",
      "Bookkeeping coordination with your accounting team",
      "Treasury operations and cash flow management frameworks",
      "Financial controls and approval workflows",
      "Investor reporting templates and board deck preparation support",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    id: "access-governance",
    title: "Access Governance Automation",
    subtitle: "Secure by default, scalable by design.",
    description:
      "Automated provisioning, role-based access controls, and credential management across your entire tool stack. No more shared passwords or orphaned accounts.",
    details: [
      "Automated user provisioning and deprovisioning across SaaS tools",
      "Role-based access control (RBAC) design and implementation",
      "Credential management and secure vault configuration",
      "Access review cycles and compliance audit support",
      "SSO and identity provider integration",
      "Offboarding automation to eliminate orphaned access",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    id: "workflow-automation",
    title: "Workflow Automation",
    subtitle: "Scale without adding headcount.",
    description:
      "Streamlined onboarding, vendor management, document workflows, and operational processes. Built so your team spends less time on process and more time on product.",
    details: [
      "Employee and contractor onboarding automation",
      "Vendor management and procurement workflows",
      "Document generation, routing, and e-signature coordination",
      "Operational process design and standard operating procedures",
      "Tool stack integration and data flow automation",
      "Custom workflow design for recurring operational tasks",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    id: "operations-visibility",
    title: "Operations Visibility",
    subtitle: "Always know where things stand.",
    description:
      "Real-time dashboards, compliance status tracking, and operational reporting. So leadership always has a clear picture without chasing updates.",
    details: [
      "Operational health dashboards with real-time status indicators",
      "Compliance deadline tracking and automated reminders",
      "Entity and filing status visibility across jurisdictions",
      "Custom reporting for board meetings and investor updates",
      "KPI tracking for operational efficiency metrics",
      "Audit trail documentation and change logging",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "We start with a deep dive into your current operations, tools, compliance posture, and growth plans to understand exactly where you are.",
  },
  {
    step: "02",
    title: "Blueprint",
    description: "We design a tailored operational infrastructure plan covering entity, compliance, banking, tooling, and process, scoped to your stage and timeline.",
  },
  {
    step: "03",
    title: "Build",
    description: "Our team executes the plan end-to-end. Filings get filed, accounts get opened, tools get configured, and access gets locked down.",
  },
  {
    step: "04",
    title: "Operate",
    description: "Once the foundation is in place, we transition to ongoing management. Monitoring, renewals, reporting, and scaling as your company grows.",
  },
];

const faqItems = [
  {
    question: "What does 'full-stack operational infrastructure' mean?",
    answer:
      "It means we handle the complete operational backbone of your company: entity formation, compliance, banking, access governance, process automation, and ongoing operational management. Instead of hiring five different specialists, you get one integrated partner.",
  },
  {
    question: "Do you only work with Canadian startups?",
    answer:
      "Canada is our home market, but we support companies across 5+ countries, with deep expertise in Canadian, U.S., and Nigerian regulatory environments. We regularly help Canadian startups with cross-border entity structures, multi-jurisdiction compliance, and international payroll as they expand into the U.S. and beyond.",
  },
  {
    question: "How quickly can you get us set up?",
    answer:
      "Most foundational setups (entity formation, banking, initial compliance filings) are completed within 30 days. More complex multi-province, cross-border, or international engagements may take longer, but we always provide a clear timeline upfront during the discovery phase.",
  },
  {
    question: "Do you replace our legal or accounting team?",
    answer:
      "No. We complement your existing advisors by handling the day-to-day operational execution: filings, credential management, banking setup, vendor coordination. Your legal and financial teams stay focused on strategy while we manage the operational work.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We have deep experience in fintech, education, energy, healthcare, agriculture, and logistics. These are sectors where compliance, regulatory complexity, and operational overhead can slow early-stage companies down significantly.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0" style={{ background: "#060e2a" }}>
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse 80% 60% at 55% 40%, #1a3570 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 25% 65%, #0e2460 0%, transparent 60%), radial-gradient(ellipse 40% 35% at 80% 70%, #162d6b 0%, transparent 50%)",
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
              <linearGradient id="svc-silk1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2a4a8a" stopOpacity="0.9" />
                <stop offset="40%" stopColor="#1a3570" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#060e2a" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="svc-silk2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3355a0" stopOpacity="0.5" />
                <stop offset="50%" stopColor="#1e3d7a" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#060e2a" stopOpacity="0.2" />
              </linearGradient>
              <linearGradient id="svc-gold" x1="0%" y1="0%" x2="100%" y2="80%">
                <stop offset="0%" stopColor="#CC9E49" stopOpacity="0.45" />
                <stop offset="50%" stopColor="#a07830" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#060e2a" stopOpacity="0" />
              </linearGradient>
              <filter id="svc-blur">
                <feGaussianBlur stdDeviation="20" />
              </filter>
            </defs>
            <path
              d="M-100 220 C200 90, 500 370, 700 170 C900 -30, 1100 320, 1500 120 L1500 800 L-100 800Z"
              fill="url(#svc-silk1)"
              filter="url(#svc-blur)"
            />
            <path
              d="M380 800 C480 480, 780 180, 1080 330 C1380 480, 1480 130, 1580 280 L1600 800Z"
              fill="url(#svc-silk2)"
              filter="url(#svc-blur)"
            />
            <path
              d="M-50 520 C200 320, 400 570, 600 370 C800 170, 900 420, 1100 270"
              stroke="url(#svc-gold)"
              strokeWidth="130"
              fill="none"
              filter="url(#svc-blur)"
              strokeLinecap="round"
            />
            <circle cx="1150" cy="180" r="180" fill="#2a5099" fillOpacity="0.25" filter="url(#svc-blur)" />
            <circle cx="200" cy="500" r="120" fill="#CC9E49" fillOpacity="0.1" filter="url(#svc-blur)" />
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
            Our Services
          </span>
          <h1 className="type-h1 text-inverse-fg max-w-4xl" style={{ fontSize: "clamp(2.5rem, 5vw, 3.75rem)", lineHeight: 1.1 }}>
            Full-stack operational{" "}
            <span className="text-accent">infrastructure.</span>
          </h1>
          <p className="type-body-lg text-inverse-muted mt-6 max-w-2xl" style={{ textWrap: "pretty" }}>
            We handle the operational backbone of your company so you can focus
            on building your product and serving your customers.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-20 lg:space-y-28">
            {services.map((service, i) => (
              <Reveal key={service.id} delay={0.1} animation="fade-up">
                <div
                  id={service.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start ${
                    i % 2 === 1 ? "lg:direction-rtl" : ""
                  }`}
                  style={i % 2 === 1 ? { direction: "rtl" } : undefined}
                >
                  <div style={i % 2 === 1 ? { direction: "ltr" } : undefined}>
                    <div className="svc-icon-3d w-20 h-20 rounded-2xl bg-primary/[0.06] text-primary flex items-center justify-center mb-6 border border-primary/[0.08]">
                      {service.icon}
                    </div>
                    <p className="type-caption text-accent font-medium mb-3">
                      {service.subtitle}
                    </p>
                    <h2 className="type-h2 text-foreground">
                      {service.title}
                    </h2>
                    <p className="type-body-lg text-muted-foreground mt-4" style={{ textWrap: "pretty" }}>
                      {service.description}
                    </p>
                  </div>
                  <div
                    className="bg-[#f8f8f6] rounded-2xl p-8 lg:p-10"
                    style={i % 2 === 1 ? { direction: "ltr" } : undefined}
                  >
                    <h3 className="type-h5 text-foreground mb-6">What this includes</h3>
                    <ul className="space-y-4">
                      {service.details.map((detail, j) => (
                        <li key={j} className="flex gap-3">
                          <div className="shrink-0 w-5 h-5 rounded-full bg-accent/10 text-accent flex items-center justify-center mt-0.5">
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                          </div>
                          <p className="type-body text-muted-foreground">{detail}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#f8f8f6] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <Reveal animation="fade-up">
              <span className="inline-block px-5 py-2 rounded-full border border-border type-caption text-muted-foreground mb-6">
                Our Process
              </span>
              <h2 className="type-h2 text-foreground">
                How we{" "}
                <span className="text-accent">work together.</span>
              </h2>
              <p className="type-body-lg text-muted-foreground mt-4" style={{ textWrap: "pretty" }}>
                Every engagement follows a clear, structured process designed to
                get your operations right the first time.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, i) => (
              <Reveal key={item.step} delay={i * 0.1} animation="fade-up">
                <div className="relative">
                  <span className="type-h1 text-accent/20 font-display font-bold" style={{ fontSize: "3.5rem", lineHeight: 1 }}>
                    {item.step}
                  </span>
                  <h3 className="type-h4 text-foreground mt-4 mb-3">
                    {item.title}
                  </h3>
                  <p className="type-body text-muted-foreground" style={{ textWrap: "pretty" }}>
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal animation="fade-up">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-block px-5 py-2 rounded-full border border-border type-caption text-muted-foreground mb-6">
                Industries
              </span>
              <h2 className="type-h2 text-foreground">
                Deep experience across{" "}
                <span className="text-accent">focus verticals.</span>
              </h2>
              <p className="type-body-lg text-muted-foreground mt-4" style={{ textWrap: "pretty" }}>
                We specialize in early-stage companies across industries where
                compliance, regulatory, and operational complexity can slow you
                down.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: "Fintech", icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                </svg>
              )},
              { name: "Education", icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              )},
              { name: "Energy", icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              )},
              { name: "Healthcare", icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.502-4.688-4.502-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.748 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              )},
              { name: "Agriculture", icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              )},
              { name: "Logistics", icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                </svg>
              )},
            ].map((industry, i) => (
              <Reveal key={industry.name} delay={i * 0.08} animation="fade-up">
                <div className="flex flex-col items-center text-center p-6 rounded-2xl border border-border/40 hover:border-accent/30 hover:shadow-sm transition-all duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-primary/[0.06] text-primary flex items-center justify-center mb-4">
                    {industry.icon}
                  </div>
                  <p className="type-body font-display font-medium text-foreground">
                    {industry.name}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <Faq
        label="FAQs"
        heading="Frequently asked questions"
        items={faqItems}
      />

      <FooterCta
        heading="Ready to build your operational infrastructure?"
        headingAccent="Start here."
        ctaLabel="Book a Call"
        ctaHref="/contact"
      />

      <Footer />
    </>
  );
}
