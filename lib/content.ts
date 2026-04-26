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

export interface ParentSuccessMessage {
  name: string;
  rating: 4.25 | 4.5 | 4.75 | 5;
  scenario: string;
  reviewedAt: string;
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

export const parentSuccessMessages: ParentSuccessMessage[] = [
  {
    name: "Harleen",
    rating: 5,
    scenario: "My 9-month-old was refusing solids for days. The day-wise plan helped us restart gently by the weekend.",
    reviewedAt: "2026-02-03T21:14:00+05:30",
  },
  {
    name: "Imran",
    rating: 4.75,
    scenario: "At 2 AM my child had fever. The checklist showed what to track first and when to call the doctor.",
    reviewedAt: "2026-04-11T06:42:00+05:30",
  },
  {
    name: "Rukmini",
    rating: 4.5,
    scenario: "Bedtime tantrums were daily. We followed the calming routine and nights improved within a week.",
    reviewedAt: "2026-03-19T20:05:00+05:30",
  },
  {
    name: "Madhumita",
    rating: 4.25,
    scenario: "I worried about milestones. The age-wise guidance clarified what to watch now versus later.",
    reviewedAt: "2026-02-27T11:31:00+05:30",
  },
  {
    name: "Dhiren",
    rating: 5,
    scenario: "We had a long train journey with our toddler and I expected full chaos. The chat gave practical tips for snacks, water, and nap timing during delays, and honestly the trip went far better than usual.",
    reviewedAt: "2026-04-02T17:56:00+05:30",
  },
  {
    name: "Thoibi",
    rating: 4.75,
    scenario: "My son kept waking at night. The sleep steps were practical, and we got longer stretches in a few days.",
    reviewedAt: "2026-01-28T22:23:00+05:30",
  },
  {
    name: "Pranab",
    rating: 4.5,
    scenario: "I used to miss vaccine follow-ups. The reminders are timely and clear, so we are on schedule now.",
    reviewedAt: "2026-04-14T09:10:00+05:30",
  },
  {
    name: "Nivedita",
    rating: 4.25,
    scenario: "After delivery I had nonstop feeding doubts. The replies were practical and easy to apply.",
    reviewedAt: "2026-03-07T14:48:00+05:30",
  },
  {
    name: "Jasmeet",
    rating: 5,
    scenario: "My daughter stopped napping and evenings were tough. Daytime activity tips improved her mood quickly.",
    reviewedAt: "2026-02-15T19:39:00+05:30",
  },
  {
    name: "Tsering",
    rating: 4.75,
    scenario: "I was unsure whether my son\'s speech delay was within range. The app helped me track weekly patterns and prepare focused questions, so our pediatric visit felt informed instead of anxious.",
    reviewedAt: "2026-04-20T07:27:00+05:30",
  },
  {
    name: "Kavitha",
    rating: 4.5,
    scenario: "Introducing foods felt risky. The weekly plan made testing and logging reactions simple.",
    reviewedAt: "2026-03-25T12:16:00+05:30",
  },
  {
    name: "Naveen",
    rating: 4.25,
    scenario: "With twins, sleep timings were opposite. Personalized suggestions helped us set two workable routines.",
    reviewedAt: "2026-02-09T18:01:00+05:30",
  },
  {
    name: "Zoya",
    rating: 5,
    scenario: "Potty training had stalled for months. The gentle prompts changed our approach and helped us progress.",
    reviewedAt: "2026-04-06T10:53:00+05:30",
  },
  {
    name: "Bimal",
    rating: 4.75,
    scenario: "My toddler kept skipping meals. The portion and timing suggestions improved appetite quickly.",
    reviewedAt: "2026-03-02T21:36:00+05:30",
  },
  {
    name: "Revathi",
    rating: 4.5,
    scenario: "After a very difficult day, I just needed someone to guide me calmly. The instant response gave me a two-step bedtime plan I could use right away.",
    reviewedAt: "2026-01-30T16:44:00+05:30",
  },
  {
    name: "Lalthlamuani",
    rating: 4.25,
    scenario: "I did not know how to track progress. The weekly check-in format made consistency easy.",
    reviewedAt: "2026-04-18T08:12:00+05:30",
  },
  {
    name: "Chaitali",
    rating: 5,
    scenario: "Once daycare infections started, symptom guidance helped me manage home care with confidence.",
    reviewedAt: "2026-02-21T13:29:00+05:30",
  },
  {
    name: "Farooq",
    rating: 4.75,
    scenario: "Picky eating had turned dinner into a daily argument. The practical meal swaps reduced stress and gave us a realistic weekly rotation without extra cooking.",
    reviewedAt: "2026-03-30T20:22:00+05:30",
  },
  {
    name: "Shalini",
    rating: 4.5,
    scenario: "I was overwhelmed by random tips online. Here the advice is clear, age-specific, and kind.",
    reviewedAt: "2026-02-12T07:58:00+05:30",
  },
  {
    name: "Sonam",
    rating: 4.25,
    scenario: "Late-night cough episodes scared us. Guided next steps helped us monitor safely till morning.",
    reviewedAt: "2026-04-09T23:05:00+05:30",
  },
];

export const howItWorksSteps: string[] = [
  "Tap \"Start on WhatsApp\"",
  "Ask anything about your child",
  "Get calm, helpful guidance instantly",
];

export const whatsappOptInConsentText =
  "By messaging us, you agree to receive WhatsApp replies from Parenting AI (AvNeer Solutions Pvt Ltd). Reply STOP anytime to opt out.";

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
  {
    question: "Can both parents use the same child profile?",
    answer:
      "Yes. You can share context between caregivers by using the same WhatsApp flow and clearly mentioning updates from each parent.",
  },
  {
    question: "What kind of questions can I ask?",
    answer:
      "You can ask about feeding, sleep, milestones, routines, behavior, and day-to-day parenting concerns for children up to 5 years.",
  },
  {
    question: "How are reminders handled?",
    answer:
      "When enabled, reminders can be sent for practical parenting tasks like routines and follow-ups. You can choose to ignore or request changes.",
  },
  {
    question: "Can I delete my chat data?",
    answer:
      "Yes. You can request deletion using the contact details in the footer. We process deletion requests according to our policy obligations.",
  },
  {
    question: "What if my child has urgent symptoms?",
    answer:
      "For urgent symptoms, contact emergency services or a licensed doctor immediately. Use this service for educational support, not emergency care.",
  },
  {
    question: "Is this only for newborns?",
    answer:
      "No. The service supports parents from pre-delivery preparation through early childhood, up to 5 years of age.",
  },
  {
    question: "Do responses consider my child's age?",
    answer:
      "Yes. Guidance is designed to be age-aware when you share your child\'s age or due-date context.",
  },
  {
    question: "Can I use it while traveling?",
    answer:
      "Yes. Since it runs on WhatsApp, you can use it wherever your WhatsApp access is available.",
  },
  {
    question: "How much does it cost right now?",
    answer:
      "Current pricing and offers are shown on the landing page. If a beta or free access program is active, it will be clearly stated there.",
  },
  {
    question: "How do I start quickly?",
    answer:
      "Tap Start on WhatsApp, send the prefilled message, and ask your first parenting question. No separate signup is required.",
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
