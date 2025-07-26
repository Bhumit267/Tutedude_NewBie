import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Store, Tractor } from 'lucide-react';

export const ModeSwitcher: React.FC<{ onSwitch: (mode: 'vendor' | 'farmer') => void }> = ({ onSwitch }) => {
    const [mode, setMode] = useState<'vendor' | 'farmer'>('vendor');

    const handleSwitch = () => {
        const newMode = mode === 'vendor' ? 'farmer' : 'vendor';
        setMode(newMode);
        onSwitch(newMode);
    };

    return (
        <motion.div 
            className="bg-white rounded-2xl shadow-lg p-4 border border-gray-100"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <div className="relative flex items-center justify-center p-1 bg-gray-100 rounded-full">
                <motion.div
                    className="absolute h-full w-1/2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full shadow-md"
                    layout
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    animate={{ x: mode === 'vendor' ? '-50%' : '50%' }}
                />
                <button
                    onClick={() => handleSwitch()}
                    className={`relative z-10 w-1/2 py-3 flex items-center justify-center space-x-2 rounded-full transition-colors ${mode === 'vendor' ? 'text-white' : 'text-gray-600'}`}
                >
                    <Store className="w-5 h-5" />
                    <span className="font-semibold">Vendor Mode</span>
                </button>
                <button
                    onClick={() => handleSwitch()}
                    className={`relative z-10 w-1/2 py-3 flex items-center justify-center space-x-2 rounded-full transition-colors ${mode === 'farmer' ? 'text-white' : 'text-gray-600'}`}
                >
                    <Tractor className="w-5 h-5" />
                    <span className="font-semibold">Farmer Mode</span>
                </button>
            </div>
        </motion.div>
    );
};
