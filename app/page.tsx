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
            <h1>{siteConfig.hero.headline}</h1>
            <p className="lead">{siteConfig.hero.subheadline}</p>
            <div className="cta-row">
              <a className="dji-btn dji-btn-primary" href={whatsappLink} target="_blank" rel="noreferrer">
                {siteConfig.hero.ctaText}
              </a>
              <a className="dji-learn-more" href="#value-proposition-title" aria-label="Learn more about features">
                Learn More &rsaquo;
              </a>
            </div>
            <p className="pricing-transparency">{siteConfig.hero.pricingTransparency}</p>

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

          <aside className="wa-window" aria-label="Example parent conversation">
            <div className="wa-header">
              <div className="wa-avatar" aria-hidden="true">PA</div>
              <div className="wa-header-info">
                <p className="wa-name">Parenting AI</p>
                <p className="wa-status">online</p>
              </div>
            </div>
            <div className="wa-body">
              {siteConfig.chatMockup.map((msg, i) => (
                <div
                  key={i}
                  className={`wa-bubble ${msg.sender === "Parent" ? "wa-bubble-in" : "wa-bubble-out"}`}
                >
                  <p>{msg.text}</p>
                </div>
              ))}
            </div>
            <div className="wa-input-bar" aria-hidden="true">
              <span className="wa-input-placeholder">Message</span>
            </div>
          </aside>
        </div>
      </section>

      {/* Trust & Safety */}
      <section className="section trust-section" aria-labelledby="trust-title">
        <h2 id="trust-title">Your Family&rsquo;s Privacy is Our Promise</h2>
        <div className="trust-grid">
          {siteConfig.trustSignals.map((signal) => (
            <div key={signal.title} className="trust-card">
              <h3>{signal.title}</h3>
              <p>{signal.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How to Get Started */}
      <section className="section onboarding-section" aria-labelledby="onboarding-title">
        <h2 id="onboarding-title">Up and Running in 60 Seconds</h2>
        <ol className="onboarding-steps">
          {siteConfig.onboardingSteps.map((step, i) => (
            <li key={i} className="onboarding-step">
              <span className="step-num">{i + 1}</span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
        <a className="dji-btn dji-btn-primary onboarding-cta" href={whatsappLink} target="_blank" rel="noreferrer">
          {siteConfig.hero.ctaText}
        </a>
      </section>

      {/* Value Pillars */}
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

      {/* Testimonial */}
      {siteConfig.testimonials.length > 0 && (
        <section className="section testimonial-section" aria-label="Parent testimonials">
          {siteConfig.testimonials.map((t, i) => (
            <figure key={i} className="testimonial">
              <blockquote className="testimonial-quote">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="testimonial-author">&mdash; {t.author}</figcaption>
            </figure>
          ))}
        </section>
      )}

      <footer className="section footer">
        <p className="legal-line">{siteConfig.legal.ownershipStatement}</p>
        <p className="address">{siteConfig.legal.address}</p>
        <nav className="legal-links" aria-label="Legal navigation">
          {siteConfig.legal.links.map((link) => (
            <Link key={link.url} href={link.url}>{link.label}</Link>
          ))}
        </nav>
      </footer>
    </main>
  );
}
