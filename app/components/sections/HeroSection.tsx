import CtaButton from "@/app/components/ui/CtaButton";
import WhatsAppWindow from "@/app/components/ui/WhatsAppWindow";
import { heroStats, whatsappOptInConsentText } from "@/lib/content";

interface HeroSectionProps {
  whatsappLink: string;
}

export default function HeroSection({ whatsappLink }: HeroSectionProps) {
  return (
    <section className="hero">
      <div className="hero-grid section">
        <div className="hero-main">
          <p className="eyebrow">Parenting support on WhatsApp</p>
          <h1>
            Your Parenting Companion on WhatsApp
          </h1>
          <p className="lead">
            From feeding struggles to sleep worries, get calm, simple guidance
            for your child (0–5 yrs)
          </p>

          <div className="cta-row">
            <CtaButton href={whatsappLink}>Start on WhatsApp</CtaButton>
          </div>

          <p className="cta-consent">{whatsappOptInConsentText}</p>

          <p className="pricing-transparency">
            No apps. No signup. Instant support.
          </p>

          <div className="feature-strip" aria-label="Key service highlights">
            {heroStats.map(({ value, label }) => (
              <div key={label} className="feature-item">
                <p className="feature-value">{value}</p>
                <p className="feature-label">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <WhatsAppWindow />
      </div>
    </section>
  );
}
