import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "./components/HeroSection";
import TrustBarSection from "./components/TrustBarSection";
import ComparisonSection from "./components/ComparisonSection";
import OutcomesSection from "./components/OutcomesSection";
import HowItWorksSection from "./components/HowItWorksSection";
import TestimonialsSection from "./components/TestimonialsSection";
import AboutSection from "./components/AboutSection";
import FinalCtaSection from "./components/FinalCtaSection";

export default function HomePage() {
  return (
    <main className="grain brand-page min-h-screen overflow-x-hidden">
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
