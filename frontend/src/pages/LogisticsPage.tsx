import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Clock, Users, MapPin, Route, UserPlus, Zap, BarChart3 } from 'lucide-react';
import { DashboardLayout } from '../components/layout/DashboardLayout';

// Metric Card Component
const MetricCard = ({ icon: Icon, title, value, change, changeType, color, index }) => {
  const colorClasses = {
    green: 'from-emerald-500 to-green-600',
    blue: 'from-blue-500 to-indigo-600',
    orange: 'from-orange-500 to-red-500',
    purple: 'from-purple-500 to-pink-600',
    red: 'from-red-500 to-rose-600'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-xl bg-gradient-to-r ${colorClasses[color]} shadow-lg`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        {changeType !== 'none' && (
          <span className={`text-sm font-medium ${
            changeType === 'increase' ? 'text-emerald-600' : 'text-red-500'
          }`}>
            {change}
          </span>
        )}
      </div>
      <h3 className="text-slate-600 text-sm font-medium mb-1">{title}</h3>
      <p className="text-2xl font-bold text-slate-800">{value}</p>
    </motion.div>
  );
};

// Enhanced Card Component
const EnhancedCard = ({ title, icon: Icon, children, className = "", delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 ${className}`}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-gradient-to-r from-slate-100 to-slate-200">
          <Icon className="w-5 h-5 text-slate-700" />
        </div>
        <h2 className="text-xl font-semibold text-slate-800">{title}</h2>
      </div>
      {children}
    </motion.div>
  );
};

// Quick Actions Component
const QuickActions = () => {
  const actions = [
    { label: 'Register New Member', icon: UserPlus, color: 'from-red-500 to-rose-600' },
    { label: 'Generate Routes', icon: Route, color: 'from-green-500 to-emerald-600' },
    { label: 'View Analytics', icon: BarChart3, color: 'from-blue-500 to-indigo-600' },
    { label: 'Emergency Dispatch', icon: Zap, color: 'from-orange-500 to-red-500' }
  ];

  return (
    <EnhancedCard title="Quick Actions" icon={Zap} delay={0.4}>
      <div className="space-y-3">
        {actions.map((action, index) => (
          <motion.button
            key={action.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + index * 0.1 }}
            className={`w-full p-4 rounded-xl bg-gradient-to-r ${action.color} text-white font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3`}
          >
            <action.icon className="w-5 h-5" />
            {action.label}
          </motion.button>
        ))}
      </div>
    </EnhancedCard>
  );
};

// Delivery Status Component
const DeliveryStatus = () => {
  const deliveries = [
    { time: '7 AM', task: 'Onion drop by Anjali', route: 'Temple Route', status: 'completed' },
    { time: '2 PM', task: 'Tomato run by Rakesh', route: 'College Return', status: 'in-progress' },
    { time: '5 PM', task: 'Multi-pickup route', route: 'Auto Rickshaw team', status: 'pending' }
  ];

  const statusColors = {
    completed: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    'in-progress': 'bg-blue-100 text-blue-800 border-blue-200',
    pending: 'bg-orange-100 text-orange-800 border-orange-200'
  };

  return (
    <EnhancedCard title="Delivery Status" icon={Truck} delay={0.2}>
      <div className="space-y-4">
        {deliveries.map((delivery, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200"
          >
            <div className="text-lg font-bold text-slate-700 min-w-[60px]">
              {delivery.time}
            </div>
            <div className="flex-1">
              <p className="font-medium text-slate-800 mb-1">{delivery.task}</p>
              <p className="text-sm text-slate-600 mb-2">{delivery.route}</p>
              <span className={`px-3 py-1 rounded-full text-xs font-medium border ${statusColors[delivery.status]}`}>
                {delivery.status}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </EnhancedCard>
  );
};

// Network Overview Component
const NetworkOverview = () => {
  return (
    <EnhancedCard title="Vendor-Family Network" icon={Users} delay={0.3}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
            <div className="text-2xl font-bold text-blue-600 mb-1">12</div>
            <div className="text-sm text-blue-700">Active Members</div>
          </div>
          <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-100">
            <div className="text-2xl font-bold text-green-600 mb-1">8</div>
            <div className="text-sm text-green-700">Routes Today</div>
          </div>
        </div>
        <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-100">
          <p className="text-sm text-purple-700 mb-3">
            Link family members to daily logistics operations for optimized delivery coordination.
          </p>
          <div className="flex gap-2 text-xs text-purple-600">
            <span className="px-2 py-1 bg-purple-100 rounded-full">Morning Shift: 5 members</span>
            <span className="px-2 py-1 bg-purple-100 rounded-full">Evening Shift: 7 members</span>
          </div>
        </div>
      </div>
    </EnhancedCard>
  );
};

export default function LogisticsPage() {
  const metrics = [
    { icon: Truck, title: 'Total Deliveries', value: '35', change: '+8 today', changeType: 'increase', color: 'green' },
    { icon: Clock, title: 'Avg Route Time', value: '22 mins', change: '-3 mins', changeType: 'increase', color: 'blue' },
    { icon: Users, title: 'Active Members', value: '12', change: '+2 new', changeType: 'increase', color: 'orange' },
    { icon: MapPin, title: 'Coverage Areas', value: '8 zones', change: 'Full coverage', changeType: 'none', color: 'purple' },
  ];

  return (
    <DashboardLayout userType="vendor" userName="Ramesh Kumar">
      <div className="space-y-8">
        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <MetricCard key={metric.title} {...metric} index={index} />
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <DeliveryStatus />
          </div>
          <div>
            <NetworkOverview />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <QuickActions />
          </div>
          <div className="lg:col-span-2">
            <EnhancedCard title="Smart Route Optimizer" icon={Route} delay={0.5}>
              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl border border-emerald-100">
                  <h3 className="font-semibold text-emerald-800 mb-2">AI-Powered Route Planning</h3>
                  <p className="text-sm text-emerald-700 mb-3">
                    Generate optimized delivery plans based on family schedules, traffic patterns, and delivery priorities.
                  </p>
                  <div className="flex gap-2 text-xs">
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full">Fuel Efficiency: +15%</span>
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full">Time Saved: 45 mins/day</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="text-lg font-bold text-slate-700">94%</div>
                    <div className="text-xs text-slate-600">Route Efficiency</div>
                  </div>
                  <div className="text-center p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="text-lg font-bold text-slate-700">₹180</div>
                    <div className="text-xs text-slate-600">Daily Savings</div>
                  </div>
                </div>
              </div>
            </EnhancedCard>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}