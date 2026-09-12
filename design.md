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
  hero: continuous road and plant parallax with rotating tanker wheels and a pause control
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

An Indian chemical and liquid transport business, established in 2011, with an owned fleet of 50+ tankers and pan-India operations. The website should help an industrial buyer understand its services, fleet, safety approach, clients, and office location before making an enquiry.

The supplied SMTS mark is the primary identity. Its red oval and white lettering determine the colour direction. The full business name is **Shree Maruti Transport Services**, including “Services” in page titles, navigation branding, enquiry drafts, and metadata.

This file adapts the structure and automotive presentation principles of the supplied Acura document. It does not claim that Shree Maruti uses Acura’s brand assets, proprietary fonts, or exact interface. The useful references are vehicle-led imagery, compact display typography, restrained red accents, sharp edges, and clear dark/light section roles.

## Sources and precedence

1. The user’s direct instructions: business name, established in 2011, 50+ owned tankers, pan-India operations, Nicerglobe certification, fleet-management tie-ups.
2. Original assets under `client_content/`: the SMTS logo, client logos, Nicerglobe mark, Tata Motors Fleet Edge and BlackBox marks, and fleet/sample graphics.
3. The supplied Google Maps link: the office location at 19.2516926, 73.1062199. Link directly to the supplied listing for directions.
4. `~/Downloads/acura.design.md`: the format and visual principles for this document.
5. https://satyabizcon.com/index.html: subject structure for chemical tanker services, fleet, safety, technology, and clients. Do not reuse its figures, capacities, contact information, or claims.
6. Earlier Oris Maritime and Rollers references: photography-led presentation, geographic coverage, and industrial grid structure.

The user’s latest confirmed fleet count is 50+ tankers. Use this figure throughout the website; older figures in supplied promotional imagery do not override it. The user confirmed 16/21/25/30/35 MT capacities, SS 304/SS 316/SS 316L grades, and food-grade liquid transport on 10 September 2026. Vehicle-level configurations, fleet breakdown, branch counts, customer volumes, and on-time percentages remain unspecified.

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

A rounded, inset animated tanker hero with Instrument Serif type, an editorial headline anchored in the 2011 founding year, links to services and fleet, a three-part factual strip, selected client marks, service overview, fleet feature, Nicerglobe/technology introduction, India coverage, and a contact invitation. On desktop, place the headline and actions at the left and the tanker at the right. Stack the copy above the vehicle on mobile.

### About

Company introduction, 2011 founding milestone, current fleet and reach, service approach, two prominent Vision & Mission panels following the Satya Bizcon reference, and related-business information only when the relationship is confirmed.

### Services

Chemical transportation, solvent movement, industrial liquids, and planned tanker movements, based on supplied materials. Explain the shipment details needed rather than inventing capacities or guaranteeing cargo acceptance.

### Fleet

50+ owned tankers, supplied tanker images, stainless-steel tanker focus, GPS/fleet-management context, and sample imagery gallery. Do not expose inconsistent poster counts as fleet specifications. Asset captions distinguish supplied illustrative graphics from documentary photography.

### Safety & technology

Nicerglobe certification as confirmed by the client; safety subjects from the supplied material (driver training, PPE, maintenance, route planning, emergency preparedness); separate supplier panels for Tata Motors Fleet Edge and BlackBox. Do not invent certificate numbers, audit dates, live API integrations, or telematics measurements.

### Clients

Recognisable supplied customer marks with readable names. Keep client relationships separate from technology providers. Unidentified logos remain documented in the asset inventory rather than receiving guessed company names.

### Contact

Office location map, external Google Maps directions link, and the existing enquiry draft tool. Add direct phone/email links only when supplied or verified. Until a recipient exists, the form must say it creates a copyable draft and never claim that a message has been sent.

## Components

- **Header:** white, red-and-white SMTS mark, full name, active page underline, red enquiry CTA, keyboard-operable mobile disclosure.
- **Photo hero:** original supplied fleet imagery shown through a CSS crop, text contrast overlay, no baked-in statistics from posters. Motion is optional and pausable.
- **Page masthead:** breadcrumb, concise uppercase H1, short introduction, slim red rule.
- **Primary button:** action red, white text, square corners, at least 48px tall, visible focus ring.
- **Secondary link:** text plus a consistent arrow from the installed Lucide family; underline or border on hover.
- **Fact strip:** 50+ owned tankers; established 2011; pan-India operations. No animated fake counters.
- **Service rows:** descriptive headings, concise paragraphs, real fleet visuals where useful.
- **Client banner:** A continuous horizontal logo strip on Home only. Pause on hover without a visible playback control; use a static scrollable strip for reduced motion. Hide the repeated logo set from assistive technology.
- **Client grid:** uniform white logo tiles, contain sizing, original colours, company names as accessible text.
- **Certification panel:** original Nicerglobe mark on white with accompanying text; distinct from fleet-provider panels.
- **Coverage map:** curved routes from Bhiwandi, dotted India outline, animated selected route and keyboard-operable destination buttons, adapted from the visual edition. Use charcoal surfaces and red accents. Show client-confirmed destinations; Kerala is a service area, not a city pin. Routes and coordinates are schematic, not live vehicle tracking.
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

## Safety and regulations section

Use a two-column editorial grid on `/safety#regulations`, stacking on mobile. Four panels cover PPE, cargo information, vehicle checks, and documentation. Use red line icons, white panels, and an off-white background. Link to the section from Home and label the navigation entry “Safety & regulations”. Keep the technology content on the same page. Client-supplied competitor screenshots are archived in `docs/references/safety-and-regulations/`; do not present their branding, certificates, or service claims as Shree Maruti material.

## Staff safety kit

