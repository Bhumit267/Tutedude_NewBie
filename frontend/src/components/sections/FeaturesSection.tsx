import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Network, Shield, BarChart3 } from 'lucide-react';
import { MagneticButton } from '../ui/MagneticButton';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'QuantumSync™',
      description: 'AI-powered collective buying that forms optimal vendor pods for maximum savings',
      highlight: 'Save up to 40% on ingredients',
      color: 'from-yellow-400 to-orange-500',
    },
    {
      icon: Network,
      title: 'MicroLogistics™',
      description: 'Family-based hyperlocal delivery network that leverages existing relationships',
      highlight: '60% faster deliveries',
      color: 'from-blue-400 to-purple-500',
    },
    {
      icon: Shield,
      title: 'TrustChain™',
      description: 'Community-driven verification system ensuring quality and building trust',
      highlight: '95% dispute reduction',
      color: 'from-green-400 to-emerald-500',
    },
    {
      icon: BarChart3,
      title: 'Smart Analytics',
      description: 'Real-time insights into sales, savings, and market trends for better decisions',
      highlight: 'Data-driven growth',
      color: 'from-red-400 to-pink-500',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of street food commerce with our cutting-edge technology stack
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Animated background gradient */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />
              
              <div className="relative z-10">
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6`}
                  animate={{ 
                    boxShadow: [
                      '0 0 0px rgba(0,0,0,0.1)',
                      '0 0 20px rgba(249,115,22,0.3)',
                      '0 0 0px rgba(0,0,0,0.1)',
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                <motion.div
                  className="inline-flex items-center space-x-2 text-orange-600 font-semibold"
                  whileHover={{ x: 5 }}
                >
                  <span>{feature.highlight}</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-12 text-white"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Join thousands of vendors who have already revolutionized their street food business with VendorUnity
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to="/signup">
              <MagneticButton
                variant="secondary"
                size="lg"
                className="bg-white text-orange-600 hover:bg-gray-50 px-8 py-4"
              >
                Start Free Trial
              </MagneticButton>
            </Link>
            
            <Link 
              to="/features"
              className="text-white hover:text-orange-200 font-semibold flex items-center space-x-2 transition-colors"
            >
              <span>Explore All Features</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
