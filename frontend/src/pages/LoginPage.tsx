import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, ArrowLeft, User, MapPin, Building } from 'lucide-react';
import { MagneticButton } from '../components/ui/MagneticButton';

// Location data
const locationData = {
  'Delhi': ['Connaught Place', 'Chandni Chowk', 'Saket', 'Hauz Khas', 'Greater Kailash', 'Rajouri Garden', 'Janakpuri', 'Burari', 'Preet Vihar', 'Ghazipur'],
  'Mumbai': ['Colaba', 'Fort', 'Bandra', 'Andheri', 'Juhu', 'Dadar', 'Lower Parel', 'Malad', 'Borivali', 'Chembur'],
  'Bengaluru': ['MG Road', 'Koramangala', 'Jayanagar', 'Whitefield', 'Indiranagar', 'Yelahanka', 'Hebbal', 'HSR Layout', 'Rajajinagar', 'BTM Layout'],
  'Hyderabad': ['Charminar', 'HITEC City', 'Gachibowli', 'Madhapur', 'Jubilee Hills', 'Banjara Hills', 'Ameerpet', 'Begumpet', 'Mehdipatnam'],
  'Chennai': ['T. Nagar', 'Mylapore', 'Kilpauk', 'Adyar', 'Velachery', 'Porur', 'Anna Nagar', 'Tambaram', 'Ambattur'],
  'Kolkata': ['Park Street', 'Esplanade', 'Dum Dum', 'Rajarhat', 'Ballygunge', 'Salt Lake', 'Behala', 'Tollygunge', 'New Town'],
  'Ahmedabad': ['Manek Chowk', 'Satellite', 'Thaltej', 'Bopal', 'SG Highway', 'Gota', 'Vastrapur', 'Chandkheda'],
  'Pune': ['Camp', 'Viman Nagar', 'Kalyani Nagar', 'Hadapsar', 'Kothrud', 'Baner', 'Wakad', 'Hinjewadi', 'Aundh'],
  'Surat': ['Adajan', 'Katargam', 'Udhna', 'Piplod', 'Vesu', 'Pal', 'Rander'],
  'Jaipur': ['C-Scheme', 'Malviya Nagar', 'Mansarovar', 'Raja Park', 'Vaishali Nagar', 'Tonk Road', 'Jhotwara'],
  'Lucknow': ['Hazratganj', 'Gomti Nagar', 'Alambagh', 'Indira Nagar', 'Mahanagar', 'Aminabad', 'Chowk'],
  'Indore': ['Vijay Nagar', 'Palasia', 'Rajwada', 'Sudama Nagar', 'Annapurna', 'Khajrana', 'Bhawarkuan'],
  'Bhopal': ['MP Nagar', 'Arera Colony', 'New Market', 'Shahpura', 'Kolar Road', 'TT Nagar'],
  'Nagpur': ['Sitabuldi', 'Dharampeth', 'Sadar', 'Civil Lines', 'Trimurti Nagar', 'Manish Nagar'],
  'Kochi': ['MG Road', 'Kaloor', 'Edappally', 'Vyttila', 'Kakkanad', 'Fort Kochi', 'Aluva'],
  'Coimbatore': ['Gandhipuram', 'Peelamedu', 'RS Puram', 'Saibaba Colony', 'Singanallur', 'Avinashi Road'],
  'Chandigarh': ['Sector 17', 'Sector 22', 'Sector 35', 'Sector 43', 'Manimajra', 'Panchkula', 'Mohali'],
  'Visakhapatnam': ['MVP Colony', 'Dwaraka Nagar', 'Gajuwaka', 'Maddilapalem', 'Seethammadhara'],
  'Thiruvananthapuram': ['Palayam', 'Kowdiar', 'Pattom', 'Vellayambalam', 'Kazhakootam', 'Sreekariyam'],
  'Patna': ['Boring Road', 'Kankarbagh', 'Rajendra Nagar', 'Bailey Road', 'Ashok Rajpath'],
  'Guwahati': ['Paltan Bazar', 'Zoo Road', 'Beltola', 'Ganeshguri', 'Ulubari', 'Dispur'],
  'Raipur': ['Pandri', 'Telibandha', 'Shankar Nagar', 'Devendra Nagar', 'Tatibandh'],
  'Ranchi': ['Harmu', 'Lalpur', 'Kanke', 'Morabadi', 'Doranda']
};

