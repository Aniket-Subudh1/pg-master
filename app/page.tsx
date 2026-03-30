import type { Metadata } from "next";
import ProblemsSection from "./components/hero/ProblemSection";
import Hero from "./components/hero/Hero";
import SolutionsSection from "./components/hero/SolutionsSection";
import HowItWorksSection from "./components/hero/HowItWorksSection";
import CTASection from "./components/hero/CTASection";

export const metadata: Metadata = {
  title: "PG Master - India's #1 PG & Hostel Management Software",
  description:
    "Effortlessly manage your PG or hostel with PGMASTER. India's leading software for tenant management, rent collection, payment tracking, and operational automation. Trusted by 2,000+ PG owners.",
  alternates: {
    canonical: "https://www.pgmaster.in/",
  },
  openGraph: {
    type: "website",
    url: "https://www.pgmaster.in/",
    title: "PG Master - India's #1 PG & Hostel Management Software",
    description:
      "Effortlessly manage your PG or hostel with PGMASTER. Automate rent collection, tenant management, and operations. Trusted by 2,000+ owners.",
  },
};

export default function Home() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is PG Master?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PG Master is India's #1 PG and hostel management software that helps property owners efficiently manage tenants, automate rent collection, track payments, and streamline all operational tasks in one powerful platform.",
        },
      },
      {
        "@type": "Question",
        name: "How does PG Master help with rent collection?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PG Master automates rent collection through integrated payment gateways, sends automated reminders to tenants, tracks payment history, and provides real-time analytics on collection rates and pending payments.",
        },
      },
      {
        "@type": "Question",
        name: "Is PG Master suitable for small hostels?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, PG Master is designed for PG and hostel operators of all sizes - from small properties with 10 beds to large hostels managing 500+ tenants. Our flexible pricing and features scale with your needs.",
        },
      },
      {
        "@type": "Question",
        name: "How can I get started with PG Master?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can request a free demo by visiting our waitlist page. Our team will guide you through the setup process and help you get started within 24 hours.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Hero />
      <ProblemsSection />
      <SolutionsSection />
      <HowItWorksSection />
      <CTASection />
    </>
  );
}