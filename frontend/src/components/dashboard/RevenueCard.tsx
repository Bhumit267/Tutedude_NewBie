import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, IndianRupee } from 'lucide-react';
import { faker } from '@faker-js/faker';

export const RevenueCard: React.FC = () => {
  const todayRevenue = 8450;
  const targetRevenue = 10000;
  const progress = (todayRevenue / targetRevenue) * 100;

  const recentSales = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    time: faker.date.recent().toLocaleTimeString(),
    amount: parseInt(faker.commerce.price(50, 500, 0)),
    item: faker.helpers.arrayElement(['Pav Bhaji', 'Vada Pav', 'Bhel Puri', 'Samosa', 'Dosa']),
  }));

  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900">Today's Revenue</h3>
        <motion.div
          className="p-2 bg-green-100 rounded-lg"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <TrendingUp className="w-6 h-6 text-green-600" />
        </motion.div>
      </div>

      {/* Revenue Display */}
      <div className="mb-6">
        <motion.div
          className="flex items-center space-x-2 mb-2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
        >
          <IndianRupee className="w-8 h-8 text-green-600" />
          <span className="text-4xl font-bold text-gray-900">
            {todayRevenue.toLocaleString()}
          </span>
        </motion.div>
        
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <span>Target: ₹{targetRevenue.toLocaleString()}</span>
          <span className="text-green-600">+12% from yesterday</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-600">Progress to Target</span>
          <span className="text-sm font-semibold text-gray-900">{progress.toFixed(1)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <motion.div
            className="bg-gradient-to-r from-green-400 to-emerald-500 h-3 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          />
        </div>
      </div>

      {/* Recent Sales */}
      <div>
        <h4 className="font-semibold text-gray-900 mb-3">Recent Sales</h4>
        <div className="space-y-2">
          {recentSales.map((sale, index) => (
            <motion.div
              key={sale.id}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div>
                <p className="font-medium text-gray-900">{sale.item}</p>
                <p className="text-xs text-gray-500">{sale.time}</p>
              </div>
              <motion.span
                className="font-bold text-green-600"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 0.3 }}
              >
                +₹{sale.amount}
              </motion.span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
