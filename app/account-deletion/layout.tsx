import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pgmaster.in/"),
  title: "Account Deletion Request - PG Master",
  description:
    "Request deletion of your PG Master account and associated data. Learn how to permanently delete your account, what data is removed, and the processing timeline.",
  keywords: [
    "PG Master account deletion",
    "delete PG Master account",
    "account removal request",
    "data deletion PG Master",
    "remove account PG management",
    "PGMASTER data removal",
    "user account deletion India",
    "app account delete request",
  ],
  authors: [{ name: "PG Master" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.pgmaster.in/account-deletion",
    title: "Account Deletion Request - PG Master",
    description:
      "Submit a request to permanently delete your PG Master account and all associated data.",
    siteName: "PG Master",
    images: [
      {
        url: "/seo.png",
        width: 1200,
        height: 630,
        alt: "PG Master Account Deletion",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Account Deletion Request - PG Master",
    description:
      "Submit a request to permanently delete your PG Master account and all associated data.",
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
    canonical: "https://www.pgmaster.in/account-deletion",
  },
};

export default function AccountDeletionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
