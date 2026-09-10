import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import { EliteNav, MotionCanvas } from '@/components/elite/interactions';
import { EliteFooter } from '@/components/elite/pages';
const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});
export const metadata: Metadata = {
  title: {
    default: 'Shree Maruti | A country in motion',
    template: '%s | Shree Maruti Transport Services',
  },
  description:
    'Chemical and liquid tanker transport across India. 50+ owned tankers, established in 2001.',
  robots: { index: false, follow: false },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={outfit.variable}>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <EliteNav />
        <MotionCanvas>
          <main id="main" className="overflow-x-hidden w-full max-w-full">
            {children}
          </main>
        </MotionCanvas>
        <EliteFooter />
      </body>
    </html>
  );
}
