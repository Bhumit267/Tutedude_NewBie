import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { User, Mail, Lock, ArrowLeft, Store, Tractor, Shuffle } from 'lucide-react';
import { MagneticButton } from '../components/ui/MagneticButton';

type UserRole = 'vendor' | 'farmer' | 'hybrid';

export const SignupPage: React.FC = () => {
  const [step, setStep] = useState(1);
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const navigate = useNavigate();

  const roles = [
    {
      id: 'vendor' as UserRole,
      title: 'Street Vendor',
      description: 'I sell food directly to customers',
      icon: Store,
      scene: '🍕🛒👥',
      color: 'from-orange-500 to-red-500',
    },
    {
      id: 'farmer' as UserRole,
      title: 'Farmer/Producer',
      description: 'I grow and supply ingredients',
      icon: Tractor,
      scene: '🌾🚜☀️',
      color: 'from-green-500 to-emerald-500',
    },
    {
      id: 'hybrid' as UserRole,
      title: 'Hybrid Business',
      description: 'I do both - produce and sell',
      icon: Shuffle,
      scene: '🌾🍕🔄',
      color: 'from-purple-500 to-blue-500',
    },
  ];

  const handleRoleSelect = (role: UserRole) => {
    setSelectedRole(role);
    setTimeout(() => setStep(2), 500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate registration
    await new Promise(resolve => setTimeout(resolve, 2000));
    navigate(`/dashboard/${selectedRole}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Back Button */}
      <div className="absolute top-8 left-8 z-50">
        <Link to="/" className="flex items-center text-gray-600 hover:text-orange-600 transition-colors">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>
      </div>

      <div className="min-h-screen flex items-center justify-center p-8">
        <div className="w-full max-w-4xl">
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Choose Your Journey
                </h1>
                <p className="text-xl text-gray-600">
                  Select your role to get started with VendorUnity
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {roles.map((role, index) => (
                  <motion.div
                    key={role.id}
                    className="relative overflow-hidden"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <motion.button
                      onClick={() => handleRoleSelect(role.id)}
                      className="w-full p-8 bg-white rounded-2xl shadow-lg border border-gray-200 text-left group"
                      whileHover={{ scale: 1.02, y: -5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Animated Scene */}
                      <motion.div
                        className="text-4xl mb-4 text-center"
                        animate={{
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      >
                        {role.scene}
                      </motion.div>

                      <div className={`w-16 h-16 bg-gradient-to-r ${role.color} rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform`}>
                        <role.icon className="w-8 h-8 text-white" />
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                        {role.title}
                      </h3>
                      
                      <p className="text-gray-600 text-center">
                        {role.description}
                      </p>

                      {/* Selection indicator */}
                      <motion.div
                        className={`absolute inset-0 border-4 border-orange-500 rounded-2xl opacity-0 ${selectedRole === role.id ? 'opacity-100' : ''}`}
                        animate={{
                          opacity: selectedRole === role.id ? 1 : 0,
                        }}
                      />
                    </motion.button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-8"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h2>
                <p className="text-gray-600">
                  Complete your registration as a {selectedRole}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="password"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Create a password"
                      required
                    />
                  </div>
                </div>

                <div className="flex space-x-4">
                  <MagneticButton
                    type="button"
                    variant="outline"
                    onClick={() => setStep(1)}
                    className="flex-1"
                  >
                    Back
                  </MagneticButton>
                  <MagneticButton
                    type="submit"
                    variant="primary"
                    className="flex-1"
                  >
                    Create Account
                  </MagneticButton>
                </div>
              </form>

              <p className="text-center mt-6 text-gray-600">
                Already have an account?{' '}
                <Link to="/login" className="text-orange-600 hover:text-orange-500 font-medium">
                  Sign in here
                </Link>
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};
