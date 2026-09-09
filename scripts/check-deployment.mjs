import assert from 'node:assert/strict';

const base = new URL(process.argv[2] || 'http://localhost:3001');
const pages = {
  '/': 'Moving industry.',
  '/about': 'Our journey. Your trust.',
  '/services': 'Your cargo. Our focus.',
  '/fleet': 'The strength behind every mile.',
  '/safety': 'Responsibility, on every road.',
  '/clients': 'Their industry. Our commitment.',
  '/contact': 'Where are we headed?',
};
for (const [path, heading] of Object.entries(pages)) {
  const response = await fetch(new URL(path, base), {
    signal: AbortSignal.timeout(20000),
  });
  assert.equal(
    response.status,
    200,
    `${path} returned HTTP ${response.status}`,
  );
  const html = await response.text();
  assert.ok(html.includes(heading), `${path} is missing its heading`);
  assert.ok(
    html.includes('Shree Maruti Transport Services'),
    `${path} is missing the company name`,
  );
  if (path === '/about') {
    assert.ok(
      html.includes('Our vision') && html.includes('Our mission'),
      'About page is missing its Vision and Mission boards',
    );
  }
  if (path === '/contact') {
    assert.ok(
      html.includes('Prepare enquiry') && html.includes('3vC8XKiXLMS5d9A86'),
      'Contact page is missing its enquiry form or office link',
    );
  }
}
for (const path of [
  '/brand/smts-logo.png',
  '/fleet/tanker-fleet.png',
  '/partners/nicerglobe.jpg',
]) {
  const response = await fetch(new URL(path, base), {
    signal: AbortSignal.timeout(20000),
  });
  assert.equal(response.status, 200, `${path} is not served`);
  assert.match(response.headers.get('content-type') || '', /^image\//);
}
console.log(
  `PASS: ${base.origin} serves all seven pages, Vision and Mission boards, enquiry form, office link, and key brand assets.`,
);
