import React, { useState, useEffect } from 'react';

export default function CareerPortalHome({ activeTab, onTabChange }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`w-full bg-gradient-to-br from-blue-50 via-white to-purple-50 transition-all duration-1000 overflow-y-auto ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center shadow-2xl">
                <span className="text-white text-3xl font-bold">CP</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
                Welcome to
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Career Portal</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
                Your gateway to amazing career opportunities. Built with modern technologies 
                and designed for the best user experience.
              </p>
            </div>
            
            
            {/* Call to Action */}
            <div className="mt-20">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white text-center">
                <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-xl mb-8 text-blue-100">
                  Explore our job listings and find your next career opportunity today.
                </p>
                <button 
                  onClick={() => onTabChange('jobs')}
                  className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Explore Jobs
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
