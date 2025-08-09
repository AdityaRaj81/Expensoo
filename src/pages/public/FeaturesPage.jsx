import LandingHeader from '../../components/layout/LandingHeader';
import LandingFooter from '../../components/layout/LandingFooter';
import { Link } from 'react-router-dom';

function FeaturesPage() {
  const features = [
    {
      icon: '📊',
      title: 'Advanced Analytics',
      description: 'Get deep insights into your spending patterns with interactive charts, trend analysis, and custom reports.',
      details: [
        'Interactive spending charts',
        'Monthly and yearly trends',
        'Category-wise breakdowns',
        'Custom date range reports'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '💳',
      title: 'Smart Transaction Tracking',
      description: 'Effortlessly track all your income and expenses with intelligent categorization and bulk import features.',
      details: [
        'Auto-categorization',
        'Bulk CSV import',
        'Receipt photo capture',
        'Recurring transaction detection'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: '🎯',
      title: 'Budget Management',
      description: 'Set realistic budgets, track your progress, and get alerts when you\'re approaching your limits.',
      details: [
        'Flexible budget categories',
        'Real-time progress tracking',
        'Smart spending alerts',
        'Budget vs actual comparisons'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: '📱',
      title: 'Mobile Responsive',
      description: 'Access your financial data anywhere with our fully responsive design that works on all devices.',
      details: [
        'Mobile-first design',
        'Offline capability',
        'Touch-friendly interface',
        'Cross-platform sync'
      ],
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: '🔒',
      title: 'Bank-Level Security',
      description: 'Your financial data is protected with enterprise-grade security and encryption.',
      details: [
        '256-bit SSL encryption',
        'Two-factor authentication',
        'Regular security audits',
        'GDPR compliant'
      ],
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: '🤖',
      title: 'AI-Powered Insights',
      description: 'Get personalized financial advice and spending recommendations powered by machine learning.',
      details: [
        'Spending pattern analysis',
        'Personalized recommendations',
        'Anomaly detection',
        'Predictive budgeting'
      ],
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <div className="min-h-screen">
      <LandingHeader />
      
      {/* Hero Section */}
      <section className="py-20 lg:py-32 hero-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Powerful <span className="gradient-text">Features</span>
            </h1>
            <p className="text-xl md:text-2xl text-secondary-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Everything you need to take complete control of your finances, all in one beautiful and intuitive platform.
            </p>
            <Link to="/register" className="btn btn-primary btn-lg">
              Try All Features Free
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="flex animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center text-2xl mr-6 flex-shrink-0 feature-icon-glow`}>
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold mb-4 text-secondary-900">
                    {feature.title}
                  </h3>
                  <p className="text-secondary-600 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-secondary-700">
                        <svg className="w-5 h-5 text-accent-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Seamless <span className="gradient-text">Integrations</span>
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Connect with your favorite tools and services for a complete financial management experience.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'Banks', icon: '🏦', description: 'Connect your bank accounts' },
              { name: 'Credit Cards', icon: '💳', description: 'Import card transactions' },
              { name: 'PayPal', icon: '💰', description: 'Sync PayPal payments' },
              { name: 'Stripe', icon: '💸', description: 'Business payment tracking' },
              { name: 'QuickBooks', icon: '📚', description: 'Accounting integration' },
              { name: 'Excel', icon: '📊', description: 'Export to spreadsheets' },
              { name: 'Google Drive', icon: '☁️', description: 'Cloud backup' },
              { name: 'Slack', icon: '💬', description: 'Team notifications' }
            ].map((integration, index) => (
              <div key={index} className="card text-center card-hover animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="text-3xl mb-3">{integration.icon}</div>
                <h4 className="font-semibold mb-2">{integration.name}</h4>
                <p className="text-sm text-secondary-600">{integration.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              See It in <span className="gradient-text">Action</span>
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto mb-8">
              Watch how easy it is to manage your finances with Expensoo.
            </p>
          </div>
          
          <div className="bg-secondary-100 rounded-2xl p-8 md:p-16 text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-primary-600 to-accent-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-8">
              ▶️
            </div>
            <h3 className="text-2xl font-heading font-bold mb-4">Interactive Demo</h3>
            <p className="text-secondary-600 mb-8 max-w-2xl mx-auto">
              Take a guided tour of Expensoo's features without signing up. See how easy it is to track expenses, create budgets, and generate insights.
            </p>
            <button className="btn btn-primary btn-lg">
              Launch Demo
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            Ready to Experience All Features?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Start your free trial today and discover how Expensoo can transform your financial management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register" className="btn bg-white text-primary-600 hover:bg-blue-50 btn-lg">
              Start Free Trial
            </Link>
            <Link to="/pricing" className="btn border-2 border-white text-white hover:bg-white hover:text-primary-600 btn-lg">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
      
      <LandingFooter />
    </div>
  );
}

export default FeaturesPage;