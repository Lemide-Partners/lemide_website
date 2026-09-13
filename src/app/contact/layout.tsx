import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Lemide Partners",
  description:
    "Get in touch with Lemide Partners. Book a discovery call or send us a message about your startup's operational needs.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
