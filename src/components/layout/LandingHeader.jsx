import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Sparkles, Shield, Zap } from 'lucide-react';

function LandingHeader() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSection, setCurrentSection] = useState('hero');

  // Handle scroll effects and section detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 10);

      // Detect current section for anchor links
      if (location.pathname === '/') {
        const sections = ['hero', 'features', 'testimonials', 'pricing', 'faq'];
        const currentPos = scrollY + 100;

        sections.forEach(section => {
          const element = document.getElementById(section);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (currentPos >= offsetTop && currentPos < offsetTop + offsetHeight) {
              setCurrentSection(section);
            }
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Smart navigation items based on current page
  const getNavItems = () => {
    if (location.pathname === '/') {
      // Super landing page - use anchor links
      return [
        { path: '#features', label: 'Features', isAnchor: true, section: 'features' },
        { path: '#pricing', label: 'Pricing', isAnchor: true, section: 'pricing' },
        { path: '#faq', label: 'FAQ', isAnchor: true, section: 'faq' },

      ];
    } else {
      // Other pages - use regular navigation
      return [
        { path: '/features', label: 'Features', isAnchor: false },
        { path: '/pricing', label: 'Pricing', isAnchor: false },
        { path: '/faq', label: 'FAQ', isAnchor: false }

      ];
    }
  };

  const navItems = getNavItems();

  // Handle anchor link clicks
  const handleAnchorClick = (e, path, section) => {
    if (path.startsWith('#')) {
      e.preventDefault();
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setCurrentSection(section);
      }
    }
    setIsMobileMenuOpen(false);
  };

  // Check if nav item is active
  const isNavItemActive = (item) => {
    if (item.isAnchor && location.pathname === '/') {
      return currentSection === item.section;
    }
    return location.pathname === item.path;
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-200/60'
        : 'bg-white/90 backdrop-blur-lg shadow-lg border-b border-gray-200/40'
        }`}>

        {/* Top notification bar (optional) */}
        {location.pathname === '/' && !isScrolled && (
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-white py-2 px-4 text-center text-sm font-medium animate-gradient-x">
            <div className="flex items-center justify-center space-x-2">
              <Sparkles className="w-4 h-4" />
              <span>🎉 Limited Time: Get 3 months free with annual plan!</span>
              <span className="hidden sm:inline">→ Save 40% today</span>
            </div>
          </div>
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex justify-between items-center h-16 sm:h-18 lg:h-20">

            {/* Enhanced Logo Section */}
            <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group">
              <div className="relative">
                {/* Main logo container */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-blue-600 rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <img
                    src="./public/logo_1.png"
                    alt="Expensoo Logo"
                    className="w-6 h-6 sm:w-7 sm:h-7 object-contain filter brightness-0 invert transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Animated glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-400 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-30 blur-lg transition-all duration-500 -z-10"></div>

                {/* Success indicator dot */}
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white shadow-sm animate-pulse"></div>
              </div>

              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent group-hover:from-blue-500 group-hover:to-purple-600 transition-all duration-300">
                  Expensoo
                </span>
                <span className="text-xs text-gray-500 font-medium -mt-1 hidden sm:block">
                  Smart Finance
                </span>
              </div>
            </Link>

            {/* Enhanced Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1 bg-gray-50/80 backdrop-blur-sm rounded-2xl p-2 border border-gray-200/60">
              {navItems.map((item) => {
                const isActive = isNavItemActive(item);
                return item.isAnchor ? (
                  <button
                    key={item.path}
                    onClick={(e) => handleAnchorClick(e, item.path, item.section)}
                    className={`relative px-5 py-2.5 font-medium text-sm xl:text-base transition-all duration-300 rounded-xl group ${isActive
                      ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-white/80 hover:shadow-md'
                      }`}
                  >
                    <span className="relative z-10">{item.label}</span>

                    {/* Active indicator */}
                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-90 -z-10 animate-pulse"></div>
                    )}

                    {/* Hover effect */}
                    {!isActive && (
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                    )}
                  </button>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`relative px-5 py-2.5 font-medium text-sm xl:text-base transition-all duration-300 rounded-xl group ${isActive
                      ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-white/80 hover:shadow-md'
                      }`}
                  >
                    <span className="relative z-10">{item.label}</span>

                    {/* Active indicator */}
                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-90 -z-10"></div>
                    )}

                    {/* Hover effect */}
                    {!isActive && (
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Enhanced Desktop Auth Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              {/* Sign In Button */}
              <Link
                to="/login"
                className="px-5 py-2.5 text-sm xl:text-base font-medium text-gray-700 hover:text-blue-600 transition-all duration-300 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-200"
              >
                Sign In
              </Link>

              {/* Enhanced Get Started Button */}
              <Link
                to="/register"
                className="relative group px-6 xl:px-8 py-2.5 xl:py-3 text-sm xl:text-base font-semibold text-white bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Get Started Free</span>
                  <Zap className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                </span>

                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Success badge */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full border-2 border-white flex items-center justify-center">
                  <span className="text-xs font-bold text-green-800">✓</span>
                </div>
              </Link>
            </div>

            {/* Enhanced Mobile Menu Button */}
            <button
              className="lg:hidden relative p-3 rounded-xl hover:bg-gray-100 transition-all duration-300 group"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              <div className="w-6 h-6 relative">
                {/* Animated hamburger/close icon */}
                <span className={`absolute top-1 left-0 w-6 h-0.5 bg-gray-700 transition-all duration-300 rounded-full ${isMobileMenuOpen ? 'rotate-45 translate-y-2.5 bg-blue-600' : ''
                  }`}></span>
                <span className={`absolute top-3 left-0 w-6 h-0.5 bg-gray-700 transition-all duration-300 rounded-full ${isMobileMenuOpen ? 'opacity-0 scale-0' : ''
                  }`}></span>
                <span className={`absolute top-5 left-0 w-6 h-0.5 bg-gray-700 transition-all duration-300 rounded-full ${isMobileMenuOpen ? '-rotate-45 -translate-y-2.5 bg-blue-600' : ''
                  }`}></span>
              </div>
            </button>
          </nav>

          {/* Enhanced Mobile Menu */}
          <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${isMobileMenuOpen
            ? 'max-h-screen opacity-100 transform translate-y-0'
            : 'max-h-0 opacity-0 transform -translate-y-4'
            }`}>
            <div className="py-6 border-t border-gray-200/60 bg-white/95 backdrop-blur-xl rounded-b-3xl shadow-2xl mx-4 mt-4">
              <div className="flex flex-col space-y-2">
                {navItems.map((item, index) => {
                  const isActive = isNavItemActive(item);
                  const Component = item.isAnchor ? 'button' : Link;
                  const props = item.isAnchor
                    ? { onClick: (e) => handleAnchorClick(e, item.path, item.section) }
                    : { to: item.path };

                  return (
                    <Component
                      key={item.path}
                      {...props}
                      className={`relative px-6 py-4 font-medium text-base transition-all duration-300 rounded-2xl mx-4 group ${isActive
                        ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg transform scale-105'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:scale-102'
                        }`}
                      style={{
                        animationDelay: `${index * 100}ms`,
                        animation: isMobileMenuOpen ? 'slideInUp 400ms ease-out forwards' : 'none'
                      }}
                    >
                      <span className="relative z-10 flex items-center justify-between">
                        {item.label}
                        {isActive && (
                          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        )}
                      </span>

                      {/* Active indicator */}
                      {isActive && (
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-20 animate-pulse"></div>
                      )}
                    </Component>
                  );
                })}

                {/* Enhanced Mobile Auth Buttons */}
                <div className="px-4 pt-6 mt-6 border-t border-gray-200/60 space-y-4">
                  <Link
                    to="/login"
                    className="block w-full px-6 py-4 text-center font-medium text-gray-700 hover:text-blue-600 border-2 border-gray-200 hover:border-blue-300 rounded-2xl transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:scale-102"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/register"
                    className="relative group block w-full px-6 py-4 text-center font-semibold text-white bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="relative z-10 flex items-center justify-center space-x-2">
                      <span>Get Started Free</span>
                      <Sparkles className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </Link>
                </div>

                {/* Trust indicators for mobile */}
                <div className="px-4 pt-4 flex items-center justify-center space-x-6 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Shield className="w-4 h-4 text-green-500" />
                    <span>Secure</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Zap className="w-4 h-4 text-blue-500" />
                    <span>Fast Setup</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="w-4 h-4 text-purple-500">💎</span>
                    <span>Premium</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu backdrop */}
        {isMobileMenuOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black/40 backdrop-blur-sm -z-10 transition-opacity duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
        )}
      </header>

      {/* Progress indicator for super landing page */}
      {location.pathname === '/' && isScrolled && (
        <div className="fixed top-20 left-0 right-0 z-40 h-1 bg-gray-200">
          <div
            className="h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300"
            style={{
              width: `${Math.min(100, (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100)}%`
            }}
          ></div>
        </div>
      )}

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes gradient-x {
          0%, 100% { 
            background-size: 200% 200%; 
            background-position: left center; 
          }
          50% { 
            background-size: 200% 200%; 
            background-position: right center; 
          }
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }

        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }

        /* Smooth scrolling enhancement */
        html {
          scroll-behavior: smooth;
        }

        /* Custom focus styles for accessibility */
        button:focus,
        a:focus {
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
        }

        /* Backdrop blur fallback */
        @supports not (backdrop-filter: blur(12px)) {
          .backdrop-blur-lg {
            background-color: rgba(255, 255, 255, 0.95);
          }
          .backdrop-blur-xl {
            background-color: rgba(255, 255, 255, 0.98);
          }
        }
      `}</style>
    </>
  );
}

export default LandingHeader;