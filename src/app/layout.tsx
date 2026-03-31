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
    "virtual healthcare",
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

  /* Robots — allow maximum content extraction for SERP + AI */
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large" as const,
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  /* Other */
  category: "Health",
};

/* ─── SEO: Advanced JSON-LD Structured Data Graph ─── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    /* ── MedicalClinic — Core Business Entity ── */
    {
      "@type": ["MedicalClinic", "MedicalBusiness", "HealthAndBeautyBusiness"],
      "@id": `${SITE_URL}/#clinic`,
      name: "Mendli Health",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        "@id": `${SITE_URL}/#logo`,
        inLanguage: "en-US",
        url: `${SITE_URL}/mendli-logo-t.png`,
        width: 819,
        height: 304,
        caption: "Mendli Health",
      },
      image: {
        "@id": `${SITE_URL}/#logo`,
      },
      description: DESCRIPTION,
      slogan:
        "Your health, listened to, understood, investigated, answered.",
      medicalSpecialty: [
        "Functional Medicine",
        "Primary Care",
        "Holistic Health",
        "Preventive Medicine",
      ],
      founder: {
        "@id": `${SITE_URL}/#jenna`,
      },
      employees: [
        {
          "@id": `${SITE_URL}/#jenna`,
        },
      ],
      address: {
        "@type": "PostalAddress",
        addressCountry: "US",
      },
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      priceRange: "$$",
      email: "jenna@mendlihealth.com",
      paymentAccepted: ["Cash", "Credit Card", "Debit Card", "HSA", "FSA"],
      currenciesAccepted: "USD",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "17:00",
        },
      ],
      healthCondition: [
        { "@type": "MedicalCondition", name: "Hashimoto's Thyroiditis" },
        { "@type": "MedicalCondition", name: "Hypothyroidism" },
        { "@type": "MedicalCondition", name: "Irritable Bowel Syndrome" },
        { "@type": "MedicalCondition", name: "Small Intestinal Bacterial Overgrowth" },
        { "@type": "MedicalCondition", name: "Polycystic Ovary Syndrome" },
        { "@type": "MedicalCondition", name: "Chronic Fatigue Syndrome" },
        { "@type": "MedicalCondition", name: "Autoimmune Disease" },
        { "@type": "MedicalCondition", name: "Hormonal Imbalance" },
        { "@type": "MedicalCondition", name: "Adrenal Fatigue" },
        { "@type": "MedicalCondition", name: "Brain Fog" },
        { "@type": "MedicalCondition", name: "Leaky Gut Syndrome" },
        { "@type": "MedicalCondition", name: "Metabolic Syndrome" },
      ],
      sameAs: [
        "https://www.welli.com/care/provider/1902659063",
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "8",
        bestRating: "5",
        worstRating: "1",
      },
      review: [
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Sarah M." },
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          reviewBody:
            "For three years, every doctor told me my labs were fine. Jenna asked questions no one had ever thought to ask. Three months later — real answers, and my energy back.",
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Rachel T." },
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          reviewBody:
            "I'd given up on finding someone who'd actually listen. Jenna spent 90 minutes with me on the first call. Nobody does that.",
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Mark D." },
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          reviewBody:
            "The level of detail in the lab work alone was worth it. She found things three other doctors missed.",
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "James W." },
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          reviewBody:
            "My gut issues were 'all in my head' according to my last doctor. Jenna ran the right panels and found the root cause in weeks.",
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Priya S." },
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          reviewBody:
            "The concierge model is incredible. Having direct access to your practitioner between visits changes everything about how I manage my health.",
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Chris L." },
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          reviewBody:
            "Worth every penny. I've spent more on specialists who did less in a year than Jenna did in one visit.",
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Nicole B." },
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          reviewBody:
            "Jenna changed my relationship with my health. I went from anxious and confused to empowered and informed.",
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Danielle R." },
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          reviewBody:
            "She doesn't just treat symptoms — she explains the why behind everything. I finally understand my own body.",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Mendli Health Services",
        itemListElement: [
          {
            "@type": "Offer",
            name: "Initial Assessment",
            description:
              "90-minute comprehensive intake with advanced functional lab work — a full investigation of your health history, symptoms, and lifestyle.",
            price: "300",
            priceCurrency: "USD",
          },
          {
            "@type": "Offer",
            name: "Follow-Up Session",
            description:
              "45-minute structured visit to review labs, track progress, and adjust protocols.",
            price: "150",
            priceCurrency: "USD",
          },
          {
            "@type": "Offer",
            name: "Concierge Membership",
            description:
              "Monthly membership including secure messaging between visits, priority scheduling, and direct access to your practitioner.",
            price: "50",
            priceCurrency: "USD",
          },
        ],
      },
      availableService: [
        {
          "@type": "MedicalTherapy",
          name: "Advanced Functional Lab Orders",
          description:
            "Functional panels that go far beyond standard bloodwork — thyroid, hormones, gut markers, metabolic health, inflammatory markers, and more.",
        },
        {
          "@type": "MedicalTherapy",
          name: "Evidence-Based Supplement Protocols",
          description:
            "Supplement recommendations tailored to your labs and symptoms — not guesswork. Only what your body actually needs.",
        },
        {
          "@type": "MedicalTherapy",
          name: "Personalized Care Plans",
          description:
            "Nutrition, lifestyle, supplementation, and follow-up — woven into one cohesive roadmap grounded in your data.",
        },
        {
          "@type": "MedicalTherapy",
          name: "Root-Cause Investigation",
          description:
            "Gut health, hormones, thyroid, adrenals, autoimmunity, chronic fatigue — tracing symptoms back to their origin.",
        },
        {
          "@type": "MedicalTherapy",
          name: "Collaborative Care",
          description:
            "Working alongside existing providers when needed — coordinating, not competing.",
        },
      ],
    },

    /* ── Practitioner — Jenna Toupin ── */
    {
      "@type": ["Person", "MedicalPractitioner"],
      "@id": `${SITE_URL}/#jenna`,
      name: "Jenna Toupin",
      givenName: "Jenna",
      familyName: "Toupin",
      honorificSuffix: "FNP-BC",
      jobTitle: "Board-Certified Family Nurse Practitioner",
      description:
        "Founder of Mendli Health and Board-Certified Family Nurse Practitioner (NPI: 1902659063) with 8+ years of clinical experience, specializing in functional medicine, root-cause health investigation, and advanced diagnostic lab work.",
      identifier: {
        "@type": "PropertyValue",
        propertyID: "NPI",
        name: "National Provider Identifier",
        value: "1902659063",
        url: "https://npiregistry.cms.hhs.gov/provider-view/1902659063",
      },
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "Professional License",
          name: "Board-Certified Family Nurse Practitioner (FNP-BC)",
        },
      ],
      worksFor: {
        "@id": `${SITE_URL}/#clinic`,
      },
      memberOf: {
        "@type": "MedicalOrganization",
        name: "Welli Provider Network",
        url: "https://www.welli.com",
        description: "Healthcare platform connecting patients with providers through philosophy-of-care matching.",
      },
      image: {
        "@type": "ImageObject",
        url: `${SITE_URL}/jenna-headshot.png`,
      },
      knowsAbout: [
        "Functional Medicine",
        "Root Cause Medicine",
        "Thyroid Health",
        "Hashimoto's Thyroiditis",
        "Hypothyroidism",
        "Gut Health",
        "SIBO",
        "Leaky Gut",
        "Hormone Balancing",
        "PCOS",
        "Perimenopause",
        "Estrogen Dominance",
        "Chronic Fatigue Syndrome",
        "Adrenal Dysfunction",
        "Autoimmune Conditions",
        "Brain Fog",
        "Advanced Lab Testing",
        "Preventive Medicine",
        "Metabolic Health",
        "Insulin Resistance",
      ],
      sameAs: [
        "https://npiregistry.cms.hhs.gov/provider-view/1902659063",
        "https://www.welli.com/care/provider/1902659063",
      ],
    },

    /* ── WebSite ── */
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Mendli Health",
      description: DESCRIPTION,
      publisher: {
        "@id": `${SITE_URL}/#clinic`,
      },
      inLanguage: "en-US",
    },

    /* ── WebPage ── */
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: TITLE,
      isPartOf: {
        "@id": `${SITE_URL}/#website`,
      },
      about: {
        "@id": `${SITE_URL}/#clinic`,
      },
      description: DESCRIPTION,
      inLanguage: "en-US",
      significantLink: [
        "https://www.welli.com/care/provider/1902659063",
        "https://npiregistry.cms.hhs.gov/provider-view/1902659063",
      ],
      relatedLink: [
        "https://www.welli.com",
        "https://www.welli.com/care",
      ],
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", "h2", "[data-geo]", ".hero-center", ".about-story", ".cta-in", "noscript div p"],
      },
    },

    /* ── SiteNavigationElement — Google sitelinks signals ── */
    {
      "@type": "SiteNavigationElement",
      name: "About Jenna Toupin",
      description: "Board-Certified Family Nurse Practitioner specializing in functional medicine, root-cause investigation, and advanced diagnostic lab work.",
      url: `${SITE_URL}/#about`,
    },
    {
      "@type": "SiteNavigationElement",
      name: "Functional Medicine Services",
      description: "Advanced lab testing, root-cause investigation, personalized care plans, and evidence-based supplement protocols.",
      url: `${SITE_URL}/#what`,
    },
    {
      "@type": "SiteNavigationElement",
      name: "Pricing & Plans",
      description: "Transparent pricing for initial assessments ($300), follow-ups ($150), and concierge membership ($50/month).",
      url: `${SITE_URL}/#pricing`,
    },
    {
      "@type": "SiteNavigationElement",
      name: "FAQ",
      description: "Common questions about functional medicine, virtual care, lab testing, insurance, and how Mendli Health works.",
      url: `${SITE_URL}/#faq`,
    },
    {
      "@type": "SiteNavigationElement",
      name: "Book a Consultation",
      description: "Schedule a 90-minute initial assessment with Jenna Toupin, FNP-BC. Virtual appointments available nationwide.",
      url: `${SITE_URL}/#pricing`,
    },

    /* ── FAQPage ── */
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What is functional medicine?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Functional medicine is a patient-centered approach that identifies and addresses the root causes of disease rather than treating symptoms in isolation. At Mendli, this means 60–90 minute consultations, advanced diagnostic labs that go far beyond standard bloodwork, and personalized care plans built around your unique biology, lifestyle, and health history.",
          },
        },
        {
          "@type": "Question",
          name: "How is functional medicine different from conventional medicine?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Conventional medicine typically treats symptoms with medication in 12–15 minute visits. Functional medicine starts with your full health timeline and uses advanced diagnostics — comprehensive thyroid panels, gut microbiome testing, hormone metabolites, inflammatory markers — to find the underlying cause. At Mendli, your initial visit is 90 minutes.",
          },
        },
        {
          "@type": "Question",
          name: "What lab tests does a functional medicine practitioner order?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "At Mendli, labs go far beyond standard bloodwork. Depending on your symptoms, I may order comprehensive thyroid panels (including antibodies and reverse T3), advanced hormone testing, organic acids tests, gut microbiome analysis, food sensitivity panels, adrenal stress profiles, nutrient deficiency panels, inflammatory markers like hs-CRP, and metabolic health assessments.",
          },
        },
        {
          "@type": "Question",
          name: "Do you have a physical location?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "All Mendli visits are currently virtual — available to patients nationwide. This allows specialized functional medicine care to reach patients wherever they are, without geographic limitations.",
          },
        },
        {
          "@type": "Question",
          name: "Do you take insurance?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Mendli is currently out-of-network with all insurance plans. This allows 60–90 minute visits without insurance limitations. Superbills are provided after each visit for potential reimbursement. HSA and FSA cards are accepted.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to see results with functional medicine?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most patients begin noticing meaningful shifts within 4–8 weeks of starting their personalized protocol. Deeper systemic issues like hormonal rebalancing, gut healing, or autoimmune management typically show significant progress within 3–6 months. Progress is tracked with follow-up labs and regular check-ins.",
          },
        },
        {
          "@type": "Question",
          name: "Is functional medicine evidence-based?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Functional medicine combines peer-reviewed research with clinical experience and advanced diagnostics. The labs ordered, supplements recommended, and protocols built are all grounded in published research. Functional medicine reads labs through a narrower lens, comparing results against optimal ranges rather than just population averages.",
          },
        },
        {
          "@type": "Question",
          name: "Can I see a functional medicine practitioner virtually?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — and virtual care is ideal for functional medicine. At Mendli, all visits are conducted via secure video. Lab orders are sent to your nearest lab draw center, and results are reviewed in detail during follow-up visits. The virtual model means access to specialized care no matter where you are in the United States. You can also find Jenna's verified provider profile on Welli at welli.com/care/provider/1902659063.",
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
        {
          "@type": "Question",
          name: "Do you offer primary care?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — Jenna is a Board-Certified Family Nurse Practitioner, and primary care is what she trained in. A dedicated primary care package is planned alongside functional health services in the future.",
          },
        },
      ],
    },

    /* ── HowTo — Getting Started ── */
    {
      "@type": "HowTo",
      "@id": `${SITE_URL}/#howto`,
      name: "How to Get Started with Functional Medicine at Mendli Health",
      description:
        "Three simple steps from confusion to clarity with Mendli Health's functional medicine approach.",
      step: [
        {
          "@type": "HowToStep",
          name: "Book Your Visit",
          text: "Schedule your 90-minute initial assessment. You'll receive intake forms and a detailed health timeline questionnaire before we meet.",
          position: 1,
        },
        {
          "@type": "HowToStep",
          name: "Deep Assessment",
          text: "We meet virtually for a thorough review of your full history, symptoms, and goals — then I order the functional labs that actually matter.",
          position: 2,
        },
        {
          "@type": "HowToStep",
          name: "Your Roadmap",
          text: "Lab results become a personalized protocol: nutrition, supplements, lifestyle shifts, and regular follow-ups to track real progress.",
          position: 3,
        },
      ],
    },

    /* ── BreadcrumbList — Site navigation ── */
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}/#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "About Jenna Toupin",
          item: `${SITE_URL}/#about`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Services",
          item: `${SITE_URL}/#what`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Approach",
          item: `${SITE_URL}/#approach`,
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Pricing",
          item: `${SITE_URL}/#pricing`,
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "FAQ",
          item: `${SITE_URL}/#faq`,
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
        {/* Identity: link rel=me — cross-site identity verification */}
        <link rel="me" href="https://www.welli.com/care/provider/1902659063" />
        {/* Performance: preconnect to Google Fonts CDN */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://www.welli.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
