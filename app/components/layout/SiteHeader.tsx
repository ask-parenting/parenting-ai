"use client";

import { useState } from "react";
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
          <p className="brand-mark">{siteConfig.brand}</p>
          <p className="micro-tag">Care via WhatsApp</p>
        </div>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          Menu
        </button>

        <nav id="primary-nav" className={`topbar-nav ${menuOpen ? "open" : ""}`} aria-label="Primary">
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
        </nav>

        <a
          className="nav-signup"
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Start on WhatsApp (opens in a new tab)"
          onClick={handleHeaderCtaClick}
        >
          Start on WhatsApp
        </a>
      </div>
    </header>
  );
}
