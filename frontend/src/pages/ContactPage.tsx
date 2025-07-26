import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';

export const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20 pb-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h1>
          <p className="text-xl text-gray-600">Contact page coming soon...</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};
