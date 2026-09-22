export type SmtpConfig = {
  host: string;
  port: number;
  user: string;
  password: string;
  fromEmail: string;
};

export function getSmtpConfig(): SmtpConfig | null {
  const host = process.env.SMTP_HOST?.trim();
  const port = Number(process.env.SMTP_PORT);
  const user = process.env.SMTP_USER?.trim();
  const password = process.env.SMTP_PASSWORD;
  const fromEmail = process.env.SMTP_FROM_EMAIL?.trim();

  if (
    !host ||
    !Number.isInteger(port) ||
    port < 1 ||
    port > 65535 ||
    !user ||
    !password ||
    !fromEmail ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fromEmail)
  ) {
    return null;
  }

  return { host, port, user, password, fromEmail };
}
