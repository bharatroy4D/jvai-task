import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import img from '../../assets/Nil vyaa-01 1.png'

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const handleLogin = () => {
        console.log('Login attempt:', { email, password, rememberMe });
    };

    return (
        <div className="min-h-screen bg-gray-200 flex flex-col items-center justify-center py-10 px-4">
            <div className="w-full bg-white p-5 rounded-md shadow max-w-md">
                {/* Logo/Icon */}
                <div className="text-center mb-3">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                        <img src={img} alt="" className='w-60' />
                    </div>
                </div>

                {/* Welcome Text */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">Hello, Welcome!</h1>
                </div>

                {/* Form */}
                <div className="space-y-6">
                    {/* Email Field */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Your Email
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter Email"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-gray-900 placeholder-gray-400"
                        />
                    </div>

                    {/* Password Field */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter Password"
                                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-gray-900 placeholder-gray-400"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                    </div>

                    {/* Remember Me & Forgot Password */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                            />
                            <label className="ml-2 text-sm text-gray-700">
                                Remember Me
                            </label>
                        </div>
                        <button className="text-sm text-blue-600 hover:text-blue-800">
                            Forgot Password?
                        </button>
                    </div>

                    {/* Login Button */}
                    <button
                        onClick={handleLogin}
                        className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                    >
                        Login
                    </button>

                    {/* Sign Up Link */}
                    <div className="text-center">
                        <span className="text-gray-600 text-sm">create account, </span>
                        <button className="text-blue-600 text-sm hover:text-blue-800">
                            sign up
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SignIn;