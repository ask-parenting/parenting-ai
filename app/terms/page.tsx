import SiteHeader from "@/app/components/layout/SiteHeader";
import { buildWhatsAppLink, siteConfig } from "@/lib/site-config";

export default function TermsPage() {
  const whatsappLink = buildWhatsAppLink(
    siteConfig.whatsapp.businessNumber,
    siteConfig.whatsapp.prefilledText
  );

  return (
    <>
      <SiteHeader whatsappLink={whatsappLink} />

      <main className="legal-page">
        <h1>Terms of Service</h1>
        <p>Effective date: April 16, 2026</p>
        <p>
          Parenting AI provides informational support for caregivers and is not a substitute for professional
          medical diagnosis, treatment, or emergency services.
        </p>
        <p>
          By using the service, you agree to provide accurate information, avoid unlawful use, and verify
          critical health decisions with qualified professionals.
        </p>
        <p>
          In an emergency, contact your local emergency number or licensed medical provider immediately.
        </p>
        <p>
          You are responsible for how you use information provided by the service. Final health decisions must
          always be made with qualified professionals.
        </p>
        <p>
          You must not misuse the service, attempt unauthorized access, or use it in ways that violate law or
          third-party rights.
        </p>
        <p>
          We may suspend or restrict access for abuse, security risk, non-payment (if applicable), or legal
          compliance reasons.
        </p>
        <p>
          The service may change over time, including features, availability, and supported regions, without
          prior notice.
        </p>
        <p>
          This service operates through WhatsApp, a platform owned by Meta Platforms, Inc. Your use of
          WhatsApp is also governed by WhatsApp&apos;s Terms of Service and Privacy Policy. We are not
          responsible for the availability or conduct of the WhatsApp platform.
        </p>
        <p>
          To the maximum extent allowed by law, the service is provided on an as-is and as-available basis,
          without warranties of uninterrupted operation or error-free output.
        </p>
        <p>
          To the maximum extent allowed by law, AvNeer Solutions Private Limited will not be liable for indirect,
          incidental, special, consequential, or punitive damages arising from use of the service.
        </p>
        <p>
          All product, brand, and content rights in the service are owned by, or licensed to, the operator.
        </p>
        <p>
          These terms are governed by applicable laws of India, and disputes are subject to courts with
          competent jurisdiction.
        </p>
        <p>
          The service is operated by AvNeer Solutions Private Limited, as shown in the homepage footer.
        </p>
      </main>
    </>
  );
}
