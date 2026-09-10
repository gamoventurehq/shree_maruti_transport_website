# Website audit — 10 September 2026

Shree Maruti Transport Services · UI, UX, content and SEO

## Scope and version

Reviewed the seven local pages at `http://localhost:3002`, source code, rendered HTML from all seven public Vercel routes, desktop homepage appearance, and mobile homepage/PPE layouts. Checked metadata, headings, indexability, route responses, content volume and enquiry behaviour. This is a qualitative audit, not a Lighthouse, full WCAG conformance, search-ranking or security assessment. Search Console, analytics and real-user performance data were not available.

Website changes were pushed to GitHub `main` as **66787f9** before completing this report. The first public check after the push still returned the previous content. A subsequent check confirmed the updated public Fleet and Safety pages, with main-content counts matching the local build (414 and 744 words respectively). Findings below concern the latest version unless stated otherwise.

## Assessment

The visual foundation is coherent: the red, charcoal and off-white palette fits the logo, typography is consistent, and the seven pages have a clear shared structure. The website nevertheless feels like a presentation awaiting business details. Large headings and generous spacing give it length, while visitors receive relatively little evidence for choosing this operator.

The client's content concern is justified. Much of the recent expansion repeats instructions to share product details, a route and a schedule. Those paragraphs help prepare an enquiry but do not answer the commercial questions: What has this company transported? Where does it regularly operate? What distinguishes its fleet? How is cargo suitability established? Who can a buyer contact now?

Google explicitly says it has no preferred word count. Content should resolve these questions rather than meet an arbitrary length target. [Google: helpful, reliable content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content).

## Findings, ordered by impact

### P0 — Resolve before a commercial launch

**1. Visitors cannot complete an enquiry.** The contact form creates a local text draft and offers copying; it sends nothing. The website also says phone and email details are awaiting confirmation. The disclaimer is honest, but the commercial journey ends without a usable destination. See `components/transport/enquiry-form.tsx:130` and `app/contact/page.tsx:54`.

Provide a verified phone number, business email, full address and operating hours. Connect the form to an agreed recipient or CRM, with delivery confirmation and failure handling. Add a WhatsApp action only for a confirmed business number. Do not invent response-time promises.

**2. Every checked page excludes itself from search indexing.** Both versions return `noindex, nofollow`. This is intentional preview configuration (`content/business.ts:11`, `app/layout.tsx:28`), but it prevents the site from becoming a useful organic acquisition channel. Keep previews protected; enable production indexing when the business approves launch and verify the deployed HTML. [Google: robots meta directives](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag).

### P1 — Material trust, content and usability gaps

**3. There is too little company-specific evidence.** The fleet and staff visuals are illustrations. Client logos and certification references lack supporting stories, scope or documents. A prospect cannot see the actual fleet, operations team, loading environment or delivery experience. Add genuine photography, approved examples of work, and verified certification information. Retain the illustrations as explanatory assets where useful.

**4. The copy repeats general commitments instead of explaining operations.** Examples include “Our journey. Your trust.”, “Their industry. Our commitment.” and repeated requests to share cargo and route details. These are not factual errors, but they occupy prominent space without explaining the service. Keep some brand language; make major headings identify the subject, and follow them with evidence specific to Shree Maruti.

**5. Five services share one relatively brief page.** Chemical transport, solvents and food-grade liquids need distinct explanations of scope, customer requirements and suitability. The current anchor sections provide limited depth and are not separate landing pages. Develop substantial pages for genuinely distinct services; avoid creating near-identical pages for every keyword or city.

**6. The hero underplays the specialisation.** “Moving industry. Since 2001.” is memorable but generic. Chemical/liquid transport appears in a smaller label, and food-grade capability and the capacity range appear later. Make the service category more prominent, followed by the established facts: 50+ owned tankers, operating since 2001, pan-India coverage and 16–35 MT options. Give qualified visitors a direct enquiry action once that action works.

**7. The coverage map does not prove actual routes.** It explicitly labels city pins as examples rather than confirmed branches or live positions. That disclosure is appropriate, but the map occupies substantial space while offering little operational detail. Obtain regular origin/destination corridors and distinguish the Bhiwandi base, service areas and any actual branches. Do not present illustrative pins as operational evidence.

**8. The moving client banner has an accessibility gap.** It runs for 90 seconds and repeats indefinitely. Hover pauses it, and reduced-motion preferences are supported, but there is no equivalent general mechanism for keyboard and touch users to stop it. The user explicitly requested no pause button; a static strip or an animation that stops within five seconds can respect that preference. See `app/globals.css:2164`. [WCAG: Pause, Stop, Hide](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide).

### P2 — Improve presentation and search clarity

**9. Page length is dominated by spacing and repeated layouts.** The desktop homepage measured roughly 6,156 CSS pixels tall at a 1,280-pixel viewport, with about 458 words in its main content. Big slogans, repeated cards and generous gaps create scrolling without equivalent information gain. Vary sections according to their purpose: specification tables, actual photo captions, route information and concise case studies. Do not shrink all spacing indiscriminately.

**10. Navigation disappears relatively early.** At 1,199 pixels and below, all page links move into the menu. This can make the seven-page structure less obvious on smaller laptops and narrow browser panels. Consider a more compact visible desktop navigation where it fits. The mobile menu itself is an appropriate pattern.

