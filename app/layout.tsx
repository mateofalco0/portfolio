import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mateo Falco — Fullstack Developer",
  description:
    "Fullstack developer from Uruguay. Building APIs, automating workflows, and shipping production systems. Open to remote full-time roles.",
  keywords: [
    "Mateo Falco",
    "Fullstack Developer",
    "Uruguay",
    "Next.js",
    "Python",
    "Backend Engineer",
    "Remote Developer",
    "API Integration",
  ],
  authors: [{ name: "Mateo Falco" }],
  openGraph: {
    title: "Mateo Falco — Fullstack Developer",
    description:
      "Building APIs, automating workflows, and shipping production systems.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mateo Falco — Fullstack Developer",
    description:
      "Building APIs, automating workflows, and shipping production systems.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
