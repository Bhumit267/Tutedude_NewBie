import React from 'react';
import { motion } from 'framer-motion';
import { IndianRupee, Calculator } from 'lucide-react';

export const CostBreakdown: React.FC = () => {
    const breakdown = [
        { item: 'Base Cost Share (Storage/Logistics)', amount: 150, type: 'fixed' },
        { item: 'Onion Usage (12kg @ ₹28/kg)', amount: 336, type: 'variable' },
        { item: 'Tomato Usage (8kg @ ₹42/kg)', amount: 336, type: 'variable' },
        { item: 'Pod Insurance Fund (5%)', amount: 41, type: 'fixed' },
    ];
    const total = breakdown.reduce((sum, item) => sum + item.amount, 0);

    return (
        <motion.div
            className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
        >
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">Cost Splitting & Financials</h3>
                <Calculator className="w-6 h-6 text-green-500" />
            </div>
            <p className="text-gray-600 mb-2 text-sm">Transparent cost calculation based on shared expenses and individual usage.</p>
            <div className="p-3 bg-gray-100 rounded-lg border border-dashed mb-6">
                <code className="text-sm text-purple-700 font-mono">
                    YourCost = (Base ÷ PodSize) + (Usage × Rate) + StorageFee
                </code>
            </div>

            <div className="space-y-3">
                {breakdown.map((item, index) => (
                    <motion.div 
                        key={item.item} 
                        className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <p className="text-gray-700">{item.item}</p>
                        <p className="font-semibold text-gray-800">₹{item.amount.toLocaleString()}</p>
                    </motion.div>
                ))}
            </div>

            <div className="border-t mt-4 pt-4 flex justify-between items-center">
                <p className="text-lg font-bold text-gray-900">Your Total for this Period</p>
                <p className="text-2xl font-bold text-green-600">₹{total.toLocaleString()}</p>
            </div>
        </motion.div>
    );
};
