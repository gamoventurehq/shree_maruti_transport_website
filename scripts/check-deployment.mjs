import assert from 'node:assert/strict';
const base = new URL(process.argv[2] || 'http://localhost:3003');
const paths = [
  '/',
  '/about',
  '/services',
  '/fleet',
  '/network',
  '/safety',
  '/clients',
  '/contact',
  '/services/chemical-tanker-transport',
  '/services/food-grade-liquid-transport',
  '/services/scheduled-tanker-logistics',
];
for (const path of paths) {
  const response = await fetch(new URL(path, base));
  assert.equal(response.status, 200, path);
  const html = await response.text();
  assert.ok(html.includes('Shree Maruti'), path + ' brand');
  assert.match(html, /<h1[ >]/, path + ' heading');
  assert.ok(html.includes('noindex'), path + ' preview indexing');
}
const missing = await fetch(new URL('/services/not-a-service', base));
assert.equal(missing.status, 404, 'unknown service route');
for (const path of [
  '/fleet/tata-highway-hero.png',
  '/safety/staff-ppe-diagram.png',
]) {
  const response = await fetch(new URL(path, base));
  assert.equal(response.status, 200, path);
  assert.match(response.headers.get('content-type') || '', /^image\//);
}
console.log(
  'PASS: 11 pages, preview indexing, unknown-service 404, and main visual assets.',
);
