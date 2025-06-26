// import React from 'react';
// import { Link } from 'react-router-dom';

// const Hero = () => {
//     return (
//         <div id='hero' className='flex flex-col justify-center items-center space-y-5'>
//             <h1 className='text-5xl font-bold text-center text-[#3E84F6] mt-20'>Clin Technologies</h1>
//             <h2 className='text-2xl text-[#93A2B7] font-bold px-10 py-6 mx-auto text-center'><span>Revolutionizing clinical documentation through <span className='text-[#F59E0B]'> HIPAA COMPLIANT</span> advanced artificial</span><br /> <span>intelligence, giving healthcare providers more time for what truly matters — patient care. try it </span> <br /> for <span className='text-[#F59E0B]'> FREE </span> today</h2>

//             <p className='text-2xl font-semibold w-7/12 mx-auto text-center'>Our sophisticated AI platform intelligently processes clinical conversations, creating accurate documentation that integrates with your existing EMR system.</p>
//             <div className='flex gap-5 mb-10'>
//                 <Link to={'/signIn'}>
//                     <button className='text-lg font-medium transform border-2 border-[#3E84F6] rounded-full px-5 py-2 hover:shadow-md hover:shadow-[#3E84F6] hover:-translate-y-1 transition duration-300'>
//                         Sign in
//                     </button>
//                 </Link>

//                <Link to={'/signUp'}>
//                 <button className='text-lg font-medium transform border-2 border-[#3E84F6] bg-[#3E84F6] text-white rounded-full px-5 py-2 hover:shadow-md hover:shadow-[#3E84F6] hover:-translate-y-1 transition duration-300'>
//                     Sign up
//                 </button>
//                </Link>

//             </div>

//         </div>
//     );
// };

// export default Hero;



import React, { useEffect, useState } from 'react';

const FloatingParticle = ({ delay, duration, x, y, size }) => {
  return (
    <div
      className={`absolute bg-blue-300 rounded-full opacity-60`}
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: `${size}px`,
        height: `${size}px`,
        animation: `float ${duration}s ease-in-out ${delay}s infinite alternate`,
      }}
    />
  );
};

const Hero = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate particles to match the image positions
    const specificParticles = [
      { id: 1, x: 15, y: 25, size: 2, delay: 0, duration: 4 },
      { id: 2, x: 85, y: 35, size: 1.5, delay: 1, duration: 3 },
      { id: 3, x: 25, y: 60, size: 1, delay: 2, duration: 5 },
      { id: 4, x: 75, y: 70, size: 2, delay: 0.5, duration: 3.5 },
      { id: 5, x: 45, y: 15, size: 1, delay: 1.5, duration: 4 },
      { id: 6, x: 65, y: 85, size: 1.5, delay: 0.8, duration: 4.2 },
      { id: 7, x: 35, y: 85, size: 1, delay: 2.2, duration: 3.8 },
      { id: 8, x: 90, y: 55, size: 1, delay: 1.8, duration: 3.2 },
      { id: 9, x: 10, y: 75, size: 1.5, delay: 0.3, duration: 4.5 },
      { id: 10, x: 55, y: 25, size: 1, delay: 2.5, duration: 3.7 },
    ];
    setParticles(specificParticles);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden" style={{
      background: 'radial-gradient(ellipse at center, #1e3a8a 0%, #0f172a 50%, #020617 100%)'
    }}>
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px) scale(1); opacity: 0.4; }
          100% { transform: translateY(-15px) scale(1.1); opacity: 0.8; }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        @keyframes subtle-drift {
          0% { transform: translateX(0px) translateY(0px); }
          33% { transform: translateX(5px) translateY(-3px); }
          66% { transform: translateX(-3px) translateY(5px); }
          100% { transform: translateX(0px) translateY(0px); }
        }
        .animate-pulse-glow {
          animation: pulse-glow 6s ease-in-out infinite;
        }
        .animate-subtle-drift {
          animation: subtle-drift 8s ease-in-out infinite;
        }
      `}</style>

      {/* Large background gradient orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-pulse-glow"></div>
      <div className="absolute top-20 right-0 w-80 h-80 bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-25 animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-0 right-20 w-72 h-72 bg-indigo-600 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse-glow" style={{ animationDelay: '4s' }}></div>

      {/* Floating particles */}
      {particles.map((particle) => (
        <FloatingParticle
          key={particle.id}
          delay={particle.delay}
          duration={particle.duration}
          x={particle.x}
          y={particle.y}
          size={particle.size}
        />
      ))}

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 text-center">
        {/* Logo/Icon */}
        <div className="mb-6 animate-subtle-drift">
          <div className="w-16 h-16 mx-auto mb-4 relative">
            {/* Outer circle */}
            <div className="w-16 h-16 border-2 border-blue-400 rounded-full flex items-center justify-center relative">
              {/* Inner design - resembling the medical/tech icon */}
              <div className="w-8 h-8 relative">
                <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-blue-400 rounded"></div>
                <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-blue-400 rounded"></div>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-3 border-2 border-blue-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="text-blue-400">Clin Technologies</span>
        </h1>

        {/* Main description */}
        <div className="max-w-5xl mx-auto mb-8">
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed">
            Revolutionizing clinical documentation through{' '}
            <span className="text-orange-400 font-semibold">HIPAA COMPLIANT</span>{' '}
            advanced artificial intelligence, giving healthcare providers more time for what truly matters — patient care.{' '}
            <span className="text-yellow-400 font-semibold">try it for FREE</span> today
          </p>
        </div>

        {/* Secondary description */}
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-base md:text-lg text-gray-400 leading-relaxed">
            Our sophisticated AI platform intelligently processes clinical conversations, creating accurate documentation that integrates with your existing EMR system.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <button className="px-8 py-3 bg-transparent border-2 border-blue-500 text-blue-400 rounded-full font-medium text-lg hover:bg-blue-500 hover:text-white transition-all duration-300 min-w-32">
            Login
          </button>
          <button className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium text-lg hover:bg-blue-700 transition-all duration-300 min-w-32">
            Signup
          </button>
        </div>

        {/* Bottom scroll indicator */}
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-gray-500 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Windows activation watermark */}
      <div className="absolute bottom-6 right-6 text-gray-500 text-sm opacity-60">
        <p className="font-medium">Activate Windows</p>
        <p className="text-xs">Go to Settings to activate Windows.</p>
      </div>
    </div>
  );
};

export default Hero;