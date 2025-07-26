import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon, TrendingUp, TrendingDown } from 'lucide-react';
import { cn } from '../../utils/cn';

interface MetricCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  change: string;
  changeType: 'increase' | 'decrease' | 'none';
  color: 'green' | 'blue' | 'purple' | 'orange' | 'red';
  index: number;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  icon: Icon,
  title,
  value,
  change,
  changeType,
  color,
  index
}) => {
  const colors = {
    green: 'from-green-500 to-emerald-500',
    blue: 'from-blue-500 to-sky-500',
    purple: 'from-purple-500 to-violet-500',
    orange: 'from-orange-500 to-amber-500',
    red: 'from-red-500 to-rose-500',
  };

  const textColors = {
    green: 'text-green-600',
    blue: 'text-blue-600',
    purple: 'text-purple-600',
    orange: 'text-orange-600',
    red: 'text-red-600',
  }

  return (
    <motion.div
      className="relative p-6 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5, shadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' }}
    >
      <div className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${colors[color]}`} />
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-gray-500 mb-1">{title}</p>
          <motion.p 
            className="text-3xl font-bold text-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.2 }}
          >
            {value}
          </motion.p>
        </div>
        <div className={`p-3 bg-gradient-to-br ${colors[color]} rounded-xl text-white shadow-md`}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
      <div className="mt-4 flex items-center space-x-1 text-sm">
        {changeType !== 'none' && (
          changeType === 'increase' ? 
          <TrendingUp className="w-4 h-4 text-green-500" /> : 
          <TrendingDown className="w-4 h-4 text-red-500" />
        )}
        <span className={cn(
          changeType === 'increase' ? 'text-green-600' : 'text-red-600',
          changeType === 'none' && 'text-gray-500'
        )}>
          {change}
        </span>
      </div>
    </motion.div>
  );
};
