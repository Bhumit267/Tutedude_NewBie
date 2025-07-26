import React from 'react';
import { motion } from 'framer-motion';
import { Sun, CloudRain, Wind, TrendingUp, TrendingDown } from 'lucide-react';

export const FarmConditions: React.FC = () => {
    return (
        <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* Weather Station */}
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                <h4 className="font-bold text-blue-900 mb-4">Weather Station</h4>
                <div className="flex items-center space-x-4 mb-4">
                    <CloudRain className="w-12 h-12 text-blue-500" />
                    <div>
                        <p className="text-3xl font-bold text-blue-800">26°C</p>
                        <p className="text-blue-700">Rainy</p>
                    </div>
                </div>
                <div className="text-sm space-y-1 text-blue-700">
                    <p>Humidity: 78%</p>
                    <p>Wind: 12 km/h</p>
                    <p>Next 24h: Partly cloudy</p>
                </div>
            </div>

            {/* Crop Status */}
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                <h4 className="font-bold text-green-900 mb-4">Crop Status</h4>
                <div className="space-y-3">
                    <div>
                        <p className="font-semibold text-green-800">Tomatoes 🌱</p>
                        <p className="text-sm text-green-700">Growth: 85% | Harvest in 3 days</p>
                    </div>
                    <div>
                        <p className="font-semibold text-green-800">Onions 🌱</p>
                        <p className="text-sm text-green-700">Growth: 60% | Harvest in 12 days</p>
                    </div>
                </div>
            </div>

            {/* Market Prices */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
                <h4 className="font-bold text-yellow-900 mb-4">Market Prices</h4>
                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <p className="font-semibold text-yellow-800">Tomatoes 🍅</p>
                        <div className="flex items-center space-x-1 text-green-600">
                            <TrendingUp className="w-4 h-4" />
                            <span>₹18/kg</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <p className="font-semibold text-yellow-800">Onions 🧅</p>
                        <div className="flex items-center space-x-1 text-red-600">
                            <TrendingDown className="w-4 h-4" />
                            <span>₹22/kg</span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