export const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleCityChange = (city: string) => {
    setSelectedCity(city);
    setSelectedLocation(''); // Reset location when city changes
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Navigate based on user type selection
    if (userType === 'vendor') {
      navigate('/dashboard/vendor');
    } else if (userType === 'farmer') {
      navigate('/dashboard/farmer');
    } else if (userType === 'both') {
      navigate('/dashboard/hybrid');
    } else {
      navigate('/dashboard');
    }
  };

  const cities = Object.keys(locationData);
  const locations = selectedCity ? locationData[selectedCity as keyof typeof locationData] : [];

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Video Background */}
      <motion.div 
        className="hidden lg:flex lg:w-1/2 relative overflow-hidden"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/90 to-red-600/90 z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800')] bg-cover bg-center" />
        
        <div className="relative z-20 flex flex-col justify-center p-12 text-white">
          <motion.h1 
            className="text-4xl font-bold mb-6"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Welcome Back to VendorUnity
          </motion.h1>
          <motion.p 
            className="text-xl opacity-90"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Continue your journey towards prosperity and collective growth
          </motion.p>
        </div>
      </motion.div>

      {/* Right Side - Login Form */}
      <motion.div 
        className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gradient-to-br from-gray-50 to-white overflow-y-auto"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-full max-w-md">
          {/* Back Button */}
          <Link to="/" className="flex items-center text-gray-600 hover:text-orange-600 mb-8 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>

          {/* Header */}
          <motion.div 
            className="text-center mb-8"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Sign In</h2>
            <p className="text-gray-600">Enter your credentials to access your dashboard</p>
          </motion.div>

          {/* Form */}
          <motion.form 
            onSubmit={handleLogin} 
            className="space-y-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {/* User Type Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">User Type</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <motion.select
                  value={userType}
                  onChange={(e) => setUserType(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all appearance-none bg-white"
                  required
                  whileFocus={{ scale: 1.01 }}
                >
                  <option value="">Select user type</option>
                  <option value="vendor">Vendor</option>
                  <option value="farmer">Farmer</option>
                  <option value="both">Both (Vendor & Farmer)</option>
                </motion.select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
            </div>

            {/* City Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
              <div className="relative">
                <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <motion.select
                  value={selectedCity}
                  onChange={(e) => handleCityChange(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all appearance-none bg-white"
                  required
                  whileFocus={{ scale: 1.01 }}
                >
                  <option value="">Select city</option>
                  {cities.map((city) => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </motion.select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
            </div>

            {/* Location Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <motion.select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all appearance-none bg-white disabled:bg-gray-100 disabled:cursor-not-allowed"
                  required
                  disabled={!selectedCity}
                  whileFocus={{ scale: 1.01 }}
                >
                  <option value="">
                    {selectedCity ? 'Select location' : 'Select city first'}
                  </option>
                  {locations.map((location) => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </motion.select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <motion.input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  placeholder="your@example.com"
                  required
                  whileFocus={{ scale: 1.01 }}
                />
                {email.includes('@') && (
                  <motion.div
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    ✓
                  </motion.div>
                )}
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <motion.input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  placeholder="Enter your password"
                  required
                  whileFocus={{ scale: 1.01 }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <motion.input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="rounded border-gray-300 text-orange-600 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
                  whileTap={{ scale: 0.95 }}
                />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <Link to="/forgot-password" className="text-sm text-orange-600 hover:text-orange-500">
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <MagneticButton
              type="submit"
              variant="primary"
              className="w-full justify-center"
              disabled={isLoading}
            >
              {isLoading ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                />
              ) : (
                'Sign In'
              )}
            </MagneticButton>
          </motion.form>

          {/* Sign Up Link */}
          <motion.p 
            className="text-center mt-8 text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Don't have an account?{' '}
            <Link to="/signup" className="text-orange-600 hover:text-orange-500 font-medium">
              Sign up here
            </Link>
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};