import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Users, ShoppingCart, Zap, TrendingDown } from 'lucide-react';
import { MagneticButton } from '../ui/MagneticButton';
import { faker } from '@faker-js/faker';

export const QuantumSync: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);

  const ingredients = [
    { name: 'Onions', price: 45, bulk: 32, savings: 29, unit: 'kg' },
    { name: 'Tomatoes', price: 60, bulk: 42, savings: 30, unit: 'kg' },
    { name: 'Potatoes', price: 35, bulk: 25, savings: 29, unit: 'kg' },
    { name: 'Green Peppers', price: 80, bulk: 58, savings: 28, unit: 'kg' },
    { name: 'Spice Mix', price: 200, bulk: 140, savings: 30, unit: 'kg' },
  ];

  const nearbyVendors = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    name: faker.person.firstName(),
    distance: faker.number.float({ min: 0.5, max: 5, fractionDigits: 1 }),
    compatibility: faker.number.int({ min: 75, max: 98 }),
    items: faker.helpers.arrayElements(['Onions', 'Tomatoes', 'Potatoes', 'Peppers'], { min: 2, max: 4 }),
  }));

  const toggleIngredient = (ingredient: string) => {
    setSelectedIngredients(prev => 
      prev.includes(ingredient)
        ? prev.filter(item => item !== ingredient)
        : [...prev, ingredient]
    );
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-8 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center space-x-3 mb-4">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          >
            <Zap className="w-8 h-8" />
          </motion.div>
          <h2 className="text-3xl font-bold">QuantumSync™ Collective Buying</h2>
        </div>
        <p className="text-yellow-100 text-lg">
          AI-powered pod formation for maximum savings through bulk purchasing
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Ingredient Search */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6">Search Ingredients</h3>
          
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <motion.input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for ingredients..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              whileFocus={{ scale: 1.01 }}
            />
          </div>

          {/* Ingredient List */}
          <div className="space-y-3">
            {ingredients.map((ingredient, index) => (
              <motion.div
                key={ingredient.name}
                className={`p-4 border rounded-lg cursor-pointer transition-all ${
                  selectedIngredients.includes(ingredient.name)
                    ? 'border-orange-500 bg-orange-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => toggleIngredient(ingredient.name)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900">{ingredient.name}</h4>
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="text-gray-600">Individual: ₹{ingredient.price}/{ingredient.unit}</span>
                      <span className="text-green-600 font-medium">Bulk: ₹{ingredient.bulk}/{ingredient.unit}</span>
                    </div>
                  </div>
                  <motion.div
                    className="flex items-center space-x-2"
                    animate={{ scale: selectedIngredients.includes(ingredient.name) ? [1, 1.1, 1] : 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <TrendingDown className="w-5 h-5 text-green-600" />
                    <span className="font-bold text-green-600">{ingredient.savings}% off</span>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Nearby Vendors */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6">Compatible Vendors</h3>
          
          <div className="space-y-3">
            {nearbyVendors.slice(0, 6).map((vendor, index) => (
              <motion.div
                key={vendor.id}
                className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-all cursor-pointer"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, backgroundColor: '#f9fafb' }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <motion.div
                      className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold"
                      animate={{ 
                        boxShadow: [
                          '0 0 0px rgba(168, 85, 247, 0.5)',
                          '0 0 15px rgba(168, 85, 247, 0.5)',
                          '0 0 0px rgba(168, 85, 247, 0.5)',
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    >
                      {vendor.name.charAt(0)}
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{vendor.name}</h4>
                      <p className="text-sm text-gray-600">{vendor.distance} km away</p>
                      <p className="text-xs text-gray-500">Needs: {vendor.items.join(', ')}</p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <motion.div
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        vendor.compatibility >= 90 ? 'bg-green-100 text-green-700' :
                        vendor.compatibility >= 80 ? 'bg-yellow-100 text-yellow-700' :
                        'bg-gray-100 text-gray-700'
                      }`}
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    >
                      {vendor.compatibility}% match
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Pod Formation */}
      {selectedIngredients.length > 0 && (
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900">Pod Formation</h3>
            <motion.div
              className="flex items-center space-x-2"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Users className="w-6 h-6 text-purple-600" />
              <span className="font-semibold text-purple-600">6 vendors ready</span>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-900 mb-2">Total Savings</h4>
              <motion.p
                className="text-2xl font-bold text-green-600"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ₹{(selectedIngredients.length * 1200).toLocaleString()}
              </motion.p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-2">Pod Size</h4>
              <p className="text-2xl font-bold text-blue-600">6 vendors</p>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-900 mb-2">Delivery Time</h4>
              <p className="text-2xl font-bold text-purple-600">2-3 days</p>
            </div>
          </div>

          <div className="text-center">
            <MagneticButton
              variant="primary"
              size="lg"
              className="px-8 py-4"
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Form Pod & Order
            </MagneticButton>
          </div>
        </motion.div>
      )}
    </div>
  );
};
