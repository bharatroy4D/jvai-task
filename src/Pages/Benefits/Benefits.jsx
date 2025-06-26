import React from 'react';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import { Link } from 'react-router-dom';

const Benefits = () => {
  return (
    <div id='Benefits' className="min-h-screen secondary text-white flex flex-col justify-center items-center py-20 px-8" style={{ backgroundColor: '#334155' }}>
      {/* Benefits Header */}
      <div className="text-center mb-8">
        <SectionTitle title={'Benefits'} />
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
    </div>
  );
}
export default Benefits;