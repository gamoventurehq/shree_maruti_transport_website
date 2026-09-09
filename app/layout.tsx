import type { Metadata } from 'next';
import { Barlow_Condensed, Geist } from 'next/font/google';
import './globals.css';
import { business } from '@/content/business';
import { Navigation } from '@/components/transport/navigation';
import { Footer } from '@/components/transport/site';

const geist = Geist({
  variable: '--font-body',
  subsets: ['latin'],
  display: 'swap',
});
const barlow = Barlow_Condensed({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  icons: { icon: '/brand/smts-logo.png' },
  title: {
    default: 'Shree Maruti Transport Services | Chemical & Liquid Transport',
    template: '%s | Shree Maruti Transport Services',
  },
  description:
    'Established in 2001. Shree Maruti Transport Services operates 50+ owned trucks for chemical, liquid, and pan-India road transportation.',
  robots: { index: !business.isPreview, follow: !business.isPreview },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${barlow.variable}`}>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Navigation />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
