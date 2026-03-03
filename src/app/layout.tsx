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

/* ─── SEO: Metadata ─── */
const SITE_URL = "https://mendlihealth.com";
const TITLE = "Mendli Health — Jenna Toupin, FNP | Functional Health Care";
const DESCRIPTION =
  "Functional health care for people tired of being told everything looks normal. Advanced labs, unhurried 60–90 minute visits, and real answers — virtually, nationwide. Founded by Jenna Toupin, Board-Certified Family Nurse Practitioner.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  /* Core */
  title: {
    default: TITLE,
    template: "%s | Mendli Health",
  },
  description: DESCRIPTION,
  keywords: [
    "functional medicine",
    "functional health",
    "nurse practitioner",
    "virtual healthcare",
    "telehealth",
    "holistic health",
    "advanced lab testing",
    "root cause medicine",
    "gut health",
    "hormone health",
    "thyroid",
    "fatigue",
    "functional health practitioner",
    "Jenna Toupin",
    "Mendli Health",
    "Indianapolis",
    "concierge medicine",
    "integrative health",
  ],
  authors: [{ name: "Jenna Toupin, FNP", url: SITE_URL }],
  creator: "Mendli Health",

  /* Canonical */
  alternates: {
    canonical: SITE_URL,
  },

  /* Open Graph */
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Mendli Health",
    title: TITLE,
    description:
      "Functional health care that listens, investigates, and gets to the root of what's really going on. Advanced labs, unhurried visits, and a provider who actually knows your case.",
    images: [
      {
        url: "/mendli-logo-t.png",
        width: 819,
        height: 304,
        alt: "Mendli Health",
      },
    ],
  },

  /* Twitter */
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description:
      "Functional health care that listens, investigates, and gets to the root of what's really going on.",
    images: ["/mendli-logo-t.png"],
  },

  /* Robots */
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  /* Other */
  category: "Health",
};

/* ─── SEO: JSON-LD Structured Data ─── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalBusiness",
      name: "Mendli Health",
      url: SITE_URL,
      logo: `${SITE_URL}/mendli-logo-t.png`,
      image: `${SITE_URL}/mendli-logo-t.png`,
      description: DESCRIPTION,
      founder: {
        "@type": "Person",
        name: "Jenna Toupin",
        jobTitle: "Board-Certified Family Nurse Practitioner",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Indianapolis",
        addressRegion: "IN",
        addressCountry: "US",
      },
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      priceRange: "$$",
      telephone: "",
      email: "jenna@mendlihealth.com",
      medicalSpecialty: "Functional Medicine",
      availableService: [
        {
          "@type": "MedicalProcedure",
          name: "Initial Assessment",
          description:
            "90-minute deep-dive virtual consultation with advanced functional lab work.",
        },
        {
          "@type": "MedicalProcedure",
          name: "Follow-Up Visit",
          description:
            "45-minute follow-up to review results, adjust protocols, and track progress.",
        },
      ],
    },
    {
      "@type": "WebSite",
      url: SITE_URL,
      name: "Mendli Health",
      description: DESCRIPTION,
      publisher: {
        "@type": "Organization",
        name: "Mendli Health",
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/mendli-logo-t.png`,
        },
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Do you have a physical location?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "All Mendli visits are currently virtual — available to patients nationwide. A physical location in Indianapolis is in development for patients who prefer in-person care.",
          },
        },
        {
          "@type": "Question",
          name: "Do you offer primary care?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — Jenna is a Board-Certified Family Nurse Practitioner, and primary care is what she trained in. A dedicated primary care package is planned once the Indianapolis office is established.",
          },
        },
        {
          "@type": "Question",
          name: "Do you take insurance?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Mendli is currently out-of-network with all insurance plans. Superbills are provided after each visit for potential reimbursement. HSA and FSA cards are accepted.",
          },
        },
        {
          "@type": "Question",
          name: "What's included with the Concierge Membership?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The membership ($50/month) includes secure messaging between visits, priority scheduling, and direct access to Jenna. Continuity is central to how functional health works.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${hanken.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
