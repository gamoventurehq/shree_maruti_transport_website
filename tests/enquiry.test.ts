import { strict as assert } from 'node:assert';
import { test } from 'node:test';
import { formatEnquiry } from '../lib/enquiry.ts';

await test('creates a copyable enquiry preserving route, contact details, and multiline cargo requirements', () => {
  const result = formatEnquiry({
    name: '  Asha Shah ',
    company: ' Example Manufacturing ',
    email: ' asha@example.com ',
    pickup: ' Ahmedabad ',
    delivery: ' Chennai ',
    cargo: ' Machine parts, 8 tonnes\nDispatch: 14 September ',
  });
  assert.equal(
    result,
    'Transport enquiry | Shree Maruti Transport\n\nName: Asha Shah\nCompany: Example Manufacturing\nEmail: asha@example.com\nPickup: Ahmedabad\nDelivery: Chennai\n\nCargo and requirements:\nMachine parts, 8 tonnes\nDispatch: 14 September',
  );
});

await test('handles an omitted optional company without inventing business details', () => {
  const result = formatEnquiry({
    name: 'Asha',
    company: '  ',
    email: 'asha@example.com',
    pickup: 'Surat',
    delivery: 'Pune',
    cargo: 'Textiles',
  });
  assert.match(result, /Company: Not provided/);
  assert.doesNotMatch(result, /sent|received|confirmed/i);
});
