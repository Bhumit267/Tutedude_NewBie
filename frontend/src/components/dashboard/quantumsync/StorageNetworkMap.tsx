import React from 'react';
import { motion } from 'framer-motion';
import { Warehouse, Building, Home } from 'lucide-react';

export const StorageNetworkMap: React.FC = () => {
    const hubs = [
        { type: 'Primary', icon: Warehouse, name: "Ramesh's Hub", capacity: 75, items: ['Onions', 'Potatoes'] },
        { type: 'Secondary', icon: Building, name: "Central Point", capacity: 90, items: ['Tomatoes', 'Peppers'] },
        { type: 'Tertiary', icon: Home, name: "Suresh's Backup", capacity: 40, items: ['Spices', 'Oil'] },
    ];

    return (
        <motion.div
            className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 h-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
        >
            <h3 className="text-xl font-bold text-gray-900 mb-4">Smart Storage Network</h3>
            <div className="relative h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-around p-4">
                {/* This is a simplified visualization. A real map would use a library like Leaflet. */}
                <motion.div
                    className="absolute w-full h-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <svg width="100%" height="100%" className="opacity-50">
                        <motion.line x1="20%" y1="50%" x2="50%" y2="50%" stroke="#9ca3af" strokeWidth="2" strokeDasharray="5 5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.5 }} />
                        <motion.line x1="50%" y1="50%" x2="80%" y2="50%" stroke="#9ca3af" strokeWidth="2" strokeDasharray="5 5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 1.0 }} />
                    </svg>
                </motion.div>
                {hubs.map((hub, index) => (
                    <motion.div key={hub.name} className="z-10 text-center"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', delay: index * 0.2 }}
                    >
                        <hub.icon className="w-10 h-10 text-gray-600 mx-auto" />
                        <p className="text-sm font-semibold">{hub.type}</p>
                    </motion.div>
                ))}
            </div>
            <div className="space-y-3">
                {hubs.map((hub, index) => (
                    <motion.div key={hub.name} className="p-3 bg-gray-50 rounded-lg"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                    >
                        <p className="font-semibold text-gray-800">{hub.name} ({hub.type})</p>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                            <motion.div
                                className="bg-green-600 h-2.5 rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: `${hub.capacity}%` }}
                                transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                            />
                        </div>
                        <p className="text-xs text-gray-500 mt-1">Stores: {hub.items.join(', ')}</p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};
