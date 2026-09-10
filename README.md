# Shree Maruti — A country in motion

Separate website proposal on `codex/visual-elite`. Main is preserved. Design and content decisions are in [design.md](design.md).

## Run locally

```sh
npm ci
npm run dev -- --port 3003
```

For a production preview:

```sh
npm run build
npm run start -- --port 3003
```

## Verification

```sh
npm run lint
npm run typecheck
npm test
npm run check:deployment -- http://localhost:3003
```

## Main files

- `components/elite/`: edition layout and interactions.
- `content/edition-pages.ts`: longer company, service, fleet, safety and network copy.
- `content/service-guides.ts`: dedicated service guides and transport scenarios.
- `content/coverage-cities.ts`: map locations.
- `app/globals.css`: edition design system and responsive rules.
- `components/transport/enquiry-form.tsx`: shared local draft form.

The preview remains noindex. Final domain, direct contact details, verified operational copy and enquiry delivery must be supplied before production launch. No live message is sent by the draft form.
