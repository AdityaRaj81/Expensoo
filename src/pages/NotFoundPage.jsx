import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Home, MessageCircle, Sparkles, Star } from 'lucide-react';
import logo from '../assets/Logo_icon.png';

function NotFoundPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center px-4 relative overflow-hidden">

      {/* Interactive Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs */}
        <div className="floating-orb orb-1"></div>
        <div className="floating-orb orb-2"></div>
        <div className="floating-orb orb-3"></div>
        <div className="floating-orb orb-4"></div>
        <div className="floating-orb orb-5"></div>

        {/* Interactive Mouse Follower */}
        <div
          className="fixed w-64 h-64 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl pointer-events-none transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 128,
            top: mousePosition.y - 128,
            transform: 'translate3d(0, 0, 0)'
          }}
        />
      </div>

      <div className="text-center relative z-10 max-w-4xl mx-auto">

        {/* Page Title / Branding */}
        <div className="mt-12 mb-12 animate-slide-down opacity-0">
          <span className="text-3xl sm:text-4xl font-extrabold gradient-text tracking-widest drop-shadow-lg">
            Expensoo
          </span>
        </div>







        {/* Animated 404 */}
        <div className="relative">

          {/* Decorative Elements around 404 */}
          <div className="absolute -top-8 -left-8 animate-spin-slow">
            <Star className="w-8 h-8 text-yellow-400 fill-current" />
          </div>
          <div className="absolute -top-4 -right-12 animate-pulse">
            <Sparkles className="w-6 h-6 text-pink-400" />
          </div>
          <div className="absolute -bottom-6 left-1/4 animate-bounce">
            <div className="w-4 h-4 bg-green-400 rounded-full"></div>
          </div>

          {/* Custom 404 with Logo */}
          <div className="flex justify-center items-center gap-4 mb-16">
            <span className={`text-8xl sm:text-9xl lg:text-[12rem] font-black gradient-text-large ${isAnimating ? 'animate-bounce-in' : ''}`}>
              4
            </span>
            <img
              src={logo}
              alt="Expensoo Logo 0"
              className="w-20 h-20 sm:w-28 sm:h-28 lg:w-40 lg:h-40 object-contain drop-shadow-lg animate-bounce-in "
            />
            <span className={`text-8xl sm:text-9xl lg:text-[12rem] font-black gradient-text-large ${isAnimating ? 'animate-bounce-in' : ''}`}>
              4
            </span>
          </div>

          {/* Glitch Effect Lines */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-1 bg-gradient-to-r from-transparent via-red-400 to-transparent opacity-30 animate-glitch"></div>
          </div>
        </div>



        {/* Main Content */}
        <div className="space-y-6 animate-fade-in-up">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
            Oops! Page Not Found
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            The page you're looking for seems to have wandered off into the digital void.
            But don't worry, we'll help you find your way back to managing your expenses!
          </p>
        </div>

        {/* Spacer to preserve layout after removing search box */}
        <div className="my-8"></div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up">
          <Link
            to="/"
            className="group relative flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 min-w-[180px]"
          >
            <Home className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" />
            Go Home
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          </Link>

          <Link
            to="/contact"
            className="group flex items-center px-8 py-4 bg-white text-gray-700 font-semibold rounded-2xl shadow-lg hover:shadow-xl border-2 border-gray-200 hover:border-blue-300 transform hover:scale-105 transition-all duration-300 min-w-[180px]"
          >
            <MessageCircle className="w-5 h-5 mr-3 group-hover:bounce transition-transform duration-300" />
            Get Help
          </Link>
        </div>

        {/* Quick Navigation Links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto animate-fade-in">
          <Link
            to="/features"
            className="group p-6 bg-white/60 backdrop-blur-sm rounded-2xl hover:bg-white/80 transition-all duration-300 hover:shadow-lg border border-white/30"
          >
            <div className="text-2xl mb-2">💰</div>
            <h3 className="font-semibold text-gray-800 mb-1">Features</h3>
            <p className="text-sm text-gray-600">Explore our tools</p>
          </Link>

          <Link
            to="/pricing"
            className="group p-6 bg-white/60 backdrop-blur-sm rounded-2xl hover:bg-white/80 transition-all duration-300 hover:shadow-lg border border-white/30"
          >
            <div className="text-2xl mb-2">📊</div>
            <h3 className="font-semibold text-gray-800 mb-1">Pricing</h3>
            <p className="text-sm text-gray-600">View our plans</p>
          </Link>

          <Link
            to="/about"
            className="group p-6 bg-white/60 backdrop-blur-sm rounded-2xl hover:bg-white/80 transition-all duration-300 hover:shadow-lg border border-white/30"
          >
            <div className="text-2xl mb-2">🚀</div>
            <h3 className="font-semibold text-gray-800 mb-1">About</h3>
            <p className="text-sm text-gray-600">Learn more</p>
          </Link>
        </div>

        {/* Fun Stats or Message */}
        <div className="mt-12 p-6 bg-gradient-to-r from-blue-100/80 to-purple-100/80 backdrop-blur-sm rounded-2xl border border-white/30 animate-fade-in">
          <p className="text-gray-700 font-medium mb-2">
            🎯 While you're here, did you know?
          </p>
          <p className="text-sm text-gray-600">
            Over 50,000+ users trust Expensoo to manage their finances and save money every month!
          </p>
        </div>
      </div>

      <style>{`
        /* Gradient Text Animations */
        .gradient-text {
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #3b82f6 100%);
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .gradient-text-large {
          background: linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 25%, #45b7d1 50%, #f9ca24 75%, #ff6b6b 100%);
          background-size: 400% 400%;
          animation: rainbow-shift 4s ease infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          filter: drop-shadow(0 0 30px rgba(59, 130, 246, 0.3));
        }

        /* Keyframe Animations */
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes rainbow-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes bounce-in {
          0% { 
            transform: scale(0.3) rotate(-10deg);
            opacity: 0;
          }
          50% { 
            transform: scale(1.1) rotate(5deg);
          }
          70% { 
            transform: scale(0.9) rotate(-2deg);
          }
          100% { 
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
        }

        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes glitch {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-2px); }
          50% { transform: translateX(2px); }
          75% { transform: translateX(-1px); }
        }

        /* Animation Classes */
        .animate-fade-in-down { animation: fade-in-down 0.8s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animate-fade-in { animation: fade-in 1s ease-out forwards; }
        .animate-bounce-in { animation: bounce-in 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
        .animate-glitch { animation: glitch 2s infinite; }

        /* Floating Orbs */
        .floating-orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          animation: float 6s ease-in-out infinite;
        }

        .orb-1 {
          width: 120px;
          height: 120px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%);
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }

        .orb-2 {
          width: 80px;
          height: 80px;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%);
          top: 20%;
          right: 20%;
          animation-delay: 2s;
        }

        .orb-3 {
          width: 60px;
          height: 60px;
          background: radial-gradient(circle, rgba(236, 72, 153, 0.2) 0%, transparent 70%);
          bottom: 30%;
          left: 15%;
          animation-delay: 4s;
        }

        .orb-4 {
          width: 100px;
          height: 100px;
          background: radial-gradient(circle, rgba(34, 197, 94, 0.2) 0%, transparent 70%);
          bottom: 15%;
          right: 10%;
          animation-delay: 1s;
        }

        .orb-5 {
          width: 140px;
          height: 140px;
          background: radial-gradient(circle, rgba(251, 191, 36, 0.2) 0%, transparent 70%);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation-delay: 3s;
        }

        /* Responsive Design */
        @media (max-width: 640px) {
          .gradient-text-large {
            font-size: 6rem;
          }
          
          .floating-orb {
            display: none;
          }
        }

        /* Enhanced Hover Effects */
        .group:hover .animate-bounce {
          animation: bounce 0.6s infinite;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes slideDown {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-down {
  animation: slideDown 1s ease-out forwards;
}

      `}</style>
    </div>
  );
}

export default NotFoundPage;