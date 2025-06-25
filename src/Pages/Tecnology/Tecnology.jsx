import React from 'react';
import { FaBrain, FaGraduationCap, FaShieldAlt, FaCheckCircle } from 'react-icons/fa';

const Technology = () => {
    return (
        <div id='Technology' className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 px-6 py-16">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-blue-400 mb-6">
                        Our Technology
                    </h1>
                    <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed">
                        At Clin Technologies, we've built our platform on groundbreaking AI technology specifically designed for healthcare. Our solutions
                        use the latest advancements in natural language processing and machine learning to create a system that truly understands the
                        complexities of medical documentation.
                    </p>
                </div>

                {/* Technology Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Card 1 - Sophisticated Natural Language Processing */}
                    <div className="bg-gradient-to-br from-blue-800/40 to-blue-900/60 backdrop-blur-sm border border-blue-700/50 rounded-2xl p-8 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300">
                        <div className="mb-6">
                            <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mb-4">
                                <FaBrain className="text-white text-2xl" />
                            </div>
                            <h3 className="text-2xl font-bold text-blue-300 mb-2">
                                Sophisticated Natural
                            </h3>
                            <h3 className="text-2xl font-bold text-blue-300 mb-4">
                                Language Processing
                            </h3>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                            At the core of our platform is an advanced foundation model. This enables our system to grasp the nuances of clinical conversations — understanding context, recognizing intent, and accurately interpreting medical terminology. This deep comprehension allows the AI to generate clear, concise, and contextually relevant medical notes automatically.
                        </p>
                    </div>

                    {/* Card 2 - Learning Mode & Personalization */}
                    <div className="bg-gradient-to-br from-blue-800/40 to-blue-900/60 backdrop-blur-sm border border-blue-700/50 rounded-2xl p-8 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300">
                        <div className="mb-6">
                            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                                <FaGraduationCap className="text-white text-2xl" />
                            </div>
                            <h3 className="text-2xl font-bold text-blue-300 mb-2">
                                Learning Mode &
                            </h3>
                            <h3 className="text-2xl font-bold text-blue-300 mb-4">
                                Personalization
                            </h3>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                            Our AI doesn't rely on generic templates. We initiate the process by learning directly from your specific notes and workflows. The system analyzes your documentation style and output based on your ongoing feedback. With each processed case, you become increasingly precise, ensuring a truly personalized solution.
                        </p>
                    </div>

                    {/* Card 3 - Robust Data Privacy & Security */}
                    <div className="bg-gradient-to-br from-blue-800/40 to-blue-900/60 backdrop-blur-sm border border-blue-700/50 rounded-2xl p-8 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300">
                        <div className="mb-6">
                            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                                <FaShieldAlt className="text-white text-2xl" />
                            </div>

                            {/* HIPAA Compliant Badge */}
                            <div className="flex items-center gap-2 mb-2">
                                <FaShieldAlt className="text-orange-400 text-sm" />
                                <span className="text-orange-400 text-sm font-semibold tracking-wide">
                                    HIPAA COMPLIANT
                                </span>
                            </div>

                            {/* Business Associate Agreement Badge */}
                            <div className="flex items-center gap-2 mb-4">
                                <FaCheckCircle className="text-blue-400 text-sm" />
                                <span className="text-blue-400 text-sm font-semibold tracking-wide">
                                    BUSINESS ASSOCIATE AGREEMENT
                                </span>
                            </div>

                            <h3 className="text-2xl font-bold text-blue-300 mb-2">
                                Robust Data Privacy &
                            </h3>
                            <h3 className="text-2xl font-bold text-blue-300 mb-4">
                                Security
                            </h3>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                            Protecting sensitive health information is paramount. Our AI solutions are architected with a security-first approach, incorporating features like "zero trust." We utilize robust security measures, including comprehensive encryption, secure data transmission, and strict user access controls, ensuring data remains secure and confidential, limiting access exclusively to authorized personnel.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Technology;