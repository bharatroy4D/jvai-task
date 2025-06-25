import React from 'react';

const CaseUse = () => {
    return (
        <div id='Case' className="bg-slate-900 min-h-screen py-20 p-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-blue-400 mb-6">Case Use</h1>
                    <p className="text-gray-300 text-lg max-w-4xl mx-auto">
                        See how healthcare providers across specialties are transforming their practice with Clin Technologies:
                    </p>
                </div>

                {/* Case Study Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Primary Care */}
                    <div className="bg-blue-900/30 border border-blue-800/50 rounded-lg p-8 transform transition hover:-translate-y-3 duration-700">
                        <h2 className="text-2xl font-semibold text-blue-400 mb-6">Primary Care</h2>
                        <p className="text-gray-300 mb-3 leading-relaxed">
                            Dr SJ M.D reduced her documentation time by 52%, allowing her to
                            see 3 more patients daily while finishing her charts before leaving
                            the office.
                        </p>

                        <div className=" border-l-4 border-blue-400/30 p-3 rounded-r-lg">
                            <p className="text-gray-300 italic mb-4 leading-relaxed">
                                "This AI tool streamlines a tedious process, reduces 'click
                                fatigue,' and helps me reclaim some sanity."
                            </p>
                            <p className="text-blue-300 text-sm text-right">
                                — Dr. S.J. MD
                            </p>
                        </div>
                    </div>

                    {/* Emergency Medicine */}
                    <div className="bg-blue-900/30 border border-blue-800/50 rounded-lg p-8 transform transition hover:-translate-y-3 duration-700">
                        <h2 className="text-2xl font-semibold text-blue-400 mb-6">Emergency Medicine</h2>
                        <p className="text-gray-300 mb-8 leading-relaxed">
                            Our ED department implemented Clin Tech, resulting in more
                            thorough documentation and a 70% decrease in chart completion
                            time during high-volume periods. Our nurses love it.
                        </p>

                        <div className="flex justify-end">
                            <p className="text-blue-300 text-sm italic">
                                — Emergency Department (ED) Nurse Manager
                            </p>
                        </div>
                    </div>

                    {/* Behavioral Health */}
                    <div className="bg-blue-900/30 border border-blue-800/50 rounded-lg p-8 transform transition hover:-translate-y-3 duration-700">
                        <h2 className="text-2xl font-semibold text-blue-400 mb-6">Behavioral Health</h2>

                        <div className="border-l-4 border-blue-400/30 p-6 rounded-r-lg">
                            <p className="text-gray-300 italic mb-4 leading-relaxed">
                                "Chartwright has been transformative for our clinic. Our
                                therapists were drowning in documentation. We've slashed
                                average charting time to <span className="font-semibold text-blue-300">under 3 minutes per patient</span>, freeing up
                                hours for direct care. More importantly, we've seen a significant
                                reduction in documentation errors and compliance flags. It's
                                not just faster; it's smarter documentation."
                            </p>
                            <p className="text-blue-300 text-sm text-right">
                                — Clinical Director, Behavioral Health Practice
                            </p>
                        </div>
                    </div>

                    {/* Case Management */}
                    <div className="bg-blue-900/30 border border-blue-800/50 rounded-lg p-8 transform transition hover:-translate-y-3 duration-700">
                        <h2 className="text-2xl font-semibold text-blue-400 mb-6">Case Management</h2>

                        <div className=" border-l-4 border-blue-400/30 p-6 rounded-r-lg">
                            <p className="text-gray-300 italic mb-4 leading-relaxed">
                                "Honestly, with the number of patients I manage, documentation
                                felt like a constant, losing battle. But this AI feels like getting an
                                assistant. It takes my detailed notes and <span className="font-semibold text-blue-300">instantly creates the
                                    clear, customized charts I need</span>. I'm getting hours back each
                                week – hours I can now spend directly with patients, tackling
                                barriers, not just typing."
                            </p>
                            <p className="text-blue-300 text-sm text-right">
                                — Social Worker/Case Manager
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CaseUse;