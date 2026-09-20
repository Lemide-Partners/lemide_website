import type { Metadata } from "next";
import { Navbar, Footer } from "@/components/sections";

export const metadata: Metadata = {
  title: "Terms of Service — Lemide Partners",
  description: "Terms and conditions governing the use of Lemide Partners services and website.",
};

export default function TermsOfService() {
  return (
    <>
      <Navbar />
      <main className="bg-background pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h1 className="type-h1 text-foreground">Terms of Service</h1>
          <p className="type-body text-muted-foreground mt-4">
            Last updated: September 2026
          </p>

          <div className="mt-12 space-y-10 [&_h2]:type-h4 [&_h2]:text-foreground [&_h2]:mb-4 [&_p]:type-body [&_p]:text-muted-foreground [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_li]:type-body [&_li]:text-muted-foreground">
            <section>
              <h2>Agreement to Terms</h2>
              <p>
                By accessing or using the Lemide Partners website and services, you agree to be
                bound by these Terms of Service. If you do not agree to these terms, please do not
                use our website or services.
              </p>
            </section>

            <section>
              <h2>Services</h2>
              <p>
                Lemide Partners provides operational infrastructure services for early-stage
                startups in Canada and internationally, including but not limited to:
              </p>
              <ul>
                <li>Compliance and regulatory filings management.</li>
                <li>Financial operations setup and coordination.</li>
                <li>Access governance and credential management.</li>
                <li>Workflow automation and process optimization.</li>
                <li>Operations visibility and reporting.</li>
              </ul>
              <p>
                The specific scope of services will be defined in individual service agreements
                or statements of work between Lemide Partners and the client.
              </p>
            </section>

            <section>
              <h2>Engagement Terms</h2>
              <p>
                Our services are provided on a retainer or project basis as agreed upon in writing.
                All engagements are subject to a separate service agreement that outlines scope,
                deliverables, timelines, and fees. These Terms of Service supplement, but do not
                replace, any individual service agreement.
              </p>
            </section>

            <section>
              <h2>Client Responsibilities</h2>
              <p>As a client, you agree to:</p>
              <ul>
                <li>Provide accurate and complete information necessary for the delivery of services.</li>
                <li>Respond to requests for information or approvals in a timely manner.</li>
                <li>Comply with all applicable laws and regulations related to your business operations.</li>
                <li>Maintain the confidentiality of any credentials or access provided during the engagement.</li>
              </ul>
            </section>

            <section>
              <h2>Fees and Payment</h2>
              <p>
                Fees for services are outlined in the applicable service agreement. Unless otherwise
                stated, retainer fees are billed monthly in advance. Late payments may be subject to
                interest charges as specified in the service agreement. We reserve the right to
                suspend services for accounts with outstanding balances exceeding 30 days.
              </p>
            </section>

            <section>
              <h2>Intellectual Property</h2>
              <p>
                All content on our website, including text, graphics, logos, and design, is the
                property of Lemide Partners and protected by applicable intellectual property laws.
                Deliverables created for clients during an engagement become the client&rsquo;s property
                upon full payment, unless otherwise specified in the service agreement.
              </p>
            </section>

            <section>
              <h2>Confidentiality</h2>
              <p>
                We treat all client information as confidential and will not disclose it to third
                parties except as necessary to deliver services, with your consent, or as required
                by law. We expect the same confidentiality from clients regarding our proprietary
                processes and methodologies.
              </p>
            </section>

            <section>
              <h2>Limitation of Liability</h2>
              <p>
                Lemide Partners provides operational support and advisory services. We do not provide
                legal, tax, or investment advice. Our services are not a substitute for professional
                legal counsel or certified public accountant guidance. To the maximum extent permitted
                by law, Lemide Partners shall not be liable for indirect, incidental, or consequential
                damages arising from the use of our services.
              </p>
            </section>

            <section>
              <h2>Termination</h2>
              <p>
                Either party may terminate the engagement with 30 days written notice, unless
                otherwise specified in the service agreement. Upon termination, all outstanding fees
                become immediately due. We will provide a reasonable transition period to ensure
                continuity of your operations.
              </p>
            </section>

            <section>
              <h2>Website Use</h2>
              <p>
                You agree not to use our website for any unlawful purpose, to interfere with the
                website&rsquo;s operation, or to attempt to gain unauthorized access to any part of the
                site. We reserve the right to restrict access to any user who violates these terms.
              </p>
            </section>

            <section>
              <h2>Governing Law</h2>
              <p>
                These Terms of Service are governed by and construed in accordance with applicable
                laws. Any disputes arising from these terms or the use of our services shall be
                resolved through good-faith negotiation, and if necessary, binding arbitration.
              </p>
            </section>

            <section>
              <h2>Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms of Service at any time. Changes will be
                effective upon posting to this page. Continued use of our website or services after
                changes constitutes acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2>Contact Us</h2>
              <p>
                For questions about these Terms of Service, please contact us at{" "}
                <a href="mailto:contact@lemide.com" className="text-accent hover:underline">
                  contact@lemide.com
                </a>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
