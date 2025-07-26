import React from 'react';
import { Header } from '../components/layout/Header';
import { HeroSection } from '../components/sections/HeroSection';
import { ProblemSection } from '../components/sections/ProblemSection';
import { SolutionSection } from '../components/sections/SolutionSection';
import { FeaturesSection } from '../components/sections/FeaturesSection';
import { Footer } from '../components/layout/Footer';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
};
