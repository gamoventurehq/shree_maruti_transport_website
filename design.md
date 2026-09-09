---
version: 1
name: Shree Maruti Transport Services
status: client-content iteration
reference: ~/Downloads/acura.design.md
purpose: Brand identity and implementation specification for the seven-page website.
colors:
  logo-red: '#ff0000'
  primary: '#d71920'
  primary-hover: '#b8131a'
  canvas-dark: '#111315'
  surface-dark: '#1c1f22'
  canvas: '#f5f5f2'
  surface: '#ffffff'
  ink: '#17191b'
  ink-muted: '#60656a'
  ink-white: '#ffffff'
  ink-white-muted: '#b9bdc0'
  hairline: '#dcdedb'
  hairline-dark: '#34383b'
typography:
  display:
    family: Barlow Condensed
    weight: 600
    desktop: clamp(64px, 7.2vw, 112px)
    mobile: clamp(48px, 12vw, 68px)
    line-height: 0.98
    letter-spacing: '-0.025em'
  heading:
    family: Barlow Condensed
    weight: 600
    size: clamp(38px, 4.2vw, 64px)
    line-height: 1.04
  body:
    family: Geist
    size: 16px
    line-height: 1.75
  label:
    family: Geist
    size: 12px
    weight: 600
    letter-spacing: 0.12em
spacing:
  unit: 8px
  section-desktop: 96px
  section-mobile: 56px
  gutter-desktop: 5vw
  gutter-mobile: 22px
  container-max: 1440px
rounded:
  panels: 0px
  inputs: 2px
  buttons: 0px
motion:
  duration: 200ms
  easing: ease-out
  hero: slow optional image scale, with pause control
  reduced-motion: disable decorative motion and smooth scrolling
pages:
  - { path: /, title: Home }
  - { path: /about, title: About us }
  - { path: /services, title: Services }
  - { path: /fleet, title: Our fleet }
  - { path: /safety, title: Safety & technology }
  - { path: /clients, title: Our clients }
  - { path: /contact, title: Contact }
---

# Shree Maruti Transport Services

## Overview

An Indian chemical and liquid transport business, established in 2001, with an owned fleet of 50+ trucks and pan-India operations. The website should help an industrial buyer understand its services, fleet, safety approach, clients, and office location before making an enquiry.

The supplied SMTS mark is the primary identity. Its red oval and white lettering determine the colour direction. The full business name is **Shree Maruti Transport Services**, including “Services” in page titles, navigation branding, enquiry drafts, and metadata.

This file adapts the structure and automotive presentation principles of the supplied Acura document. It does not claim that Shree Maruti uses Acura’s brand assets, proprietary fonts, or exact interface. The useful references are vehicle-led imagery, compact display typography, restrained red accents, sharp edges, and clear dark/light section roles.

## Sources and precedence

1. The user’s direct instructions: business name, established in 2001, 50+ owned trucks, pan-India operations, Nicerglobe certification, fleet-management tie-ups.
2. Original assets under `client_content/`: the SMTS logo, client logos, Nicerglobe mark, Tata Motors Fleet Edge and BlackBox marks, and fleet/sample graphics.
3. The supplied Google Maps link: the office location at 19.2516926, 73.1062199. Link directly to the supplied listing for directions.
4. `~/Downloads/acura.design.md`: the format and visual principles for this document.
5. https://satyabizcon.com/index.html: subject structure for chemical tanker services, fleet, safety, technology, and clients. Do not reuse its figures, capacities, contact information, or claims.
6. Earlier Oris Maritime and Rollers references: photography-led presentation, geographic coverage, and industrial grid structure.

The user’s latest confirmed fleet count is 50+ trucks. Use this figure throughout the website; older figures in supplied promotional imagery do not override it. Vehicle capacity, fleet breakdown, branch counts, customer volumes, and on-time percentages remain unspecified.

## Brand and colour

- Preserve the original SMTS logo file and its proportions. A CSS frame may remove empty surrounding space; do not redraw the lettering or recolour the oval.
- Use logo red only in the mark. Use the darker action red for white-text buttons so labels remain readable.
- Charcoal is for the header, photo heroes, feature bands, map, and footer. Off-white is for service explanations, client logos, and enquiry details.
- Use one red family throughout. The blue and yellow present in supplied fleet graphics are image content, not interface colours.
- Supplier and customer logos retain their original colours on white surfaces. Do not recolour them to match SMTS.
- Green is confined to the original Nicerglobe mark. It is not a second interface accent.

## Typography

Barlow Condensed supplies the automotive character described by the Acura reference without using a proprietary font. Set large headings in uppercase with compact line spacing. Use Geist for body copy, navigation, labels, forms, and numbers that need close reading.

Headlines should describe the subject in a few words. Body paragraphs should explain the business or help the visitor prepare a transport requirement. Avoid claims such as guaranteed delivery, industry leadership, or zero incidents unless the client supplies evidence.

Use at least 16px body text, 14px navigation, and 12px for secondary labels. Long text stays within about 65 characters per line. Main headlines must remain readable at narrow mobile widths and increased browser text size.

## Layout

Use an approximately 1440px maximum content width, 5vw gutters on desktop, and 22px on mobile. The header displays the original mark and full name, six page links, and a contact button. It becomes an expandable menu on small screens. Every page has one H1, an active navigation state, and a shared footer.

The homepage is a concise overview. Inner pages contain the detail rather than repeating the full homepage. Alternate light reading sections with dark fleet/brand sections deliberately, following the supplied Acura document. Avoid excessive cards, pills, gradient decorations, and fabricated dashboards.

