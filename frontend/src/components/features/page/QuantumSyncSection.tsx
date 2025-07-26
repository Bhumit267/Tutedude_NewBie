import React from 'react';
import { motion } from 'framer-motion';
import { PodFormationSimulator } from './PodFormationSimulator';

export const QuantumSyncSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">QuantumSync™</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From fragmented supply chains to collective power. See how our AI forms optimal vendor pods to maximize your savings and efficiency.
          </p>
        </motion.div>

        <PodFormationSimulator />

        <div className="mt-20 grid md:grid-cols-2 gap-8 items-center">
            <motion.div 
                className="bg-gray-50 p-8 rounded-2xl border"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
            >
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Smart Storage Network</h3>
                <p className="text-gray-600 mb-4">
                    Your pod's inventory is distributed across a smart network of storage hubs. Real-time tracking ensures you always know what's available and where.
                </p>
                <ul className="space-y-2 text-gray-700 list-disc list-inside">
                    <li><strong>Primary Hub:</strong> Main storage with largest capacity.</li>
                    <li><strong>Secondary Hub:</strong> Central location for quick access.</li>
                    <li><strong>Tertiary Hub:</strong> Backup for overflow and specialty items.</li>
                </ul>
            </motion.div>
            <motion.div 
                className="bg-gray-50 p-8 rounded-2xl border"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
            >
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Dynamic Cost Splitting</h3>
                <p className="text-gray-600 mb-4">
                    Our transparent financial model ensures fairness. Base costs are split, while variable costs are based on your actual consumption.
                </p>
                <div className="p-4 bg-white rounded-lg border border-dashed">
                    <code className="text-sm text-purple-700">
                        YourCost = (Base ÷ PodSize) + (Usage × Rate) + StorageFee
                    </code>
                </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};
