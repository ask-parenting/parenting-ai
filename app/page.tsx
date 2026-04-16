import Link from "next/link";
import { buildWhatsAppLink, siteConfig } from "@/lib/site-config";

export default function Home() {
  const whatsappLink = buildWhatsAppLink(
    siteConfig.whatsapp.businessNumber,
    siteConfig.whatsapp.prefilledText
  );

  return (
    <main className="page-shell">
      <section className="hero">
        <div className="topbar section">
          <p className="brand-mark">{siteConfig.brand.toUpperCase()}</p>
          <p className="micro-tag">Care via WhatsApp</p>
        </div>

        <div className="hero-grid section">
          <div className="hero-main">
            <p className="eyebrow">Built for newborn parents</p>
            <h1>{siteConfig.headline}</h1>
            <p className="lead">{siteConfig.subheadline}</p>
            <div className="cta-row">
              <a className="dji-btn dji-btn-primary" href={whatsappLink} target="_blank" rel="noreferrer">
                Chat on WhatsApp
              </a>
              <a className="dji-learn-more" href="#value-proposition-title" aria-label="Learn more about features">
                Learn More &rsaquo;
              </a>
            </div>

            <div className="feature-strip" aria-label="Key service highlights">
              <div className="feature-item">
                <p className="feature-value">24/7</p>
                <p className="feature-label">Support Flow</p>
              </div>
              <div className="feature-item">
                <p className="feature-value">1 Thread</p>
                <p className="feature-label">Everything Logged</p>
              </div>
              <div className="feature-item">
                <p className="feature-value">0 Apps</p>
                <p className="feature-label">Download Required</p>
              </div>
            </div>
          </div>

          <aside className="wa-window" aria-label="Example parent conversation moments">
            <div className="wa-header">
              <div className="wa-avatar" aria-hidden="true">PA</div>
              <div className="wa-header-info">
                <p className="wa-name">Parenting AI</p>
                <p className="wa-status">online</p>
              </div>
            </div>
            <div className="wa-body">
              <div className="wa-bubble wa-bubble-in">
                <p>Baby woke up with mild fever. What should we track right now?</p>
                <span className="wa-meta">3:04 AM</span>
              </div>
              <div className="wa-bubble wa-bubble-out">
                <p>Got it. I logged temperature, wake-up, and feed window. I'll check in shortly.</p>
                <span className="wa-meta">3:05 AM <span className="wa-tick" aria-hidden="true">✓✓</span></span>
              </div>
              <div className="wa-bubble wa-bubble-out">
                <p>I can remind you about medication intervals and hydration checks today.</p>
                <span className="wa-meta">8:00 AM <span className="wa-tick" aria-hidden="true">✓✓</span></span>
              </div>
            </div>
            <div className="wa-input-bar" aria-hidden="true">
              <span className="wa-input-placeholder">Message</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="section value-props" aria-labelledby="value-proposition-title">
        <h2 id="value-proposition-title">How It Works: Your Village in a Chat</h2>
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
