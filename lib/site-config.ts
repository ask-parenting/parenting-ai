export const siteConfig = {
  brand: "Parenting AI",
  headline: "Your 24/7 Digital Co-Parent, Right in WhatsApp.",
  subheadline:
    "No apps to download. Just text us at 3:00 AM for milestone tracking, feeding logs, and instant peace of mind. We cater from pre-delivery tips up to 5 years of age.",
  whatsapp: {
    businessNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "YOUR_BUSINESS_NUMBER",
    prefilledText: "Hi Parenting AI!"
  },
  ownershipStatement:
    "Parenting AI is a product of AvNeer Solutions Private Limited.",
  legalAddress:
    process.env.NEXT_PUBLIC_LEGAL_ADDRESS ??
    "[REPLACE_WITH_EXACT_META_VERIFICATION_ADDRESS]",
  valuePillars: [
    {
      title: "Ask Anything, Anytime",
      description:
        "When you have an issue, just send a text. We are here to help you navigate health, mind, body, and activities."
    },
    {
      title: "Dynamic Check-ins",
      description:
        "We don't just answer; we remember. We send proactive messages to track sleep and fever logs."
    },
    {
      title: "Milestone Tracking",
      description:
        "The system silently logs growth data, like taking first steps or starting solids, straight from your casual texts."
    },
    {
      title: "Administrative Reminders",
      description:
        "We help reduce your mental load by sending reminders for vaccination schedules and seasonal advice."
    }
  ]
};

export function buildWhatsAppLink(number: string, prefilledText: string) {
  const encoded = encodeURIComponent(prefilledText);
  return `https://wa.me/${number}?text=${encoded}`;
}
