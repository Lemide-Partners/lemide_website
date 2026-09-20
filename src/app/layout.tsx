import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lemide Partners",
  description:
    "Canada's operational partner for early-stage startups, covering legal, compliance, banking, and infrastructure across Canada and the U.S.",
  icons: {
    icon: [
      {
        url: "/assets/images/favicon-main.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/assets/images/favicon-white.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: "/assets/images/favicon-main.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${dmSans.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
