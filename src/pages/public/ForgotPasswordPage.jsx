import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowLeft, CheckCircle } from 'lucide-react';
import logo from '../../assets/Logo_icon.png';

function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex items-center justify-center px-2 sm:px-4">
        <div className="max-w-md w-full">
          <div className="card p-4 sm:p-8 rounded-2xl shadow-xl text-center">
            {/* Success Icon */}
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>

            {/* Logo */}
            <Link to="/" className="inline-flex flex-col items-center mb-6">
              <img
                src={logo}
                alt="Expensoo Logo"
                className="w-16 h-16 mb-2 object-contain drop-shadow-lg"
              />
              <span className="text-xl font-heading font-bold gradient-text tracking-wide">Expensoo</span>
            </Link>

            <h1 className="text-2xl sm:text-3xl font-heading font-bold text-blue-900 mb-4">
              Check Your Email! 📧
            </h1>
            <p className="text-blue-600 text-sm sm:text-base mb-2">
              We've sent a password reset link to:
            </p>
            <p className="text-gray-800 font-semibold mb-8 bg-gray-100 px-4 py-2 rounded-lg">
              {email}
            </p>

            <div className="space-y-4">
              <Link
                to="/login"
                className="btn btn-primary w-full py-3 rounded-xl text-base font-semibold shadow-md hover:shadow-lg transition-all duration-300"
              >
                <ArrowLeft className="w-5 h-5 mr-2 inline" />
                Back to Sign In
              </Link>

              <button
                onClick={() => setIsSubmitted(false)}
                className="w-full py-3 text-blue-600 hover:text-blue-800 font-medium transition-colors"
              >
                Try different email
              </button>
            </div>

            {/* Help Text */}
            <div className="mt-6 p-4 bg-blue-50 rounded-xl">
              <p className="text-sm text-blue-700">
                <strong>Didn't receive the email?</strong><br />
                Check your spam folder or wait a few minutes and try again.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
              Reset Your Password 🔐
            </h1>
            <p className="text-blue-600 text-sm sm:text-base">
              Enter your email address and we'll send you a secure link to reset your password
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="form-label">
                <Mail className="inline w-4 h-4 mr-1" />
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your registered email"
                required
                autoComplete="email"
              />
              <p className="mt-1 text-xs text-gray-500">
                We'll send reset instructions to this email
              </p>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full py-3 rounded-xl text-base font-semibold shadow-md hover:shadow-lg transition-all duration-300"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending Reset Link...
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  <Mail className="w-5 h-5 mr-2" />
                  Send Reset Link
                </span>
              )}
            </button>
          </form>

          <div className="mt-6 text-center space-y-4">
            <p className="text-blue-600 text-sm">
              Remember your password?{' '}
              <Link
                to="/login"
                className="text-purple-600 hover:text-purple-800 font-medium"
              >
                Sign in here
              </Link>
            </p>

            <p className="text-blue-600 text-sm">
              Don't have an account?{' '}
              <Link
                to="/register"
                className="text-purple-600 hover:text-purple-800 font-medium"
              >
                Create one now
              </Link>
            </p>

            {/* Security Info */}
            <div className="mt-6 p-4 bg-blue-50 rounded-xl">
              <div className="flex items-center justify-center space-x-4 text-xs text-blue-700">
                <span className="flex items-center">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  Secure Reset
                </span>
                <span className="flex items-center">
                  🔒 Encrypted
                </span>
                <span className="flex items-center">
                  ⚡ Instant
                </span>
              </div>
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
          padding: 0.75rem 1rem;
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

export default ForgotPasswordPage;