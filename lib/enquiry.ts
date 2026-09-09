export type Enquiry = {
  name: string;
  company: string;
  email: string;
  pickup: string;
  delivery: string;
  cargo: string;
};

export function formatEnquiry(enquiry: Enquiry): string {
  return [
    'Transport enquiry | Shree Maruti Transport',
    '',
    `Name: ${enquiry.name.trim()}`,
    `Company: ${enquiry.company.trim() || 'Not provided'}`,
    `Email: ${enquiry.email.trim()}`,
    `Pickup: ${enquiry.pickup.trim()}`,
    `Delivery: ${enquiry.delivery.trim()}`,
    '',
    'Cargo and requirements:',
    enquiry.cargo.trim(),
  ].join('\n');
}
