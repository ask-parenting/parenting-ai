# Content Config Spec

## Source of Truth
- Config and legal metadata: `lib/site-config.ts`
- Landing page content blocks: `lib/content.ts`

## Fields
- `siteConfig.brand`: marketing brand name.
- `siteConfig.whatsapp.businessNumber`:
  - Source: `NEXT_PUBLIC_WHATSAPP_NUMBER`
  - Fallback: `YOUR_BUSINESS_NUMBER`
- `siteConfig.whatsapp.prefilledText`: prefilled first message for deep link.
- `siteConfig.legal.ownershipStatement`: legal ownership statement (must stay exact).
- `siteConfig.legal.address`:
  - Source: `NEXT_PUBLIC_LEGAL_ADDRESS`
  - Fallback: placeholder requiring replacement.
- `siteConfig.legal.links[]`: policy links used in footer (Privacy, Terms).
- `helpTopics[]`: icon/title/question/description cards for "What It Helps With".
- `howItWorksSteps[]`: ordered steps in "How It Works" section.
- `whyParentsLove[]`: concise benefit points in "Why Parents Love" section.
- `heroStats[]`: compact hero proof strip values.
- `faqs[]`: question/answer pairs for FAQ section.
- `aboutParagraphs[]`: long-form About copy blocks.

## Deployment Inputs
- `NEXT_PUBLIC_WHATSAPP_NUMBER`: digits with country code, no `+`, no spaces.
- `NEXT_PUBLIC_LEGAL_ADDRESS`: exact address text for Meta verification.

## Change Process
- Update the relevant source file first:
  - legal/contact/whatsapp destination changes: `lib/site-config.ts`
  - landing copy/section text changes: `lib/content.ts`
- Run preview build.
- Re-run verification checklist before production deploy.
