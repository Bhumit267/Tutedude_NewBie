import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Droplets, Wind } from 'lucide-react';

export const CropManagement: React.FC = () => {
    const fields = [
        { name: 'Field A', crop: 'Tomatoes', icon: '🍅', progress: 85, daysLeft: 3 },
        { name: 'Field B', crop: 'Onions', icon: '🧅', progress: 60, daysLeft: 12 },
        { name: 'Field C', crop: 'Chilies', icon: '🌶️', progress: 30, daysLeft: 25 },
        { name: 'Field D', crop: 'Leafy Greens', icon: '🥬', progress: 70, daysLeft: 8 },
        { name: 'Field E', crop: 'Carrots', icon: '🥕', progress: 45, daysLeft: 18 },
        { name: 'Field F', crop: 'Empty', icon: '➕', progress: 0, daysLeft: 0 },
    ];

    return (
        <motion.div
            className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
        >
            <h3 className="text-xl font-bold text-gray-900 mb-6">Crop Management</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {fields.map((field, index) => (
                    <motion.div
                        key={field.name}
                        className="bg-green-50 rounded-xl p-4 border border-green-200 text-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        whileHover={{ scale: 1.05, shadow: 'md' }}
                    >
                        <span className="text-4xl">{field.icon}</span>
                        <h4 className="font-semibold text-gray-800 mt-2">{field.crop}</h4>
                        <p className="text-sm text-gray-500">{field.name}</p>
                        {field.progress > 0 && (
                            <div className="mt-2">
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <motion.div
                                        className="bg-green-600 h-2.5 rounded-full"
                                        initial={{ width: 0 }}
                                        animate={{ width: `${field.progress}%` }}
                                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                                    ></motion.div>
                                </div>
                                <p className="text-xs text-gray-600 mt-1">{field.daysLeft} days to harvest</p>
                            </div>
                        )}
                        {field.progress === 0 && (
                             <p className="text-xs text-blue-600 mt-1 font-semibold">Plan Next Crop</p>
                        )}
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};
