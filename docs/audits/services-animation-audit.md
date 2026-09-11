# Services animation audit and repair

Scope: the Services journey animation only. Impeccable technical audit followed by GPT Taste motion engineering. Existing site identity and approved illustration composition were preserved.

## Assessment

Implementation integrity: the scene is specific to the transport service, but its original independent CSS loops did not explain collection and handover. The detector returned no findings; the issues below came from source inspection and visual review, not automated accessibility certification.

| Dimension | Before / 4 | Evidence |
| --- | --- | --- |
| Accessibility | 3 | Named native controls, reduced-motion alternative and hidden decorative art already present. |
| Performance | 3 | Transform animations and visibility pausing; separate clocks for movement and wheel rotation. |
| Responsive layout | 2 | An 8.5vw tanker was about 33px wide on a 390px screen. |
| Theming | 3 | Main palette consistent; illustration-specific colours remain intentionally fixed. |
| Implementation integrity | 2 | Abrupt trail reset, excessive whitespace and no loading/delivery stage feedback. |
| Total | 13/20 | Acceptable, with targeted repairs needed. |

## Findings and repairs

- P2 — Mobile vehicle legibility: the tanker became too small. Replaced percentage-only sizing with a 48px minimum while keeping it smaller than the buildings.
- P2 — Wheel motion disconnected from travel: independent constant rotation ignored travel distance. One GSAP timeline now computes rotation from distance and wheel circumference, stopping wheels whenever the tanker stops.
- P2 — Unexplained journey: the tanker passed all sites without marking collection or handover. Brief stops now highlight the matching explanatory paragraph; no labels were added over the scenery and no repeated screen-reader announcements are generated.
- P2 — Abrupt reset: the full red trail disappeared at loop boundaries. It now fades after the tanker exits, before the next arrival. White lane dashes remain visible through the red trail.
- P3 — Empty composition: the 380px scene put too much blank space above the buildings. Its maximum height is now 260px and the heading gap is reduced.

## Validation and boundaries

Lint, TypeScript, production build and the two existing enquiry tests passed. Browser review covered desktop and a 390px viewport. At that mobile size the tanker measured 48px; document width remained below viewport width and no loaded image was broken. Pause and replay controls were exercised. Reduced-motion handling is implemented with a static CSS scene and GSAP media-query cleanup; it was reviewed in code, not verified across physical devices.

GSAP and @gsap/react were added because the requested motion skill requires them and the synchronized timeline replaces independent animation clocks. ScrollTrigger controls visibility, ResizeObserver rebuilds measured route geometry only when width changes, and every observer, listener and timeline has cleanup. There is no frame-rate benchmark claim. Illustration raster filtering remains a possible optimization if profiling identifies a bottleneck.

Positive features retained: actual fleet colours, detailed modern delivery building, matching black plant outline, full-width road, two trees, continuous looping, keyboard-operable controls and static readable copy.

Recommended follow-up: client visual review on a phone. No full-page redesign, new testimonials, random imagery, extra carousel or scroll pinning was introduced for this local animation repair.
