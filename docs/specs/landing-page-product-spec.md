# Parenting AI Landing Page Product Spec

## Objective
- Primary: drive clicks to a WhatsApp thread.
- Secondary: satisfy Meta Business Verification website requirements.

## IA
- Single-page, mobile-first layout.
- Sticky header with anchor navigation and primary CTA.
- Landing sections: Hero, What It Helps With, How It Works, Why Parents Love This, About Us, Footer.
- Dedicated support page: FAQ (`/faq`) with search.
- Linked legal/support pages: FAQ, Privacy Policy, Terms of Service.
- Mobile navigation collapses into a hamburger menu.

## Hero
- Brand: `Parenting AI`
- Headline: `Your Parenting Companion on WhatsApp`
- Subheadline: calm, practical support for parents of children ages 0-5.
- Primary CTA label (section CTAs): `Start on WhatsApp`
- Section CTA consent text (rendered below both section CTA buttons): `By messaging us, you agree to receive WhatsApp replies from Parenting AI (AvNeer Solutions Pvt Ltd). Reply STOP anytime to opt out.`
- Header CTA label: `Start Chat`
- CTA target format: `https://wa.me/<BUSINESS_NUMBER>?text=<URL_ENCODED_GREETING>`
- Hero proof strip communicates low friction and availability: `0 Apps`, `0 Signup`, `24/7`.

## App Content Theme
- Tone: reassuring, non-judgmental, practical, and immediate.
- Positioning: WhatsApp-first parenting support for everyday concerns.
- Content pillars:
  - Feeding, sleep, development, milestones, and daily parenting moments.
  - Quick onboarding and instant response expectations.
  - Trust through clarity, legal transparency, and medical-safety disclaimer.

## Section Content
- What It Helps With: icon-led concerns and sample parent questions.
- How It Works: 3-step onboarding from CTA tap to instant guidance.
- Why Parents Love This: concise value points (24/7 support, age-personalized help, low judgment).
- About Us: company mission and context for modern parents.
- FAQ page: safety boundaries, age range, response speed, privacy, no-app flow, and common operational questions.

## Footer
- Must include exact ownership line:
  - `Parenting AI is a product of AvNeer Solutions Private Limited.`
- Must include exact legal address matching submitted verification documents.
- Must include links to:
  - FAQs
  - Privacy Policy
  - Terms of Service
- Must include medical disclaimer indicating educational support only (not diagnosis/treatment/emergency care).

## Tech Constraints
- Framework: Next.js App Router.
- Hosting target: Cloudflare Pages with HTTPS enabled.
- Destination/legal metadata should be editable from `lib/site-config.ts`.
- Landing copy should be editable from `lib/content.ts`.
