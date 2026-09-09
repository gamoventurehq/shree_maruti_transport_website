import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { business } from '@/content/business';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  icons: { icon: '/favicon.svg' },
  title: 'Shree Maruti Transport | Pan-India Road Transport',
  description:
    'An owned fleet of 150 trucks. Discover Shree Maruti Transport and its pan-India road transport operations.',
  robots: { index: !business.isPreview, follow: !business.isPreview },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
