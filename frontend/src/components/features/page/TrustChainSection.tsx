import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Camera, Star, CheckCircle } from 'lucide-react';

export const TrustChainSection: React.FC = () => {
    const trustLevels = [
        { score: 0, title: 'New Vendor', benefits: ['Limited access', 'Escrow protection'] },
        { score: 45, title: 'Building Trust', benefits: ['More opportunities', 'Group buying access'] },
        { score: 85, title: 'Trusted Member', benefits: ['Premium benefits', 'Priority support'] },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">TrustChain™</h2>
                    <p className="text-xl text-gray-600">Community-Driven Quality & Verification</p>
                </div>

                {/* Trust Journey */}
                <div className="relative mb-20">
                    <div className="absolute left-1/2 top-4 bottom-4 w-1 bg-gray-200 -translate-x-1/2"></div>
                    {trustLevels.map((level, index) => (
                        <div key={level.title} className="relative mb-12 flex items-center justify-center">
                            <motion.div 
                                className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex flex-col items-center justify-center text-white shadow-lg z-10"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true, amount: 0.8 }}
                                transition={{ type: 'spring' }}
                            >
                                <Shield className="w-8 h-8" />
                                <span className="font-bold">{level.score}+</span>
                            </motion.div>
                            <motion.div 
                                className={`w-2/5 p-6 bg-gray-50 rounded-xl shadow-md ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.8 }}
                            >
                                <h4 className="font-bold text-lg text-gray-800">{level.title}</h4>
                                <ul className="text-sm text-gray-600 list-disc list-inside mt-2">
                                    {level.benefits.map(benefit => <li key={benefit}>{benefit}</li>)}
                                </ul>
                            </motion.div>
                        </div>
                    ))}
                </div>

                {/* Photo Verification */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-3xl font-bold text-gray-800 mb-6">AI-Powered Quality Check</h3>
                        <p className="text-lg text-gray-600 mb-8">
                            Simply snap a photo of your ingredients, and our AI will instantly verify their quality, freshness, and authenticity. This builds your Trust Score and gives buyers confidence.
                        </p>
                        <div className="p-6 bg-green-50 border border-green-200 rounded-xl">
                            <h4 className="font-semibold text-green-800 mb-2">Analysis Results</h4>
                            <ul className="space-y-2 text-green-700">
                                <li className="flex items-center"><CheckCircle className="w-5 h-5 mr-2" />Quality: Excellent</li>
                                <li className="flex items-center"><CheckCircle className="w-5 h-5 mr-2" />Freshness: 95%</li>
                                <li className="flex items-center"><CheckCircle className="w-5 h-5 mr-2" />Trust Score: +5 Points</li>
                            </ul>
                        </div>
                    </motion.div>
                    <motion.div 
                        className="flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative w-72 h-96 bg-gray-800 rounded-3xl p-4 shadow-2xl">
                            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-gray-900 rounded-full"></div>
                            <div className="w-full h-full bg-green-200 rounded-2xl flex flex-col items-center justify-center">
                                <Camera className="w-16 h-16 text-green-700" />
                                <p className="mt-4 font-semibold text-green-800">Tap to Verify</p>
                                <div className="absolute bottom-6 flex space-x-2">
                                    <Star className="w-6 h-6 text-yellow-400 fill-current" />
                                    <Star className="w-6 h-6 text-yellow-400 fill-current" />
                                    <Star className="w-6 h-6 text-yellow-400 fill-current" />
                                    <Star className="w-6 h-6 text-yellow-400 fill-current" />
                                    <Star className="w-6 h-6 text-yellow-400" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
