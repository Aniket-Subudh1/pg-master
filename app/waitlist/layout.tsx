import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pgmaster.in/"),
  title: "Join Waitlist - Request a Demo | PG Master",
  description: "Join the waitlist for PG Master and get early access to India's #1 PG and hostel management software. Request a free demo today. Trusted by 2,000+ PG owners for tenant management, automated rent collection, and seamless operations.",
  keywords: [
    "PG Master waitlist",
    "request demo PG software",
    "join PG Master",
    "get started PG management",
    "PG software demo India",
    "hostel management demo",
    "tenant management software demo",
    "PG Master early access",
    "free PG software demo",
    "PG management trial",
    "hostel software trial",
    "rent collection demo",
    "PG booking demo",
    "property management demo India",
    "request PG Master access",
    "sign up PG software",
    "PG Master registration",
    "hostel ERP demo",
    "automated PG management",
    "PG analytics demo"
  ],
  authors: [{ name: "PG Master - Swastik Smart Solutions" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.pgmaster.in/waitlist",
    title: "Get Started For Free - PG Master Waitlist",
    description: "Deploy, operate, and scale your PG or hostel management in just a few clicks. Join 2,000+ property owners using PG Master. Request a free demo now.",
    siteName: "PG Master",
    images: [
      {
        url: "/seo.png",
        width: 1200,
        height: 630,
        alt: "PG Master Waitlist - Join India's #1 PG Management Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Join Waitlist - PG Master | Request a Demo",
    description: "Get early access to India's #1 PG and hostel management software. Trusted by 2,000+ property owners.",
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
    canonical: "https://www.pgmaster.in/waitlist",
  },
};

export default function WaitlistLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* JSON-LD Structured Data for SEO */}
      <Script
        id="waitlist-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://www.pgmaster.in/waitlist#webpage",
            url: "https://www.pgmaster.in/waitlist",
            name: "Get Started For Free - PG Master",
            description: "Deploy, operate, and scale a PG or hostel management system in just a few clicks. Request a demo and join India's leading PG management platform.",
            inLanguage: "en-IN",
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
                  name: "Get Started For Free",
                  item: "https://www.pgmaster.in/waitlist",
                },
              ],
            },
            mainEntity: {
              "@type": "Service",
              name: "PG Master Demo Request",
              description: "Request a free demonstration of PG Master's comprehensive PG and hostel management features",
              provider: {
                "@type": "Organization",
                name: "Swastik Smart Solutions Private Limited",
                url: "https://www.pgmaster.in/",
                logo: "https://www.pgmaster.in/logo.png",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Plt No-296/300 Laxmi Sagar, Near Oppolo Pharmacy, Budheswari Colony",
                  addressLocality: "Bhubaneswar",
                  addressRegion: "Orissa",
                  postalCode: "751006",
                  addressCountry: "IN",
                },
              },
            },
          }),
        }}
      />
      {children}
    </>
  );
}
