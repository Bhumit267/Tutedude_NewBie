import React from 'react';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { motion } from 'framer-motion';
import { DemandForecast } from '../components/dashboard/quantumsync/DemandForecast';
import { StorageNetworkMap } from '../components/dashboard/quantumsync/StorageNetworkMap';
import { CostBreakdown } from '../components/dashboard/quantumsync/CostBreakdown';
import { OperationalTimeline } from '../components/dashboard/quantumsync/OperationalTimeline';
import { RiskManagementPanel } from '../components/dashboard/quantumsync/RiskManagementPanel';

export const QuantumSyncDashboardPage: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    return (
        <DashboardLayout userType="vendor" userName="Ramesh Kumar">
            <motion.div 
                className="space-y-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <h1 className="text-3xl font-bold text-gray-800">QuantumSync™ Command Center</h1>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <DemandForecast />
                    </div>
                    <div>
                        <OperationalTimeline />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                     <div className="lg:col-span-1">
                        <RiskManagementPanel />
                    </div>
                    <div className="lg:col-span-2">
                        <StorageNetworkMap />
                    </div>
                </div>

                <CostBreakdown />

            </motion.div>
        </DashboardLayout>
    );
};
