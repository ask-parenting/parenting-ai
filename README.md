# Parenting AI Landing Page

Next.js single-page landing site for `askparenting.com`, optimized for WhatsApp conversion and Meta verification support.

## Run locally

```bash
npm install
npm run dev
```

## Dev Troubleshooting

If you see `Cannot find module './<chunk>.js'` from `.next/server/webpack-runtime.js`:

```bash
pkill -f "next dev" || true
rm -rf .next
npm run dev
```

This project disables webpack filesystem cache in dev (`next.config.mjs`) to avoid repeated cache corruption.

## Environment variables

Create `.env.local`:

```bash
NEXT_PUBLIC_WHATSAPP_NUMBER=919999999999
NEXT_PUBLIC_LEGAL_ADDRESS=Your exact verification address line
```

## Specs for future use

- `docs/specs/landing-page-product-spec.md`
- `docs/specs/meta-verification-checklist.md`
- `docs/specs/content-config-spec.md`
