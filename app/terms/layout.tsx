import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pgmaster.in/"),
  title: "Terms & Conditions - PG Master | Legal Terms of Service",
  description: "Read the Terms and Conditions for using PG Master platform and services. Learn about our legal framework, user agreements, payment terms, and compliance requirements. Operated by Swastik Smart Solutions Private Limited.",
  keywords: [
    "PG Master terms and conditions",
    "terms of service PG software",
    "legal terms PG Master",
    "user agreement PG management",
    "PGMASTER terms",
    "hostel management terms",
    "software usage policy",
    "payment terms PG software",
    "rental platform terms India",
    "tenant management terms",
    "PG software legal agreement",
    "Swastik Smart Solutions terms",
    "India PG management policy",
    "rental software compliance",
    "PG platform user terms"
  ],
  authors: [{ name: "PG Master - Swastik Smart Solutions" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.pgmaster.in/terms",
    title: "Terms & Conditions - PG Master",
    description: "View comprehensive terms and conditions for PG Master's platform, services, and applications. Understand user rights, payment terms, and legal compliance.",
    siteName: "PG Master",
    images: [
      {
        url: "/seo.png",
        width: 1200,
        height: 630,
        alt: "PG Master Terms and Conditions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions - PG Master",
    description: "Legal terms and conditions for using PG Master platform and services.",
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
    canonical: "https://www.pgmaster.in/terms",
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* JSON-LD Structured Data for SEO */}
      <Script
        id="terms-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Terms and Conditions",
            description: "Terms and Conditions for PG Master platform and services",
            url: "https://www.pgmaster.in/terms",
            datePublished: "2026-02-12",
            dateModified: "2026-02-12",
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
                  name: "Terms & Conditions",
                  item: "https://www.pgmaster.in/terms",
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
                contactType: "Customer Service",
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
          }),
        }}
      />
      {children}
    </>
  );
}
