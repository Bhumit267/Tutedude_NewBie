import React from 'react';
import { motion } from 'framer-motion';
import { Sunrise, ShoppingCart, Truck, BarChart2 } from 'lucide-react';

export const OperationalTimeline: React.FC = () => {
    const steps = [
        { time: 'Morning', title: 'Availability Update', icon: Sunrise, status: 'complete' },
        { time: 'By 2 PM', title: 'Place Requests', icon: ShoppingCart, status: 'complete' },
        { time: 'Afternoon', title: 'Fulfillment', icon: Truck, status: 'active' },
        { time: 'Evening', title: 'Forecasting', icon: BarChart2, status: 'pending' },
    ];

    return (
        <motion.div
            className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 h-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
        >
            <h3 className="text-xl font-bold text-gray-900 mb-4">Today's Operations</h3>
            <div className="relative">
                <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-gray-200"></div>
                {steps.map((step, index) => (
                    <motion.div 
                        key={step.title} 
                        className="flex items-start space-x-4 mb-6"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.15 }}
                    >
                        <div className={`z-10 w-8 h-8 rounded-full flex items-center justify-center ${
                            step.status === 'complete' ? 'bg-green-500' :
                            step.status === 'active' ? 'bg-blue-500' : 'bg-gray-300'
                        }`}>
                            <step.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">{step.time}</p>
                            <p className="font-semibold text-gray-800">{step.title}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};
