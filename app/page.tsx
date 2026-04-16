import Link from "next/link";
import { buildWhatsAppLink, siteConfig } from "@/lib/site-config";

export default function Home() {
  const whatsappLink = buildWhatsAppLink(
    siteConfig.whatsapp.businessNumber,
    siteConfig.whatsapp.prefilledText
  );

  return (
    <>
      <header className="site-header" aria-label="Site header">
        <div className="topbar shell-inner">
          <div className="topbar-left">
            <p className="brand-mark">{siteConfig.brand.toUpperCase()}</p>
            <p className="micro-tag">Care via WhatsApp</p>
          </div>

          <nav className="topbar-nav" aria-label="Primary">
            <a href="#trust-title">Trust</a>
            <a href="#onboarding-title">Pricing</a>
            <a href="#value-proposition-title">How It Works</a>
          </nav>

          <a className="nav-signup" href={whatsappLink} target="_blank" rel="noreferrer">
            Sign Up
          </a>
        </div>
      </header>

      <main className="page-shell">
        <section className="hero">

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
              <div key={signal.title} className="trust-item">
                <div className="trust-icon">{signal.icon}</div>
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
            <div className="testimonial-head">
              <p className="testimonial-kicker">Early beta feedback</p>
              <h2>What parents actually said on WhatsApp</h2>
            </div>

            <div className="testimonial-rail" role="list" aria-label="Highlights from parent feedback">
              <p className="testimonial-chip" role="listitem">Used during night feeds</p>
              <p className="testimonial-chip" role="listitem">Replies within minutes</p>
              <p className="testimonial-chip" role="listitem">No app install needed</p>
            </div>

            {siteConfig.testimonials.map((t, i) => (
              <figure key={i} className="testimonial-card">
                <div className="testimonial-meta">
                  <span className="testimonial-badge">Verified beta parent</span>
                  <span className="testimonial-channel">Shared via WhatsApp</span>
                </div>
                <blockquote className="testimonial-quote">&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption className="testimonial-author">{t.author}</figcaption>
              </figure>
            ))}
          </section>
        )}
      </main>

      <footer className="footer" aria-label="Site footer">
        <div className="footer-shell shell-inner">
        <div className="footer-top">
          <div className="footer-brand-block">
            <p className="footer-brand">{siteConfig.brand}</p>
            <p className="footer-tagline">Your digital co-parent, available 24/7 on WhatsApp.</p>
            <p className="footer-address-label">Registered Address</p>
            <p className="address">{siteConfig.legal.address}</p>
          </div>

          <nav className="footer-columns" aria-label="Footer navigation">
            <div className="footer-col">
              <p className="footer-col-title">Product</p>
              <a href="#value-proposition-title">How It Works</a>
              <a href="#onboarding-title">Get Started</a>
              <a href={whatsappLink} target="_blank" rel="noreferrer">WhatsApp Chat</a>
            </div>

            <div className="footer-col">
              <p className="footer-col-title">Company</p>
              <a href="#trust-title">Trust &amp; Safety</a>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
            </div>

            <div className="footer-col">
              <p className="footer-col-title">Contact</p>
              <a href={whatsappLink} target="_blank" rel="noreferrer">WhatsApp Support</a>
              <p className="footer-col-note">Response window: 24/7</p>
            </div>
          </nav>
        </div>

        <div className="footer-bottom">
          <p className="legal-line">{siteConfig.legal.ownershipStatement}</p>
          <p className="footer-copy">&copy; {new Date().getFullYear()} {siteConfig.brand}. All rights reserved.</p>
        </div>
        </div>
      </footer>
    </>
  );
}
