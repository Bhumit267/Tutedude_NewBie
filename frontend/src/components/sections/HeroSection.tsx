import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Play, Star, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MagneticButton } from '../ui/MagneticButton';
import { TypingAnimation } from '../ui/TypingAnimation';
import { ParticleField } from '../ui/ParticleField';

export const HeroSection: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [timeOfDay, setTimeOfDay] = useState('evening');
  const { scrollY } = useScroll();
  
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  const springX = useSpring(mousePosition.x, { stiffness: 100, damping: 30 });
  const springY = useSpring(mousePosition.y, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 12) setTimeOfDay('morning');
    else if (hour >= 12 && hour < 18) setTimeOfDay('afternoon');
    else setTimeOfDay('evening');
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const timeColors = {
    morning: 'from-blue-400 via-purple-500 to-pink-400',
    afternoon: 'from-yellow-400 via-orange-500 to-red-500',
    evening: 'from-orange-500 via-red-500 to-purple-600',
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Dynamic Background */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${timeColors[timeOfDay]} opacity-10`}
        style={{ x: springX, y: springY }}
      />
      
      {/* Particle Field */}
      <ParticleField particleCount={30} />
      
      {/* Vendor Silhouettes */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{ x: springX * -0.5, y: springY * -0.5 }}
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 bg-gray-800 rounded-full"
            style={{
              left: `${20 + i * 20}%`,
              top: `${30 + (i % 2) * 20}%`,
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 min-h-screen flex items-center justify-center px-4"
        style={{ y, opacity }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-6xl mx-auto text-center">
          {/* Headline */}
          <motion.div
            className="mb-8"
            variants={itemVariants}
          >
            <motion.h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <motion.span
                className="inline-block bg-gradient-to-r from-orange-600 via-red-500 to-purple-600 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{
                  backgroundSize: '200% 200%',
                }}
              >
                Revolutionizing
              </motion.span>
              <br />
              <motion.span
                className="inline-block"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, type: 'spring', stiffness: 200 }}
              >
                Street Food Commerce
              </motion.span>
            </motion.h1>
            
            <motion.div
              className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              <TypingAnimation
                text="Empowering vendors with AI-driven collective buying, micro-logistics, and trust networks for unprecedented prosperity."
                speed={30}
              />
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
            variants={itemVariants}
          >
            {[
              { number: '50K+', label: 'Active Vendors', icon: Star },
              { number: '₹10Cr+', label: 'Collective Savings', icon: TrendingUp },
              { number: '500+', label: 'Cities', icon: Star },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <motion.div
                  className="text-3xl md:text-4xl font-bold text-orange-600 mb-2"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-600 flex items-center justify-center space-x-2">
                  <stat.icon className="w-5 h-5" />
                  <span>{stat.label}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            variants={itemVariants}
          >
            <Link to="/signup">
              <MagneticButton
                variant="primary"
                size="lg"
                className="flex items-center space-x-3 px-8 py-4"
              >
                <span>Start Your Journey</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </MagneticButton>
            </Link>

            <motion.button
              className="flex items-center space-x-3 text-gray-700 hover:text-orange-600 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30"
                whileHover={{ backgroundColor: 'rgba(249, 115, 22, 0.1)' }}
              >
                <Play className="w-5 h-5 ml-0.5" />
              </motion.div>
              <span className="font-semibold">Watch Demo</span>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full p-1">
          <motion.div
            className="w-1 h-3 bg-orange-500 rounded-full mx-auto"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </div>
  );
};
