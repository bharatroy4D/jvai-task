import React, { useState } from 'react';
import { Paperclip, Mic, Send } from 'lucide-react';

const RealChat = () => {
    const [selectedTool, setSelectedTool] = useState('Chartwright');
    const [message, setMessage] = useState('');

    const tools = [
        { name: 'Chartwright', active: true },
        { name: 'TranscriptX', active: false },
        { name: 'Redactify', active: false },
        { name: 'Validify', active: false }
    ];

    const handleToolClick = (toolName) => {
        setSelectedTool(toolName);
    };

    const handleSendMessage = () => {
        if (message.trim()) {
            console.log('Sending message:', message);
            setMessage('');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && e.shiftKey) {
            // Allow new line with Shift + Enter
            return;
        } else if (e.key === 'Enter') {
            e.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <div className="min-h-screen w-full bg-slate-700 flex flex-col" >
            {/* Tool Selection Bar */}
            <div className="flex justify-center gap-4 pt-8 pb-16">
                {tools.map((tool) => (
                    <button
                        key={tool.name}
                        onClick={() => handleToolClick(tool.name)}
                        className={`px-6 py-3 rounded-lg font-medium text-lg transition-all ${selectedTool === tool.name
                            ? 'bg-blue-500 text-white'
                            : 'bg-white text-gray-800 hover:bg-gray-100'
                            }`}
                    >
                        {tool.name}
                    </button>
                ))}
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col items-center justify-center px-8">
                <div className="text-center mb-32">
                    <h1 className="text-6xl font-bold text-blue-400 mb-4">
                        Hello,
                    </h1>
                    <p className="text-2xl text-gray-400">
                        How Can I Help You Today
                    </p>
                </div>
            </div>

            {/* Message Input Bar */}
            <div className="border-t border-gray-600 p-6">
                <div className="max-w-6xl mx-auto">
                    <div className='flex items-center  gap-5'>
                        {/* Attachment Button */}
                        <button className="p-4 text-gray-400 hover:text-white transition-colors">
                            <Paperclip className="w-5 h-5" />
                        </button>
                        <div className="relative w-full flex items-center bg-slate-600 rounded-lg" >
                            {/* Message Input */}
                            <input
                                type="text"
                                placeholder="Type your message..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                onKeyPress={handleKeyPress}
                                className="flex-1 bg-transparent  text-white placeholder-gray-400 px-4 py-4 focus:outline-none text-base"
                            />
                        </div>
                        <div className='flex '>
                            {/* Voice Button */}
                            <button className="p-4 text-gray-400 hover:text-white transition-colors">
                                <Mic className="w-5 h-5" />
                            </button>

                            {/* Send Button */}
                            <button
                                onClick={handleSendMessage}
                                className="p-4 text-gray-400 hover:text-white transition-colors"
                            >
                                <Send className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RealChat;