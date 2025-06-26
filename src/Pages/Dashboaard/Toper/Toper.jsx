import React, { useState } from 'react';
import { Camera } from 'lucide-react';
import { FaUser } from 'react-icons/fa';

const Toper = () => {
  const [fullName, setFullName] = useState('');
  const [subscriptionType, setSubscriptionType] = useState('free_trial');

  const handleEditProfile = () => {
    console.log('Edit Profile clicked');
  };

  return (
    <div className="min-h-screen w-full bg-slate-700 flex items-center justify-center px-8" style={{backgroundColor: '#475569'}}>
      <div className="flex items-start gap-12">
        {/* Profile Picture Section */}
        <div className="relative">
          <div className=" bg-gray-500 rounded-full flex items-center justify-center overflow-hidden">
            <FaUser className='text-8xl pt-1' />
          </div>
          {/* Camera Icon */}
          <div className="absolute bottom-2 right-2 w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
            <Camera className="w-4 h-4 text-white" />
          </div>
        </div>

        {/* Form Section */}
        <div className="flex flex-col gap-3 min-w-96">
          {/* Full Name Field */}
          <div>
            <label className="block text-white text-lg font-medium mb-3">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Please enter your full name."
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-4 py-3 bg-slate-600 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 text-base"
              style={{backgroundColor: '#475569', borderColor: '#64748b'}}
            />
          </div>

          {/* Subscription Type Field */}
          <div>
            <label className="block text-white text-lg font-medium mb-3">
              Subscription Type
            </label>
            <input
              type="text"
              value={subscriptionType}
              onChange={(e) => setSubscriptionType(e.target.value)}
              className="w-full px-4 py-3 bg-slate-600 border border-slate-600 rounded-lg text-yellow-300 focus:outline-none focus:border-blue-400 text-base"
              style={{backgroundColor: '#475569', borderColor: '#64748b'}}
            />
          </div>

          {/* Edit Profile Button */}
          <button
            onClick={handleEditProfile}
            className="mt-4 px-8 py-3 w-fit bg-blue-600 hover:bg-blue-700 text-white rounded-full text-lg font-medium transition-colors"
            style={{backgroundColor: '#2563eb'}}
          >
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toper;