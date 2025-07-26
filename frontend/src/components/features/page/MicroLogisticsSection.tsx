import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Truck, Heart, DollarSign } from 'lucide-react';

export const MicroLogisticsSection: React.FC = () => {
    return (
        <section className="py-20 bg-blue-50">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">MicroLogistics™</h2>
                    <p className="text-xl text-gray-600">Your Family, Your Delivery Network</p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Interactive Map */}
                    <motion.div 
                        className="relative h-96 bg-white rounded-2xl shadow-lg p-4"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="absolute inset-0 bg-[url('https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752342224%2C0.004017949104309083%2C51.47612752342224&layer=mapnik')] bg-cover opacity-20"></div>
                        <div className="relative w-full h-full">
                            {/* Points on map */}
                            <motion.div className="absolute top-1/4 left-1/4" title="Vendor A">
                                <MapPin className="w-8 h-8 text-red-500" />
                            </motion.div>
                            <motion.div className="absolute top-1/2 left-3/4" title="Vendor B">
                                <MapPin className="w-8 h-8 text-red-500" />
                            </motion.div>
                            <motion.div className="absolute bottom-1/4 left-1/2" title="Family Member Route">
                                <Truck className="w-8 h-8 text-blue-500" />
                            </motion.div>
                            {/* Animated lines */}
                            <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
                                <motion.path
                                    d="M 25% 25% C 35% 50%, 65% 50%, 75% 50%"
                                    stroke="#3b82f6"
                                    strokeWidth="2"
                                    strokeDasharray="4 4"
                                    fill="transparent"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                />
                            </svg>
                        </div>
                    </motion.div>

                    {/* Explanation */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <h3 className="text-3xl font-bold text-gray-800 mb-6">Turn Daily Commutes into Earnings</h3>
                        <p className="text-lg text-gray-600 mb-8">
                            Leverage your family's existing daily routes to handle hyperlocal deliveries. It's simple, efficient, and builds community trust.
                        </p>
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                    <Heart className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold">Strengthen Family Bonds</h4>
                                    <p className="text-gray-600">Work together towards a common goal, empowering everyone.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                    <DollarSign className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold">Extra Income Stream</h4>
                                    <p className="text-gray-600">Family members earn money for deliveries they make on their usual routes.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
