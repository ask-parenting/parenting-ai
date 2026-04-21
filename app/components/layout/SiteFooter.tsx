"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

interface SiteFooterProps {
  whatsappLink: string;
}

const productLinks = [
  { href: "#helps-title", label: "What It Helps With" },
  { href: "#how-it-works-title", label: "How It Works" },
  { href: "#why-love-title", label: "Why Parents Love This" },
];

const companyLinks = [
  { href: "#about-title", label: "About Us", external: false },
];

export default function SiteFooter({ whatsappLink }: SiteFooterProps) {
  const handleFooterCtaClick = () => {
    if (typeof window !== "undefined" && typeof (window as { gtag?: Function }).gtag === "function") {
      (window as { gtag: Function }).gtag("event", "whatsapp_cta_click", {
        location: "footer",
      });
    }
  };

  return (
    <footer className="footer" aria-label="Site footer">
      <div className="footer-shell shell-inner">
        <div className="footer-top">
          <div className="footer-brand-block">
            <p className="footer-brand">{siteConfig.brand}</p>
            <p className="footer-tagline">
              Your parenting companion, available 24/7 on WhatsApp.
            </p>
            <p className="footer-address-label">Registered Address</p>
            <p className="address">{siteConfig.legal.address}</p>
          </div>

          <nav className="footer-columns" aria-label="Footer navigation">
            <div className="footer-col">
              <p className="footer-col-title">Product</p>
              {productLinks.map(({ href, label }) => (
                <a key={href} href={href}>
                  {label}
                </a>
              ))}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp chat (opens in a new tab)"
                onClick={handleFooterCtaClick}
              >
                WhatsApp Chat
              </a>
            </div>

            <div className="footer-col">
              <p className="footer-col-title">Company</p>
              {companyLinks.map(({ href, label }) => (
                <a key={href} href={href}>
                  {label}
                </a>
              ))}
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
            </div>

            <div className="footer-col">
              <p className="footer-col-title">Contact</p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp support (opens in a new tab)"
                onClick={handleFooterCtaClick}
              >
                WhatsApp Support
              </a>
              <p className="footer-col-note">Response window: 24/7</p>
              <p className="footer-col-note">No apps. No signup. Instant support.</p>
            </div>
          </nav>
        </div>

        <div className="footer-bottom">
          <p className="legal-line">{siteConfig.legal.ownershipStatement}</p>
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} {siteConfig.brand}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
