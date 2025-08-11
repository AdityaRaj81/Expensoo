import { Link } from 'react-router-dom';
import { Heart, ArrowUp, Globe, Shield, Zap, TrendingUp, ExternalLink, Star, Users, Award } from 'lucide-react';
import { useState, useEffect } from 'react';

function LandingFooter() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-green-900 to-emerald-900 text-white relative overflow-hidden">
      {/* Finance-themed Background */}
      <div className="absolute inset-0">
        {/* Main financial gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/40 via-emerald-900/30 to-slate-900/50"></div>

        {/* Money/Finance pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M30 5c13.807 0 25 11.193 25 25S43.807 55 30 55 5 43.807 5 30 16.193 5 30 5zm0 5c-11.046 0-20 8.954-20 20s8.954 20 20 20 20-8.954 20-20-8.954-20-20-20zm0 8a3 3 0 110 6 3 3 0 010-6zm0 10c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8 3.582-8 8-8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>

        {/* Animated chart/graph lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(45deg, rgba(34,197,94,0.2) 1px, transparent 1px),
              linear-gradient(-45deg, rgba(16,185,129,0.15) 1px, transparent 1px),
              linear-gradient(rgba(5,150,105,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px, 45px 45px, 60px 60px',
            animation: 'financialFlow 25s linear infinite'
          }} />
        </div>

        {/* Floating financial elements */}
        <div className="absolute inset-0">
          {/* Dollar signs floating */}
          <div className="absolute top-20 left-10 text-6xl font-bold text-green-400/10 animate-pulse" style={{ animationDelay: '0s', animationDuration: '4s' }}>₹</div>
          <div className="absolute top-60 right-20 text-4xl font-bold text-emerald-300/8 animate-pulse" style={{ animationDelay: '2s', animationDuration: '5s' }}>$</div>
          <div className="absolute bottom-40 left-1/4 text-5xl font-bold text-green-500/12 animate-pulse" style={{ animationDelay: '1s', animationDuration: '6s' }}>€</div>
          <div className="absolute bottom-80 right-1/3 text-3xl font-bold text-teal-400/10 animate-pulse" style={{ animationDelay: '3s', animationDuration: '4.5s' }}>¥</div>

          {/* Financial icons */}
          <div className="absolute top-32 right-40 text-2xl opacity-8 animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '3s' }}>💰</div>
          <div className="absolute top-80 left-40 text-xl opacity-6 animate-bounce" style={{ animationDelay: '2.5s', animationDuration: '4s' }}>📊</div>
          <div className="absolute bottom-60 right-60 text-2xl opacity-10 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3.5s' }}>📈</div>
          <div className="absolute bottom-32 left-60 text-xl opacity-8 animate-bounce" style={{ animationDelay: '3.5s', animationDuration: '5s' }}>💳</div>
        </div>

        {/* Budget-themed geometric shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-80 h-80 bg-gradient-to-br from-green-500/8 to-emerald-600/6 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-emerald-500/6 to-teal-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-gradient-to-br from-green-600/10 to-lime-600/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2.5s' }}></div>
          <div className="absolute bottom-40 right-1/3 w-88 h-88 bg-gradient-to-br from-teal-500/7 to-cyan-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3.5s' }}></div>
        </div>

        {/* Chart/graph pattern */}
        <div className="absolute inset-0 opacity-6">
          <svg className="absolute top-1/4 left-1/6 w-24 h-16 text-green-400/20" viewBox="0 0 100 60" fill="currentColor">
            <path d="M10 50 L20 40 L30 30 L40 25 L50 20 L60 15 L70 18 L80 12 L90 8" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
          <svg className="absolute top-1/2 right-1/4 w-20 h-12 text-emerald-400/15" viewBox="0 0 80 48" fill="currentColor">
            <path d="M5 40 L15 35 L25 28 L35 20 L45 25 L55 18 L65 12 L75 8" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
          <svg className="absolute bottom-1/3 left-1/3 w-28 h-18 text-teal-400/18" viewBox="0 0 110 70" fill="currentColor">
            <path d="M10 60 L25 45 L40 35 L55 30 L70 25 L85 20 L100 15" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        </div>

        {/* Expense tracker themed dots */}
        <div className="absolute inset-0 opacity-8" style={{
          backgroundImage: `radial-gradient(circle at 20% 30%, rgba(34,197,94,0.15) 2px, transparent 2px),
                           radial-gradient(circle at 70% 60%, rgba(16,185,129,0.12) 1.5px, transparent 1.5px),
                           radial-gradient(circle at 45% 80%, rgba(5,150,105,0.1) 1px, transparent 1px)`,
          backgroundSize: '120px 120px, 80px 80px, 150px 150px'
        }}></div>

        {/* Floating budget/expense particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/6 w-3 h-3 bg-green-400/25 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3.5s' }}></div>
          <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-emerald-300/30 rounded-full animate-bounce" style={{ animationDelay: '1.2s', animationDuration: '4.2s' }}></div>
          <div className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 bg-teal-400/20 rounded-full animate-bounce" style={{ animationDelay: '2.3s', animationDuration: '3.8s' }}></div>
          <div className="absolute top-3/4 right-1/6 w-1.5 h-1.5 bg-lime-300/35 rounded-full animate-bounce" style={{ animationDelay: '2.8s', animationDuration: '4.5s' }}></div>
        </div>

        {/* Financial calculator/ledger lines */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              repeating-linear-gradient(
                0deg,
                transparent,
                transparent 24px,
                rgba(34,197,94,0.1) 24px,
                rgba(34,197,94,0.1) 25px
              ),
              repeating-linear-gradient(
                90deg,
                transparent,
                transparent 80px,
                rgba(16,185,129,0.08) 80px,
                rgba(16,185,129,0.08) 81px
              )
            `
          }} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">

        {/* Top Stats Section */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1">10K+</h3>
            <p className="text-secondary-300 text-sm">Active Users</p>
          </div>
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1">₹50M+</h3>
            <p className="text-secondary-300 text-sm">Budget Managed</p>
          </div>
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300">
              <Award className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1">4.8/5</h3>
            <p className="text-secondary-300 text-sm">User Rating</p>
          </div>
        </div> */}

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12">

          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-6">
            <Link to="/" className="inline-flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl shadow-2xl group-hover:shadow-primary-500/25 transition-all duration-300 group-hover:scale-105">
                  <img
                    src="/Logo_icon.png"
                    alt="Expensoo Logo"
                    className="w-9 h-9 object-contain filter brightness-0 invert"
                  />
                </div>
                <div className="absolute -inset-2 bg-gradient-to-br from-primary-400/20 to-primary-600/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
              </div>
              <div>
                <span className="text-2xl font-heading font-bold bg-gradient-to-r from-white via-gray-100 to-secondary-200 bg-clip-text text-transparent group-hover:from-primary-300 group-hover:to-white transition-all duration-300">
                  Expensoo
                </span>
                <p className="text-xs text-secondary-400 mt-0.5">Smart Budget Management</p>
              </div>
            </Link>

            {/* Key Features with modern icons */}
            <div className="grid grid-cols-1 gap-3">
              <div className="flex items-center space-x-3 text-secondary-300 p-2 rounded-lg hover:bg-secondary-800/30 transition-colors duration-200">
                <div className="w-8 h-8 bg-primary-600/20 rounded-lg flex items-center justify-center">
                  <Zap className="w-4 h-4 text-primary-400" />
                </div>
                <span className="text-sm">Smart Budget Management</span>
              </div>
              <div className="flex items-center space-x-3 text-secondary-300 p-2 rounded-lg hover:bg-secondary-800/30 transition-colors duration-200">
                <div className="w-8 h-8 bg-green-600/20 rounded-lg flex items-center justify-center">
                  <Shield className="w-4 h-4 text-green-400" />
                </div>
                <span className="text-sm">Bank-level Security</span>
              </div>
              <div className="flex items-center space-x-3 text-secondary-300 p-2 rounded-lg hover:bg-secondary-800/30 transition-colors duration-200">
                <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-blue-400" />
                </div>
                <span className="text-sm">Real-time Insights</span>
              </div>
            </div>

            {/* Parent Company Info - Enhanced */}
            <div className="p-4 bg-gradient-to-br from-secondary-800/50 to-secondary-900/50 rounded-xl border border-secondary-700/50 backdrop-blur-sm">
              <p className="text-xs text-secondary-400 mb-2">Proudly developed by</p>
              <a
                href="https://adivikadigital.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-sm font-semibold text-white hover:text-primary-300 transition-colors duration-200 group"
              >
                <span>Adivika Digital Pvt. Ltd.</span>
                <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </a>
              <p className="text-xs text-secondary-400 mt-1.5 leading-relaxed">
                Innovative digital solutions for the modern world
              </p>
            </div>
          </div>

          {/* Navigation Columns with enhanced styling */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold mb-6 text-white relative">
              <span className="relative z-10">Budget Tools</span>
              <div className="absolute -bottom-1 left-0 w-12 h-1 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"></div>
            </h4>
            <ul className="space-y-3">
              {[
                { to: '/features', label: 'Expense Tracking', icon: '📊' },
                { to: '/features', label: 'Budget Planning', icon: '💰' },
                { to: '/features', label: 'Goal Setting', icon: '🎯' },
                { to: '/features', label: 'Reports', icon: '📈' },
                { to: '/features', label: 'Categories', icon: '🏷️' },
                { to: '/features', label: 'Insights', icon: '💡' }
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    className="flex items-center space-x-2 text-secondary-300 hover:text-primary-400 transition-all duration-200 text-sm hover:translate-x-2 transform group p-2 rounded-lg hover:bg-secondary-800/30"
                  >
                    <span className="text-base">{link.icon}</span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold mb-6 text-white relative">
              <span className="relative z-10">Company</span>
              <div className="absolute -bottom-1 left-0 w-12 h-1 bg-gradient-to-r from-green-500 to-green-600 rounded-full"></div>
            </h4>
            <ul className="space-y-3">
              {[
                { to: '/about', label: 'About Us', icon: '🏢' },
                { to: '/contact', label: 'Contact', icon: '📞' },
                { to: '/pricing', label: 'Pricing', icon: '💳' },
                { href: '#', label: 'Blog', icon: '📝' },
                { href: '#', label: 'Press', icon: '📰' },
                { href: '#', label: 'Careers', icon: '🚀' }
              ].map((link, index) => (
                <li key={index}>
                  {link.to ? (
                    <Link
                      to={link.to}
                      className="flex items-center space-x-2 text-secondary-300 hover:text-primary-400 transition-all duration-200 text-sm hover:translate-x-2 transform group p-2 rounded-lg hover:bg-secondary-800/30"
                    >
                      <span className="text-base">{link.icon}</span>
                      <span>{link.label}</span>
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="flex items-center space-x-2 text-secondary-300 hover:text-primary-400 transition-all duration-200 text-sm hover:translate-x-2 transform group p-2 rounded-lg hover:bg-secondary-800/30"
                    >
                      <span className="text-base">{link.icon}</span>
                      <span>{link.label}</span>
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold mb-6 text-white relative">
              <span className="relative z-10">Support</span>
              <div className="absolute -bottom-1 left-0 w-12 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
            </h4>
            <ul className="space-y-3">
              {[
                { href: '#', label: 'Help Center', icon: '❓' },
                { href: '#', label: 'Getting Started', icon: '🚀' },
                { href: '#', label: 'Budget Tips', icon: '💡' },
                { href: '#', label: 'FAQs', icon: '❔' },
                { href: '#', label: 'User Guide', icon: '📖' },
                { to: '/contact', label: 'Support', icon: '🎧' }
              ].map((link, index) => (
                <li key={index}>
                  {link.to ? (
                    <Link
                      to={link.to}
                      className="flex items-center space-x-2 text-secondary-300 hover:text-primary-400 transition-all duration-200 text-sm hover:translate-x-2 transform group p-2 rounded-lg hover:bg-secondary-800/30"
                    >
                      <span className="text-base">{link.icon}</span>
                      <span>{link.label}</span>
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="flex items-center space-x-2 text-secondary-300 hover:text-primary-400 transition-all duration-200 text-sm hover:translate-x-2 transform group p-2 rounded-lg hover:bg-secondary-800/30"
                    >
                      <span className="text-base">{link.icon}</span>
                      <span>{link.label}</span>
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold mb-6 text-white relative">
              <span className="relative z-10">Legal</span>
              <div className="absolute -bottom-1 left-0 w-12 h-1 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full"></div>
            </h4>
            <ul className="space-y-3">
              {[
                { href: '#', label: 'Privacy Policy', icon: '🔒' },
                { href: '#', label: 'Terms of Service', icon: '📋' },
                { href: '#', label: 'Data Security', icon: '🛡️' },
                { href: '#', label: 'Cookie Policy', icon: '🍪' },
                { href: '#', label: 'Compliance', icon: '✅' },
                { href: '#', label: 'Disclaimer', icon: '⚠️' }
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="flex items-center space-x-2 text-secondary-300 hover:text-primary-400 transition-all duration-200 text-sm hover:translate-x-2 transform group p-2 rounded-lg hover:bg-secondary-800/30"
                  >
                    <span className="text-base">{link.icon}</span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section - Enhanced */}
        <div className="mt-16 p-8 bg-gradient-to-br from-primary-900/20 via-primary-800/10 to-secondary-900/30 rounded-2xl border border-primary-700/20 backdrop-blur-sm">
          <div className="text-center lg:text-left lg:flex lg:items-center lg:justify-between">
            <div className="lg:flex-1 mb-6 lg:mb-0">
              <div className="flex items-center justify-center lg:justify-start space-x-2 mb-3">
                <Star className="w-5 h-5 text-yellow-400" />
                <h5 className="text-xl font-bold text-white">Stay Ahead of Your Finances</h5>
              </div>
              <p className="text-secondary-300 text-sm max-w-md mx-auto lg:mx-0">
                Get expert budgeting tips, financial insights, and product updates delivered straight to your inbox.
              </p>
            </div>
            <div className="lg:ml-8 lg:flex-shrink-0">
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto lg:mx-0">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm backdrop-blur-sm"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl whitespace-nowrap text-sm"
                >
                  Subscribe Now
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Social Media & Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-secondary-800/50">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0">

            {/* Social Media */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-secondary-400 mr-2">Follow us:</span>
              <a href="#" className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-200 group">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-br from-blue-700 to-blue-800 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-200 group">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-br from-pink-600 to-pink-700 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-200 group">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
                </svg>
              </a>
            </div>

            {/* Copyright */}
            <div className="text-center sm:text-right">
              <p className="text-secondary-400 text-xs sm:text-sm">
                &copy; {currentYear} Expensoo by{' '}
                <a
                  href="https://adivikadigital.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-400 hover:text-primary-300 transition-colors font-medium"
                >
                  Adivika Digital Pvt. Ltd.
                </a>
              </p>
              <p className="text-secondary-500 text-xs mt-1">
                Made with <Heart className="inline w-3 h-3 text-red-500 animate-pulse" /> for better budget management.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white rounded-2xl shadow-2xl hover:shadow-primary-500/25 transition-all duration-300 z-50 flex items-center justify-center group transform hover:scale-110"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-200" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      )}

      {/* Add the animation for financial flow */}
      <style jsx>{`
        @keyframes financialFlow {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          100% {
            transform: translate(40px, 40px) rotate(360deg);
          }
        }
      `}</style>
    </footer>
  );
}

export default LandingFooter;