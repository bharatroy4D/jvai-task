import React from 'react';

const ManageSubcrib = () => {
    return (
        <div className="min-h-screen w-full bg-slate-700 p-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <h1 className="text-white text-5xl font-bold mb-12">
                    Manage Subscription
                </h1>

                {/* Main Card */}
                <div className="bg-slate-600 border-2 border-blue-500 rounded-lg p-8">
                    {/* Subscription Type */}
                    <div className="mb-6">
                        <div className="bg-slate-500 border border-slate-400 rounded-lg px-6 py-4">
                            <span className="text-slate-300 text-lg">Individual</span>
                        </div>
                    </div>

                    {/* Date */}
                    <div className="mb-8">
                        <div className="bg-slate-500 border border-slate-400 rounded-lg px-6 py-4">
                            <span className="text-slate-300 text-lg">July 02, 2025 12:17:38</span>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-6">
                        <button className="flex-1 bg-green-600 hover:bg-green-700 text-white text-xl font-semibold py-4 px-8 rounded-lg transition-colors duration-200">
                            Upgrade Subscription
                        </button>

                        <button className="flex-1 bg-red-600 hover:bg-red-700 text-white text-xl font-semibold py-4 px-8 rounded-lg transition-colors duration-200">
                            Cancel Subscription
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ManageSubcrib;