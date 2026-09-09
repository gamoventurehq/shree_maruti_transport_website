import assert from 'node:assert/strict';

const base = new URL(process.argv[2] || 'http://localhost:3001');
const page = await fetch(base, { signal: AbortSignal.timeout(20000) });
assert.equal(page.status, 200, `Homepage returned HTTP ${page.status}`);
const html = await page.text();
assert.match(html, /Every mile\./, 'Homepage is missing the hero heading');
assert.match(html, /id="coverage"/, 'Homepage is missing the coverage section');
assert.match(html, /id="contact"/, 'Homepage is missing the enquiry section');
const image = await fetch(new URL('/transport-hero.webp', base), {
  signal: AbortSignal.timeout(20000),
});
assert.equal(image.status, 200, 'Hero asset is not served');
assert.match(image.headers.get('content-type') || '', /image\/webp/);
console.log(
  `PASS: ${base.origin} serves the homepage, coverage, enquiry section, and hero asset.`,
);
