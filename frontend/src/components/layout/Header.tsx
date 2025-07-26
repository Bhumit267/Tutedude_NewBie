import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X, User, Bell, Search } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { MagneticButton } from '../ui/MagneticButton';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();
  
  const headerBackground = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.95)']
  );

  const logoScale = useTransform(scrollY, [0, 100], [1, 0.8]);

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
    return unsubscribe;
  }, [scrollY]);

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Features', href: '/features' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4 transition-all duration-300"
      style={{ backgroundColor: headerBackground }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="flex items-center space-x-2"
          style={{ scale: logoScale }}
        >
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-white font-bold text-xl">V</span>
            </motion.div>
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              VendorUnity
            </span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map((item, index) => (
            <motion.div key={item.label} className="relative">
              <Link
                to={item.href}
                className={`text-gray-700 hover:text-orange-500 transition-colors duration-200 relative ${
                  location.pathname === item.href ? 'text-orange-500' : ''
                }`}
              >
                {item.label}
                {location.pathname === item.href && (
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-orange-500 w-full"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <motion.button
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Search className="w-5 h-5 text-gray-600" />
          </motion.button>
          
          <motion.button
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 relative"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Bell className="w-5 h-5 text-gray-600" />
            <motion.div
              className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.button>

          <Link to="/login">
            <MagneticButton
              variant="primary"
              size="sm"
              className="flex items-center space-x-2"
            >
              <User className="w-4 h-4" />
              <span>Sign In</span>
            </MagneticButton>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{ rotate: isMenuOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.div>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-2xl overflow-hidden"
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isMenuOpen ? 'auto' : 0, 
          opacity: isMenuOpen ? 1 : 0 
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <div className="p-6 space-y-4">
          {menuItems.map((item, index) => (
            <motion.div key={item.label}>
              <Link
                to={item.href}
                className="block text-gray-700 hover:text-orange-500 transition-colors duration-200 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
          
          <div className="pt-4 border-t border-gray-200">
            <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
              <MagneticButton variant="primary" className="w-full justify-center">
                Get Started
              </MagneticButton>
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
};
