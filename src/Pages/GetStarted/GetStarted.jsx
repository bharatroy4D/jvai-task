import React from 'react';

const GetStarted = () => {
    return (
        <div className="min-h-screen bg-slate-800 text-white flex flex-col">
            {/* Main Content */}
            <div className="flex-1 flex flex-col items-center justify-center px-4 py-20">
                {/* Header */}
                <h1 className="text-4xl md:text-5xl font-bold text-blue-400 mb-8">
                    Get Started
                </h1>

                {/* Description */}
                <p className="text-gray-300 text-center max-w-2xl mb-12 leading-relaxed">
                    Ready to transform your clinical documentation process? Contact our team to learn how Clin Technologies can be tailored to your specific healthcare setting.
                </p>

                {/* Contact Form Box */}
                <div className="w-full max-w-md mb-8">
                    <div className="bg-slate-700/50 border border-slate-600 rounded-lg p-6 mb-6">
                        <textarea
                            placeholder="Enter your message here..."
                            className="w-full h-32 bg-transparent border-none outline-none text-gray-300 placeholder-gray-500 resize-none"
                        />
                    </div>

                    {/* Contact Email */}
                    <p className="text-center text-gray-400 text-sm mb-8">
                        Or reach us directly via email at{' '}
                        <a
                            href="mailto:support@clintechco.com"
                            className="text-blue-400 hover:text-blue-300 transition-colors"
                        >
                            support@clintechco.com
                        </a>
                    </p>
                </div>

                {/* Action Buttons */}
                <div className='flex gap-5 mb-10'>
                    <button className='text-lg font-medium transform border-2 border-[#3E84F6] rounded-full px-5 py-2 hover:shadow-md hover:shadow-[#3E84F6] hover:-translate-y-1 transition duration-300'>
                        Sign in
                    </button>

                    <button className='text-lg font-medium transform border-2 border-[#3E84F6] bg-[#3E84F6] text-white rounded-full px-5 py-2 hover:shadow-md hover:shadow-[#3E84F6] hover:-translate-y-1 transition duration-300'>
                        Sign up
                    </button>

                </div>
            </div>

            {/* Footer */}
            <footer className="px-6 py-4 border-t border-slate-700">
                <div className="flex flex-col sm:flex-row justify-between items-center text-gray-400 text-sm">
                    <div className="flex gap-6 mb-2 sm:mb-0">
                        <a href="#" className="hover:text-gray-300 transition-colors">Terms of Use</a>
                        <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
                    </div>
                    <div className="text-right">
                        © 2025 Clin Technologies. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
}
export default GetStarted;