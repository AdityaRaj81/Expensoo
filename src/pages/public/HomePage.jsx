import LandingHeader from '../../components/layout/LandingHeader';
import LandingFooter from '../../components/layout/LandingFooter';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react'

function HomePage() {
  const features = [
    {
      icon: '📊',
      title: 'Smart Analytics',
      description: 'Get detailed insights into your spending patterns with beautiful charts and reports that help you understand where your money goes.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '💳',
      title: 'Easy Transaction Tracking',
      description: 'Quickly add and categorize transactions with our intuitive interface. Never lose track of your expenses again.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: '📱',
      title: 'Mobile Responsive',
      description: 'Access your financial data anywhere, anytime. Our responsive design works perfectly on all your devices.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: '🔒',
      title: 'Secure & Private',
      description: 'Your financial data is encrypted and secure. We never share your information with third parties.',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: '📈',
      title: 'Budget Planning',
      description: 'Set budgets, track progress, and get alerts when you\'re approaching your limits. Stay on top of your financial goals.',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: '⚡',
      title: 'Real-time Updates',
      description: 'See your financial picture update in real-time as you add transactions. Always know exactly where you stand.',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Small Business Owner',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      quote: 'Expensoo has completely transformed how I manage my business expenses. The insights are incredible!'
    },
    {
      name: 'Michael Chen',
      role: 'Freelance Designer',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      quote: 'Finally, an expense tracker that doesn\'t feel like work. Clean, simple, and powerful.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Manager',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      quote: 'The budget planning features have helped me save more money than I ever thought possible.'
    }
  ];

  const stats = [
    { number: '50K+', label: 'Happy Users' },
    { number: '$2M+', label: 'Money Tracked' },
    { number: '99.9%', label: 'Uptime' },
    { number: '4.9/5', label: 'User Rating' }
  ];


  const benefits = [
    'Track income and expenses effortlessly',
    'Categorize transactions automatically',
    'Generate detailed financial reports',
    'Set and monitor budgets',
    'Export data for tax purposes',
    'Mobile-responsive design',
  ]

  return (
    <div className="min-h-screen">
      <LandingHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden hero-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6">
              Take Control of Your{' '}
              <span className="gradient-text">Expenses</span>
            </h1>


            <p className="text-xl md:text-2xl text-secondary-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Expensoo helps you track expenses, manage budgets, and gain valuable insights into your spending habits. Start your journey to financial freedom today.
            </p>



            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link to="/register" className="btn btn-primary btn-lg animate-bounce-gentle">
                Start Free Trial
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link to="/login" className="btn btn-secondary btn-lg">
                Sign In
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {stats.map((stat, index) => (
                <div key={index} className="stats-card rounded-xl p-6 text-center animate-slide-up">
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-secondary-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-accent-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-purple-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              Everything You Need to{' '}
              <span className="gradient-text">Manage Your Money</span>
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Powerful features designed to make expense tracking effortless and insightful.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card card-hover group animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center text-2xl mb-6 feature-icon-glow group-hover:scale-110 transition-transform duration-200`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-heading font-semibold mb-4 text-secondary-900">
                  {feature.title}
                </h3>
                <p className="text-secondary-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 lg:py-32 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Get started with Expensoo in just three simple steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Sign Up',
                description: 'Create your free account in less than 2 minutes. No credit card required.',
                icon: '👤'
              },
              {
                step: '02',
                title: 'Add Transactions',
                description: 'Start tracking your income and expenses with our intuitive interface.',
                icon: '💰'
              },
              {
                step: '03',
                title: 'Get Insights',
                description: 'View detailed reports and analytics to understand your spending patterns.',
                icon: '📊'
              }
            ].map((item, index) => (
              <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-accent-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                    {item.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-sm font-bold text-primary-600 shadow-lg">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-heading font-semibold mb-4">
                  {item.title}
                </h3>
                <p className="text-secondary-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              What Our <span className="gradient-text">Users Say</span>
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Join thousands of satisfied users who have transformed their financial management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card rounded-xl p-8 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-secondary-900">{testimonial.name}</h4>
                    <p className="text-secondary-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-secondary-700 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex text-yellow-400 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>





      {/* Benefits Section */}

      <section className="py-20 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 dark:from-blue-900 dark:via-blue-800 dark:to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-blue-900 dark:text-blue-100 mb-6">
                Why Choose Expensoo?
              </h2>
              <p className="text-lg text-blue-700 dark:text-blue-200 mb-8">
                Join thousands of users who have transformed their financial habits with our intuitive expense tracking platform.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 dark:text-blue-300 flex-shrink-0" />
                    <span className="text-blue-900 dark:text-blue-100">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-white dark:bg-blue-800 rounded-2xl shadow-2xl p-8 border-2 border-blue-100 dark:border-blue-700">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100">Monthly Overview</h3>
                    <span className="text-sm text-blue-600 dark:text-blue-300">December 2024</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-100 dark:bg-blue-700/60 rounded-lg p-4">
                      <p className="text-sm text-blue-700 dark:text-blue-200">Income</p>
                      <p className="text-2xl font-mono font-bold text-green-600 dark:text-green-400">$5,240</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-600/60 rounded-lg p-4">
                      <p className="text-sm text-blue-700 dark:text-blue-200">Expenses</p>
                      <p className="text-2xl font-mono font-bold text-red-500 dark:text-red-400">$3,180</p>
                    </div>
                  </div>

                  <div className="bg-blue-200 dark:bg-blue-600/60 rounded-lg p-4">
                    <p className="text-sm text-blue-700 dark:text-blue-200">Balance</p>
                    <p className="text-3xl font-mono font-bold text-primary-600 dark:text-primary-300">$2,060</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>







      {/* CTA Section */}
      <section className="py-20 lg:py-32 hero-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-black mb-6">
            Ready to Take Control?
          </h2>
          <p className="text-xl text-red-600 mb-8 max-w-3xl mx-auto">
            Join thousands of users who have already transformed their financial management with Expensoo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register" className="btn bg-white text-primary-600 hover:bg-blue-50 btn-lg">
              Start Your Free Trial
            </Link>
            <Link to="/features" className="btn border-2 border-white text-black hover:bg-white hover:text-primary-600 btn-lg">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <LandingFooter />
    </div>
  );
}

export default HomePage;