import CtaButton from "@/app/components/ui/CtaButton";
import { howItWorksSteps, whatsappOptInConsentText } from "@/lib/content";

interface HowItWorksSectionProps {
  whatsappLink: string;
}

export default function HowItWorksSection({
  whatsappLink,
}: HowItWorksSectionProps) {
  return (
    <section
      className="section onboarding-section"
      aria-labelledby="how-it-works-title"
    >
      <h2 id="how-it-works-title">How It Works</h2>

      <ol className="onboarding-steps">
        {howItWorksSteps.map((step, i) => (
          <li key={i} className="onboarding-step">
            <span className="step-num">{i + 1}</span>
            <p>{step}</p>
          </li>
        ))}
      </ol>

      <p className="onboarding-note">
        No apps. No signups. Just support when you need it.
      </p>

      <CtaButton href={whatsappLink} className="onboarding-cta">
        Start on WhatsApp
      </CtaButton>

      <p className="cta-consent">{whatsappOptInConsentText}</p>
    </section>
  );
}
