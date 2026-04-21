import Link from "next/link";
import { buildWhatsAppLink, siteConfig } from "@/lib/site-config";

export default function Home() {
  const helpTopics = [
    {
      icon: "🥣",
      title: "Feeding",
      question: "\"My baby isn't eating properly\"",
      description: "Get simple, age-appropriate meal ideas and tips"
    },
    {
      icon: "😴",
      title: "Sleep",
      question: "\"Why is my baby waking up at night?\"",
      description: "Understand patterns and build better routines"
    },
    {
      icon: "🧠",
      title: "Child Development",
      question: "\"Is my child growing normally?\"",
      description: "Know what to expect at every stage"
    },
    {
      icon: "📈",
      title: "Milestones",
      question: "\"Should my baby be crawling yet?\"",
      description: "Track and understand progress without stress"
    },
    {
      icon: "💛",
      title: "Everyday Parenting",
      question: "Tantrums, routines, habits",
      description: "We're here for it all"
    }
  ];

  const whyParentsLove = [
    "No judgment - only support",
    "Simple advice, not overwhelming information",
    "Personalized to your child's age",
    "Available 24/7 - even at 2 AM"
  ];

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
            <a href="#helps-title">What It Helps With</a>
            <a href="#how-it-works-title">How It Works</a>
            <a href="#why-love-title">Why Parents Love This</a>
          </nav>

          <a className="nav-signup" href={whatsappLink} target="_blank" rel="noreferrer">
            Start on WhatsApp
          </a>
        </div>
      </header>

      <main className="page-shell">
        <section className="hero">

          <div className="hero-grid section">
            <div className="hero-main">
              <p className="eyebrow">Parenting support on WhatsApp</p>
              <h1>Your Parenting Companion—on WhatsApp 👶</h1>
              <p className="lead">
                From feeding struggles to sleep worries, get calm, simple guidance for your child (0-5 yrs)
              </p>
              <div className="cta-row">
                <a className="dji-btn dji-btn-primary" href={whatsappLink} target="_blank" rel="noreferrer">
                  👉 Start on WhatsApp
                </a>
              </div>
              <p className="pricing-transparency">No apps. No signup. Instant support.</p>

              <div className="feature-strip" aria-label="Key service highlights">
                <div className="feature-item">
                  <p className="feature-value">0 Apps</p>
                  <p className="feature-label">Required</p>
                </div>
                <div className="feature-item">
                  <p className="feature-value">0 Signup</p>
                  <p className="feature-label">Friction</p>
                </div>
                <div className="feature-item">
                  <p className="feature-value">24/7</p>
                  <p className="feature-label">Support</p>
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

        <section className="section trust-section" aria-labelledby="helps-title">
          <h2 id="helps-title">✨ Everything you worry about as a parent—handled gently</h2>
          <div className="trust-grid">
            {helpTopics.map((item) => (
              <div key={item.title} className="trust-item">
                <div className="trust-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.question}</p>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section onboarding-section" aria-labelledby="how-it-works-title">
          <h2 id="how-it-works-title">⚡ Simple. Instant. Always there.</h2>
          <ol className="onboarding-steps">
            {[
              "Tap \"Start on WhatsApp\"",
              "Ask anything about your child",
              "Get calm, helpful guidance instantly"
            ].map((step, i) => (
              <li key={i} className="onboarding-step">
                <span className="step-num">{i + 1}</span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
          <p>No apps. No signups. Just support when you need it.</p>
          <a className="dji-btn dji-btn-primary onboarding-cta" href={whatsappLink} target="_blank" rel="noreferrer">
            👉 Start on WhatsApp
          </a>
        </section>

        <section className="section value-props" aria-labelledby="why-love-title">
          <h2 id="why-love-title">💛 Built for real parenting moments</h2>
          <div className="card-grid">
            {whyParentsLove.map((point, index) => (
              <article key={point} className="card">
                <p className="card-index">✔ {String(index + 1).padStart(2, "0")}</p>
                <h3>{point}</h3>
              </article>
            ))}
          </div>
          <p>Because parenting doesn&apos;t come with a manual—but now, it comes with a guide.</p>
        </section>

        <section className="section about-section" aria-labelledby="about-title">
          <h2 id="about-title">About Us</h2>
          <p className="about-copy">
            We are a team of IIM alumni, building a modern parenting companion for today&apos;s families.
          </p>
          <p className="about-copy">
            Parenting was once guided by generations, where grandparents and close communities passed down invaluable wisdom. But for many new age parents today, that support system is no longer easily accessible.
          </p>
          <p className="about-copy">
            At the same time, evolving lifestyles, nuclear families, and busy routines have made parenting more complex and often overwhelming.
          </p>
          <p className="about-copy">We created this platform to bridge that gap.</p>
          <p className="about-copy">
            Our parenting companion is designed to combine the warmth of traditional wisdom with the reliability of modern knowledge. It is informed by insights from thousands of trusted parenting resources, including books, global guidelines, and recommendations from doctors and pediatric experts, to provide guidance that is both practical and reassuring.
          </p>
          <p className="about-copy">Our mission is simple:</p>
          <p className="about-copy">To give parents calm, reliable guidance anytime they need it.</p>
          <p className="about-copy">
            From feeding and sleep to milestones and everyday concerns, we are here to support you at every step, like a trusted guide always within reach.
          </p>
        </section>
      </main>

      <footer className="footer" aria-label="Site footer">
        <div className="footer-shell shell-inner">
        <div className="footer-top">
          <div className="footer-brand-block">
            <p className="footer-brand">{siteConfig.brand}</p>
            <p className="footer-tagline">Your parenting companion, available 24/7 on WhatsApp.</p>
            <p className="footer-address-label">Registered Address</p>
            <p className="address">{siteConfig.legal.address}</p>
          </div>

          <nav className="footer-columns" aria-label="Footer navigation">
            <div className="footer-col">
              <p className="footer-col-title">Product</p>
              <a href="#helps-title">What It Helps With</a>
              <a href="#how-it-works-title">How It Works</a>
              <a href="#why-love-title">Why Parents Love This</a>
              <a href={whatsappLink} target="_blank" rel="noreferrer">WhatsApp Chat</a>
            </div>

            <div className="footer-col">
              <p className="footer-col-title">Company</p>
              <a href="#about-title">About Us</a>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
            </div>

            <div className="footer-col">
              <p className="footer-col-title">Contact</p>
              <a href={whatsappLink} target="_blank" rel="noreferrer">WhatsApp Support</a>
              <p className="footer-col-note">Response window: 24/7</p>
              <p className="footer-col-note">No apps. No signup. Instant support.</p>
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
