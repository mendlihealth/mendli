import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Mendli — Virtual Functional Health Care",
    template: "%s | Mendli",
  },
  description:
    "Root-cause, virtual functional health care specializing in gut health, hormone therapy, thyroid & Hashimoto's, and primary care. NP-led, patient-centered, virtual-first.",
  openGraph: {
    title: "Mendli — Virtual Functional Health Care",
    description:
      "Root-cause, virtual functional health care specializing in gut health, hormone therapy, thyroid & Hashimoto's, and primary care.",
    siteName: "Mendli",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mendli — Virtual Functional Health Care",
    description:
      "Root-cause, virtual functional health care specializing in gut health, hormone therapy, thyroid & Hashimoto's, and primary care.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              name: "Mendli",
              description:
                "Virtual functional health care specializing in gut health, hormone therapy, thyroid & Hashimoto's, and primary care.",
              medicalSpecialty: ["Primary Care", "Endocrinology", "Gastroenterology"],
              availableService: [
                { "@type": "MedicalTherapy", name: "Primary Care" },
                { "@type": "MedicalTherapy", name: "Gut Health" },
                { "@type": "MedicalTherapy", name: "Hormone Therapy" },
                { "@type": "MedicalTherapy", name: "Thyroid & Hashimoto's Care" },
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
