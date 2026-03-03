import type { Metadata } from "next";
import { Cormorant, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mendli Health — Jenna Toupin, FNP",
  description:
    "Functional health care for people who are tired of being told everything looks normal. Advanced labs, unhurried visits, and real answers — virtually, nationwide.",
  metadataBase: new URL("https://mendlihealth.com"),
  openGraph: {
    title: "Mendli Health — Jenna Toupin, FNP",
    description:
      "Functional health care that listens, investigates, and gets to the root of what's really going on.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${hanken.variable}`}>
      <body>{children}</body>
    </html>
  );
}
