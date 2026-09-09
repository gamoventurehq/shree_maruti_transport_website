# Shree Maruti Transport

A first website concept for a transport business with 150 owned trucks and pan-India operations. The Next.js application lives at the repository root so Vercel can detect it during import.

## Run locally

Requires Node.js 22.13 or newer.

```bash
npm ci
npm run dev
```

Open the local address printed by the development server. The project uses React, TypeScript, Next.js, and Tailwind CSS.

## Checks

```bash
npm run format
npm run lint
npm run typecheck
npm test
npm run build
```

## What works

The site includes responsive navigation, an animated hero with a pause control, fleet information, a selectable India coverage map, shipment-planning accordions, and an enquiry form. The form validates required fields and creates a copyable draft. It does not send, store, or upload enquiries. If clipboard access is unavailable, it selects the draft for manual copying.

The layout respects reduced-motion preferences. Preview metadata prevents search indexing while `business.isPreview` is true. No analytics or third-party tracking has been added.

## Client content needed

- Confirm the business name, legal entity, logo, colours, and preferred languages. The working name comes from the repository name.
- Supply original fleet photography and licensed highway footage for a video hero.
- Confirm vehicle types, capacities, cargo specialties, services, and any restricted goods.
- Supply actual routes, branch locations, addresses, and hours. Current map pins are illustrative examples, not branch or tracking data.
- Supply official phone, WhatsApp, email, and an enquiry recipient or CRM integration.
- Confirm any founding date, safety credentials, certifications, customer logos, testimonials, or performance claims before adding them.
- Approve the site copy and privacy information before activating a live enquiry service.

The only business facts used as established facts are the 150 owned trucks and pan-India operations. The name, wordmark, palette, imagery, and regional examples are provisional. Do not publish this as a finished client website without replacing or approving them.

## Key files

- `app/page.tsx`: page structure and business copy.
- `app/globals.css`: responsive layout, colours, and motion.
- `content/business.ts`: fleet count, preview indexing flag, sample regions, and optional creator credit.
- `components/transport/`: navigation, hero, coverage interaction, and enquiry form.
- `lib/enquiry.ts`: formatting for the local enquiry draft.

`creatorCredit` defaults to `false`. With client agreement, set it to `true` to show a small “Website by Gamoventure” footer link. Agree on this credit in the project scope or contract.

## Visual references and assets

The direction draws on the client’s [Surabhi Transport reference](https://www.surabhitransport.com/contact.html), the fleet and geographic presentation of [Oris Maritime](https://www.orismaritime.com/), [Truck’N Roll](https://trucknroll.com/), and the industrial storytelling requested from [Rollers Australia](https://rollers.com.au/). No reference-site copy, logos, or media were reused.

The hero image is AI-generated concept photography, not a photograph of the client’s fleet. The same image is cropped in the fleet section. Replace it with client-approved photography before launch. The current motion is a subtle image pan and zoom, not truck video.

The illustrative map outline comes from [johan/world.geo.json](https://github.com/johan/world.geo.json/blob/master/countries/IND.geo.json), derived from Natural Earth. It is simplified and is not an authoritative boundary map. Replace it with an approved India boundary dataset before public release. City coordinates and dotted connections demonstrate the coverage interaction, not operational routes.

## Deployment on Vercel

The repository includes `vercel.json` to select Next.js, run `npm ci` and `npm run build`, and publish `.next` through Vercel’s Next.js integration.

For an existing Vercel project, use these settings:

- Root Directory: repository root (leave empty or use `.`), not `site`.
- Framework Preset: Next.js.
- Node.js Version: 22.x.
- Build Command: `npm run build`.
- Output Directory: `.next`.

Redeploy the latest commit after saving any project-setting changes. The earlier Cloudflare/Vinext build was incompatible with this Vercel setup and could leave a successful deployment with no homepage route.

To check a deployment serves the actual page and hero asset:

```bash
npm run check:deployment -- https://shree-maruti-transport-website.vercel.app/
```

The same check works against a local production server:

```bash
npm run build
npm start -- --port 3001
# In another terminal:
npm run check:deployment -- http://localhost:3001
```

The source repository is [gamoventurehq/shree_maruti_transport_website](https://github.com/gamoventurehq/shree_maruti_transport_website). The enquiry form remains a local draft tool even when the site is publicly hosted.

## Dependency maintenance

A `sharp` override pins version `0.35.4` to avoid affected earlier versions of its image-processing dependencies. Recheck the override when upgrading Next.js.
