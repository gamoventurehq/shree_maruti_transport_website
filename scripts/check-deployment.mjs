import assert from 'node:assert/strict';

const base = new URL(process.argv[2] || 'http://localhost:3001');
const pages = {
  '/': 'tanker transport',
  '/about': 'Our journey. Your trust.',
  '/services': 'Tanker transport for chemical and liquid cargo.',
  '/services/chemical-tanker-transport':
    'Chemical tanker transport across India',
  '/services/food-grade-liquid-transport': 'Food-grade liquid tanker transport',
  '/services/scheduled-tanker-logistics':
    'Scheduled tanker logistics for industry',
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
  const visibleText = html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<[^>]*>/g, ' ');
  assert.doesNotMatch(
    visibleText,
    /\btrucks?\b/i,
    `${path} still uses the old fleet terminology`,
  );
  if (path === '/fleet') {
    for (const expected of [
      '16 / 21 / 25 / 30 / 35 MT',
      'SS 304',
      'SS 316L',
      'food-grade',
    ]) {
      assert.ok(html.includes(expected), `Fleet page is missing ${expected}`);
    }
  }
  if (path === '/safety') {
    assert.ok(
      html.includes('hazardous-materials') && html.includes('staff-safety-kit'),
      'Safety page is missing its new sections',
    );
  }
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
  '/safety/staff-ppe-diagram.png',
]) {
  const response = await fetch(new URL(path, base), {
    signal: AbortSignal.timeout(20000),
  });
  assert.equal(response.status, 200, `${path} is not served`);
  assert.match(response.headers.get('content-type') || '', /^image\//);
}
console.log(
  `PASS: ${base.origin} serves all ten pages, Vision and Mission boards, enquiry form, office link, and key brand assets.`,
);
