import React, { useState } from 'react';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { ModeSwitcher } from '../components/dashboard/hybrid/ModeSwitcher';
import { UnifiedPerformance } from '../components/dashboard/hybrid/UnifiedPerformance';
import { IntegrationAdvisor } from '../components/dashboard/hybrid/IntegrationAdvisor';
import { VendorDashboard } from './VendorDashboard';
import { FarmerDashboard } from './FarmerDashboard';
import { motion } from 'framer-motion';

export const HybridDashboard: React.FC = () => {
  const [mode, setMode] = useState<'vendor' | 'farmer'>('vendor');

  return (
    <DashboardLayout userType="hybrid" userName="Amit Sharma">
      <div className="space-y-8">
        <ModeSwitcher onSwitch={setMode} />
        <UnifiedPerformance />
        <IntegrationAdvisor />
        
        <motion.div 
            key={mode}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="text-2xl font-bold text-gray-800 mb-4 capitalize">{mode} Dashboard View</h2>
            {mode === 'vendor' ? (
                <div className="p-4 bg-white rounded-xl border"><p>Vendor-specific components would be rendered here.</p></div>
            ) : (
                <div className="p-4 bg-white rounded-xl border"><p>Farmer-specific components would be rendered here.</p></div>
            )}
        </motion.div>
      </div>
    </DashboardLayout>
  );
};
