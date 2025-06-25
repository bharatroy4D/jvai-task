import React from 'react';

const Benefits = () => {
  return (
    <div id='Benefits' className="min-h-screen bg-slate-800 text-white flex flex-col justify-center items-center px-8" style={{ backgroundColor: '#334155' }}>
      {/* Benefits Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-blue-400 mb-8">
          Benefits
        </h1>
      </div>

      {/* Benefits Content */}
      <div className="max-w-4xl w-full mb-16">
        <p className="text-xl text-white mb-8">
          Healthcare providers using Clin Technologies solutions report:
        </p>

        {/* Benefits List */}
        <ul className="space-y-6 text-lg text-white">
          <li className="flex items-start">
            <span className="text-blue-400 mr-3 text-xl">•</span>
            Reduction in documentation time by 40-60%
          </li>
          <li className="flex items-start">
            <span className="text-blue-400 mr-3 text-xl">•</span>
            Improved work-life balance with less after-hours charting
          </li>
          <li className="flex items-start">
            <span className="text-blue-400 mr-3 text-xl">•</span>
            Enhanced patient interaction due to less focus on note-taking
          </li>
          <li className="flex items-start">
            <span className="text-blue-400 mr-3 text-xl">•</span>
            More comprehensive and consistent clinical documentation
          </li>
          <li className="flex items-start">
            <span className="text-blue-400 mr-3 text-xl">•</span>
            Reduced risk of documentation errors and omissions
          </li>
        </ul>
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <button className="px-8 py-3 border-2 border-blue-400 text-white rounded-full text-lg font-medium hover:bg-blue-400 hover:text-slate-800 transition-colors">
          Login
        </button>
        <button className="px-8 py-3 bg-blue-500 text-white rounded-full text-lg font-medium hover:bg-blue-600 transition-colors">
          Signup
        </button>
      </div>
    </div>
  );
}
export default Benefits;