import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { AlertCircle, TrendingDown, Users } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const { scrollY } = useScroll();
  
  const saturation = useTransform(scrollY, [400, 800], [100, 0]);
  const opacity = useTransform(scrollY, [400, 600], [0, 1]);

  const problems = [
    {
      icon: AlertCircle,
      title: 'Fragmented Supply Chain',
      description: 'Vendors struggle with inconsistent ingredient supply and fluctuating prices',
      impact: '40% profit loss',
    },
    {
      icon: TrendingDown,
      title: 'Isolated Operations',
      description: 'No collective bargaining power leads to poor negotiations with suppliers',
      impact: '60% higher costs',
    },
    {
      icon: Users,
      title: 'Trust Deficit',
      description: 'Lack of verification systems causes disputes and financial losses',
      impact: '₹50K annual losses',
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Transition Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-gray-100 to-gray-300"
        style={{ filter: `saturate(${saturation}%)` }}
      />
      
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-4"
        style={{ opacity }}
      >
        <motion.div
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
            animate={{ color: ['#374151', '#dc2626', '#374151'] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            The Street Food Crisis
          </motion.h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Traditional street food vendors face mounting challenges in an increasingly complex marketplace
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-200"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <motion.div
                className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto"
                animate={{ 
                  scale: [1, 1.1, 1],
                  backgroundColor: ['#fef2f2', '#fee2e2', '#fef2f2'],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <problem.icon className="w-8 h-8 text-red-600" />
              </motion.div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                {problem.title}
              </h3>
              
              <p className="text-gray-600 mb-6 text-center">
                {problem.description}
              </p>
              
              <motion.div
                className="bg-red-50 border border-red-200 rounded-lg p-4 text-center"
                animate={{ backgroundColor: ['#fef2f2', '#fee2e2', '#fef2f2'] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <span className="text-red-700 font-bold text-lg">
                  {problem.impact}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Struggling Vendor Visualization */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block p-8 bg-gray-200 rounded-full"
            animate={{ 
              scale: [1, 0.95, 1],
              backgroundColor: ['#e5e7eb', '#d1d5db', '#e5e7eb'],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-6xl">😟</span>
          </motion.div>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Millions of street food vendors struggle daily with these interconnected challenges, 
            limiting their growth potential and threatening their livelihoods.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};
