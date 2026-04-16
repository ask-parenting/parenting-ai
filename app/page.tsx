import Link from "next/link";
import { buildWhatsAppLink, siteConfig } from "@/lib/site-config";

export default function Home() {
  const whatsappLink = buildWhatsAppLink(
    siteConfig.whatsapp.businessNumber,
    siteConfig.whatsapp.prefilledText
  );

  return (
    <main className="page-shell">
      <section className="hero section">
        <div className="topbar">
          <p className="brand-mark">{siteConfig.brand.toUpperCase()}</p>
          <p className="micro-tag">Care via WhatsApp</p>
        </div>

        <div className="hero-grid">
          <div>
            <p className="eyebrow">Built for newborn parents</p>
            <h1>{siteConfig.headline}</h1>
            <p className="lead">{siteConfig.subheadline}</p>
            <div className="cta-row">
              <a className="dji-btn dji-btn-primary" href={whatsappLink} target="_blank" rel="noreferrer">
                Chat on WhatsApp
              </a>
              <a className="dji-learn-more" href="#value-proposition-title">
                Learn More
              </a>
            </div>
            <div className="trust-row" aria-label="Key service highlights">
              <span>24/7 support flow</span>
              <span>Newborn phase focused</span>
              <span>One private thread</span>
            </div>
          </div>

          <aside className="hero-aside" aria-label="Example parent conversation moments">
            <p className="aside-kicker">Typical late-night use</p>
            <div className="aside-card">
              <p className="aside-time">3:04 AM</p>
              <p>Baby woke up with mild fever. What should we track right now?</p>
            </div>
            <div className="aside-card">
              <p className="aside-time">3:05 AM</p>
              <p>Got it. I logged temperature, wake-up, and feed window. I’ll check in shortly.</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="section value-props" aria-labelledby="value-proposition-title">
        <h2 id="value-proposition-title">One thread. Three pillars of support.</h2>
        <div className="card-grid">
          {siteConfig.valuePillars.map((pillar, index) => (
            <article key={pillar.title} className="card">
              <p className="card-index">0{index + 1}</p>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="section footer">
        <p className="legal-line">{siteConfig.ownershipStatement}</p>
        <p className="address">{siteConfig.legalAddress}</p>
        <nav className="legal-links" aria-label="Legal navigation">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
        </nav>
      </footer>
    </main>
  );
}