### Homepage

Full-width tanker imagery, an editorial headline anchored in the 2001 founding year, links to services and fleet, a three-part factual strip, selected client marks, service overview, fleet feature, Nicerglobe/technology introduction, India coverage, and a contact invitation.

### About

Company introduction, 2001 founding milestone, current fleet and reach, service approach, two prominent Vision & Mission panels following the Satya Bizcon reference, and related-business information only when the relationship is confirmed.

### Services

Chemical transportation, solvent movement, industrial liquids, and planned tanker movements, based on supplied materials. Explain the shipment details needed rather than inventing capacities or guaranteeing cargo acceptance.

### Fleet

50+ owned trucks, supplied tanker images, stainless-steel tanker focus, GPS/fleet-management context, and sample imagery gallery. Do not expose inconsistent poster counts as fleet specifications. Asset captions distinguish supplied illustrative graphics from documentary photography.

### Safety & technology

Nicerglobe certification as confirmed by the client; safety subjects from the supplied material (driver training, PPE, maintenance, route planning, emergency preparedness); separate supplier panels for Tata Motors Fleet Edge and BlackBox. Do not invent certificate numbers, audit dates, live API integrations, or telematics measurements.

### Clients

Recognisable supplied customer marks with readable names. Keep client relationships separate from technology providers. Unidentified logos remain documented in the asset inventory rather than receiving guessed company names.

### Contact

Office location map, external Google Maps directions link, and the existing enquiry draft tool. Add direct phone/email links only when supplied or verified. Until a recipient exists, the form must say it creates a copyable draft and never claim that a message has been sent.

## Components

- **Header:** dark, red-and-white SMTS mark, full name, active page underline, red enquiry CTA, keyboard-operable mobile disclosure.
- **Photo hero:** original supplied fleet imagery shown through a CSS crop, text contrast overlay, no baked-in statistics from posters. Motion is optional and pausable.
- **Page masthead:** breadcrumb, concise uppercase H1, short introduction, slim red rule.
- **Primary button:** action red, white text, square corners, at least 48px tall, visible focus ring.
- **Secondary link:** text plus a consistent arrow from the installed Lucide family; underline or border on hover.
- **Fact strip:** 50+ owned trucks; established 2001; pan-India operations. No animated fake counters.
- **Service rows:** descriptive headings, concise paragraphs, real fleet visuals where useful.
- **Client banner:** A continuous horizontal logo strip on Home and Clients. Pause on hover without a visible playback control; use a static scrollable strip for reduced motion. Hide the repeated logo set from assistive technology.
- **Client grid:** uniform white logo tiles, contain sizing, original colours, company names as accessible text.
- **Certification panel:** original Nicerglobe mark on white with accompanying text; distinct from fleet-provider panels.
- **Coverage map:** existing geographic outline and keyboard-selectable region buttons. Mark regional cities as illustrative; show the supplied office location accurately and link to directions.
- **Gallery:** image controls with meaningful labels, simple selection, captions, no automatic carousel.
- **Form:** visible labels, required-state validation, keyboard access, copy success/failure feedback. No simulated submission.
- **Footer:** full business name, founding year, page navigation, office directions, and optional Gamoventure attribution governed by the existing setting.

## Images and asset handling

Keep `client_content/` untouched as source material. Publish selected assets from `public/brand/`, `public/clients/`, `public/partners/`, and `public/fleet/`. Record the source filename in `content/assets.ts` or the asset manifest. Reuse supplied graphics without inventing additional fleet types.

The fleet montage contains multiple panels. CSS cropping can show one panel without creating a misleading new composite. Full graphics may appear in the fleet gallery, where their illustrative nature is clear. Images containing conflicting fleet counts are not used as a hero or specification source.

## Responsive behaviour and accessibility

- Desktop: horizontal navigation; two-column editorial sections; up to four client tiles per row.
- Tablet: smaller navigation switches to the mobile menu before links collide; sections may reduce to two columns.
- Mobile: single-column reading order, full-width images, two-column logo grid, stacked form fields where needed.
- Preserve visible focus states, skip navigation, labelled buttons, image alt text, reduced motion, and at least 44px interaction targets.
- No scroll hijacking. All content remains available without animation.
- Maps have a labelled iframe or SVG and an ordinary directions link as an alternative.

## Known gaps

- Only one business logo was present during initial inventory. Jai Ambey Road Line’s logo and relationship are pending clarification; do not invent a logo or founding year for it.
- No standalone text document, phone number, or email address was present in the supplied folder at initial inventory.
- Certification is client-confirmed; no certificate document or validity dates were supplied.
- Supplied imagery includes AI-generated promotional graphics. It is not treated as proof of vehicle specifications, fleet size, or operational performance.
- The supplied geographic outline is simplified. It is a coverage illustration, not an authoritative boundary map or a live vehicle tracker.

## Implementation and verification

Keep the root-level Next.js setup and `vercel.json`. The prior Cloudflare scaffold caused a Vercel 404; do not reintroduce it. Give all seven routes unique titles and descriptions. Test the production build, lint, type checking, enquiry formatting, all page responses, navigation targets, and public asset availability before handoff.

## Vision and mission boards

Place two equally prominent panels on the About page. Vision uses charcoal with white text; Mission uses white with dark text and a red edge. Use a small intent label, a clear heading, a readable paragraph, and subtle oversized background lettering. Stack the panels on mobile. Both statements are new draft copy for client review, not quotations from the client or the reference business.
