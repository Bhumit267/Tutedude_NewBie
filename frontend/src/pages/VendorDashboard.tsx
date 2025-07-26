import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Shield, ShoppingCart, TrendingUp } from 'lucide-react';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { MetricCard } from '../components/dashboard/MetricCard';
import { RevenueCard } from '../components/dashboard/RevenueCard';
import { PodPerformanceChart } from '../components/dashboard/PodPerformanceChart';
import { QuickActions } from '../components/dashboard/QuickActions';
import { OrdersPipeline } from '../components/dashboard/OrdersPipeline';

export const VendorDashboard: React.FC = () => {
  const metrics = [
    { icon: DollarSign, title: 'Revenue', value: '₹2,847', change: '+12%', changeType: 'increase', color: 'green' },
    { icon: TrendingUp, title: 'Savings', value: '₹456', change: '+₹78', changeType: 'increase', color: 'blue' },
    { icon: ShoppingCart, title: 'Orders', value: '12', change: '3 active', changeType: 'none', color: 'orange' },
    { icon: Shield, title: 'Trust Score', value: '4.8 ⭐', change: '+0.2', changeType: 'increase', color: 'purple' },
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

        {/* Charts and Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <RevenueCard />
          </div>
          <div>
            <PodPerformanceChart />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
                <QuickActions />
            </div>
            <div className="lg:col-span-2">
                <OrdersPipeline />
            </div>
        </div>
      </div>
    </DashboardLayout>
  );
};
