import React from 'react';
import { Shield, FileText, Mic, BarChart3 } from 'lucide-react';

const OurSolutions = () => {
    return (
        <div id='Solutions' className="min-h-screen bg-gray-900 text-white p-8">
            {/* Header */}
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-blue-400 mb-6">
                    Our Solutions
                </h1>
                <p className="text-gray-300 text-lg max-w-4xl mx-auto">
                    Our comprehensive suite of AI-powered solutions transforms every aspect of healthcare documentation:
                </p>
            </div>

            {/* Solutions Grid */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Validify */}
                <div className="bg-gray-800 border border-teal-500 rounded-lg p-8 hover:bg-gray-750 transition-colors">
                    <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mr-4">
                            <Shield className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-semibold text-teal-400">Validify</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                        Mitigate compliance risk with powerful AI that optimizes chart reviews for accuracy, integrity, coding, and compliance. Validify automatically identifies documentation gaps, enhances coding accuracy, and maintains regulatory compliance across your organization.
                    </p>
                </div>

                {/* Redactify */}
                <div className="bg-gray-800 border border-orange-500 rounded-lg p-8 hover:bg-gray-750 transition-colors">
                    <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                            <FileText className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-semibold text-orange-400">Redactify</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                        Effortlessly redact HIPAA identifiers from text, documents, and structured data with Redactify – automating your compliance workflow. Protect sensitive patient information while maintaining data utility for research and analytics.
                    </p>
                </div>

                {/* TranscriptX */}
                <div className="bg-gray-800 border border-purple-500 rounded-lg p-8 hover:bg-gray-750 transition-colors">
                    <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mr-4">
                            <Mic className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-semibold text-purple-400">TranscriptX</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                        Spend less time documenting. TranscriptX dictates highly accurate medical transcriptions of patient encounters into text, understanding complex medical terminology and clinical context for superior accuracy.
                    </p>
                </div>

                {/* Chartwright */}
                <div className="bg-gray-800 border border-yellow-500 rounded-lg p-8 hover:bg-gray-750 transition-colors">
                    <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mr-4">
                            <BarChart3 className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-semibold text-yellow-400">Chartwright</h3>
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