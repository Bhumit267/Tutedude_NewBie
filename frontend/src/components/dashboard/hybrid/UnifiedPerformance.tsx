import React from 'react';
import { motion } from 'framer-motion';
import { Store, Tractor, Zap, TrendingUp } from 'lucide-react';

export const UnifiedPerformance: React.FC = () => {
    return (
        <motion.div
            className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
        >
            <h3 className="text-xl font-bold text-gray-900 mb-6">Unified Performance</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center">
                {/* Vendor Business */}
                <div className="bg-orange-50 p-4 rounded-xl border border-orange-200">
                    <Store className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                    <p className="font-semibold text-orange-800">Stall Revenue</p>
                    <p className="text-2xl font-bold text-orange-600">₹45k</p>
                    <p className="text-sm text-gray-500">This Month</p>
                </div>

                {/* Integration */}
                <div className="bg-purple-50 p-4 rounded-xl border border-purple-200">
                    <Zap className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                    <p className="font-semibold text-purple-800">Self-Supply Savings</p>
                    <p className="text-2xl font-bold text-purple-600">₹8.9k</p>
                    <p className="text-sm text-gray-500">34% Efficiency Gain</p>
                </div>

                {/* Farm Business */}
                <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                    <Tractor className="w-8 h-8 text-green-500 mx-auto mb-2" />
                    <p className="font-semibold text-green-800">Farm Revenue</p>
                    <p className="text-2xl font-bold text-green-600">₹89k</p>
                    <p className="text-sm text-gray-500">This Month</p>
                </div>
            </div>
            <div className="mt-6 bg-gray-100 p-4 rounded-xl text-center">
                <p className="text-gray-600">Combined Monthly Revenue</p>
                <p className="text-3xl font-bold text-gray-800">₹134,000</p>
            </div>
        </motion.div>
    );
};
