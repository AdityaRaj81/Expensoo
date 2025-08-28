import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { Eye, EyeOff, Mail, Lock, CheckCircle } from 'lucide-react';
import { loginUser, clearError } from '../store/slices/authSlice';
import logo from '../assets/Logo_icon.png';

function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const { loading, error } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  // ✅ clear errors when component mounts
  useEffect(() => {
    dispatch(clearError());
  }, [dispatch]);

  // ✅ show toast on error
  useEffect(() => {
    if (error) toast.error(error);
  }, [error]);

  // ✅ main login submit (backend connection logic from 1st)
  const onSubmit = async (data) => {
    try {
      const response = await dispatch(loginUser(data)).unwrap();

      localStorage.setItem('token', response.token);
      localStorage.setItem('user', JSON.stringify(response.user));

      toast.success('Welcome back! 🎉');
      navigate('/dashboard'); // kept from 1st file (correct path)
    } catch {
      toast.error('Login failed');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex items-center justify-center px-2 sm:px-4">
      <div className="max-w-md w-full">
        <div className="card p-4 sm:p-8 rounded-2xl shadow-xl">
          {/* ✅ Header with Logo */}
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex flex-col items-center mb-6">
              <div className="relative">
                <img
                  src={logo}
                  alt="Expensoo Logo"
                  className="w-20 h-20 mb-2 object-contain drop-shadow-lg"
                />
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 blur-lg"></div>
              </div>
              <span className="text-2xl font-heading font-bold gradient-text tracking-wide">
                Expensoo
              </span>
            </Link>
            <h1 className="text-2xl sm:text-3xl font-heading font-bold text-blue-900 mb-2">
              Welcome Back! 👋
            </h1>
            <p className="text-blue-600 text-sm sm:text-base">
              Sign in to continue managing your expenses
            </p>
          </div>

          {/* ✅ Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="form-label">
                <Mail className="inline w-4 h-4 mr-1" />
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className={`form-input w-full ${errors.email ? 'border-red-400' : ''}`}
                placeholder="Enter your email"
                autoComplete="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Invalid email address'
                  }
                })}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-500 flex items-center">
                  <span className="mr-1">⚠️</span>
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div className="relative">
              <label htmlFor="password" className="form-label">
                <Lock className="inline w-4 h-4 mr-1" />
                Password
              </label>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                className={`form-input w-full pr-12 ${errors.password ? 'border-red-400' : ''}`}
                placeholder="Enter your password"
                autoComplete="current-password"
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters'
                  }
                })}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-600 transition-colors p-1 rounded-md hover:bg-gray-100"
                tabIndex={-1}
                onClick={() => setShowPassword((v) => !v)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
              {errors.password && (
                <p className="mt-1 text-xs text-red-500 flex items-center">
                  <span className="mr-1">⚠️</span>
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mr-2"
                  checked={rememberMe}
                  onChange={() => setRememberMe((v) => !v)}
                />
                <span className="text-gray-600">Remember me</span>
              </label>
              <Link
                to="/forgot-password"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn-primary w-full py-3 rounded-xl text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing In...
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Sign In
                </span>
              )}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-6 text-center space-y-4">
            <p className="text-blue-600 text-sm">
              Don't have an account?{' '}
              <Link
                to="/register"
                className="text-purple-600 hover:text-purple-800 font-medium"
              >
                Sign up here
              </Link>
            </p>

            <div className="flex items-center justify-center space-x-4 text-xs text-gray-500 mt-4">
              <span className="flex items-center">
                <Lock className="w-3 h-3 mr-1" />
                Secure
              </span>
              <span className="flex items-center">
                <CheckCircle className="w-3 h-3 mr-1" />
                Trusted
              </span>
              <span className="flex items-center">⚡ Fast Login</span>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Custom Styles */}
      <style>{`
        .card {
          background: #fff;
        }
        @media (max-width: 640px) {
          .card {
            padding: 1rem;
            border-radius: 1.25rem;
          }
          .form-input {
            font-size: 1rem;
            padding: 0.75rem 1rem;
          }
          .w-20 {
            width: 5rem !important;
            height: 5rem !important;
          }
        }
        .gradient-text {
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #3b82f6 100%);
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .form-input {
          padding: 0.875rem 1rem;
          border: 2px solid #e5e7eb;
          border-radius: 0.75rem;
          background: #f9fafb;
          font-size: 1rem;
          transition: all 0.3s ease;
          width: 100%;
        }
        .form-input:focus {
          border-color: #3b82f6;
          background: #ffffff;
          outline: none;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }
        .form-input::placeholder {
          color: #9ca3af;
        }
        .form-label {
          display: block;
          font-size: 0.875rem;
          font-weight: 600;
          color: #374151;
          margin-bottom: 0.5rem;
        }
        .btn-primary {
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
          color: white;
          border: none;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        .btn-primary:hover:not(:disabled) {
          background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
        }
        .btn-primary:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

export default LoginPage;
