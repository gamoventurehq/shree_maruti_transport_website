# Responsive audit — 19 September 2026

Scope: all 11 public routes, including the three service guides. This was a responsive layout and interaction review, not a full accessibility certification or SEO audit. The existing branding, photography and business content are preserved.

## Findings and fixes

| Priority | Finding | Change |
| --- | --- | --- |
| P1 | Conflicting media queries hid the expanded navigation between 1050px and 1299px, despite showing the menu button. | Removed the obsolete 1050px rule and aligned menu visibility with the 1300px desktop navigation breakpoint. |
| P2 | At 320px, the fleet specification table was 640px wide inside a 276px window. Reading each row required horizontal scrolling. | Phones now show vertically arranged specification definitions. Tablet and desktop retain the table. Both layouts use the same data. |
| P2 | At 768px, paired enquiry fields were about 137px wide. Inputs also used 14px text. | The contact layout becomes one column below 1024px; paired tablet fields are about 311px wide. Input text is 16px. Phone fields remain stacked. |
| P2 | Tablet service pages kept a 240px side index beside a narrow article. Masthead titles also wrapped into tall columns. | Service indexes move above the article below 1024px. Tablet index links use two columns; phones use one. Masthead headings and descriptions stack at the same breakpoint. |
| P2 | The homepage hero remained 860px tall in an 844 × 390 landscape viewport. Its footer was absolutely positioned. | Short landscape screens use a 520px minimum hero height. Copy and footer stay in normal flow so the section can grow with its content. |
| P2 | Shared links had small hit areas: about 26px for the compact home brand, 23px for footer navigation and 37px for text links. | These targets now have a minimum height of 44px. Breadcrumb and hero-footer links use the same minimum. |
| P2 | Carousel hover pausing did not distinguish mouse hover from touch-generated hover states. | Hover pausing applies only on hover-capable devices. Keyboard focus and reduced-motion behavior are preserved. |

Long headings can wrap within their available width. Grid tracks in the masthead and contact form can shrink without forcing the page wider. Decorative link arrows keep their proportions.

## Verification

The baseline covered 121 page/viewport combinations. The confirmation pass covered all 11 routes at the following 12 sizes, for 132 combinations:

- Phones: 320 × 740, 390 × 844, 430 × 932.
- Tablets: 768 × 1024, 820 × 1180, 1024 × 768.
- Laptop and desktop: 1280 × 800, 1440 × 900, 1920 × 1080.
- Wide desktop: 2560 × 1440, 3840 × 2160.
- Phone landscape: 844 × 390.

Navigation was also checked at 320, 375, 380, 381, 600, 767, 768, 1023, 1024, 1049, 1050, 1051, 1199, 1200, 1299, 1300, 1366 and 1440px. This checks both sides of the compact-header and navigation breakpoints.

Checks include document overflow, text overflow, form/article overflow, shared link target sizes, hero copy/footer overlap, navigation visibility and brand/menu overlap. Screenshot review covered the tablet form and service guide, mobile fleet specifications and safety content, and landscape hero.

All 132 confirmation checks passed without detected page-width overflow, form/article overflow or hero overlap. All 18 header-width checks passed. Lint, TypeScript, the existing enquiry tests and the webpack production build passed.

Browser checks use local Chromium emulation. Physical iOS/Android devices and Safari/Firefox rendering were not available in this pass; check those before launch. SVG map points remain compact, with the existing 44px destination buttons providing an equivalent selection control.
