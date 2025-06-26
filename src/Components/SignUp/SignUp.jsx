import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
// import img from '../../assets/Nil vyaa-01 1.png'
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useRegisterMutation } from '../../redux/features/auth/authApi';

const CreateAccountForm = () => {
  const navigate = useNavigate();
  const [singUp] = useRegisterMutation();
  
  // Add missing state variables
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const handleSingUP = async (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPasswordValue = form.confirmPassword.value;

    // Check if passwords match
    if (password !== confirmPasswordValue) {
      message.error('Passwords do not match');
      return;
    }

    const data = {
      email,
      password,
    };

    try {
      const result = await singUp(data).unwrap();
      console.log('Account Create  success:', result);
      if (result) {
        // Show success message
        alert('Account created successfully');
        // Navigate to OTP page
        navigate(`/otp?email=${email}`);
      }
    } catch (error) {
      console.error('Registration failed:', error);
      message.error(error?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center p-4">
      <div className="w-full bg-white p-5 rounded-md shadow max-w-md">
        {/* Form Container */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-2xl font-bold text-gray-900 text-center mb-2">
            Create account
          </h1>
          <p className="text-gray-600 text-center mb-8 text-sm leading-relaxed">
            Enter The Email Address Associated With Your Account. We'll Send You An OTP To Your Email.
          </p>

          {/* FIXED: Wrap inputs in a form element */}
          <form onSubmit={handleSingUP} className="space-y-4">
            {/* Email Field */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Your Email
              </label>
              <input
                type="email"
                name='email'
                placeholder="Enter Email"
                required
                className="text-black w-full px-4 py-1.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                New Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name='password'
                  placeholder="Enter New Password"
                  required
                  className="w-full px-4 py-1.5 pr-12 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Confirm Password Field */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name='confirmPassword'
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm New Password"
                  required
                  className="w-full text-black px-4 py-1.5 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* FIXED: Changed to type="submit" and moved inside form */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-1.5 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors focus:ring-4 focus:ring-blue-200 focus:outline-none"
            >
              Sign Up
            </button>
          </form>

          {/* Login Link */}
          <div className="text-center mt-6">
            <span className="text-gray-600 text-sm">
              Already Have An Account?{' '}
              <a href="/signIn" className="text-blue-600 hover:text-blue-700 font-medium">
                Login
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
} 

export default CreateAccountForm;