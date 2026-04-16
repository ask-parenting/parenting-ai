# Parenting AI Landing Page

Next.js single-page landing site for `askparenting.com`, optimized for WhatsApp conversion and Meta verification support.

## Run locally

```bash
npm install
npm run dev
```

## Environment variables

Create `.env.local`:

```bash
NEXT_PUBLIC_WHATSAPP_NUMBER=919999999999
NEXT_PUBLIC_LEGAL_ADDRESS=Your exact verification address line
```

## GitHub Pages Deployment

This project is configured for static export (`output: \"export\"`) and automatic deployment via:

- `.github/workflows/deploy-pages.yml`

Configuration notes:

- For project pages (`<user>.github.io/<repo>`), base path is auto-set to `/<repo>`.
- For user/org pages (`<user>.github.io`), base path is empty.
- Static output is generated in `out/` and deployed by GitHub Actions.

Before deploying:

1. In GitHub repo settings, set **Pages** source to **GitHub Actions**.
2. Add repository variables (optional but recommended):
   - `NEXT_PUBLIC_WHATSAPP_NUMBER`
   - `NEXT_PUBLIC_LEGAL_ADDRESS`

## Specs for future use

- `docs/specs/landing-page-product-spec.md`
- `docs/specs/meta-verification-checklist.md`
- `docs/specs/content-config-spec.md`
