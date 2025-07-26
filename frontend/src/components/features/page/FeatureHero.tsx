import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Network, Shield } from 'lucide-react';

export const FeatureHero: React.FC = () => {
  const globeFeatures = [
    { icon: Zap, text: 'QuantumSync', position: { x: 0, y: -100, z: 0 } },
    { icon: Network, text: 'MicroLogistics', position: { x: 86.6, y: 50, z: 0 } },
    { icon: Shield, text: 'TrustChain', position: { x: -86.6, y: 50, z: 0 } },
  ];

  return (
    <div className="relative py-20 md:py-32 flex items-center justify-center text-center overflow-hidden bg-gray-50">
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          The Three Pillars of the
          <br />
          <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            Street Food Revolution
          </span>
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-600 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Discover the core technologies transforming local commerce for vendors everywhere.
        </motion.p>
      </div>
    </div>
  );
};
