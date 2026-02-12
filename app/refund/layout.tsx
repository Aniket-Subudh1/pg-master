import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pgmaster.in/"),
  title: "Refund & Cancellation Policy - PG Master | Return Policy",
  description: "Understand PG Master's refund and cancellation policy. Learn about refund timelines (5-10 business days), subscription cancellations, failed transaction refunds, and payment processing terms. Contact support@pgmaster.in for assistance.",
  keywords: [
    "PG Master refund policy",
    "cancellation policy PG software",
    "refund terms PG Master",
    "return policy hostel management",
    "subscription cancellation PG",
    "payment refund policy India",
    "transaction cancellation terms",
    "PG software refund process",
    "rental platform refund",
    "payment gateway refund",
    "failed transaction refund",
    "duplicate payment refund",
    "subscription refund policy",
    "PGMASTER cancellation",
    "tenant management refund"
  ],
  authors: [{ name: "PG Master - Swastik Smart Solutions" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.pgmaster.in/refund",
    title: "Refund & Cancellation Policy - PG Master",
    description: "Learn about refund processing, subscription cancellations, and transaction policies. Refunds processed within 5-10 business days. Email support@pgmaster.in for requests.",
    siteName: "PG Master",
    images: [
      {
        url: "/seo.png",
        width: 1200,
        height: 630,
        alt: "PG Master Refund and Cancellation Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Refund & Cancellation Policy - PG Master",
    description: "Learn about PG Master's refund process, cancellation terms, and transaction policies.",
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
    canonical: "https://www.pgmaster.in/refund",
  },
};

export default function RefundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* JSON-LD Structured Data for SEO */}
      <Script
        id="refund-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Refund and Cancellation Policy",
            description: "Refund and Cancellation Policy for PG Master platform services",
            url: "https://www.pgmaster.in/refund",
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
                  name: "Refund & Cancellation",
                  item: "https://www.pgmaster.in/refund",
                },
              ],
            },
            publisher: {
              "@type": "Organization",
              name: "Swastik Smart Solutions Private Limited",
              url: "https://www.pgmaster.in/",
              logo: "https://www.pgmaster.in/logo.png",
              email: "support@pgmaster.in",
              contactPoint: {
                "@type": "ContactPoint",
                email: "support@pgmaster.in",
                contactType: "Customer Support",
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
