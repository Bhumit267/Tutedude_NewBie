import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Star, Users, MessageSquare } from 'lucide-react';
import { MagneticButton } from '../ui/MagneticButton';

export const QuickActions: React.FC = () => {
  const actions = [
    {
      icon: ShoppingCart,
      title: 'Place New Order',
      description: "Yesterday's list is ready to reorder.",
      buttonText: 'Start Order',
      color: 'blue',
    },
    {
      icon: Star,
      title: 'Rate Supplier',
      description: 'Rate your last 3 deliveries.',
      buttonText: 'Rate Now',
      color: 'yellow',
    },
    {
      icon: Users,
      title: 'Family Tasks',
      description: '3 active deliveries today. Earnings: ₹145',
      buttonText: 'Track All',
      color: 'green',
    },
    {
      icon: MessageSquare,
      title: 'Pod Messages',
      description: '2 new messages about tomorrow\'s bulk order.',
      buttonText: 'View Chat',
      color: 'purple',
    },
  ];

  return (
    <motion.div 
      className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {actions.map((action, index) => (
          <motion.div
            key={index}
            className="bg-gray-50 rounded-xl p-4 flex flex-col justify-between border border-gray-200"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + index * 0.1 }}
            whileHover={{ y: -3, shadow: 'lg' }}
          >
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <action.icon className={`w-6 h-6 text-${action.color}-500`} />
                <h4 className="font-semibold text-gray-800">{action.title}</h4>
              </div>
              <p className="text-sm text-gray-600 mb-4">{action.description}</p>
            </div>
            <MagneticButton size="sm" variant="outline" className="w-full">
              {action.buttonText}
            </MagneticButton>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
