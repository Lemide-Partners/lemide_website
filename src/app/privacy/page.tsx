import type { Metadata } from "next";
import { Navbar, Footer } from "@/components/sections";

export const metadata: Metadata = {
  title: "Privacy Policy — Lemide Partners",
  description: "How Lemide Partners collects, uses, and protects your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="bg-background pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h1 className="type-h1 text-foreground">Privacy Policy</h1>
          <p className="type-body text-muted-foreground mt-4">
            Last updated: September 2026
          </p>

          <div className="mt-12 space-y-10 [&_h2]:type-h4 [&_h2]:text-foreground [&_h2]:mb-4 [&_p]:type-body [&_p]:text-muted-foreground [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_li]:type-body [&_li]:text-muted-foreground">
            <section>
              <h2>Introduction</h2>
              <p>
                Lemide Partners (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting
                your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard
                your information when you visit our website or engage our operational infrastructure,
                compliance, and advisory services.
              </p>
            </section>

            <section>
              <h2>Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul>
                <li><strong>Contact information</strong> — name, email address, phone number, and company name provided through our contact form or when booking a call.</li>
                <li><strong>Business information</strong> — details about your company, industry, stage, and operational needs shared during consultations.</li>
                <li><strong>Usage data</strong> — information about how you interact with our website, including pages visited, time spent, and referring URLs.</li>
                <li><strong>Cookies and tracking</strong> — we use cookies and similar technologies to improve site experience and analyze traffic patterns.</li>
              </ul>
            </section>

            <section>
              <h2>How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Respond to your inquiries and provide requested services.</li>
                <li>Deliver compliance, financial operations, and operational infrastructure services.</li>
                <li>Send relevant communications about our services, insights, and updates.</li>
                <li>Improve our website, services, and client experience.</li>
                <li>Comply with legal obligations and regulatory requirements.</li>
              </ul>
            </section>

            <section>
              <h2>Information Sharing</h2>
              <p>
                We do not sell your personal information. We may share information with trusted
                third-party service providers who assist us in operating our website and delivering
                services, subject to confidentiality agreements. We may also disclose information
                when required by law or to protect our legal rights.
              </p>
            </section>

            <section>
              <h2>Data Security</h2>
              <p>
                We implement industry-standard security measures to protect your personal information,
                including encryption, access controls, and secure data storage. However, no method of
                electronic transmission or storage is completely secure, and we cannot guarantee
                absolute security.
              </p>
            </section>

            <section>
              <h2>Data Retention</h2>
              <p>
                We retain personal information for as long as necessary to fulfill the purposes
                outlined in this policy, unless a longer retention period is required by law. Client
                engagement records may be retained in accordance with applicable regulatory requirements.
              </p>
            </section>

            <section>
              <h2>Your Rights</h2>
              <p>Depending on your jurisdiction, you may have the right to:</p>
              <ul>
                <li>Access the personal information we hold about you.</li>
                <li>Request correction of inaccurate data.</li>
                <li>Request deletion of your personal information.</li>
                <li>Opt out of marketing communications at any time.</li>
                <li>Withdraw consent where processing is based on consent.</li>
              </ul>
            </section>

            <section>
              <h2>Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for
                the privacy practices of these external sites and encourage you to review their
                privacy policies.
              </p>
            </section>

            <section>
              <h2>Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Changes will be posted on this
                page with an updated revision date. We encourage you to review this page periodically.
              </p>
            </section>

            <section>
              <h2>Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or our data practices, please
                contact us at{" "}
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
