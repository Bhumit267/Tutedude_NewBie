import React from 'react';
import { motion } from 'framer-motion';
import { Users, TrendingUp, ShoppingCart } from 'lucide-react';
import { faker } from '@faker-js/faker';

interface PodStatusProps {
  detailed?: boolean;
}

export const PodStatus: React.FC<PodStatusProps> = ({ detailed = false }) => {
  const podMembers = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    name: faker.person.firstName(),
    avatar: faker.image.avatar(),
    contribution: faker.number.int({ min: 5000, max: 15000 }),
    status: faker.helpers.arrayElement(['active', 'pending', 'completed']),
    location: faker.location.street(),
  }));

  const podStats = {
    totalMembers: 12,
    activeOrders: 7,
    monthlySavings: 45000,
    successRate: 96,
  };

  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900">Pod Network Status</h3>
        <motion.div
          className="p-2 bg-purple-100 rounded-lg"
          animate={{ 
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Users className="w-6 h-6 text-purple-600" />
        </motion.div>
      </div>

      {/* Pod Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          { label: 'Total Members', value: podStats.totalMembers, icon: Users, color: 'blue' },
          { label: 'Active Orders', value: podStats.activeOrders, icon: ShoppingCart, color: 'orange' },
          { label: 'Monthly Savings', value: `₹${podStats.monthlySavings.toLocaleString()}`, icon: TrendingUp, color: 'green' },
          { label: 'Success Rate', value: `${podStats.successRate}%`, icon: TrendingUp, color: 'purple' },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            className="bg-gray-50 p-4 rounded-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex items-center justify-between mb-2">
              <stat.icon className={`w-5 h-5 text-${stat.color}-600`} />
              <motion.span
                className="text-lg font-bold text-gray-900"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
              >
                {stat.value}
              </motion.span>
            </div>
            <p className="text-xs text-gray-600">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Pod Members Network */}
      <div>
        <h4 className="font-semibold text-gray-900 mb-4">Active Pod Members</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {podMembers.slice(0, detailed ? podMembers.length : 6).map((member, index) => (
            <motion.div
              key={member.id}
              className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, backgroundColor: '#f3f4f6' }}
            >
              <motion.div
                className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold"
                animate={{ 
                  boxShadow: [
                    '0 0 0px rgba(168, 85, 247, 0.5)',
                    '0 0 20px rgba(168, 85, 247, 0.5)',
                    '0 0 0px rgba(168, 85, 247, 0.5)',
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
              >
                {member.name.charAt(0)}
              </motion.div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">{member.name}</p>
                <p className="text-xs text-gray-500">₹{member.contribution.toLocaleString()} contributed</p>
              </div>
              <motion.div
                className={`w-3 h-3 rounded-full ${
                  member.status === 'active' ? 'bg-green-400' :
                  member.status === 'pending' ? 'bg-yellow-400' :
                  'bg-blue-400'
                }`}
                animate={{ 
                  scale: member.status === 'active' ? [1, 1.3, 1] : 1,
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {detailed && (
        <motion.div
          className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h5 className="font-semibold text-purple-900 mb-2">Pod Performance</h5>
          <p className="text-purple-700 text-sm">
            Your pod is performing exceptionally well! 96% success rate with ₹45K monthly savings.
            Consider inviting more vendors to maximize collective buying power.
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};
