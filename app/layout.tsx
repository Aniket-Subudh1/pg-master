import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StructuredData from "./components/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PG Master - India's #1 Renting Super App",
  description: "Effortlessly manage your PG or hostel with PGMASTER. Find, manage, and rent PG accommodations with ease. The ultimate solution for PG owners and tenants.",
  keywords: ["PG management", "hostel management", "PG rental", "accommodation India", "PG booking", "hostel booking", "rent PG", "PG finder"],
  authors: [{ name: "PG Master" }],
  creator: "PG Master",
  publisher: "PG Master",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://pg-master.vercel.app/'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: '/',
    title: "PG Master - India's #1 Renting Super App",
    description: "Effortlessly manage your PG or hostel with PGMASTER. Find, manage, and rent PG accommodations with ease.",
    siteName: "PG Master",
    images: [
      {
        url: '/seo.png',
        width: 1200,
        height: 630,
        alt: 'PG Master - Renting Super App',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "PG Master - India's #1 Renting Super App",
    description: "Effortlessly manage your PG or hostel with PGMASTER. Find, manage, and rent PG accommodations with ease.",
    images: ['/og-image.png'],
    creator: '@pgmaster',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
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
        <link href="https://fonts.googleapis.com/css2?family=Fustat:wght@700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}