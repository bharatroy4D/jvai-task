import React, { useState } from 'react';
import { UserPlus } from 'lucide-react';

const Users = () => {
    const [email, setEmail] = useState('');

    const handleInvite = () => {
        if (email) {
            console.log('Inviting:', email);
            setEmail('');
        }
    };

    return (
        <div className="min-h-screen w-full bg-[#314158] p-15">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <h1 className="text-white text-4xl font-bold mb-8">User Management</h1>

                {/* Invite Section */}
                <div className="flex gap-4 mb-8">
                    <input
                        type="email"
                        placeholder="Invite others by email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-1 bg-slate-600 text-white placeholder-slate-400 px-6 py-3 rounded-lg border-none outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                    />
                    <button
                        onClick={handleInvite}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold text-lg flex items-center gap-2 transition-colors"
                    >
                        <UserPlus size={20} />
                        Invite
                    </button>
                </div>

                {/* Empty State */}
                <div className="bg-[#45556C] rounded-lg p-6 text-center">
                    <p className="text-slate-400 text-xl">No users have been invited yet.</p>
                </div>
            </div>
        </div>
    );
}
export default Users;