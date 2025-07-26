import React from 'react';
import { motion } from 'framer-motion';
import { PiggyBank, TrendingUp } from 'lucide-react';

export const SavingsTracker: React.FC = () => {
  const monthlyTarget = 30000;
  const currentSavings = 25000;
  const progress = (currentSavings / monthlyTarget) * 100;

  const savingsData = [
    { month: 'Jan', amount: 15000 },
    { month: 'Feb', amount: 18000 },
    { month: 'Mar', amount: 22000 },
    { month: 'Apr', amount: 25000 },
  ];

  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900">Collective Savings</h3>
        <motion.div
          className="p-2 bg-blue-100 rounded-lg"
          animate={{ 
            rotate: [0, 10, -10, 0],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <PiggyBank className="w-6 h-6 text-blue-600" />
        </motion.div>
      </div>

      {/* Savings Display */}
      <div className="mb-6">
        <motion.div
          className="text-4xl font-bold text-blue-600 mb-2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, delay: 0.4 }}
        >
          ₹{currentSavings.toLocaleString()}
        </motion.div>
        <p className="text-gray-600">This month • Target: ₹{monthlyTarget.toLocaleString()}</p>
      </div>

      {/* Progress */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-600">Monthly Progress</span>
          <span className="text-sm font-semibold text-blue-600">{progress.toFixed(1)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <motion.div
            className="bg-gradient-to-r from-blue-400 to-purple-500 h-3 rounded-full relative overflow-hidden"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          >
            <motion.div
              className="absolute inset-0 bg-white opacity-30"
              animate={{ x: [-100, 100] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              style={{ width: '20px', height: '100%' }}
            />
          </motion.div>
        </div>
      </div>

      {/* Savings Chart */}
      <div>
        <h4 className="font-semibold text-gray-900 mb-3">Savings Trend</h4>
        <div className="flex items-end space-x-2 h-24">
          {savingsData.map((data, index) => {
            const height = (data.amount / Math.max(...savingsData.map(d => d.amount))) * 100;
            return (
              <div key={data.month} className="flex flex-col items-center flex-1">
                <motion.div
                  className="w-full bg-gradient-to-t from-blue-400 to-blue-600 rounded-t-lg mb-2"
                  initial={{ height: 0 }}
                  animate={{ height: `${height}%` }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                />
                <span className="text-xs text-gray-600">{data.month}</span>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};
