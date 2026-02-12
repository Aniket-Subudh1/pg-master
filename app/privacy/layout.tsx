import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pgmaster.in/"),
  title: "Privacy Policy - PG Master | Data Protection & User Privacy",
  description: "Read PG Master's comprehensive Privacy Policy. Learn how we collect, use, protect, and manage your personal data in compliance with IT Act 2000 and data protection regulations. GDPR and India privacy law compliant.",
  keywords: [
    "PG Master privacy policy",
    "privacy policy PG software",
    "data protection PG Master",
    "user privacy policy",
    "PGMASTER data security",
    "tenant data privacy",
    "IT Act 2000 compliance",
    "personal information protection",
    "privacy policy India",
    "data collection policy",
    "user data rights",
    "GDPR compliance India",
    "privacy practices PG management",
    "data retention policy",
    "cookie policy",
    "Meta integration privacy",
    "Facebook Instagram data",
    "CRM data privacy",
    "user consent policy",
    "data deletion rights"
  ],
  authors: [{ name: "PG Master - Swastik Smart Solutions" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.pgmaster.in/privacy",
    title: "Privacy Policy - PG Master",
    description: "Learn how PG Master protects your personal information. Comprehensive privacy policy covering data collection, usage, security, and your rights under IT Act 2000.",
    siteName: "PG Master",
    images: [
      {
        url: "/seo.png",
        width: 1200,
        height: 630,
        alt: "PG Master Privacy Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy - PG Master",
    description: "Understand how PG Master collects, uses, and protects your personal data. IT Act 2000 compliant privacy practices.",
    images: ["/seo.png"],
  },
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
  alternates: {
    canonical: "https://www.pgmaster.in/privacy",
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* JSON-LD Structured Data for SEO */}
      <Script
        id="privacy-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://www.pgmaster.in/privacy#webpage",
            url: "https://www.pgmaster.in/privacy",
            name: "Privacy Policy",
            description: "Privacy Policy for PG Master platform covering data collection, usage, protection, and user rights",
            inLanguage: "en-IN",
            datePublished: "2026-02-12",
            dateModified: "2026-02-12",
            isPartOf: {
              "@id": "https://www.pgmaster.in/#website",
            },
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://www.pgmaster.in/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Privacy Policy",
                  item: "https://www.pgmaster.in/privacy",
                },
              ],
            },
            publisher: {
              "@type": "Organization",
              name: "Swastik Smart Solutions Private Limited",
              url: "https://www.pgmaster.in/",
              logo: "https://www.pgmaster.in/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Privacy & Data Protection",
                areaServed: "IN",
                availableLanguage: ["English", "Hindi"],
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "Plt No-296/300 Laxmi Sagar, Near Oppolo Pharmacy, Budheswari Colony",
                addressLocality: "Bhubaneswar",
                addressRegion: "Orissa",
                postalCode: "751006",
                addressCountry: "IN",
              },
            },
            about: {
              "@type": "Thing",
              name: "Data Privacy and Protection",
              description: "Information about how PG Master collects, uses, and protects user data in compliance with Indian privacy laws",
            },
          }),
        }}
      />
      {children}
    </>
  );
}
