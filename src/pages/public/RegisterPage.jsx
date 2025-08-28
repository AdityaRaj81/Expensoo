import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { Eye, EyeOff, User, Mail, Lock, CheckCircle } from 'lucide-react';
import { registerUser, clearError } from '../../store/slices/authSlice';
import logo from '../../assets/Logo_icon.png';

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const { loading, error } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const watchPassword = watch('password');

  useEffect(() => {
    dispatch(clearError());
  }, [dispatch]);

  useEffect(() => {
    if (error) toast.error(error);
  }, [error]);

  // ✅ Updated to match backend logic from 1st file
  const onSubmit = async (data) => {
    if (!acceptTerms) {
      toast.error('Please accept the terms and conditions');
      return;
    }

    try {
      // Pass same fields as old working SignupPage
      await dispatch(
        registerUser({
          name: data.fullName, // ✅ backend expects "name"
          email: data.email,
          password: data.password
        })
      ).unwrap();

      toast.success('Account created successfully! 🎉');
      navigate('/app'); // ✅ match old logic
    } catch {
      // Error handled in slice
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex items-center justify-center px-2 sm:px-4 py-4">
      <div className="max-w-md w-full">
        <div className="card p-4 sm:p-8 rounded-2xl shadow-xl">
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex flex-col items-center mb-6">
              <img
                src={logo}
                alt="Expensoo Logo"
                className="w-20 h-20 mb-2 object-contain drop-shadow-lg"
              />
              <span className="text-2xl font-heading font-bold gradient-text tracking-wide">Expensoo</span>
            </Link>
            <h1 className="text-2xl sm:text-3xl font-heading font-bold text-blue-900 mb-2">
              Create Your Account 🚀
            </h1>
            <p className="text-blue-600 text-sm sm:text-base">
              Start your journey to better financial management
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="form-label">
                <User className="inline w-4 h-4 mr-1" />
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                className={`form-input w-full ${errors.fullName ? 'border-red-400' : ''}`}
                placeholder="Enter your full name"
                autoComplete="name"
                {...register('fullName', {
                  required: 'Full name is required',
                  minLength: {
                    value: 2,
                    message: 'Name must be at least 2 characters'
                  }
                })}
              />
              {errors.fullName && (
                <p className="mt-1 text-xs text-red-500 flex items-center">
                  <span className="mr-1">⚠️</span>
                  {errors.fullName.message}
                </p>
              )}
            </div>

            {/* Email */}
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

            {/* Password */}
            <div className="relative">
              <label htmlFor="password" className="form-label">
                <Lock className="inline w-4 h-4 mr-1" />
                Password
              </label>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                className={`form-input w-full pr-12 ${errors.password ? 'border-red-400' : ''}`}
                placeholder="Create a strong password"
                autoComplete="new-password"
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 8,
                    message: 'Password must be at least 8 characters'
                  },
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
                    message: 'Password must contain uppercase, lowercase and number'
                  }
                })}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/5 flex items-center text-gray-400 hover:text-blue-600"
                tabIndex={-1}
                onClick={() => setShowPassword((v) => !v)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                style={{ height: '2rem', width: '2rem' }}
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
              {errors.password && (
                <p className="mt-1 text-xs text-red-500 flex items-center">
                  <span className="mr-1">⚠️</span>
                  {errors.password.message}
                </p>
              )}

              {/* Password Strength Indicator */}
              {watchPassword && (
                <div className="mt-2 space-y-1">
                  <div className="text-xs text-gray-600">Password strength:</div>
                  <div className="flex space-x-1">
                    <div className={`h-1 flex-1 rounded ${watchPassword.length >= 8 ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                    <div className={`h-1 flex-1 rounded ${/[A-Z]/.test(watchPassword) ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                    <div className={`h-1 flex-1 rounded ${/[0-9]/.test(watchPassword) ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                    <div className={`h-1 flex-1 rounded ${/[^A-Za-z0-9]/.test(watchPassword) ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                  </div>
                </div>
              )}
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <label htmlFor="confirmPassword" className="form-label">
                <Lock className="inline w-4 h-4 mr-1" />
                Confirm Password
              </label>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                id="confirmPassword"
                className={`form-input w-full pr-12 ${errors.confirmPassword ? 'border-red-400' : ''}`}
                placeholder="Confirm your password"
                autoComplete="new-password"
                {...register('confirmPassword', {
                  required: 'Please confirm your password',
                  validate: (value) => value === watchPassword || 'Passwords do not match'
                })}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/5 flex items-center text-gray-400 hover:text-blue-600"
                tabIndex={-1}
                onClick={() => setShowConfirmPassword((v) => !v)}
                aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                style={{ height: '2rem', width: '2rem' }}
              >
                {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
              {errors.confirmPassword && (
                <p className="mt-1 text-xs text-red-500 flex items-center">
                  <span className="mr-1">⚠️</span>
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-start space-x-2">
              <input
                type="checkbox"
                id="acceptTerms"
                className="mt-1 form-checkbox accent-blue-600"
                checked={acceptTerms}
                onChange={() => setAcceptTerms((v) => !v)}
              />
              <label htmlFor="acceptTerms" className="text-sm text-gray-600 cursor-pointer">
                I agree to the{' '}
                <Link to="/terms" className="text-blue-600 hover:text-blue-800 font-medium">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link to="/privacy" className="text-blue-600 hover:text-blue-800 font-medium">
                  Privacy Policy
                </Link>
              </label>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full py-3 rounded-xl text-base font-semibold shadow-md hover:shadow-lg transition-all duration-300"
              disabled={loading || !acceptTerms}
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Creating Account...
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Create Account
                </span>
              )}
            </button>
          </form>

          <div className="mt-6 text-center space-y-4">
            <p className="text-blue-600 text-sm">
              Already have an account?{' '}
              <Link
                to="/login"
                className="text-purple-600 hover:text-purple-800 font-medium"
              >
                Sign in here
              </Link>
            </p>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center space-x-4 text-xs text-gray-500 mt-4">
              <span className="flex items-center">
                <Lock className="w-3 h-3 mr-1" />
                Secure
              </span>
              <span className="flex items-center">
                <CheckCircle className="w-3 h-3 mr-1" />
                Trusted
              </span>
              <span className="flex items-center">
                ⚡ Fast Setup
              </span>
            </div>
          </div>
        </div>
      </div>

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
          background: linear-gradient(90deg, #3b82f6, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .form-input {
          border-radius: 0.75rem;
          border: 1px solid #e5e7eb;
          background: #f9fafb;
          transition: border 0.2s;
        }
        .form-input:focus {
          border-color: #3b82f6;
          outline: none;
        }
        .form-label {
          font-size: 1rem;
          font-weight: 500;
          color: #374151;
          margin-bottom: 0.5rem;
          display: block;
        }
        .btn-primary {
          background: linear-gradient(90deg, #3b82f6, #8b5cf6);
          color: #fff;
          border: none;
        }
        .btn-primary:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}

export default RegisterPage;
