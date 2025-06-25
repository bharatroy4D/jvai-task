import React from 'react';

const Hero = () => {
    return (
        <div id='hero' className='flex flex-col justify-center items-center space-y-5'>
            <h1 className='text-5xl font-bold text-center text-[#3E84F6] mt-20'>Clin Technologies</h1>
            <h2 className='text-2xl text-[#93A2B7] font-bold px-10 py-6 mx-auto text-center'><span>Revolutionizing clinical documentation through <span className='text-[#F59E0B]'> HIPAA COMPLIANT</span> advanced artificial</span><br /> <span>intelligence, giving healthcare providers more time for what truly matters — patient care. try it </span> <br /> for <span className='text-[#F59E0B]'> FREE </span> today</h2>

            <p className='text-2xl font-semibold w-7/12 mx-auto text-center'>Our sophisticated AI platform intelligently processes clinical conversations, creating accurate documentation that integrates with your existing EMR system.</p>
            <div className='flex gap-5 mb-10'>
                <button className='text-lg font-medium transform border-2 border-[#3E84F6] rounded-full px-5 py-2 hover:shadow-md hover:shadow-[#3E84F6] hover:-translate-y-1 transition duration-300'>
                    Sign in
                </button>

                <button className='text-lg font-medium transform border-2 border-[#3E84F6] bg-[#3E84F6] text-white rounded-full px-5 py-2 hover:shadow-md hover:shadow-[#3E84F6] hover:-translate-y-1 transition duration-300'>
                    Sign up
                </button>

            </div>

        </div>
    );
};

export default Hero;