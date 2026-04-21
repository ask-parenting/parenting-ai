import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://askparenting.com";
const gaId = process.env.NEXT_PUBLIC_GA_ID;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5
};

export const metadata: Metadata = {
  title: "Parenting AI | 24/7 Baby and Toddler Support on WhatsApp",
  description:
    "Get calm, evidence-informed parenting guidance for feeding, sleep, milestones, and everyday care for children 0-5 years old, right inside WhatsApp.",
  metadataBase: new URL(siteUrl)
  ,
  keywords: [
    "parenting support",
    "baby care",
    "toddler guidance",
    "WhatsApp parenting",
    "feeding and sleep help",
    "child milestones"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Parenting AI | 24/7 Baby and Toddler Support on WhatsApp",
    description:
      "Parenting guidance for feeding, sleep, milestones, and daily concerns. No app download needed.",
    url: siteUrl,
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Parenting AI | 24/7 Support on WhatsApp",
    description:
      "Ask parenting questions anytime and get calm guidance for children 0-5 years old."
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Parenting AI",
    url: siteUrl,
    description: "Parenting support via WhatsApp for caregivers of children 0-5 years old.",
    sameAs: []
  };

  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        {gaId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga-script" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);} 
window.gtag = gtag;
gtag('js', new Date());
gtag('config', '${gaId}');`}
            </Script>
          </>
        ) : null}
        <Script id="org-schema" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(orgSchema)}
        </Script>
        <main id="main-content">{children}</main>
      </body>
    </html>
  );
}
