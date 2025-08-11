import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Star, Users, DollarSign, TrendingUp, Shield, Zap, BarChart3,
  Target, Smartphone, Clock, Award, Check, X, Play, Pause, ChevronDown,
  Eye, EyeOff, CreditCard, Globe, Headphones, Mail, Phone, MapPin,
  CheckCircle, AlertCircle, HelpCircle, ArrowUp, Menu, Sparkles
} from 'lucide-react';
import LandingHeader from '../../components/layout/LandingHeader';
import LandingFooter from '../../components/layout/LandingFooter';

function HomePage() {
  // State management
  const [currentSection, setCurrentSection] = useState('hero');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [pricingPeriod, setPricingPeriod] = useState('monthly');
  const [openFAQ, setOpenFAQ] = useState(null);
  const [isVisible, setIsVisible] = useState({});
  const [formData, setFormData] = useState({ email: '', name: '' });
  const [showCalculator, setShowCalculator] = useState(false);
  const [monthlyExpense, setMonthlyExpense] = useState(50000);
  const videoRef = useRef(null);

  // Data
  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      role: 'Small Business Owner',
      company: 'Design Studio',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      quote: 'Expensoo helped me save ₹45,000 in just 3 months by identifying unnecessary subscriptions and optimizing spending patterns.',
      rating: 5,
      savings: '₹45,000',
      timeFrame: '3 months',
      verified: true
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      role: 'Freelance Developer',
      company: 'Tech Consultant',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      quote: 'The AI insights are incredible. It automatically categorized 95% of my transactions and helped me claim ₹18,000 in tax deductions.',
      rating: 5,
      savings: '₹18,000',
      timeFrame: '1 year',
      verified: true
    },
    {
      id: 3,
      name: 'Anita Desai',
      role: 'Marketing Manager',
      company: 'Tech Solutions',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      quote: 'Finally achieved my savings goal 6 months ahead of schedule. The budgeting tools are game-changing for financial discipline.',
      rating: 5,
      savings: '₹67,000',
      timeFrame: '6 months',
      verified: true
    }
  ];

  const features = [
    {
      icon: BarChart3,
      title: 'AI-Powered Analytics',
      description: 'Get intelligent insights into your spending patterns with predictive analytics and personalized recommendations.',
      benefits: ['95% accurate categorization', 'Predictive spending alerts', 'Custom financial insights'],
      color: 'from-blue-500 to-cyan-500',
      demoType: 'chart'
    },
    {
      icon: Zap,
      title: 'Instant Transaction Sync',
      description: 'Connect 100+ banks and automatically sync transactions in real-time with bank-grade security.',
      benefits: ['Real-time bank sync', '100+ supported banks', 'Receipt scanning OCR'],
      color: 'from-green-500 to-emerald-500',
      demoType: 'sync'
    },
    {
      icon: Target,
      title: 'Smart Goal Tracking',
      description: 'Set financial goals and get personalized strategies to achieve them faster with AI-powered recommendations.',
      benefits: ['Goal-based budgeting', 'Progress milestones', 'Achievement rewards'],
      color: 'from-purple-500 to-pink-500',
      demoType: 'goals'
    },
    {
      icon: Shield,
      title: 'Bank-Grade Security',
      description: 'Your data is protected with 256-bit encryption, multi-factor authentication, and regular security audits.',
      benefits: ['256-bit SSL encryption', 'Multi-factor authentication', 'SOC 2 Type II certified'],
      color: 'from-red-500 to-orange-500',
      demoType: 'security'
    }
  ];

  const pricingPlans = [
    {
      id: 'free',
      name: 'Starter',
      price: { monthly: 0, yearly: 0 },
      description: 'Perfect for getting started',
      features: [
        '100 transactions/month',
        'Basic expense tracking',
        'Simple budgeting tools',
        'Mobile app access',
        'Email support'
      ],
      limitations: ['Limited integrations', 'Basic reports only'],
      cta: 'Start Free',
      popular: false
    },
    {
      id: 'pro',
      name: 'Professional',
      price: { monthly: 299, yearly: 2390 },
      description: 'Most popular for individuals',
      features: [
        'Unlimited transactions',
        'AI-powered insights',
        'Advanced analytics',
        'Goal tracking',
        'Bank synchronization',
        'Receipt scanning',
        'Priority support',
        'Export capabilities'
      ],
      limitations: [],
      cta: 'Start Free Trial',
      popular: true,
      savings: 'Save ₹2,000'
    },
    {
      id: 'business',
      name: 'Business',
      price: { monthly: 999, yearly: 7990 },
      description: 'For teams and businesses',
      features: [
        'Everything in Professional',
        'Team collaboration',
        'Multi-user access',
        'Advanced reporting',
        'API access',
        'Custom integrations',
        'Dedicated support',
        'White-label option'
      ],
      limitations: [],
      cta: 'Contact Sales',
      popular: false,
      savings: 'Save ₹4,000'
    }
  ];

  const faqs = [
    {
      question: 'How secure is my financial data?',
      answer: 'We use bank-grade 256-bit SSL encryption and never store your banking credentials. We\'re SOC 2 Type II certified and regularly audited by third-party security firms.'
    },
    {
      question: 'Which banks are supported?',
      answer: 'We support 100+ banks in India including SBI, HDFC, ICICI, Axis Bank, Kotak, and all major cooperative banks. New banks are added regularly.'
    },
    {
      question: 'Can I cancel my subscription anytime?',
      answer: 'Yes, you can cancel your subscription at any time. No questions asked, and you\'ll get a full refund within 30 days if you\'re not satisfied.'
    },
    {
      question: 'Is there a mobile app?',
      answer: 'Yes! Our mobile app is available for both iOS and Android. You can also install our Progressive Web App (PWA) directly from your browser.'
    },
    {
      question: 'How accurate is the AI categorization?',
      answer: 'Our AI achieves 95% accuracy in transaction categorization and learns from your corrections to improve over time. You can always manually adjust categories.'
    },
    {
      question: 'Do you offer customer support?',
      answer: 'Yes, we offer email support for all users, priority support for Pro users, and dedicated phone support for Business users during business hours.'
    }
  ];

  const stats = [
    { number: '50,000+', label: 'Active Users', icon: Users },
    { number: '₹500M+', label: 'Money Tracked', icon: DollarSign },
    { number: '99.9%', label: 'Uptime', icon: TrendingUp },
    { number: '4.9/5', label: 'User Rating', icon: Star }
  ];

  // Effects
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
            setCurrentSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '0px 0px -100px 0px' }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  // Handlers
  const handleVideoToggle = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const calculateSavings = (expense) => {
    return Math.round(expense * 0.15); // Assume 15% average savings
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <LandingHeader />

      {/* Progress Indicator */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-xl border border-gray-100">
          {['hero', 'features', 'testimonials', 'pricing'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`block w-3 h-3 rounded-full mb-3 last:mb-0 transition-all duration-300 ${currentSection === section
                ? 'bg-blue-600 scale-125 shadow-lg'
                : 'bg-gray-300 hover:bg-gray-400 hover:scale-110'
                }`}
              title={section.charAt(0).toUpperCase() + section.slice(1)}
            />
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-10 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-gradient-to-br from-green-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-purple-400/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-40 relative z-10">
          <div className="text-center">
            {/* Trust Badge */}
            <div className="inline-flex items-center px-4 py-2 mb-8 text-sm font-medium text-blue-700 bg-blue-100 rounded-full border border-blue-200 animate-fade-in">
              <Sparkles className="w-4 h-4 mr-2 text-blue-600" />
              Trusted by 50,000+ users • 4.9★ rating
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight animate-fade-in-up">
              <span className="block text-gray-900 mb-2">Save More Money with</span>
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent animate-gradient-x">
                AI-Powered Insights
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              Transform your financial future with intelligent expense tracking, smart budgeting, and personalized recommendations that help you save ₹50,000+ annually.
            </p>

            {/* ROI Calculator Teaser */}
            <div className="inline-flex items-center justify-center p-6 mb-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">Average user saves</p>
                <p className="text-3xl font-bold text-green-600">₹{calculateSavings(monthlyExpense).toLocaleString()}</p>
                <p className="text-sm text-gray-500">per month</p>
              </div>
              <button
                onClick={() => setShowCalculator(!showCalculator)}
                className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
              >
                Calculate Your Savings
              </button>
            </div>

            {/* ROI Calculator Modal */}
            {showCalculator && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-2xl p-8 max-w-md w-full animate-scale-in">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">Your Savings Calculator</h3>
                    <button onClick={() => setShowCalculator(false)} className="text-gray-400 hover:text-gray-600">
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Expenses</label>
                      <input
                        type="range"
                        min="10000"
                        max="200000"
                        step="5000"
                        value={monthlyExpense}
                        onChange={(e) => setMonthlyExpense(Number(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                      <div className="flex justify-between text-sm text-gray-500 mt-1">
                        <span>₹10k</span>
                        <span className="font-medium text-blue-600">₹{(monthlyExpense / 1000).toFixed(0)}k</span>
                        <span>₹200k</span>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 text-center">
                      <p className="text-sm text-gray-600 mb-2">Your potential monthly savings:</p>
                      <p className="text-4xl font-bold text-green-600 mb-2">₹{calculateSavings(monthlyExpense).toLocaleString()}</p>
                      <p className="text-sm text-gray-500 mb-4">₹{(calculateSavings(monthlyExpense) * 12).toLocaleString()} per year</p>

                      <div className="space-y-2 text-sm text-gray-600 text-left">
                        <div className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Identify unnecessary subscriptions</div>
                        <div className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Optimize spending categories</div>
                        <div className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Smart budget recommendations</div>
                      </div>
                    </div>

                    <Link to="/register" className="block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                      Start Saving Today - Free Trial
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
              <Link
                to="/register"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Start Free 30-Day Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>

              <button
                onClick={handleVideoToggle}
                className="group flex items-center px-8 py-4 text-gray-700 border-2 border-gray-300 rounded-2xl font-semibold text-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-300"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo (2 min)
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500 animate-fade-in-up" style={{ animationDelay: '800ms' }}>
              <div className="flex items-center"><Shield className="w-4 h-4 mr-2" />Bank-grade security</div>
              <div className="flex items-center"><Check className="w-4 h-4 mr-2" />No credit card required</div>
              <div className="flex items-center"><Clock className="w-4 h-4 mr-2" />Setup in 2 minutes</div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-fade-in-up" style={{ animationDelay: '1000ms' }}>
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="group bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-white/20">
                    <IconComponent className="w-8 h-8 mx-auto mb-3 text-blue-600 group-hover:scale-110 transition-transform" />
                    <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-700 font-medium">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Video Modal */}
        {isPlaying && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-4xl w-full">
              <button
                onClick={handleVideoToggle}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              <video
                ref={videoRef}
                className="w-full h-auto rounded-xl shadow-2xl"
                controls
                autoPlay
                onEnded={() => setIsPlaying(false)}
              >
                <source src="/demo-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        )}
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 lg:py-32 bg-gradient-to-br from-white to-blue-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gray-900">Everything You Need for</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Smart Money Management
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful AI-driven features designed to make expense tracking effortless and financial planning intelligent.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className={`group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 border border-gray-100 overflow-hidden relative ${isVisible['features'] ? 'animate-slide-up' : 'opacity-0'
                    }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                  <div className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">
                      {feature.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed mb-6">
                      {feature.description}
                    </p>

                    <div className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </div>
                      ))}
                    </div>

                    <button className="mt-6 inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors">
                      Try Interactive Demo
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>

                  {/* Feature Demo Placeholder */}
                  <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                    <div className="text-sm text-gray-500 text-center">
                      Interactive {feature.demoType} demo coming soon
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gray-900">Loved by</span>
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> 50,000+ Users</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our users are transforming their financial lives and achieving their money goals.
            </p>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl max-w-4xl mx-auto border border-gray-100">
              <div className="text-center">
                {/* Rating Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xl lg:text-2xl text-gray-700 mb-8 italic leading-relaxed">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>

                {/* Customer Info */}
                <div className="flex items-center justify-center space-x-4 mb-6">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-blue-100"
                  />
                  <div className="text-left">
                    <div className="flex items-center">
                      <h4 className="font-bold text-gray-900 text-lg">{testimonials[currentTestimonial].name}</h4>
                      {testimonials[currentTestimonial].verified && (
                        <CheckCircle className="w-5 h-5 text-blue-500 ml-2" />
                      )}
                    </div>
                    <p className="text-gray-600">{testimonials[currentTestimonial].role}</p>
                    <p className="text-sm text-gray-500">{testimonials[currentTestimonial].company}</p>
                  </div>
                </div>

                {/* Savings Badge */}
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-100 to-blue-100 text-green-700 rounded-full font-medium">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Saved {testimonials[currentTestimonial].savings} in {testimonials[currentTestimonial].timeFrame}
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentTestimonial ? 'bg-blue-600 w-8' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                />
              ))}
            </div>

            {/* More testimonials preview */}
            <div className="grid md:grid-cols-3 gap-6 mt-16">
              {testimonials.slice(0, 3).map((testimonial) => (
                <div key={testimonial.id} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-blue-100"
                    />
                    <div className="ml-3">
                      <h5 className="font-semibold text-gray-900">{testimonial.name}</h5>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-700 line-clamp-3">{testimonial.quote}</p>
                  <div className="mt-4 text-xs text-green-600 font-medium">
                    Saved {testimonial.savings}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 lg:py-32 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gray-900">Choose Your</span>
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"> Financial Freedom</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Start free, upgrade when you need more. All plans include our core features with 30-day money-back guarantee.
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center bg-gray-100 rounded-full p-1">
              <button
                onClick={() => setPricingPeriod('monthly')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${pricingPeriod === 'monthly'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
                  }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setPricingPeriod('yearly')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${pricingPeriod === 'yearly'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
                  }`}
              >
                Yearly
                <span className="ml-2 px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">Save 20%</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className={`relative bg-white rounded-3xl shadow-lg border border-gray-100 p-8 transition-all duration-300 hover:shadow-2xl hover:scale-105 ${plan.popular ? 'ring-2 ring-blue-500 shadow-blue-500/20' : ''
                  }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Savings Badge */}
                {pricingPeriod === 'yearly' && plan.savings && (
                  <div className="absolute -top-2 -right-2">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                      {plan.savings}
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>

                  <div className="mb-6">
                    {plan.price[pricingPeriod] === 0 ? (
                      <div className="text-4xl font-bold text-gray-900">Free</div>
                    ) : (
                      <div className="flex items-baseline justify-center">
                        <span className="text-5xl font-bold text-gray-900">
                          ₹{plan.price[pricingPeriod].toLocaleString()}
                        </span>
                        <span className="text-gray-600 ml-1">
                          /{pricingPeriod === 'yearly' ? 'year' : 'month'}
                        </span>
                      </div>
                    )}

                    {pricingPeriod === 'yearly' && plan.price.monthly > 0 && (
                      <div className="text-sm text-gray-500 mt-2">
                        ₹{Math.round(plan.price.yearly / 12).toLocaleString()}/month billed annually
                      </div>
                    )}
                  </div>

                  <Link
                    to={plan.id === 'business' ? '/contact' : '/register'}
                    className={`block w-full py-3 px-6 rounded-2xl font-semibold text-lg transition-all duration-300 ${plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl hover:scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                  >
                    {plan.cta}
                  </Link>
                </div>

                {/* Features List */}
                <div className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}

                  {plan.limitations.map((limitation, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-500">
                      <X className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
                      <span>{limitation}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Money Back Guarantee */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center px-6 py-3 bg-green-100 text-green-700 rounded-full font-medium">
              <Shield className="w-5 h-5 mr-2" />
              30-day money-back guarantee • No questions asked
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gray-900">Frequently Asked</span>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Questions</span>
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about Expensoo. Can't find what you're looking for?
              <Link to="/contact" className="text-blue-600 hover:text-blue-700 font-medium"> Contact our support team.</Link>
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-6 h-6 text-gray-500 transition-transform duration-200 ${openFAQ === index ? 'rotate-180' : ''
                      }`}
                  />
                </button>

                {openFAQ === index && (
                  <div className="px-8 pb-6">
                    <div className="border-t border-gray-100 pt-6">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="cta" className="py-20 lg:py-32 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
          <div className="absolute inset-0 opacity-10">
            {/* Floating elements */}
            <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-white rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-white rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }}></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to Take Control of
              <br />
              <span className="bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">
                Your Financial Future?
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed">
              Join 50,000+ users who have already transformed their financial lives.
              Start your free trial today and see the difference AI-powered insights can make.
            </p>

            {/* Email Signup */}
            <div className="max-w-md mx-auto mb-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent backdrop-blur-sm"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-green-500 text-gray-900 rounded-2xl font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-300 whitespace-nowrap">
                  Start Free Trial
                </button>
              </div>
              <p className="text-sm text-blue-200 mt-3">
                No credit card required • Start saving in 2 minutes
              </p>
            </div>

            {/* Alternative CTA */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link
                to="/register"
                className="group px-10 py-5 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
              >
                <span className="flex items-center">
                  Get Started Free
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link
                to="/contact"
                className="px-10 py-5 border-2 border-white/30 text-white hover:bg-white/10 rounded-2xl font-bold text-lg backdrop-blur-sm transition-all duration-300 hover:border-white/50"
              >
                Talk to Sales
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center opacity-80">
              <div className="flex flex-col items-center">
                <Shield className="w-8 h-8 mb-3 text-blue-300" />
                <h4 className="font-semibold mb-2">Bank-Grade Security</h4>
                <p className="text-sm text-blue-200">256-bit SSL encryption</p>
              </div>
              <div className="flex flex-col items-center">
                <Clock className="w-8 h-8 mb-3 text-green-300" />
                <h4 className="font-semibold mb-2">24/7 Support</h4>
                <p className="text-sm text-blue-200">Always here to help</p>
              </div>
              <div className="flex flex-col items-center">
                <Award className="w-8 h-8 mb-3 text-yellow-300" />
                <h4 className="font-semibold mb-2">30-Day Guarantee</h4>
                <p className="text-sm text-blue-200">Money back promise</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Action Button for Mobile */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        <Link
          to="/register"
          className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
        >
          <ArrowRight className="w-6 h-6" />
        </Link>
      </div>

      {/* Scroll to Top Button */}
      {/* <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 left-6 w-12 h-12 bg-white/90 backdrop-blur-sm text-gray-700 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 z-40 opacity-0 animate-fade-in"
        style={{ animationDelay: '2s', animationFillMode: 'forwards' }}
      >
        <ArrowUp className="w-6 h-6 mx-auto" />
      </button> */}

      <LandingFooter />

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-size: 200% 200%; background-position: left center; }
          50% { background-size: 200% 200%; background-position: right center; }
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slide-up {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        .animate-gradient-x { animation: gradient-x 8s ease infinite; }
        .animate-fade-in { animation: fade-in 0.8s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animate-slide-up { animation: slide-up 0.8s ease-out forwards; }
        .animate-scale-in { animation: scale-in 0.3s ease-out forwards; }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Smooth scrolling */
        html { scroll-behavior: smooth; }

        /* Custom scrollbar */
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #f1f5f9; }
        ::-webkit-scrollbar-thumb { background: #3b82f6; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #2563eb; }

        /* Focus styles for accessibility */
        .focus\\:ring-2:focus {
          outline: 2px solid transparent;
          outline-offset: 2px;
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
        }

        /* Custom range slider */
        input[type="range"]::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          background: #3b82f6;
          border-radius: 50%;
          cursor: pointer;
        }

        input[type="range"]::-moz-range-thumb {
          width: 20px;
          height: 20px;
          background: #3b82f6;
          border-radius: 50%;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </div>
  );
}

export default HomePage;