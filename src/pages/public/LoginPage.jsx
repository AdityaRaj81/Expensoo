import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { Eye, EyeOff } from 'lucide-react';
import { loginUser, clearError } from '../../store/slices/authSlice';
import logo from '../../assets/Logo_icon.png';

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

  useEffect(() => {
    dispatch(clearError());
  }, [dispatch]);

  useEffect(() => {
    if (error) toast.error(error);
  }, [error]);

  const onSubmit = async (data) => {
    try {
      const response = await dispatch(
        loginUser({
          email: data.email,
          password: data.password,
          rememberMe
        })
      ).unwrap();

      localStorage.setItem('token', response.token);
      localStorage.setItem('user', JSON.stringify(response.user));

      toast.success('Welcome back!');
      navigate('/app');
    } catch {
      toast.error('Login failed');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex items-center justify-center px-2 sm:px-4">
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
              Welcome Back 👋
            </h1>
            <p className="text-blue-600 text-sm sm:text-base">
              Sign in to continue managing your expenses
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="email" className="form-label">Email Address</label>
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
                <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div className="relative">
              <label htmlFor="password" className="form-label">Password</label>
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
                className="absolute right-3 top-1/2 -translate-y-1/5 flex items-center text-gray-400 hover:text-blue-600"
                tabIndex={-1}
                onClick={() => setShowPassword((v) => !v)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                style={{ height: '2rem', width: '2rem' }}
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
              {errors.password && (
                <p className="mt-1 text-xs text-red-500">{errors.password.message}</p>
              )}

            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm cursor-pointer">
                <input
                  type="checkbox"
                  className="form-checkbox mr-2 accent-blue-600"
                  checked={rememberMe}
                  onChange={() => setRememberMe((v) => !v)}
                />
                Remember me
              </label>
              <Link
                to="/forgot-password"
                className="text-blue-600 hover:text-blue-800 font-medium text-sm"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full py-3 rounded-xl text-base font-semibold shadow-md hover:shadow-lg transition-all duration-300"
              disabled={loading}
            >
              {loading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>

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
          </div>
        </div>
      </div >
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
        }
      `}</style>
    </div >
  );
}

export default LoginPage;
