import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bell, CheckCircle } from 'lucide-react';
import { MagneticButton } from '../../ui/MagneticButton';

export const DemandForecast: React.FC = () => {
    const forecast = [
        { item: 'Onions', predicted: 85, unit: 'kg' },
        { item: 'Tomatoes', predicted: 60, unit: 'kg' },
        { item: 'Potatoes', predicted: 75, unit: 'kg' },
        { item: 'Spices', predicted: 15, unit: 'kg' },
    ];
    const maxPredicted = Math.max(...forecast.map(f => f.predicted));

    return (
        <motion.div
            className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 h-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">Demand Forecast & Bulk Ordering</h3>
                <BarChart className="w-6 h-6 text-blue-500" />
            </div>
            <p className="text-gray-600 mb-6 text-sm">AI-predicted ingredient needs for the next 7 days, with automated bulk order generation.</p>
            
            <div className="space-y-4 mb-6">
                {forecast.map((item, index) => (
                    <div key={item.item} className="flex items-center space-x-4">
                        <span className="font-semibold text-gray-700 w-24">{item.item}</span>
                        <div className="flex-1 bg-gray-200 rounded-full h-6">
                            <motion.div
                                className="bg-gradient-to-r from-blue-400 to-purple-500 h-6 rounded-full flex items-center justify-end px-2"
                                initial={{ width: 0 }}
                                animate={{ width: `${(item.predicted / maxPredicted) * 100}%` }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                            >
                                <span className="text-white font-bold text-sm">{item.predicted} {item.unit}</span>
                            </motion.div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <div className="flex items-center space-x-3">
                    <Bell className="w-8 h-8 text-blue-600" />
                    <div>
                        <h4 className="font-bold text-blue-800">Bulk Order Ready for Approval</h4>
                        <p className="text-sm text-blue-700">A bulk order for Onions and Potatoes will be placed in 24 hours to lock in a 28% discount.</p>
                    </div>
                </div>
                <div className="mt-4 flex justify-end space-x-3">
                    <MagneticButton variant="outline" size="sm">View Details</MagneticButton>
                    <MagneticButton variant="secondary" size="sm" className="bg-green-500 hover:bg-green-600">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Approve
                    </MagneticButton>
                </div>
            </div>
        </motion.div>
    );
};
