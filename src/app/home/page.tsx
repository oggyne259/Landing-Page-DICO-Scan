import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import TrustBarSection from './components/TrustBarSection';
import ComparisonSection from './components/ComparisonSection';
import OutcomesSection from './components/OutcomesSection';
import HowItWorksSection from './components/HowItWorksSection';
import TestimonialsSection from './components/TestimonialsSection';
import AboutSection from './components/AboutSection';
import FinalCtaSection from './components/FinalCtaSection';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:4028';

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'DICO Scan',
      url: siteUrl,
      logo: `${siteUrl}/assets/images/app_logo.png`,
      sameAs: [],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      name: 'DICO Scan',
      url: siteUrl,
      inLanguage: 'vi-VN',
      publisher: {
        '@id': `${siteUrl}/#organization`,
      },
    },
    {
      '@type': 'SoftwareApplication',
      '@id': `${siteUrl}/home#app`,
      name: 'DICO Scan',
      applicationCategory: 'HealthApplication',
      operatingSystem: 'iOS, Android',
      url: `${siteUrl}/home`,
      image: `${siteUrl}/assets/images/app_logo.png`,
      description:
        'Ứng dụng quét mã sản phẩm, phân tích thành phần bằng AI, cảnh báo rủi ro và gợi ý lựa chọn an toàn theo hồ sơ cá nhân hoặc gia đình.',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'VND',
      },
      publisher: {
        '@id': `${siteUrl}/#organization`,
      },
    },
  ],
};

export default function HomePage() {
  return (
    <main className="grain brand-page min-h-screen overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <HeroSection />
      <TrustBarSection />
      <ComparisonSection />
      <OutcomesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <AboutSection />
      <FinalCtaSection />
      <Footer />
    </main>
  );
}
