import React from 'react';
import { motion } from 'framer-motion';
import { Users, ShoppingCart, CheckCircle } from 'lucide-react';

export const VendorConnections: React.FC = () => {
    const pods = [
        { name: 'Delhi Central', members: 12, order: '50kg Tomatoes, 30kg Onions', value: 2340, status: 'Processing' },
        { name: 'Mumbai Street', members: 8, order: 'Mixed vegetables', value: 1890, status: 'Confirmed' },
    ];

    return (
        <motion.div
            className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
        >
            <h3 className="text-xl font-bold text-gray-900 mb-6">Active Buyer Pods</h3>
            <div className="space-y-4">
                {pods.map((pod, index) => (
                    <motion.div
                        key={pod.name}
                        className="bg-gray-50 rounded-xl p-4 border border-gray-200"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                        whileHover={{ scale: 1.02, shadow: 'md' }}
                    >
                        <div className="flex justify-between items-start">
                            <div>
                                <h4 className="font-bold text-gray-800">{pod.name}</h4>
                                <div className="flex items-center space-x-2 text-sm text-gray-500">
                                    <Users className="w-4 h-4" />
                                    <span>{pod.members} vendors</span>
                                </div>
                            </div>
                            <span className={`px-2 py-1 text-xs rounded-full ${pod.status === 'Processing' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'}`}>
                                {pod.status}
                            </span>
                        </div>
                        <div className="mt-2 text-sm text-gray-700">
                            <p><span className="font-semibold">Order:</span> {pod.order}</p>
                            <p><span className="font-semibold">Value:</span> ₹{pod.value.toLocaleString()}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};
