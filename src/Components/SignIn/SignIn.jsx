import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { message } from 'antd';
import { useLoginMutation } from '../../redux/features/auth/authApi';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loggedUser } from '../../redux/features/auth/authSlice';

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [login, { isLoading }] = useLoginMutation();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const loginData = {
      email,
      password,
    };

    try {
      const result = await login(loginData).unwrap();
      console.log('Login success:', result);
      
      if (result) {
        // Show success message
        message.success(result.message || 'Logged in successfully');
        
        // Extract email and accessToken from response
        const user = result?.email;
        const token = result?.accessToken;
        
        // Dispatch to Redux store
        dispatch(loggedUser({ user, token }));
        
        // Navigate to home page
        navigate("/dashboard");
      }
    } catch (error) {
      console.error('Login failed:', error);
      message.error(error?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-center py-6 px-4 sm:px-6 lg:px-8">
      <div className="w-full bg-white p-6 sm:p-8 rounded-xl shadow-lg max-w-sm sm:max-w-md">
        {/* Logo Section */}
        <div className="text-center mb-4 sm:mb-6">
          <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-blue-100 rounded-full mb-3 sm:mb-4">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xs sm:text-sm">N</span>
            </div>
          </div>
        </div>

        {/* Welcome Text */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
            Hello, Welcome!
          </h1>
          <p className="text-sm sm:text-base text-gray-600">
            Please sign in to your account
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4 sm:space-y-6">
          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              required
              className="w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 text-gray-900 placeholder-gray-400 text-sm sm:text-base"
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
                name="password"
                placeholder="Enter your password"
                required
                className="w-full px-3 py-2.5 sm:px-4 sm:py-3 pr-10 sm:pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 text-gray-900 placeholder-gray-400 text-sm sm:text-base"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff size={18} className="sm:w-5 sm:h-5" /> : <Eye size={18} className="sm:w-5 sm:h-5" />}
              </button>
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
              />
              <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-700 cursor-pointer">
                Remember Me
              </label>
            </div>
            {/* <button 
              type="button" 
              className="text-sm text-blue-600 hover:text-blue-800 transition-colors text-left sm:text-right"
            >
              Forgot Password?
            </button> */}
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 text-white py-2.5 sm:py-3 px-4 rounded-lg font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-600 text-sm sm:text-base"
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Logging in...
              </span>
            ) : (
              'Login'
            )}
          </button>

          {/* Sign Up Link */}
          <div className="text-center pt-2 sm:pt-4">
            <span className="text-gray-600 text-sm">Don't have an account? </span>
            <a href='/signUp'
              type="button" 
              className="text-blue-600 text-sm hover:text-blue-800 transition-colors font-medium hover:underline"
            >
              Sign up
            </a>
          </div>
        </form>
      </div>

    </div>
  );
};

export default SignIn;