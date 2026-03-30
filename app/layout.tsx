import type { Metadata } from "next";
import Script from "next/script";
import Footer from "./components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pgmaster.in/"),
  title: {
    default: "PG Master - India's #1 PG & Hostel Management Software",
    template: "%s | PG Master",
  },
  description: "Effortlessly manage your PG or hostel with PGMASTER. India's leading software for tenant management, rent collection, payment tracking, and operational automation. Trusted by 2,000+ PG owners.",
  keywords: [
    "PG management software",
    "hostel management system",
    "PG Master",
    "PGMASTER",
    "tenant management India",
    "rent collection app",
    "PG owner software",
    "hostel automation",
    "paying guest management",
    "student accommodation management",
    "rental tracking software",
    "PG billing system",
    "hostel ERP",
    "property management India",
    "rental management app",
    "PG software Bhubaneswar",
    "India renting app",
    "PG finder",
    "hostel booking system",
    "tenant tracking",
    "automated rent payment",
    "PG analytics",
    "hostel occupancy management",
    "PG maintenance tracking",
    "Swastik Smart Solutions"
  ],
  authors: [{ name: "PG Master - Swastik Smart Solutions Private Limited" }],
  creator: "Swastik Smart Solutions Private Limited",
  publisher: "Swastik Smart Solutions Private Limited",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.pgmaster.in/",
    title: "PG Master - India's #1 PG & Hostel Management Software",
    description: "Effortlessly manage your PG or hostel with PGMASTER. Automate rent collection, tenant management, and operations. Trusted by 2,000+ owners.",
    siteName: "PG Master",
    images: [
      {
        url: "/seo.png",
        width: 1200,
        height: 630,
        alt: "PG Master - India's #1 Renting Super App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PG Master - India's #1 PG & Hostel Management Software",
    description: "Effortlessly manage your PG or hostel with PGMASTER. Trusted by 2,000+ PG owners.",
    images: ["/seo.png"],
    creator: "@pgmaster",
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
    canonical: "https://www.pgmaster.in/",
  },
  verification: {
    // TODO: Replace with actual Google Search Console verification code
    google: "your-google-verification-code",
  },
  category: "Software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fustat:wght@700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta name="theme-color" content="#0F8BFF" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="application-name" content="PG Master" />
        <meta name="apple-mobile-web-app-title" content="PG Master" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="geo.region" content="IN-OR" />
        <meta name="geo.placename" content="Bhubaneswar, Orissa" />
        <meta name="geo.position" content="20.2961;85.8245" />
        <meta name="ICBM" content="20.2961, 85.8245" />
      </head>
      <body className="antialiased">
        {/* Organization Structured Data */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://www.pgmaster.in/#organization",
              name: "Swastik Smart Solutions Private Limited",
              legalName: "Swastik Smart Solutions Private Limited",
              url: "https://www.pgmaster.in/",
              logo: "https://www.pgmaster.in/logo.png",
              image: "https://www.pgmaster.in/seo.png",
              description: "India's leading PG and hostel management software provider, trusted by 2,000+ property owners for seamless tenant management and rent collection.",
              foundingDate: "2020",
              founders: [
                {
                  "@type": "Person",
                  name: "Swastik Smart Solutions",
                },
              ],
              slogan: "India's #1 Renting Super App for PG & Hostels",
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  contactType: "Customer Service",
                  email: "info@pgmaster.in",
                  areaServed: "IN",
                  availableLanguage: ["English", "Hindi"],
                },
                {
                  "@type": "ContactPoint",
                  contactType: "Sales",
                  email: "info@pgmaster.in",
                  areaServed: "IN",
                  availableLanguage: ["English", "Hindi"],
                },
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: "Plt No-296/300 Laxmi Sagar, Near Oppolo Pharmacy, Budheswari Colony",
                addressLocality: "Bhubaneswar",
                addressRegion: "Orissa",
                postalCode: "751006",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "20.2961",
                longitude: "85.8245",
              },
              sameAs: [
                "https://www.facebook.com/pgmaster",
                "https://www.twitter.com/pgmaster",
                "https://www.linkedin.com/company/pgmaster",
                "https://www.instagram.com/pgmaster",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "PG Management Services",
                itemListElement: [
                  {
                    "@type": "OfferCatalog",
                    name: "Tenant Management",
                    itemListElement: [
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Digital Onboarding",
                        },
                      },
                    ],
                  },
                  {
                    "@type": "OfferCatalog",
                    name: "Rent Collection",
                    itemListElement: [
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Automated Payment Processing",
                        },
                      },
                    ],
                  },
                ],
              },
            }),
          }}
        />

        {/* Software Application Structured Data */}
        <Script
          id="software-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "PG Master",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web, Android, iOS",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "INR",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                ratingCount: "2000",
                bestRating: "5",
                worstRating: "1",
              },
              description: "India's #1 PG and hostel management software for tenant management, rent collection, and operational automation",
              url: "https://www.pgmaster.in/",
              author: {
                "@type": "Organization",
                name: "Swastik Smart Solutions Private Limited",
              },
            }),
          }}
        />

        {/* Website Structured Data */}
        <Script
          id="website-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://www.pgmaster.in/#website",
              name: "PG Master",
              alternateName: "PGMASTER - PG and Hostel Management Software",
              url: "https://www.pgmaster.in/",
              description: "India's #1 PG and hostel management software. Effortlessly manage tenants, automate rent collection, and streamline operations. Trusted by 2,000+ PG owners.",
              publisher: {
                "@type": "Organization",
                "@id": "https://www.pgmaster.in/#organization",
                name: "Swastik Smart Solutions Private Limited",
              },
            }),
          }}
        />

        {/* Main Entity of Page Schema */}
        <Script
          id="mainentity-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "@id": "https://www.pgmaster.in/#webpage",
              url: "https://www.pgmaster.in/",
              name: "PG Master - India's #1 PG & Hostel Management Software",
              description: "Effortlessly manage your PG or hostel with PGMASTER. From rent collection and tenant management to maintenance and analytics, everything you need is in one app. Rated 4.9/5 by 2,000+ PG owners.",
              inLanguage: "en-IN",
              isPartOf: {
                "@id": "https://www.pgmaster.in/#website",
              },
              about: {
                "@type": "Thing",
                name: "PG and Hostel Management Software",
              },
              breadcrumb: {
                "@type": "BreadcrumbList",
                "@id": "https://www.pgmaster.in/#breadcrumb",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://www.pgmaster.in/",
                  },
                ],
              },
            }),
          }}
        />

        {/* Service Schema */}
        <Script
          id="service-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: "PG and Hostel Management Software",
              provider: {
                "@type": "Organization",
                name: "Swastik Smart Solutions Private Limited",
              },
              areaServed: {
                "@type": "Country",
                name: "India",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "PG Master Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Tenant Management",
                      description: "Comprehensive tenant onboarding, tracking, and management system",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Rent Collection",
                      description: "Automated rent collection and payment tracking with multiple payment options",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Operational Automation",
                      description: "Streamline daily operations with automated workflows and notifications",
                    },
                  },
                ],
              },
            }),
          }}
        />

        {children}
        <Footer />
      </body>
    </html>
  );
}