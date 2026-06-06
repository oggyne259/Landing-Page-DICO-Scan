import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Inter, Lato, Montserrat, Open_Sans, Roboto } from 'next/font/google';
import '../styles/tailwind.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:4028';
const siteName = 'DICO Scan';
const siteDescription =
  'DICO Scan giúp bạn quét mã sản phẩm, phân tích thành phần bằng AI, cảnh báo rủi ro và nhận khuyến nghị an toàn theo hồ sơ cá nhân hoặc gia đình.';

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
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: 'DICO Scan - Quét sản phẩm, phân tích thành phần bằng AI',
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    'DICO Scan',
    'app quét mã sản phẩm',
    'app kiểm tra thành phần sản phẩm',
    'app kiểm tra độ an toàn sản phẩm',
    'AI product scanner',
    'barcode scanner AI',
    'product safety app',
    'ingredient analysis app',
  ],
  authors: [{ name: 'DICO Scan' }],
  creator: 'DICO Scan',
  publisher: 'DICO Scan',
  alternates: {
    canonical: '/home',
  },
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: '/home',
    siteName,
    title: 'DICO Scan - Quét sản phẩm, phân tích thành phần bằng AI',
    description: siteDescription,
    images: [
      {
        url: '/assets/images/app_logo.png',
        width: 512,
        height: 512,
        alt: 'Logo DICO Scan',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'DICO Scan - Quét sản phẩm, phân tích thành phần bằng AI',
    description: siteDescription,
    images: ['/assets/images/app_logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icon.png?v=2', type: 'image/png', sizes: '512x512' },
      { url: '/favicon-32x32.png?v=2', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16x16.png?v=2', type: 'image/png', sizes: '16x16' },
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
    <html
      lang="vi"
      className={`${montserrat.variable} ${inter.variable} ${roboto.variable} ${openSans.variable} ${lato.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
