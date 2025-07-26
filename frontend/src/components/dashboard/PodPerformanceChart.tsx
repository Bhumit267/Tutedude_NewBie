import React from 'react';
import { motion } from 'framer-motion';
import { Users, Zap, Target } from 'lucide-react';

export const PodPerformanceChart: React.FC = () => {
  const efficiency = 87;
  const circumference = 2 * Math.PI * 45; // 2 * pi * radius
  const strokeDashoffset = circumference - (efficiency / 100) * circumference;

  return (
    <motion.div 
      className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <h3 className="text-xl font-bold text-gray-900 mb-4">Pod Performance</h3>
      <div className="flex-grow flex items-center justify-center">
        <div className="relative w-48 h-48">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              className="stroke-current text-gray-200"
              strokeWidth="10"
              fill="transparent"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="45"
              className="stroke-current text-purple-600"
              strokeWidth="10"
              fill="transparent"
              strokeLinecap="round"
              transform="rotate(-90 50 50)"
              strokeDasharray={circumference}
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset }}
              transition={{ duration: 1.5, ease: 'easeOut', delay: 0.5 }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <motion.span 
              className="text-4xl font-bold text-purple-700"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', delay: 0.8 }}
            >
              {efficiency}%
            </motion.span>
            <span className="text-sm text-gray-500">Efficiency</span>
          </div>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-4 text-center">
        <div>
          <Users className="w-6 h-6 mx-auto text-blue-500 mb-1" />
          <p className="font-bold text-gray-800">12/12</p>
          <p className="text-xs text-gray-500">Members</p>
        </div>
        <div>
          <Zap className="w-6 h-6 mx-auto text-orange-500 mb-1" />
          <p className="font-bold text-gray-800">₹15.6k</p>
          <p className="text-xs text-gray-500">Savings</p>
        </div>
        <div>
          <Target className="w-6 h-6 mx-auto text-green-500 mb-1" />
          <p className="font-bold text-gray-800">96%</p>
          <p className="text-xs text-gray-500">Success</p>
        </div>
      </div>
    </motion.div>
  );
};
