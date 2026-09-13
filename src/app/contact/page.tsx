"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { Button, Input, Textarea } from "@/components/ui";
import {
  Navbar,
  FooterCta,
  Footer,
  Reveal,
} from "@/components/sections";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <div className="absolute inset-0" style={{ background: "#081030" }}>
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse 80% 60% at 50% 40%, #1a3570 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 80% 60%, #0e2460 0%, transparent 60%), radial-gradient(ellipse 40% 35% at 20% 70%, #162d6b 0%, transparent 50%)",
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
              <linearGradient id="ct-silk1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2a4a8a" stopOpacity="0.8" />
                <stop offset="40%" stopColor="#1a3570" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#081030" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="ct-gold" x1="0%" y1="0%" x2="100%" y2="80%">
                <stop offset="0%" stopColor="#CC9E49" stopOpacity="0.5" />
                <stop offset="50%" stopColor="#a07830" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#081030" stopOpacity="0" />
              </linearGradient>
              <filter id="ct-blur">
                <feGaussianBlur stdDeviation="20" />
              </filter>
            </defs>
            <path
              d="M-100 250 C200 100, 500 400, 700 200 C900 0, 1100 350, 1500 150 L1500 800 L-100 800Z"
              fill="url(#ct-silk1)"
              filter="url(#ct-blur)"
            />
            <path
              d="M-50 480 C200 280, 400 530, 600 330 C800 130, 900 380, 1100 230"
              stroke="url(#ct-gold)"
              strokeWidth="120"
              fill="none"
              filter="url(#ct-blur)"
              strokeLinecap="round"
            />
            <circle cx="1200" cy="200" r="160" fill="#CC9E49" fillOpacity="0.15" filter="url(#ct-blur)" />
            <circle cx="180" cy="450" r="100" fill="#2a5099" fillOpacity="0.2" filter="url(#ct-blur)" />
          </svg>
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 30%, rgba(8,16,48,0.6) 100%)",
            }}
          />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-40 pb-16 lg:pt-48 lg:pb-24">
          <span className="inline-block px-5 py-2 rounded-full bg-white/[0.08] border border-white/[0.12] type-caption text-white/90 backdrop-blur-sm mb-8">
            Contact Us
          </span>
          <h1 className="type-h1 text-inverse-fg max-w-4xl" style={{ fontSize: "clamp(2.5rem, 5vw, 3.75rem)", lineHeight: 1.1 }}>
            Let&apos;s build your{" "}
            <span className="text-accent">operational backbone.</span>
          </h1>
          <p className="type-body-lg text-inverse-muted mt-6 max-w-2xl" style={{ textWrap: "pretty" }}>
            Whether you&apos;re incorporating for the first time or scaling
            across borders, we&apos;re here to help you get it right.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20">
            {/* Form */}
            <div className="lg:col-span-3">
              <Reveal animation="fade-up">
                <h2 className="type-h3 text-foreground mb-2">
                  Send us a message
                </h2>
                <p className="type-body text-muted-foreground mb-8">
                  Tell us about your company and what you need. We&apos;ll get
                  back to you within one business day.
                </p>

                {submitted ? (
                  <div className="bg-[#f8f8f6] rounded-2xl p-10 text-center">
                    <div className="w-16 h-16 rounded-full bg-accent/10 text-accent flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <h3 className="type-h4 text-foreground mb-3">
                      Message sent
                    </h3>
                    <p className="type-body text-muted-foreground max-w-md mx-auto">
                      Thank you for reaching out. A member of our team will
                      respond within one business day.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <Input
                        label="First Name"
                        name="firstName"
                        placeholder="Jane"
                        required
                      />
                      <Input
                        label="Last Name"
                        name="lastName"
                        placeholder="Smith"
                        required
                      />
                    </div>
                    <Input
                      label="Work Email"
                      name="email"
                      type="email"
                      placeholder="jane@company.com"
                      required
                    />
                    <Input
                      label="Company Name"
                      name="company"
                      placeholder="Your company"
                    />
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="interest"
                        className="type-body-sm font-medium text-foreground"
                      >
                        What do you need help with?
                      </label>
                      <select
                        id="interest"
                        name="interest"
                        className="h-11 w-full rounded-md border border-border bg-card px-4 font-body text-sm text-foreground transition-colors duration-150 focus-ring hover:border-navy-200"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select a service area
                        </option>
                        <option value="compliance">Compliance & Filings</option>
                        <option value="financial">Financial Operations</option>
                        <option value="access">Access Governance</option>
                        <option value="workflow">Workflow Automation</option>
                        <option value="visibility">Operations Visibility</option>
                        <option value="general">General Inquiry</option>
                      </select>
                    </div>
                    <Textarea
                      label="Tell us about your project"
                      name="message"
                      placeholder="What stage is your company at? What operational challenges are you facing?"
                      rows={5}
                    />
                    <Button type="submit" variant="accent" size="lg">
                      Send Message
                    </Button>
                  </form>
                )}
              </Reveal>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <Reveal delay={0.15} animation="fade-up">
                <div className="space-y-10">
                  {/* Book a call */}
                  <div className="bg-[#f8f8f6] rounded-2xl p-8">
                    <h3 className="type-h5 text-foreground mb-3">
                      Prefer to talk?
                    </h3>
                    <p className="type-body text-muted-foreground mb-6">
                      Book a 30-minute discovery call with our team. We&apos;ll
                      walk through your current setup and identify where we can
                      help.
                    </p>
                    <Link href="/contact">
                      <Button variant="primary" size="md">
                        Book a Call
                      </Button>
                    </Link>
                  </div>

                  {/* Email */}
                  <div>
                    <h3 className="type-h5 text-foreground mb-3">
                      Email us directly
                    </h3>
                    <a
                      href="mailto:contact@lemide.com"
                      className="type-body text-accent hover:text-accent/80 transition-colors inline-flex items-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                      contact@lemide.com
                    </a>
                  </div>

                  {/* Social */}
                  <div>
                    <h3 className="type-h5 text-foreground mb-3">
                      Follow us
                    </h3>
                    <div className="flex gap-4">
                      <a
                        href="https://linkedin.com/company/lemide"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
                        aria-label="LinkedIn"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                      <a
                        href="https://x.com/lemide"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
                        aria-label="X (Twitter)"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Response time */}
                  <div className="border-t border-border/40 pt-8">
                    <div className="flex items-start gap-3">
                      <div className="shrink-0 w-2 h-2 rounded-full bg-green-500 mt-2" />
                      <div>
                        <p className="type-body-sm font-medium text-foreground">
                          Typical response time
                        </p>
                        <p className="type-body-sm text-muted-foreground">
                          Within one business day
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
