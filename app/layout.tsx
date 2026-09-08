import './globals.css';
import type { Metadata } from 'next';
import { DM_Sans, Playfair_Display } from 'next/font/google';

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-sans' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' });

export const metadata: Metadata = {
  title: 'SLV Catering | Memorable food for meaningful occasions',
  description: 'Traditional South Indian, North Indian and Udupi-style catering for weddings, receptions, celebrations and events across Bengaluru.',
  keywords: ['SLV Catering', 'Bangalore catering', 'South Indian catering', 'wedding catering', 'Udupi catering'],
  metadataBase: new URL('https://slvcatering.com'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'SLV Catering | Memorable food for meaningful occasions',
    description: 'Fresh, thoughtful catering for life’s most important gatherings.',
    url: 'https://slvcatering.com',
    siteName: 'SLV Catering',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'SLV Catering', description: 'Traditional Indian catering in Bengaluru.' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${playfair.variable}`}>{children}</body>
    </html>
  );
}
