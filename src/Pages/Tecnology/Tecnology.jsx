import React from 'react';
import { Brain, BookOpen, Award, FileText } from 'lucide-react';
import { IoIosLock } from 'react-icons/io';

const Technology = () => {
    return (
        <div id='Technology' className="bg-slate-900 text-white py-16 px-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-blue-400 mb-6">Our Technology</h2>
                    <p className="text-lg text-left text-gray-300 max-w-4xl mx-auto leading-relaxed">
                        At Clin Technologies, we've built our platform on groundbreaking AI technology specifically designed for healthcare. Our solutions use the latest advancements in natural language processing and machine learning to create a system that truly understands the complexities of medical documentation.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Card 1 - Sophisticated Natural Language Processing */}
                    <div className="bg-[#132247] border border-slate-700 rounded-xl p-8 hover:border-blue-500 transform hover:-translate-y-3 transition duration-700">
                        <div className="mb-6">
                            <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mb-4">
                                <Brain className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-semibold text-blue-400 mb-4">
                                Sophisticated Natural Language Processing
                            </h3>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                            At the core of our platform is an advanced foundation model. This enables our system to grasp the nuances of clinical conversations — understanding context, recognizing intent, and accurately interpreting medical terminology. This deep comprehension allows the AI to generate clear, concise, and contextually relevant medical notes automatically.
                        </p>
                    </div>

                    {/* Card 2 - Learning Mode & Personalization */}
                    <div className="bg-[#132247] border border-slate-700 rounded-xl p-8 hover:border-blue-500 transition-colors duration-300">
                        <div className="mb-6">
                            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                                <BookOpen className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-semibold text-blue-400 mb-4">
                                Learning Mode & Personalization
                            </h3>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                            Our AI doesn't rely on generic templates. We initiate the process by learning directly from your specific cases and workflows. The system intelligently refines its understanding and output based on your ongoing feedback. With each processed case, its accuracy and alignment with your unique clinical documentation needs become increasingly precise, ensuring a truly personalized solution.
                        </p>
                    </div>

                    {/* Card 3 - Robust Data Privacy & Security */}
                    <div className="bg-[#132247] border border-slate-700 rounded-xl p-8 hover:border-blue-500 transition-colors duration-300">
                        <div className="mb-6">
                            {/* Badges */}
                            <div className="flex flex-wrap gap-6 mb-4">
                                <div className="primary text-white px-4 py-2 rounded-full text-sm flex items-center gap-1">
                                    <IoIosLock className="w-5 h-5 text-orange-300" />
                                    HIPAA COMPLIANT
                                </div>
                                <div className="bg-slate-700 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                                    <Award className="w-3 h-3" />
                                    BUSINESS ASSOCIATE AGREEMENT
                                </div>
                            </div>
                            <h3 className="text-2xl font-semibold text-blue-400 mb-4">
                                Robust Data Privacy & Security
                            </h3>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                            Protecting sensitive health information is paramount. Our AI solutions are architected with a security-first approach, incorporating principles like 'zero trust'. We utilize robust security measures, including comprehensive encryption (both at rest and in transit) and strict, role-based access controls, to ensure data integrity and confidentiality, limiting access exclusively to authorized personnel.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Technology;