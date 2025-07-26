import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Zap } from 'lucide-react';
import { MagneticButton } from '../../ui/MagneticButton';

export const IntegrationAdvisor: React.FC = () => {
    return (
        <motion.div
            className="bg-gradient-to-r from-purple-50 via-pink-50 to-red-50 rounded-2xl shadow-lg p-6 border border-purple-200"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
        >
            <div className="flex items-center space-x-3 mb-4">
                <Lightbulb className="w-8 h-8 text-purple-600" />
                <h3 className="text-xl font-bold text-gray-900">AI Integration Advisor</h3>
            </div>
            <div className="bg-white rounded-xl p-4 mb-6">
                <h4 className="font-semibold text-gray-800 mb-2">Current Opportunity</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                    <li>Your tomato harvest is ready in 3 days.</li>
                    <li>Your stall uses 15kg tomatoes weekly.</li>
                    <li>Market price: ₹18/kg | Your cost: ₹8/kg.</li>
                </ul>
                <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                    <p className="font-bold text-green-800 mb-2">💡 Recommendation:</p>
                    <ul className="list-disc list-inside text-green-700 space-y-1 text-sm">
                        <li>Use 15kg for your stall (Save ₹150/week).</li>
                        <li>Sell remaining 35kg to pods (Earn ₹630).</li>
                        <li className="font-bold">Total benefit: ₹780 from this harvest.</li>
                    </ul>
                </div>
            </div>
            <div className="flex items-center justify-center space-x-4">
                <MagneticButton variant="primary" size="md">
                    <Zap className="w-4 h-4 mr-2" />
                    Accept Recommendation
                </MagneticButton>
                <MagneticButton variant="outline" size="md">
                    Customize Plan
                </MagneticButton>
            </div>
        </motion.div>
    );
};
