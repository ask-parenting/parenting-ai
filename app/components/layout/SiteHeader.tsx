"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { whatsappOptInConsentText } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";

interface SiteHeaderProps {
  whatsappLink: string;
}

const navLinks = [
  { href: "#helps-title", label: "What It Helps With" },
  { href: "#how-it-works-title", label: "How It Works" },
  { href: "#why-love-title", label: "Why Parents Love This" },
];

export default function SiteHeader({ whatsappLink }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const handleHeaderCtaClick = () => {
    if (typeof window === "undefined") return;

    const gtag = (window as Window & {
      gtag?: (...args: unknown[]) => void;
    }).gtag;

    if (typeof gtag === "function") {
      gtag("event", "whatsapp_cta_click", {
        location: "header",
      });
    }
  };

  return (
    <header className="site-header" aria-label="Site header">
      <div className="topbar shell-inner">
        <div className="topbar-left">
          <Link className="brand-link" href="/" aria-label="Go to Parenting AI homepage">
            <img src="/logo.svg" alt="Parenting AI logo" width={28} height={29} className="brand-logo" />
            <p className="brand-mark">{siteConfig.brand}</p>
          </Link>
          <p className="micro-tag">Care via WhatsApp</p>
        </div>

        {isHomePage ? (
          <>
            <button
              className={`menu-toggle ${menuOpen ? "open" : ""}`}
              type="button"
              aria-expanded={menuOpen}
              aria-controls="primary-nav"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className="menu-toggle-line" aria-hidden="true" />
              <span className="menu-toggle-line" aria-hidden="true" />
              <span className="menu-toggle-line" aria-hidden="true" />
            </button>

            <nav id="primary-nav" className={`topbar-nav ${menuOpen ? "open" : ""}`} aria-label="Primary">
              {navLinks.map(({ href, label }) => (
                <a key={href} href={isHomePage ? href : `/${href}`} onClick={() => setMenuOpen(false)}>
                  {label}
                </a>
              ))}
            </nav>

            <div className="nav-cta-group">
              <a
                className="nav-signup"
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Start Chat on WhatsApp (opens in a new tab)"
                onClick={handleHeaderCtaClick}
              >
                Start Chat
              </a>
              <button
                type="button"
                className="nav-cta-info"
                aria-label="Consent info"
                aria-describedby="nav-cta-consent"
              >
                i
              </button>
              <div id="nav-cta-consent" className="nav-cta-tooltip" role="tooltip">
                {whatsappOptInConsentText}
              </div>
            </div>
          </>
        ) : null}
      </div>
    </header>
  );
}
