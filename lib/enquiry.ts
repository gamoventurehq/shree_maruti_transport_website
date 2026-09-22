export type Enquiry = {
  name: string;
  company: string;
  email: string;
  pickup: string;
  delivery: string;
  cargo: string;
};

export const enquirySubject =
  'Transport enquiry | Shree Maruti Transport Service';

export function parseEnquiry(value: unknown): Enquiry | null {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return null;

  const fields = value as Record<string, unknown>;
  const read = (name: keyof Enquiry, maxLength: number) => {
    const field = fields[name];
    if (typeof field !== 'string' || field.length > maxLength) return null;
    return field.trim();
  };

  const name = read('name', 100);
  const company = read('company', 150);
  const email = read('email', 254);
  const pickup = read('pickup', 150);
  const delivery = read('delivery', 150);
  const cargo = read('cargo', 3000);

  if (
    !name ||
    company === null ||
    !email ||
    !pickup ||
    !delivery ||
    !cargo ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    return null;
  }

  return { name, company, email, pickup, delivery, cargo };
}

export function formatEnquiry(enquiry: Enquiry): string {
  return [
    enquirySubject,
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
