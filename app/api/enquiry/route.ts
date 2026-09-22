import nodemailer from 'nodemailer';
import { business } from '@/content/business';
import { enquirySubject, formatEnquiry, parseEnquiry } from '@/lib/enquiry';
import { getSmtpConfig } from '@/lib/mail-config';

export const runtime = 'nodejs';

function errorResponse(status: number, error: string) {
  return Response.json(
    { error },
    { status, headers: { 'Cache-Control': 'no-store' } },
  );
}

export async function POST(request: Request) {
  if (request.headers.get('sec-fetch-site') === 'cross-site') {
    return errorResponse(403, 'This request is not allowed.');
  }

  if (!request.headers.get('content-type')?.startsWith('application/json')) {
    return errorResponse(415, 'Send the enquiry as JSON.');
  }

  const contentLength = Number(request.headers.get('content-length'));
  if (contentLength > 10_000) {
    return errorResponse(413, 'The enquiry is too long.');
  }

  let payload: unknown;
  try {
    const body = await request.text();
    if (body.length > 10_000) {
      return errorResponse(413, 'The enquiry is too long.');
    }
    payload = JSON.parse(body);
  } catch {
    return errorResponse(400, 'Please check your enquiry and try again.');
  }

  if (
    payload &&
    typeof payload === 'object' &&
    'website' in payload &&
    typeof payload.website === 'string' &&
    payload.website.trim()
  ) {
    return Response.json({ ok: true });
  }

  const enquiry = parseEnquiry(payload);
  if (!enquiry) {
    return errorResponse(400, 'Please check your enquiry and try again.');
  }

  const config = getSmtpConfig();
  if (!config) {
    return errorResponse(503, 'Online enquiries are temporarily unavailable.');
  }

  const transporter = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.port === 465,
    requireTLS: config.port !== 465,
    auth: { user: config.user, pass: config.password },
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000,
  });

  try {
    const result = await transporter.sendMail({
      from: { name: business.name, address: config.fromEmail },
      to: business.email,
      replyTo: enquiry.email,
      subject: enquirySubject,
      text: formatEnquiry(enquiry),
    });

    if (!result.accepted.includes(business.email)) {
      return errorResponse(502, 'The enquiry could not be sent.');
    }

    return Response.json({ ok: true });
  } catch (error) {
    const code =
      error && typeof error === 'object' && 'code' in error
        ? String(error.code)
        : 'unknown';
    console.error('Enquiry SMTP delivery failed:', code);
    return errorResponse(502, 'The enquiry could not be sent.');
  }
}
