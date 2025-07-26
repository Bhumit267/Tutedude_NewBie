import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faker } from '@faker-js/faker';
import { Users, Zap, CheckCircle, XCircle } from 'lucide-react';
import { MagneticButton } from '../../ui/MagneticButton';

interface Vendor {
  id: string;
  name: string;
  needs: string[];
  location: { lat: number; lng: number };
  isOptimal: boolean;
}

const generateVendors = (): Vendor[] => {
  return Array.from({ length: 12 }, () => ({
    id: faker.string.uuid(),
    name: faker.person.firstName(),
    needs: faker.helpers.arrayElements(['Onions', 'Tomatoes', 'Spices', 'Oil'], { min: 2, max: 3 }),
    location: { lat: faker.location.latitude(), lng: faker.location.longitude() },
    isOptimal: faker.datatype.boolean(0.6), // 60% chance of being optimal
  }));
};

export const PodFormationSimulator: React.FC = () => {
  const [vendors, setVendors] = useState<Vendor[]>(generateVendors);
  const [isSimulating, setIsSimulating] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const startSimulation = () => {
    setIsSimulating(true);
    setShowResults(false);
    setTimeout(() => {
      setIsSimulating(false);
      setShowResults(true);
    }, 3000);
  };

  const resetSimulation = () => {
      setShowResults(false);
      setIsSimulating(false);
      setVendors(generateVendors());
  }

  const optimalVendors = vendors.filter(v => v.isOptimal);

  return (
    <div className="bg-gray-50 rounded-2xl p-8 md:p-12 border">
      <h3 className="text-3xl font-bold text-center mb-2">Try Pod Formation Yourself</h3>
      <p className="text-center text-gray-600 mb-8">Watch our AI create the optimal 8-person pod in real-time.</p>
      
      <div className="grid md:grid-cols-3 gap-8 items-center">
        {/* Vendor List */}
        <div className="md:col-span-1 space-y-2">
          {vendors.map((vendor, index) => (
            <motion.div
              key={vendor.id}
              className="flex items-center space-x-3 p-2 bg-white rounded-lg border"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center font-bold text-orange-600">
                {vendor.name.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-sm">{vendor.name}</p>
                <p className="text-xs text-gray-500">{vendor.needs.join(', ')}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* AI Algorithm */}
        <div className="md:col-span-1 text-center">
          <AnimatePresence>
            {!showResults && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
              >
                <motion.div
                  className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-purple-200"
                  animate={{ scale: isSimulating ? [1, 1.1, 1] : 1, rotate: isSimulating ? 360 : 0 }}
                  transition={{ repeat: isSimulating ? Infinity : 0, duration: 1 }}
                >
                  <Zap className="w-12 h-12 text-purple-600" />
                </motion.div>
                <h4 className="text-xl font-bold mb-2">AI Algorithm</h4>
                {isSimulating ? (
                  <p className="text-purple-600 font-semibold">Analyzing...</p>
                ) : (
                  <p className="text-gray-600">Ready to find the perfect pod.</p>
                )}
                <MagneticButton onClick={startSimulation} disabled={isSimulating} className="mt-4 mx-auto">
                  {isSimulating ? 'Processing...' : 'Create Pod'}
                </MagneticButton>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {showResults && (
                 <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                 >
                    <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-4" />
                    <h4 className="text-xl font-bold mb-2">Optimal Pod Formed!</h4>
                    <p className="text-gray-600">8 vendors selected for maximum efficiency.</p>
                    <MagneticButton onClick={resetSimulation} variant="outline" className="mt-4 mx-auto">
                        Run Again
                    </MagneticButton>
                 </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Pod Result */}
        <div className="md:col-span-1 space-y-2">
          {vendors.map((vendor, index) => (
            <motion.div
              key={vendor.id}
              className="flex items-center space-x-3 p-2 bg-white rounded-lg border"
              initial={{ opacity: 0.5 }}
              animate={{ 
                opacity: showResults ? (vendor.isOptimal ? 1 : 0.3) : 1,
                backgroundColor: showResults ? (vendor.isOptimal ? '#f0fdf4' : '#fef2f2') : '#ffffff',
              }}
              transition={{ delay: index * 0.05 }}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                  showResults && vendor.isOptimal ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
              }`}>
                {vendor.name.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-sm">{vendor.name}</p>
              </div>
              {showResults && (
                  vendor.isOptimal ? <CheckCircle className="w-5 h-5 text-green-500 ml-auto" /> : <XCircle className="w-5 h-5 text-red-400 ml-auto" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