On `/safety#staff-safety-kit`, pair an original illustrated worker diagram with handling-precaution copy. The worker wears six items of PPE, identified by red leader lines and labels on a light background: helmet, eye protection, hearing protection, gloves, reflective workwear, and safety boots. Describe equipment as task- and site-dependent. Keep the board and copy side by side on wide screens and stack them below 1000px. This is an AI-generated visual guide inspired by the supplied PPE reference, not a staff photograph or a specification of issued equipment. Frame the diagram with a red top rule and a charcoal caption band, numbered “01 / PEOPLE & PROTECTION”. Provide descriptive alt text. The diagram is displayed inline without a full-size link.

## Expanded tanker content

Use “tanker” for fleet references in public copy and metadata. Fleet specifications use a six-panel grid with owned fleet size, payload options, material grades, coverage, cargo focus, and the confirmed Nicer Globe credential. Hazard awareness uses nine numbered diamond illustrations with class descriptions; these are not official placards. The visible introduction must distinguish hazard awareness from accepted cargo. Expand each route with relevant information: company focus on About, service FAQs, tanker selection on Fleet, industry context on Clients, and enquiry preparation on Contact.

## Client meeting preview — September 2026

The preview now has three service guides below `/services/`: chemical tanker transport, food-grade liquid transport and scheduled tanker logistics. Editorial columns, specification tables and sample transport dossiers add detail without repeating the same card grid. Preserve the existing red/charcoal identity.

Route briefs and proposed operating roles are presented without visible draft labels at the user’s request. Their copy lives in `content/service-guides.ts` and `components/transport/operations-preview.tsx`. These are meeting material, not case studies or verified company procedures. Verify, replace or remove unconfirmed operational content before launch. Preview indexing remains disabled.

The homepage shows a moving banner of all 23 clients, without a scrollbar. The Clients page displays the full directory immediately, without a moving banner or an expand/collapse control. Equipment labels are repeated in HTML below the PPE illustration for mobile readability.

The client requested a clean presentation without visible draft labels. Scenario routes and operating-role copy remain unverified meeting material; verify or replace them before public launch. Indexing remains disabled.

The client requested continuous client-logo motion again. The strip loops horizontally with no visible pause button; hover/focus pause and reduced-motion handling remain.

## Selected main design — September 11, 2026

The main edition combines its original branding with the editorial edition’s white navigation and inset hero. Instrument Serif is limited to the hero; existing display and body fonts remain elsewhere. The original company mark remains in the header.

The route explorer uses Mumbai as its schematic origin, with the operating location written as Mumbai, Bhiwandi, Maharashtra. Keep only the client-confirmed destinations: Ahmednagar/Supa, Mahad, Lote, Hyderabad, Visakhapatnam (Vizag), Nellore, Chennai, Cuddalore, Erode, Kochi (Cochin), Bengaluru (Bangalore), Nagpur and Kolkata. Kerala remains a service-area note. Cycle through destinations every two seconds while visible; pause during interaction and respect reduced motion. Tank material is SS 304L only. Cargo focus is chemical solvents, food-grade, pharmaceutical and other liquid cargo.

## Client fleet photography and service journey

Use the September client photographs for Home, About and the Fleet gallery, replacing the previous generated fleet scenes. Keep the actual cab colours, markings and tank geometry unchanged. Use contain sizing for portrait gallery photographs. Services includes a horizontal chemical plant collection → customer handover journey with the supplied line artwork, red brand accents, ordinary scrolling and reduced-motion support.

### Journey motion refinement

Keep the roadside scene compact (260px maximum) and the tanker readable (48px minimum). GSAP synchronizes travel, wheel rotation and red road fill. Brief stops at collection and handover highlight the corresponding explanatory text in two columns. Align each stop with its building. Fade the trail only after the tanker leaves the viewport. Preserve static reduced-motion presentation and pause controls.

The animated tanker uses opaque vector shapes: a blue cab, white and silver tank, red stripe, dark chassis and filled tyres. Keep the rotating wheel hubs aligned with the tyres. Buildings sit at the far edge of the road; the tanker rides on the foreground edge and renders above both the road and buildings.

Ease into and out of each stop, with wheel rotation and road fill following the same easing curve. Use a 14-second travel baseline and a soft trail fade after exit. Preserve journey progress when the viewport changes size.

### Rounded dark sections

Dark sections across every page use the hero’s 18px corner radius, reduced to 14px on mobile. Inset these sections to 96% width with a 1480px maximum; use 12px side gutters on mobile. Leave canvas space above and below so all four corners remain visible. Apply the same radius to the vision board and staff-kit figure.

### Homepage road animation — September 12, 2026

Match the front-and-side camera angle in the supplied `header.png`. Keep the blue-and-white Tata tanker in frame while its wheel details rotate, the road moves beneath it and the chemical plant passes behind. Preserve the vehicle silhouette with an SVG clip. Use fixed metal rim shading and rotate only vents and lug details within elliptical perspective transforms. Keep the body, axle centres and contact shadow stable.

Road motion is continuous at 144 CSS pixels per second; plant and kerb markings run at 32 pixels per second. The plant, kerb and road share one angled plane matching the tanker view. Crop the photographed kerb and road out of the levelled scenery panels. Draw one continuous kerb and road from that fixed baseline, extending the road below the frame. Use seamless grain instead of moving photographic road lighting. Derive wheel duration from the rendered front tyre diameter. Mirrored pairs of scenery panels repeat without a gap. Use compositor transforms, with no animation state updates on every frame. Pause when offscreen, when the tab is hidden or through the visible motion control. Reduced motion shows a static composition.

The hero layers in `public/hero/` are AI-prepared illustrations based on supplied imagery, not documentary footage. Their source images and prompts are recorded in `docs/references/hero-motion.md`. Keep the original fleet photographs and Services journey intact.
