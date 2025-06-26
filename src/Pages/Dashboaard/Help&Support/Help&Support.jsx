import { useState } from "react";

const HelpSupportForm = () => {
    const [email, setEmail] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", { email, description });
        // Handle form submission here
    };

    return (
        <div className="min-h-screen w-full bg-slate-700 p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-white text-3xl font-semibold mb-8">Help & Support</h1>

                <div className="space-y-5">
                    <div>
                        <label htmlFor="email" className="block text-white text-lg font-medium mb-4">
                            Your Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter Email"
                            className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>

                    <div>
                        <label htmlFor="description" className="block text-white text-lg font-medium mb-4">
                            Description
                        </label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Enter your query or feedback"
                            rows={8}
                            className="w-full md:h-32 px-4 py-4 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-slate-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>

                    <div className="flex justify-end">
                        <button
                            onClick={handleSubmit}
                            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-700"
                        >
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default HelpSupportForm;