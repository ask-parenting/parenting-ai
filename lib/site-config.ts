export const siteConfig = {
  brand: "Parenting AI",
  hero: {
    headline: "Your 24/7 Digital Co-Parent, Right in WhatsApp.",
    subheadline:
      "No apps to download. Just text us at 3:00 AM for milestone tracking, feeding logs, and instant peace of mind. We cater from pre-delivery tips up to 5 years of age.",
    pricingTransparency: "Join our free beta program.",
    ctaText: "Chat on WhatsApp"
  },
  whatsapp: {
    businessNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "YOUR_BUSINESS_NUMBER",
    prefilledText: "Hi Parenting AI!"
  },
  legal: {
    ownershipStatement: "Parenting AI is a product of AvNeer Solutions Private Limited.",
    address:
      process.env.NEXT_PUBLIC_LEGAL_ADDRESS ??
      "[REPLACE_WITH_EXACT_META_VERIFICATION_ADDRESS]",
    links: [
      { label: "Privacy Policy", url: "/privacy" },
      { label: "Terms of Service", url: "/terms" }
    ]
  },
  chatMockup: [
    {
      sender: "Parent",
      text: "He's been crying for 2 hours and feels warm, what do I do?"
    },
    {
      sender: "AI",
      text: "I'm here. First, let's check his temperature. If it's over 100.4°F and he is under 3 months, you need to call a doctor immediately. If not, here are three things we can try..."
    }
  ],
  trustSignals: [
    {
      title: "Bank-Level Privacy",
      description: "Your data is anonymized and securely stored."
    },
    {
      title: "Total Control",
      description: "Text 'DELETE' anytime to instantly wipe your child's data."
    },
    {
      title: "Verified Knowledge",
      description:
        "Responses based on WHO and AAP pediatric guidelines — never random internet searches."
    }
  ],
  onboardingSteps: [
    "Click the button to open WhatsApp.",
    "Send the pre-filled 'Hi Parenting AI' message.",
    "Answer two quick questions (Child's age/due date and name) to set up your profile."
  ],
  testimonials: [
    {
      quote:
        "I used to wake up my husband to Google things at 3 AM. Now I just text the AI and get instant peace of mind.",
      author: "Sarah, Mom of an 8-month-old"
    }
  ],
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

// Generates the deep link required to bypass the app store and open WhatsApp directly
export function buildWhatsAppLink(number: string, prefilledText: string) {
  const encoded = encodeURIComponent(prefilledText);
  return `https://wa.me/${number}?text=${encoded}`;
}
