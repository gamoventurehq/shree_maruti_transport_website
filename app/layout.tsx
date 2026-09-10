import type { Metadata } from 'next';
import { Geist, Instrument_Serif } from 'next/font/google';
import './globals.css';
import {
  EditorialNav,
  GentleReveal,
} from '@/components/editorial/interactions';
import { PaperFooter } from '@/components/editorial/pages';
const geist = Geist({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});
const serif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-serif',
  display: 'swap',
});
export const metadata: Metadata = {
  title: {
    default: 'Shree Maruti Transport Services | Liquid Cargo, Clearly Planned',
    template: '%s | Shree Maruti Transport Services',
  },
  description:
    'Chemical, industrial and food-grade tanker transport across India. Established in 2001 with 50+ owned tankers.',
  robots: { index: false, follow: false },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${serif.variable}`}>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <EditorialNav />
        <GentleReveal>
          <main id="main">{children}</main>
        </GentleReveal>
        <PaperFooter />
      </body>
    </html>
  );
}
