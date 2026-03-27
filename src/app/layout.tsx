import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Inter, Lato, Montserrat, Open_Sans, Roboto } from 'next/font/google';
import '../styles/tailwind.css';

const montserrat = Montserrat({
  subsets: ['latin', 'vietnamese'],
  weight: ['700', '800'],
  variable: '--font-montserrat',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

const roboto = Roboto({
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '700'],
  variable: '--font-roboto',
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '600'],
  variable: '--font-open-sans',
  display: 'swap',
});

const lato = Lato({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '700'],
  variable: '--font-lato',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'ScanBar - Scan Any Barcode or QR Code Instantly',
  description: 'ScanBar is the fastest barcode and QR code scanner app. Scan products, links, and codes in under a second - available on iOS and Android.',
  icons: {
    icon: [
      { url: '/icon.png?v=2', type: 'image/png', sizes: '512x512' },
      { url: '/favicon.ico?v=2', type: 'image/x-icon' },
    ],
    shortcut: '/favicon.ico?v=2',
    apple: '/apple-icon.png?v=2',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${montserrat.variable} ${inter.variable} ${roboto.variable} ${openSans.variable} ${lato.variable}`}>
      <body>{children}</body>
    </html>
  );
}
