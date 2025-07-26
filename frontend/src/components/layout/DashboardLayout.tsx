import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Home, Users, ShoppingCart, BarChart3, Settings, Bell, 
  Search, Menu, X, LogOut, User, Store, Tractor, Shuffle, LucideIcon, Truck, Zap
} from 'lucide-react';

interface DashboardLayoutProps {
  children: React.ReactNode;
  userType: 'vendor' | 'farmer' | 'hybrid';
  userName: string;
}

interface MenuItem {
  icon: LucideIcon;
  label: string;
  href: string;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  userType,
  userName,
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const userConfigs = {
    vendor: {
      icon: Store,
      color: 'from-orange-500 to-red-500',
      label: 'Street Vendor',
      trustScore: 4.8,
      menu: [
        { icon: Home, label: 'Dashboard', href: `/dashboard/vendor` },
        { icon: Zap, label: 'QuantumSync', href: `/dashboard/vendor/quantumsync` },
        { icon: ShoppingCart, label: 'Orders', href: `/dashboard/vendor/orders` },
        { icon: Truck, label: 'Logistics', href: `/dashboard/vendor/logistics` },
      ],
    },
    farmer: {
      icon: Tractor,
      color: 'from-green-500 to-emerald-500',
      label: 'Farmer/Producer',
      trustScore: 4.9,
      menu: [
        { icon: Home, label: 'Dashboard', href: `/dashboard/farmer` },
        { icon: ShoppingCart, label: 'Orders', href: `/dashboard/farmer/orders` },
        { icon: BarChart3, label: 'Market', href: `/dashboard/farmer/market` },
        { icon: Users, label: 'Network', href: `/dashboard/farmer/network` },
      ],
    },
    hybrid: {
      icon: Shuffle,
      color: 'from-purple-500 to-blue-500',
      label: 'Hybrid Business',
      trustScore: 4.7,
      menu: [
        { icon: Home, label: 'Dashboard', href: `/dashboard/hybrid` },
        { icon: ShoppingCart, label: 'Vendor Orders', href: `/dashboard/hybrid/vendor-orders` },
        { icon: BarChart3, label: 'Farm Analytics', href: `/dashboard/hybrid/farm-analytics` },
      ],
    },
  };

  const config = userConfigs[userType];

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <motion.div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 lg:static lg:inset-0`}
        initial={{ x: -256 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <motion.div
                className={`w-12 h-12 bg-gradient-to-r ${config.color} rounded-xl flex items-center justify-center`}
                whileHover={{ scale: 1.05, rotate: 5 }}
              >
                <config.icon className="w-6 h-6 text-white" />
              </motion.div>
              <div>
                <h2 className="font-bold text-gray-900">{userName}</h2>
                <p className="text-sm text-gray-600">{config.label}</p>
                <p className="text-xs text-yellow-500 font-bold">⭐ {config.trustScore}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {config.menu.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.href}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 group ${
                    location.pathname === item.href
                      ? 'bg-orange-100 text-orange-600 font-semibold'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200">
            <motion.button
              onClick={handleLogout}
              className="flex items-center space-x-3 px-4 py-3 text-gray-700 rounded-lg hover:bg-red-50 hover:text-red-600 transition-colors duration-200 w-full"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 lg:ml-0">
        {/* Top Header */}
        <motion.header
          className="bg-white shadow-sm border-b border-gray-200 px-6 py-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
              <p className="font-semibold text-gray-800">Welcome back, {userName.split(' ')[0]}! 👋</p>
            </div>

            <div className="flex items-center space-x-4">
              <motion.button
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Bell className="w-6 h-6 text-gray-600" />
                <motion.div
                  className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.button>

              <motion.button
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Settings className="w-6 h-6 text-gray-600" />
              </motion.button>
            </div>
          </div>
        </motion.header>

        {/* Page Content */}
        <main className="p-6">
          {children}
        </main>
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};
