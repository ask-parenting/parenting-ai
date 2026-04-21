# Copilot Instructions for Parenting AI Landing

Use these instructions for all changes in this repository unless a user explicitly overrides them.

## Product Intent
- Keep the site focused on one goal: drive clicks to WhatsApp.
- Preserve Meta verification readiness at all times.
- Keep tone reassuring, practical, and non-judgmental for parents.

## Architecture and Modularity
- Keep the page modular. Reuse existing section/component boundaries under `app/components/`.
- Avoid large monolithic edits in `app/page.tsx`; compose via section components.
- Prefer adding/editing data in content modules over hardcoding strings in UI components.
- Keep public component props minimal and explicit.

## Content Source of Truth
- Use `lib/site-config.ts` for:
  - WhatsApp number and prefilled text
  - Legal ownership/address
  - Legal links and destination metadata
- Use `lib/content.ts` for:
  - Landing page section copy and card/list content
- If copy is requested, update the correct source module first, then consume through components.

## Theme and Styling Guardrails
- Follow the established Apple-inspired visual system in `app/globals.css`.
- Reuse CSS variables from `:root` (colors, radii, shadows, typography) before introducing new tokens.
- Maintain visual rhythm: spacing, border radii, and section density should match nearby sections.
- Prefer extending existing utility/class patterns rather than creating one-off styles.
- Avoid inline styles unless there is a strong technical reason.

## Responsive and Interaction Rules
- Mobile-first behavior is required.
- Header must retain a working mobile hamburger menu.
- Keep sticky header behavior and anchor navigation intact.
- Preserve CTA clarity:
  - Header CTA text: `Start Chat`
  - Section CTA text: `Start on WhatsApp`
- Keep WhatsApp deep link format as `https://wa.me/<number>?text=<encoded>`.

## Compliance and Legal Safety
- Never alter the legal ownership line text unless explicitly requested and approved.
- Never replace legal address with non-verification text when production values are expected.
- Keep Privacy Policy and Terms routes reachable and linked.
- Preserve medical disclaimer intent in the footer.

## Implementation Preferences
- Keep changes small and localized.
- Do not introduce new dependencies unless clearly necessary.
- Preserve accessibility patterns:
  - semantic headings and landmarks
  - meaningful `aria-label` text where needed
  - visible focus states
- Keep TypeScript strict-safe; avoid unsafe casts when a typed guard can be used.

## QA Checklist Before Finalizing
- Run `npm run build` for code changes.
- Validate no TypeScript errors.
- Verify mobile viewport behavior for header, nav, and CTA placement.
- Verify no broken internal links.
- Confirm content still matches section IA:
  - Hero
  - What It Helps With
  - How It Works
  - Why Parents Love This
  - About Us
  - FAQ
  - Footer

## When Updating Specs
- Keep docs under `docs/specs/` synchronized with implementation.
- If CTA labels, section IA, or legal requirements change, update all impacted spec files in the same task.
