export interface HelpTopic {
  icon: string;
  title: string;
  question: string;
  description: string;
}

export interface FeatureStat {
  value: string;
  label: string;
}

export const helpTopics: HelpTopic[] = [
  {
    icon: "🥣",
    title: "Feeding",
    question: "\"My baby isn't eating properly\"",
    description: "Get simple, age-appropriate meal ideas and tips",
  },
  {
    icon: "😴",
    title: "Sleep",
    question: "\"Why is my baby waking up at night?\"",
    description: "Understand patterns and build better routines",
  },
  {
    icon: "🧠",
    title: "Child Development",
    question: "\"Is my child growing normally?\"",
    description: "Know what to expect at every stage",
  },
  {
    icon: "📈",
    title: "Milestones",
    question: "\"Should my baby be crawling yet?\"",
    description: "Track and understand progress without stress",
  },
  {
    icon: "💛",
    title: "Everyday Parenting",
    question: "Tantrums, routines, habits",
    description: "We're here for it all",
  },
];

export const whyParentsLove: string[] = [
  "No judgment — only support",
  "Simple advice, not overwhelming information",
  "Personalized to your child's age",
  "Available 24/7 — even at 2 AM",
];

export const howItWorksSteps: string[] = [
  "Tap \"Start on WhatsApp\"",
  "Ask anything about your child",
  "Get calm, helpful guidance instantly",
];

export const heroStats: FeatureStat[] = [
  { value: "0 Apps", label: "Required" },
  { value: "0 Signup", label: "Friction" },
  { value: "24/7", label: "Support" },
];

export const faqs = [
  {
    question: "Is this a replacement for a doctor?",
    answer:
      "No. Parenting AI is informational support only. For diagnosis, treatment, or emergencies, contact a licensed doctor or emergency services immediately.",
  },
  {
    question: "What age group is this for?",
    answer:
      "The service is designed for pre-delivery guidance through early childhood, up to 5 years of age.",
  },
  {
    question: "How quickly do I get responses?",
    answer:
      "Responses are designed to be near-instant on WhatsApp so you can get support when a concern comes up.",
  },
  {
    question: "Do you sell my personal data?",
    answer:
      "No. We do not sell personal data. You can request deletion by contacting us through the details in our footer.",
  },
  {
    question: "Do I need to install another app?",
    answer: "No. The experience is built for WhatsApp, with no app install and no separate signup flow.",
  },
];

export const aboutParagraphs: string[] = [
  "We are a team of IIM alumni, building a modern parenting companion for today's families.",
  "Parenting was once guided by generations, where grandparents and close communities passed down invaluable wisdom. But for many new age parents today, that support system is no longer easily accessible.",
  "At the same time, evolving lifestyles, nuclear families, and busy routines have made parenting more complex and often overwhelming.",
  "We created this platform to bridge that gap.",
  "Our parenting companion is designed to combine the warmth of traditional wisdom with the reliability of modern knowledge. It is informed by insights from thousands of trusted parenting resources, including books, global guidelines, and recommendations from doctors and pediatric experts, to provide guidance that is both practical and reassuring.",
  "Our mission is simple:",
  "To give parents calm, reliable guidance anytime they need it.",
  "From feeding and sleep to milestones and everyday concerns, we are here to support you at every step, like a trusted guide always within reach.",
];
