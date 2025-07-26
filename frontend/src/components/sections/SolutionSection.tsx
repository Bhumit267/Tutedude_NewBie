import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle, Users, TrendingUp, Shield } from 'lucide-react';

export const SolutionSection: React.FC = () => {
  const { scrollY } = useScroll();
  
  const saturation = useTransform(scrollY, [800, 1200], [0, 100]);
  const scale = useTransform(scrollY, [800, 1000], [0.8, 1]);

  const solutions = [
    {
      icon: Users,
      title: 'QuantumSync™ Collective Buying',
      description: 'AI-powered pod formation for bulk purchasing with up to 40% cost savings',
      benefit: '40% cost reduction',
      color: 'from-blue-500 to-purple-500',
    },
    {
      icon: TrendingUp,
      title: 'MicroLogistics™ Family Network',
      description: 'Leverage family connections for hyperlocal delivery and storage optimization',
      benefit: '60% faster delivery',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Shield,
      title: 'TrustChain™ Verification',
      description: 'Blockchain-inspired trust scoring with community-driven quality assurance',
      benefit: '95% dispute reduction',
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Restoration Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-white via-orange-50 to-green-50"
        style={{ filter: `saturate(${saturation}%)` }}
      />
      
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-4"
        style={{ scale }}
      >
        <motion.div
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            animate={{ 
              background: ['linear-gradient(to right, #f97316, #22c55e)', 'linear-gradient(to right, #22c55e, #3b82f6)', 'linear-gradient(to right, #3b82f6, #f97316)'],
            }}
            transition={{ duration: 4, repeat: Infinity }}
            style={{
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            The VendorUnity Solution
          </motion.h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Revolutionary technology stack designed specifically for street food ecosystem transformation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -10 }}
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 group-hover:shadow-xl transition-all duration-300">
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-full flex items-center justify-center mb-6 mx-auto`}
                  animate={{ 
                    rotate: [0, 360],
                  }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                >
                  <solution.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                  {solution.title}
                </h3>
                
                <p className="text-gray-600 mb-6 text-center">
                  {solution.description}
                </p>
                
                <motion.div
                  className="bg-green-50 border border-green-200 rounded-lg p-4 text-center"
                  animate={{ backgroundColor: ['#f0fdf4', '#dcfce7', '#f0fdf4'] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <CheckCircle className="w-5 h-5 text-green-600 mx-auto mb-2" />
                  <span className="text-green-700 font-bold">
                    {solution.benefit}
                  </span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Success Visualization */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block p-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mb-6"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <span className="text-6xl">😊</span>
          </motion.div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Empowered Vendors, Thriving Communities
          </h3>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            With VendorUnity's integrated solutions, street food vendors experience unprecedented growth, 
            financial stability, and community support.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};
