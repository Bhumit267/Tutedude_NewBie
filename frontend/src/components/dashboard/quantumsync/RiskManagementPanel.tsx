import React from 'react';
import { motion } from 'framer-motion';
import { Shield, LifeBuoy, Banknote } from 'lucide-react';

export const RiskManagementPanel: React.FC = () => {
    const safeguards = [
        { icon: LifeBuoy, title: 'Pod Insurance Fund', value: '₹12,500', status: 'Healthy' },
        { icon: Banknote, title: 'Your Credit Limit', value: '₹8,000', status: 'Good Standing' },
    ];

    return (
        <motion.div
            className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 h-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
        >
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">Risk Management</h3>
                <Shield className="w-6 h-6 text-red-500" />
            </div>
            <p className="text-gray-600 mb-4 text-sm">Fairness safeguards and financial protection for all pod members.</p>
            
            <div className="space-y-4">
                {safeguards.map((item, index) => (
                    <motion.div 
                        key={item.title} 
                        className="p-4 bg-red-50 rounded-lg border border-red-200"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 + index * 0.1 }}
                    >
                        <div className="flex items-center space-x-3">
                            <item.icon className="w-6 h-6 text-red-600" />
                            <div>
                                <p className="font-semibold text-red-800">{item.title}</p>
                                <span className="text-lg font-bold text-red-700">{item.value}</span>
                                <span className="ml-2 text-xs bg-green-200 text-green-800 px-2 py-0.5 rounded-full">{item.status}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
             <p className="text-xs text-gray-500 mt-4">Includes emergency buffer stock (15%) and dispute resolution protocols.</p>
        </motion.div>
    );
};
