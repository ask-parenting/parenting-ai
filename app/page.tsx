import { buildWhatsAppLink, siteConfig } from "@/lib/site-config";
import SiteHeader from "@/app/components/layout/SiteHeader";
import SiteFooter from "@/app/components/layout/SiteFooter";
import HeroSection from "@/app/components/sections/HeroSection";
import HelpTopicsSection from "@/app/components/sections/HelpTopicsSection";
import HowItWorksSection from "@/app/components/sections/HowItWorksSection";
import WhyParentsLoveSection from "@/app/components/sections/WhyParentsLoveSection";
import AboutSection from "@/app/components/sections/AboutSection";
import FaqSection from "@/app/components/sections/FaqSection";

export default function Home() {
  const whatsappLink = buildWhatsAppLink(
    siteConfig.whatsapp.businessNumber,
    siteConfig.whatsapp.prefilledText
  );

  return (
    <>
      <SiteHeader whatsappLink={whatsappLink} />

      <main className="page-shell">
        <HeroSection whatsappLink={whatsappLink} />
        <HelpTopicsSection />
        <HowItWorksSection whatsappLink={whatsappLink} />
        <WhyParentsLoveSection />
        <AboutSection />
        <FaqSection />
        <section className="section disclaimer-section" aria-labelledby="disclaimer-title">
          <h2 id="disclaimer-title">Important medical disclaimer</h2>
          <p>
            Parenting AI provides educational and informational support. It is not a substitute for
            medical diagnosis, treatment, or emergency care.
          </p>
          <p>
            For urgent or emergency symptoms, contact your local emergency number or a licensed
            medical professional immediately.
          </p>
        </section>
      </main>

      <SiteFooter whatsappLink={whatsappLink} />
    </>
  );
}
