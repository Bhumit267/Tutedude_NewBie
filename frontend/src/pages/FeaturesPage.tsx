import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { FeatureHero } from '../components/features/page/FeatureHero';
import { QuantumSyncSection } from '../components/features/page/QuantumSyncSection';
import { MicroLogisticsSection } from '../components/features/page/MicroLogisticsSection';
import { TrustChainSection } from '../components/features/page/TrustChainSection';

export const FeaturesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <FeatureHero />
        <QuantumSyncSection />
        <MicroLogisticsSection />
        <TrustChainSection />
      </main>
      <Footer />
    </div>
  );
};
