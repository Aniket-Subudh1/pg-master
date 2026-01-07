import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pg-master.vercel.app"),
  title: "PG Master - India's #1 Renting Super App",
  description: "Effortlessly manage your PG or hostel with PGMASTER",
  keywords: ["PG management", "hostel management", "renting app", "PG finder", "student accommodation", "India"],
  authors: [{ name: "PG Master" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://pg-master.vercel.app/",
    title: "PG Master - India's #1 Renting Super App",
    description: "Effortlessly manage your PG or hostel with PGMASTER",
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
    title: "PG Master - India's #1 Renting Super App",
    description: "Effortlessly manage your PG or hostel with PGMASTER",
    images: ["/seo.png"],
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
        {children}
      </body>
    </html>
  );
}