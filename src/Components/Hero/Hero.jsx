import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const [stars, setStars] = useState([]);

  // Generate random stars for the background
  useEffect(() => {
    const generateStars = () => {
      const starArray = [];
      for (let i = 0; i < 150; i++) {
        starArray.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          delay: Math.random() * 3
        });
      }
      setStars(starArray);
    };
    generateStars();
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 50%, #1e3a8a 100%)' }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Large background circles */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-900 rounded-full opacity-20 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-800 rounded-full opacity-30 blur-3xl translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-blue-600 rounded-full opacity-20 blur-2xl"></div>

        {/* Stars */}
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animationDelay: `${star.delay}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-8 text-center">
        {/* Robot/AI Icon */}
        <div className=" mt-20">
          <div className="w-24 h-24 mx-auto mb-4 relative flex items-center justify-center">
            <svg
              className="w-20 h-20"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Antenna */}
              <line x1="50" y1="5" x2="50" y2="15" stroke="#60a5fa" strokeWidth="2" />
              <circle cx="50" cy="5" r="3" fill="none" stroke="#60a5fa" strokeWidth="2" />

              {/* Robot Head */}
              <rect x="25" y="15" width="50" height="35" rx="8" ry="8"
                fill="none" stroke="#60a5fa" strokeWidth="2" />

              {/* Eyes */}
              <circle cx="35" cy="30" r="4" fill="#60a5fa" />
              <circle cx="65" cy="30" r="4" fill="#60a5fa" />

              {/* Mouth */}
              <rect x="40" y="40" width="20" height="4" rx="2" ry="2" fill="#60a5fa" />

              {/* Robot Body */}
              <rect x="20" y="50" width="60" height="40" rx="6" ry="6"
                fill="none" stroke="#60a5fa" strokeWidth="2" />

              {/* Body Details */}
              <line x1="30" y1="60" x2="70" y2="60" stroke="#60a5fa" strokeWidth="1.5" />
              <line x1="30" y1="70" x2="70" y2="70" stroke="#60a5fa" strokeWidth="1.5" />
              <line x1="30" y1="80" x2="70" y2="80" stroke="#60a5fa" strokeWidth="1.5" />

              {/* Control Indicators */}
              <circle cx="35" cy="65" r="2" fill="#60a5fa" />
              <circle cx="50" cy="65" r="2" fill="#60a5fa" />
              <circle cx="65" cy="65" r="2" fill="#60a5fa" />

              {/* Arms */}
              <rect x="10" y="55" width="10" height="20" rx="5" ry="5"
                fill="none" stroke="#60a5fa" strokeWidth="2" />
              <rect x="80" y="55" width="10" height="20" rx="5" ry="5"
                fill="none" stroke="#60a5fa" strokeWidth="2" />

              {/* Hands */}
              <circle cx="15" cy="80" r="4" fill="none" stroke="#60a5fa" strokeWidth="2" />
              <circle cx="85" cy="80" r="4" fill="none" stroke="#60a5fa" strokeWidth="2" />
            </svg>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-blue-400 mb-8">
          Clin Technologies
        </h1>

        {/* Main Description */}
        <div className="max-w-4xl mx-auto mb-8">
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            Revolutionizing clinical documentation through{' '}
            <span className="text-orange-400 font-semibold">HIPAA COMPLIANT</span>{' '}
            advanced artificial intelligence, giving healthcare providers more time for what truly matters — patient care.{' '}
            <span className="text-orange-400 font-semibold">try it for FREE</span>{' '}
            today
          </p>
        </div>

        {/* Secondary Description */}
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-lg text-gray-400 leading-relaxed">
            Our sophisticated AI platform intelligently processes clinical conversations, creating accurate documentation that integrates with your existing EMR system.
          </p>
        </div>
        {/* Buttons */}
        <div className='flex gap-5 mb-10'>
          <Link to={'/signIn'}>
            <button className='text-lg font-medium transform border-2 border-[#3E84F6] rounded-full px-5 py-2 hover:shadow-md hover:shadow-[#3E84F6] hover:-translate-y-1 transition duration-300'>
              Sign in
            </button>
          </Link>
          <Link to={'/signUp'}>
            <button className='text-lg font-medium transform border-2 border-[#3E84F6] bg-[#3E84F6] text-white rounded-full px-5 py-2 hover:shadow-md hover:shadow-[#3E84F6] hover:-translate-y-1 transition duration-300'>
              Sign up
            </button>
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <ChevronDown className="w-6 h-6 text-blue-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;