**11. PPE labels become small on mobile.** The diagram scales as one image, including all its text. Its overall composition works, but fine labels are harder to read at a narrow viewport. Add corresponding readable HTML equipment labels beside or below it. This does not require restoring the removed full-diagram button.

**12. Fleet illustrations lose quality when enlarged.** The hero and fleet gallery crop a multi-panel source montage rather than using independent high-resolution photos. A panel provides much less detail than the full source dimensions imply. Replace it with properly sized, separately composed images or genuine fleet photographs. A 3,840-pixel optimized image candidate was observed; that alone does not prove poor loading performance. Measure delivered bytes and mobile LCP before prescribing performance changes.

**13. The Clients page repeats the same logo collection.** A moving banner followed by the same static logos adds visual volume. Keep an accessible way to see every client, but use the freed space for approved project examples, industries served and the nature of those relationships. Fleet technology partners should remain clearly distinct from customers.

**14. SEO metadata is incomplete.** All seven routes return 200 and have individual titles/descriptions and one H1, which is a sound start. However, there are no canonical links, Open Graph metadata or structured data. `/sitemap.xml` and `/robots.txt` return 404. Missing robots.txt is not itself an indexing block; the explicit noindex directive is. Add a production sitemap, an intentional canonical domain, social sharing metadata, and accurate organisation/local-business data. Structured data must reflect visible, verified facts and does not guarantee rich results. [Google: sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap), [Google: Local Business](https://developers.google.com/search/docs/appearance/structured-data/local-business).

**15. Local-business information is incomplete.** “Bhiwandi, Maharashtra” and a map link do not replace a readable full address, phone number and hours. Align the website with the client's existing Google Business Profile. This audit did not assess that profile or conclude that it is absent.

**16. Safety content needs to explain this operator's practice.** The nine-class hazardous-materials guide is informative and correctly says it is not an acceptance list. It nevertheless takes substantial space while the company's training, inspection, documentation and escalation processes remain generic. Prioritise verified practices and certificate scope; keep the classification guide secondary. Do not imply acceptance of all nine classes or add another operator's ISO credentials.

## Content depth by page

Approximate main-content word counts include headings, captions, labels and collapsed FAQ answers, but exclude navigation, footer and text baked into images. These are diagnostic counts, not SEO targets.

| Page | Latest local version | Older public version at initial post-push check | Most useful addition |
| --- | ---: | ---: | --- |
| Home | 458 | 359 | Clear service positioning, proof and verified operating corridors |
| About | 376 | 272 | Founder/team information, actual milestones and operating base |
| Services | 590 | 314 | Detailed service scope, suitability and examples |
| Fleet | 414 | 141 | Specification matrix and real tanker photography |
| Safety | 744 | 240 | Documented procedures, training and certification scope |
| Clients | 262 | 145 | Approved customer examples and relationship context |
| Contact | 233 | 133 | Complete business details and a working enquiry channel |

The Safety page is already the longest. Adding another general safety explanation would contribute less than a short, evidenced account of how the company checks a tanker before dispatch.

## What to request from the client

| Material | Where it belongs | Questions it should answer |
| --- | --- | --- |
| Phone, email, full address, hours | Contact, footer, business metadata | How does a buyer reach the team? |
| Actual fleet and operations photos | Home, Fleet, About | What does this company operate? |
| Fleet specification breakdown | Fleet | Which capacities, grades and configurations are available together? |
| Regular routes and actual branches | Coverage, service pages | Where does the company routinely work? |
| Approved cargo examples | Services | Which products have been handled? |
| Cleaning and previous-cargo controls | Fleet, food-grade service, Safety | How is cargo compatibility assessed? |
| Certification scope and current documents | Safety | What is certified, by whom, and for what period? |
| Training/checking process and authentic photos | Safety | What happens before and during a movement? |
| Two or three approved customer examples | Clients, Home | What work demonstrates the company's experience? |
| Founder, leadership and milestone details | About | Who runs the business and how has it developed? |

The confirmed 50+ fleet size, 2001 founding year, five payload capacities, three stainless-steel grades and food-grade service can be used now. The confirmation does not establish every possible capacity/grade combination, dedicated food-grade allocation, cleaning certification, transit-time guarantee or particular route frequency.

## What already works

- Seven separate routes return successfully; this is not a single-page site.
- Core text is present in server-rendered HTML.
- Shared brand colours, typography and layouts feel consistent.
- Main pages have one H1 and individual metadata descriptions.
- Skip navigation, labelled form controls and reduced-motion support are present.
- The mobile homepage check did not show horizontal overflow.
- Customer logos and fleet technology partners are identified separately.
- Illustrative coverage and safety content disclose their limits rather than asserting unsupported capabilities.

## Implementation order

1. Confirm the pushed deployment, then establish a working contact channel and production indexing policy.
2. Collect operational evidence and rewrite the most prominent generic sections around it.
3. Build useful service detail, fleet specifications and verified coverage content.
4. Improve navigation visibility, mobile diagram labels, banner accessibility and image quality.
5. Complete metadata, canonical URLs, sitemap and accurate business structured data.
6. Measure mobile performance and user journeys; check Search Console after indexing is enabled.

No website fixes were made as part of this audit. The report is a local deliverable created after the requested website push.
