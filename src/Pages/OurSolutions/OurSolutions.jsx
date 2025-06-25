import React from 'react';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import { AiOutlineCheck } from 'react-icons/ai';
import { FaBan, FaRegEdit } from 'react-icons/fa';
import { BiConversation } from 'react-icons/bi';

const OurSolutions = () => {
    return (
        <div id='Solutions' className="min-h-screen primary text-white py-20">
            {/* Header */}
            <div className="text-center mb-12">
                <SectionTitle title={'Our Solutions'} />
                <p className="text-gray-300 text-lg max-w-4xl mx-auto pt-2">
                    Our comprehensive suite of AI-powered solutions transforms every aspect of healthcare documentation:
                </p>
            </div>

            {/* Solutions Grid */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Validify */}
                <div className="bg-[#132247] border-t-2 transform border-green-300 rounded-lg p-8 hover:bg-gray-750 hover:-translate-y-4 duration-700 transition">
                    <div className="flex flex-col gap-2 mb-6">
                        <div className="w-16 h-16 bg-[#13324D] rounded-full flex transform transition duration-300 hover:scale-125 items-center justify-center mr-4">
                            <AiOutlineCheck className="w-8 h-8 text-white " />
                        </div>

                        <h3 className="text-2xl font-semibold text-[#60A5FA]">Validify</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                        Mitigate compliance risk with powerful AI that optimizes chart reviews for accuracy, integrity, coding, and compliance. Validify automatically identifies documentation gaps, enhances coding accuracy, and maintains regulatory compliance across your organization.
                    </p>
                </div>

                {/* Redactify */}
                <div className="bg-[#132247] border-t-2 border-green-500 rounded-lg p-8 hover:bg-gray-750 transform hover:-translate-y-3 duration-700 transition ">
                    <div className="flex flex-col gap-2 mb-6">
                          <div className="w-16 h-16 bg-[#13324D] rounded-full flex transform transition duration-300 hover:scale-125 items-center justify-center mr-4">
                            <FaBan className="w-8 h-8 text-white " />
                        </div>
                        <h3 className="text-2xl font-semibold text-[#60A5FA]">Redactify</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                        Effortlessly redact HIPAA identifiers from text, documents, and structured data with Redactify – automating your compliance workflow. Protect sensitive patient information while maintaining data utility for research and analytics.
                    </p>
                </div>

                {/* TranscriptX */}
                <div className="bg-[#132247] border-t-2 border-purple-500 rounded-lg p-8 hover:bg-gray-750 transform hover:-translate-y-3 duration-700 transition">
                    <div className="flex flex-col gap-2 mb-6">
                        <div className="w-16 h-16 bg-[#13324D] rounded-full flex transform transition duration-300 hover:scale-125 items-center justify-center mr-4">
                            <BiConversation className="w-8 h-8 text-white " />
                        </div>
                        <h3 className="text-2xl font-semibold text-[#60A5FA]">TranscriptX</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                        Spend less time documenting. TranscriptX dictates highly accurate medical transcriptions of patient encounters into text, understanding complex medical terminology and clinical context for superior accuracy.
                    </p>
                </div>

                {/* Chartwright */}
                <div className="bg-[#132247] border-t-2 border-purple-500 rounded-lg p-8 hover:bg-gray-750 transform hover:-translate-y-3 duration-700 transition">
                    <div className="flex flex-col gap-2 mb-6">
                        <div className="w-16 h-16 bg-[#13324D] rounded-full flex transform transition duration-300 hover:scale-125 items-center justify-center mr-4">
                            <FaRegEdit className="w-8 h-8 text-white " />
                        </div>
                        <h3 className="text-2xl font-semibold text-[#60A5FA]">Chartwright</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                        Your best friend with charting – turn any normal text into a high-quality chart, delivered exactly how healthcare professionals need it with extensive customization options to match your workflow and documentation standards.
                    </p>
                </div>
            </div>
        </div>
    );
}
export default OurSolutions;