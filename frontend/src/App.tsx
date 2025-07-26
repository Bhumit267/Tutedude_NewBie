import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
import { VendorDashboard } from './pages/VendorDashboard';
import { FarmerDashboard } from './pages/FarmerDashboard';
import { HybridDashboard } from './pages/HybridDashboard';
import { FeaturesPage } from './pages/FeaturesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { QuantumSyncDashboardPage } from './pages/QuantumSyncDashboardPage';
import LogisticsPage from './pages/LogisticsPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/dashboard/vendor" element={<VendorDashboard />} />
          <Route path="/dashboard/vendor/quantumsync" element={<QuantumSyncDashboardPage />} />
          <Route path="/dashboard/farmer" element={<FarmerDashboard />} />
          <Route path="/dashboard/hybrid" element={<HybridDashboard />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="dashboard/vendor/logistics" element={<LogisticsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
