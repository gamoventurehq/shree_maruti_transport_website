# Shree Maruti Transport Services

A seven-page transport website built with Next.js, React, and TypeScript. The visual system in `design.md` uses the supplied SMTS logo, red accents, charcoal backgrounds, and condensed headings.

## Local development

Requires Node.js 22.13 or newer.

```bash
npm ci
npm run dev
```

## Pages and interactions

- Home: fleet introduction, services, interactive India coverage map, and clients.
- About: company history, working principles, and Vision and Mission boards.
- Services: chemical, solvent, industrial liquid, and planned tanker transportation.
- Fleet: selectable fleet gallery and fleet-management partners.
- Safety & technology: Nicer Globe certification and operational practices.
- Clients: supplied customer logos.
- Contact: office map, directions, and enquiry draft form.

The form validates required fields and prepares a copyable draft. It does not send, store, or upload enquiries. Clipboard failure falls back to selecting the draft for manual copying. The mobile menu supports Escape, and hero motion can be paused. Reduced-motion preferences are respected.

## Brand and content

`design.md` is the brand and interface specification, structured using the supplied Acura design document. `content/business.ts` holds business details and preview settings; `content/assets.ts` holds image metadata; `content/asset-manifest.json` records the original file for each published asset.

Original material remains in `client_content/`. Selected assets are copied to `public/brand`, `public/fleet`, `public/clients`, and `public/partners`. Customer logos, fleet technology partners, and certification imagery appear in separate sections.

The site uses the user-confirmed name Shree Maruti Transport Services, founding year 2001, 50+ owned trucks, pan-India operations, and Nicer Globe certification. The fleet count follows the user’s latest confirmed figure of 50+ trucks. The tanker imagery is supplied illustrative material, not verified fleet photography.

The office map uses the location from the supplied Google Maps link. Regional city pins on the India map remain examples, not confirmed branches or live vehicle positions. The map outline is derived from [Natural Earth via world.geo.json](https://github.com/johan/world.geo.json/blob/master/countries/IND.geo.json) and should be reviewed for public use.

### Still needed for launch

- Official phone, WhatsApp, email, full postal address, and enquiry recipient.
- Client approval of page copy, including the drafted Vision and Mission statements and safety practices.
- Vehicle specifications, actual service routes, and original fleet photography.
- The Jai Ambey Road Line logo and its relationship to Shree Maruti; no separate file was found in the supplied folder.
- Identification of the two withheld client logos listed in the asset manifest.

No separate written-content document was found in `client_content/` during this build. The site copy was drafted around the supplied imagery and user-confirmed facts.

`business.isPreview` remains `true`, which prevents search indexing. Set it to `false` after content review. `creatorCredit` defaults to `false`; enable it with client agreement to show the Gamoventure footer credit.

## Verification

```bash
npm run format
npm run lint
npm run typecheck
npm test
npm run build
npm start -- --port 3001
# In another terminal:
npm run check:deployment -- http://localhost:3001
```

The deployment check requests all seven routes and verifies key headings, Vision and Mission boards, the enquiry form, office link, and brand assets.

## Vercel deployment

The application lives at the repository root. `vercel.json` selects Next.js, installs with `npm ci`, builds with `npm run build`, and uses `.next`.

Use the repository root as Root Directory, the Next.js framework preset, and Node.js 22.x. The previous Cloudflare/Vinext scaffold was incompatible with this deployment setup and has been replaced.

The source repository is [gamoventurehq/shree_maruti_transport_website](https://github.com/gamoventurehq/shree_maruti_transport_website).

## References

The direction combines the client's [Surabhi Transport](https://www.surabhitransport.com/contact.html) and [Satya Bizcon](https://satyabizcon.com/index.html) references with the photographic scale of [Oris Maritime](https://www.orismaritime.com/), the transport presentation of [Truck’N Roll](https://trucknroll.com/), and the grid-based storytelling of [Rollers](https://rollers.com.au/). Reference-site text and media were not copied. Nicer Globe context is linked to the [Indian Chemical Council](https://www.indianchemicalcouncil.com/nicer-globe).

## Dependency maintenance

A `sharp` override pins version `0.35.4` to avoid affected earlier image-processing dependencies. Recheck the override when upgrading Next.js.
