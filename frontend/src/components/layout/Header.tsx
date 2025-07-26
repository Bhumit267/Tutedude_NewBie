import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X, User, Bell, Search } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { MagneticButton } from '../ui/MagneticButton';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [notifications, setNotifications] = useState<any[]>([]);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [notificationCount, setNotificationCount] = useState(3); // Mock notification count
  const notificationRef = React.useRef<HTMLDivElement>(null);
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

  // Mock notifications data
  useEffect(() => {
    const mockNotifications = [
      {
        id: 1,
        title: 'New Order Received',
        message: 'You have received a new order for 50kg tomatoes',
        time: '2 minutes ago',
        type: 'order'
      },
      {
        id: 2,
        title: 'Price Update',
        message: 'Tomato prices have increased by 15% in your area',
        time: '1 hour ago',
        type: 'price'
      },
      {
        id: 3,
        title: 'Weather Alert',
        message: 'Heavy rain expected in your region tomorrow',
        time: '3 hours ago',
        type: 'weather'
      }
    ];
    setNotifications(mockNotifications);
  }, []);

  const handleNotificationClick = () => {
    setIsNotificationOpen(!isNotificationOpen);
    if (!isNotificationOpen) {
      setNotificationCount(0); // Clear notification count when opened
    }
  };

  const handleNotificationClose = () => {
    setIsNotificationOpen(false);
  };

  // Handle click outside notification dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setIsNotificationOpen(false);
      }
    };

    if (isNotificationOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isNotificationOpen]);

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
          
          {/* Notification Bell */}
          <div className="relative" ref={notificationRef}>
            <motion.button
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNotificationClick}
            >
              <Bell className="w-5 h-5 text-gray-600" />
              {notificationCount > 0 && (
                <motion.div
                  className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {notificationCount}
                </motion.div>
              )}
            </motion.button>

            {/* Notification Dropdown */}
            {isNotificationOpen && (
              <motion.div
                className="absolute right-0 top-12 w-80 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-50"
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
                    <button
                      onClick={handleNotificationClose}
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                
                <div className="max-h-96 overflow-y-auto">
                  {notifications.length === 0 ? (
                    <div className="p-6 text-center text-gray-500">
                      No notifications
                    </div>
                  ) : (
                    notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className="p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer"
                      >
                        <div className="flex items-start space-x-3">
                          <div className={`w-2 h-2 rounded-full mt-2 ${
                            notification.type === 'order' ? 'bg-green-500' :
                            notification.type === 'price' ? 'bg-yellow-500' :
                            'bg-blue-500'
                          }`} />
                          <div className="flex-1">
                            <h4 className="text-sm font-medium text-gray-900">
                              {notification.title}
                            </h4>
                            <p className="text-sm text-gray-600 mt-1">
                              {notification.message}
                            </p>
                            <p className="text-xs text-gray-400 mt-2">
                              {notification.time}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
                
                {notifications.length > 0 && (
                  <div className="p-3 border-t border-gray-200">
                    <button
                      onClick={() => {
                        setNotifications([]);
                        setNotificationCount(0);
                        handleNotificationClose();
                      }}
                      className="w-full text-sm text-orange-500 hover:text-orange-600 font-medium transition-colors"
                    >
                      Mark all as read
                    </button>
                  </div>
                )}
              </motion.div>
            )}
          </div>

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
          
          {/* Mobile Notification Bell */}
          <div className="flex items-center justify-between py-2">
            <span className="text-gray-700">Notifications</span>
            <div className="relative">
              <button
                onClick={handleNotificationClick}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 relative"
              >
                <Bell className="w-5 h-5 text-gray-600" />
                {notificationCount > 0 && (
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    {notificationCount}
                  </div>
                )}
              </button>
            </div>
          </div>
          
          <div className="pt-4 border-t border-gray-200">
            <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
              <MagneticButton variant="primary" className="w-full justify-center">
                Get Started
              </MagneticButton>
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Mobile Notification Dropdown */}
      {isNotificationOpen && (
        <motion.div
          className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-50"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
              <button
                onClick={handleNotificationClose}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          <div className="max-h-96 overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="p-6 text-center text-gray-500">
                No notifications
              </div>
            ) : (
              notifications.map((notification) => (
                <div
                  key={notification.id}
                  className="p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <div className="flex items-start space-x-3">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      notification.type === 'order' ? 'bg-green-500' :
                      notification.type === 'price' ? 'bg-yellow-500' :
                      'bg-blue-500'
                    }`} />
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-gray-900">
                        {notification.title}
                      </h4>
                      <p className="text-sm text-gray-600 mt-1">
                        {notification.message}
                      </p>
                      <p className="text-xs text-gray-400 mt-2">
                        {notification.time}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          
          {notifications.length > 0 && (
            <div className="p-3 border-t border-gray-200">
              <button
                onClick={() => {
                  setNotifications([]);
                  setNotificationCount(0);
                  handleNotificationClose();
                }}
                className="w-full text-sm text-orange-500 hover:text-orange-600 font-medium transition-colors"
              >
                Mark all as read
              </button>
            </div>
          )}
        </motion.div>
      )}
    </motion.header>
  );
};
