import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  product: [
    { label: "Get Started", href: "/waitlist" },
    { label: "How It Works", href: "/#how-it-works" },
    { label: "Features", href: "/#features" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Refund Policy", href: "/refund" },
    { label: "Account Deletion", href: "/account-deletion" },
  ],
  company: [
    { label: "About Us", href: "/#about" },
    { label: "Contact Us", href: "mailto:info@pgmaster.in" },
  ],
};

export default function Footer() {
  return (
    <footer className="w-full bg-[#0F0F0F] text-white">
      {/* SiteNavigationElement JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SiteLinksSearchBox",
            url: "https://www.pgmaster.in/",
            potentialAction: {
              "@type": "SearchAction",
              target:
                "https://www.pgmaster.in/waitlist?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "PG Master Site Navigation",
            itemListElement: [
              {
                "@type": "SiteNavigationElement",
                position: 1,
                name: "Home",
                url: "https://www.pgmaster.in/",
              },
              {
                "@type": "SiteNavigationElement",
                position: 2,
                name: "Get Started",
                url: "https://www.pgmaster.in/waitlist",
              },
              {
                "@type": "SiteNavigationElement",
                position: 3,
                name: "Privacy Policy",
                url: "https://www.pgmaster.in/privacy",
              },
              {
                "@type": "SiteNavigationElement",
                position: 4,
                name: "Terms & Conditions",
                url: "https://www.pgmaster.in/terms",
              },
              {
                "@type": "SiteNavigationElement",
                position: 5,
                name: "Refund Policy",
                url: "https://www.pgmaster.in/refund",
              },
              {
                "@type": "SiteNavigationElement",
                position: 6,
                name: "Account Deletion",
                url: "https://www.pgmaster.in/account-deletion",
              },
            ],
          }),
        }}
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="PG Master Logo"
                width={28}
                height={28}
                className="object-contain"
              />
              <span className="text-lg font-bold text-white tracking-tight">
                PG MASTER
              </span>
            </Link>
            <p className="text-[#9CA3AF] text-sm leading-relaxed max-w-[220px]">
              India&apos;s #1 PG &amp; hostel management software. Trusted by 2,000+
              property owners.
            </p>
            <div className="flex items-center gap-3 mt-1">
              <a
                href="https://www.facebook.com/pgmaster"
                aria-label="PG Master on Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9CA3AF] hover:text-white transition-colors"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88v-6.99H7.9v-2.89h2.54V9.8c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.89h-2.34v6.99C18.34 21.12 22 16.99 22 12z"/></svg>
              </a>
              <a
                href="https://www.twitter.com/pgmaster"
                aria-label="PG Master on Twitter"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9CA3AF] hover:text-white transition-colors"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a
                href="https://www.instagram.com/pgmaster"
                aria-label="PG Master on Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9CA3AF] hover:text-white transition-colors"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a
                href="https://www.linkedin.com/company/pgmaster"
                aria-label="PG Master on LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9CA3AF] hover:text-white transition-colors"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>

          {/* Product Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider">
              Product
            </h3>
            <nav aria-label="Product links">
              <ul className="flex flex-col gap-3">
                {footerLinks.product.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[#9CA3AF] text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Company Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider">
              Company
            </h3>
            <nav aria-label="Company links">
              <ul className="flex flex-col gap-3">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-[#9CA3AF] text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Legal Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider">
              Legal
            </h3>
            <nav aria-label="Legal links">
              <ul className="flex flex-col gap-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[#9CA3AF] text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#1F2937] mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#6B7280] text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Swastik Smart Solutions Private Limited. All rights reserved.
          </p>
          <p className="text-[#6B7280] text-xs">
            <a
              href="mailto:info@pgmaster.in"
              className="hover:text-white transition-colors"
            >
              info@pgmaster.in
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
