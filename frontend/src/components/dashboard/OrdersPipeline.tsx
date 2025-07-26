import React from 'react';
import { motion } from 'framer-motion';
import { Package, Clock, CheckCircle, Truck } from 'lucide-react';
import { faker } from '@faker-js/faker';

export const OrdersPipeline: React.FC = () => {
  const orders = Array.from({ length: 8 }, (_, i) => ({
    id: `ORD-${faker.string.alphanumeric(6).toUpperCase()}`,
    items: faker.helpers.arrayElements(['Onions', 'Tomatoes', 'Potatoes', 'Peppers', 'Spices'], { min: 2, max: 4 }),
    quantity: `${faker.number.int({ min: 10, max: 50 })} kg`,
    status: faker.helpers.arrayElement(['pending', 'processing', 'in-transit', 'delivered']),
    supplier: faker.company.name(),
    estimatedDelivery: faker.date.future().toLocaleDateString(),
    amount: parseInt(faker.commerce.price(1000, 5000, 0)),
  }));

  const statusConfig = {
    pending: { icon: Clock, color: 'yellow', label: 'Pending' },
    processing: { icon: Package, color: 'blue', label: 'Processing' },
    'in-transit': { icon: Truck, color: 'purple', label: 'In Transit' },
    delivered: { icon: CheckCircle, color: 'green', label: 'Delivered' },
  };

  const statusCounts = orders.reduce((acc, order) => {
    acc[order.status] = (acc[order.status] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900">Orders Pipeline</h3>
        <motion.div
          className="p-2 bg-orange-100 rounded-lg"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        >
          <Package className="w-6 h-6 text-orange-600" />
        </motion.div>
      </div>

      {/* Status Overview */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {Object.entries(statusConfig).map(([status, config], index) => (
          <motion.div
            key={status}
            className="bg-gray-50 p-4 rounded-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex items-center justify-between mb-2">
              <config.icon className={`w-5 h-5 text-${config.color}-600`} />
              <motion.span
                className="text-lg font-bold text-gray-900"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
              >
                {statusCounts[status] || 0}
              </motion.span>
            </div>
            <p className="text-xs text-gray-600">{config.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Orders List */}
      <div className="space-y-4">
        <h4 className="font-semibold text-gray-900">Recent Orders</h4>
        {orders.slice(0, 6).map((order, index) => {
          const status = statusConfig[order.status];
          return (
            <motion.div
              key={order.id}
              className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex items-center space-x-4">
                <motion.div
                  className={`p-2 bg-${status.color}-100 rounded-lg`}
                  animate={{ 
                    scale: order.status === 'in-transit' ? [1, 1.1, 1] : 1,
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <status.icon className={`w-5 h-5 text-${status.color}-600`} />
                </motion.div>
                <div>
                  <p className="font-medium text-gray-900">{order.id}</p>
                  <p className="text-sm text-gray-600">{order.items.join(', ')} • {order.quantity}</p>
                  <p className="text-xs text-gray-500">Supplier: {order.supplier}</p>
                </div>
              </div>
              
              <div className="text-right">
                <p className="font-bold text-gray-900">₹{order.amount.toLocaleString()}</p>
                <p className="text-xs text-gray-500">Est: {order.estimatedDelivery}</p>
                <span className={`inline-block px-2 py-1 rounded-full text-xs bg-${status.color}-100 text-${status.color}-700`}>
                  {status.label}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Pipeline Flow */}
      <motion.div
        className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <h5 className="font-semibold text-blue-900 mb-2">Pipeline Flow</h5>
        <div className="flex items-center space-x-2">
          {Object.entries(statusConfig).map(([status, config], index) => (
            <React.Fragment key={status}>
              <motion.div
                className={`flex items-center space-x-1 px-3 py-1 bg-${config.color}-100 rounded-full`}
                animate={{ 
                  backgroundColor: statusCounts[status] > 0 ? undefined : '#f3f4f6',
                }}
              >
                <config.icon className={`w-4 h-4 text-${config.color}-600`} />
                <span className={`text-sm text-${config.color}-700`}>{statusCounts[status] || 0}</span>
              </motion.div>
              {index < Object.keys(statusConfig).length - 1 && (
                <motion.div
                  className="h-px bg-gray-300 flex-1"
                  animate={{ width: ['0%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};
