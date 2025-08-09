import LandingHeader from '../../components/layout/LandingHeader';
import LandingFooter from '../../components/layout/LandingFooter';
import { Link } from 'react-router-dom';

function PricingPage() {
  const plans = [
    {
      name: 'Free',
      price: '₹0',
      period: 'forever',
      description: 'Perfect for getting started with expense tracking',
      features: [
        'Up to 100 transactions/month',
        'Basic expense categories',
        'Simple reports',
        'Mobile app access',
        'Email support'
      ],
      buttonText: 'Get Started Free',
      buttonClass: 'btn-secondary',
      popular: false
    },
    {
      name: 'Pro',
      price: '₹299',
      period: 'per month',
      description: 'Ideal for individuals and small businesses',
      features: [
        'Unlimited transactions',
        'Advanced analytics',
        'Custom categories',
        'Budget planning',
        'Receipt scanning',
        'Export to Excel/PDF',
        'Priority support',
        'Bank integrations'
      ],
      buttonText: 'Start Pro Trial',
      buttonClass: 'btn-primary',
      popular: true
    },
    {
      name: 'Business',
      price: '₹999',
      period: 'per month',
      description: 'For teams and growing businesses',
      features: [
        'Everything in Pro',
        'Multi-user access',
        'Team collaboration',
        'Advanced reporting',
        'API access',
        'Custom integrations',
        'Dedicated support',
        'White-label options'
      ],
      buttonText: 'Contact Sales',
      buttonClass: 'btn-accent',
      popular: false
    }
  ];

  const faqs = [
    {
      question: 'Can I change my plan anytime?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.'
    },
    {
      question: 'Is there a free trial for paid plans?',
      answer: 'Yes, we offer a 14-day free trial for both Pro and Business plans. No credit card required to start.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, debit cards, UPI, and net banking for Indian customers.'
    },
    {
      question: 'Can I cancel my subscription anytime?',
      answer: 'Absolutely. You can cancel your subscription at any time from your account settings. No cancellation fees.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'We offer a 30-day money-back guarantee for all paid plans if you\'re not completely satisfied.'
    },
    {
      question: 'Is my financial data secure?',
      answer: 'Yes, we use bank-level security with 256-bit SSL encryption and never store your banking credentials.'
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
              Simple, <span className="gradient-text">Transparent Pricing</span>
            </h1>
            <p className="text-xl md:text-2xl text-secondary-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Choose the perfect plan for your needs. Start free and upgrade as you grow.
            </p>
            <div className="flex justify-center mb-8">
              <div className="bg-white rounded-lg p-1 shadow-sm">
                <button className="px-6 py-2 rounded-md bg-primary-600 text-white font-medium">
                  Monthly
                </button>
                <button className="px-6 py-2 rounded-md text-secondary-600 font-medium">
                  Yearly (Save 20%)
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`card relative animate-slide-up ${plan.popular ? 'pricing-card-popular text-white' : ''}`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-accent-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className={`text-2xl font-heading font-bold mb-2 ${plan.popular ? 'text-white' : 'text-secondary-900'}`}>
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-secondary-900'}`}>
                      {plan.price}
                    </span>
                    <span className={`text-lg ${plan.popular ? 'text-blue-100' : 'text-secondary-600'}`}>
                      /{plan.period}
                    </span>
                  </div>
                  <p className={`${plan.popular ? 'text-blue-100' : 'text-secondary-600'}`}>
                    {plan.description}
                  </p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <svg className={`w-5 h-5 mr-3 flex-shrink-0 ${plan.popular ? 'text-green-300' : 'text-accent-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={`${plan.popular ? 'text-blue-100' : 'text-secondary-700'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to="/register" 
                  className={`btn w-full ${plan.popular ? 'bg-white text-primary-600 hover:bg-blue-50' : plan.buttonClass}`}
                >
                  {plan.buttonText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Compare <span className="gradient-text">Features</span>
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              See what's included in each plan to make the best choice for your needs.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-secondary-50">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold text-secondary-900">Features</th>
                    <th className="px-6 py-4 text-center font-semibold text-secondary-900">Free</th>
                    <th className="px-6 py-4 text-center font-semibold text-secondary-900">Pro</th>
                    <th className="px-6 py-4 text-center font-semibold text-secondary-900">Business</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-secondary-200">
                  {[
                    { feature: 'Monthly Transactions', free: '100', pro: 'Unlimited', business: 'Unlimited' },
                    { feature: 'Expense Categories', free: 'Basic', pro: 'Custom', business: 'Custom' },
                    { feature: 'Reports & Analytics', free: '✓', pro: '✓', business: '✓' },
                    { feature: 'Mobile App', free: '✓', pro: '✓', business: '✓' },
                    { feature: 'Budget Planning', free: '✗', pro: '✓', business: '✓' },
                    { feature: 'Receipt Scanning', free: '✗', pro: '✓', business: '✓' },
                    { feature: 'Bank Integrations', free: '✗', pro: '✓', business: '✓' },
                    { feature: 'Multi-user Access', free: '✗', pro: '✗', business: '✓' },
                    { feature: 'API Access', free: '✗', pro: '✗', business: '✓' },
                    { feature: 'Priority Support', free: '✗', pro: '✓', business: '✓' }
                  ].map((row, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 font-medium text-secondary-900">{row.feature}</td>
                      <td className="px-6 py-4 text-center text-secondary-600">{row.free}</td>
                      <td className="px-6 py-4 text-center text-secondary-600">{row.pro}</td>
                      <td className="px-6 py-4 text-center text-secondary-600">{row.business}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-xl text-secondary-600">
              Got questions? We've got answers.
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="card animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <h3 className="text-lg font-semibold text-secondary-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-secondary-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of users who have already transformed their financial management with Expensoo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register" className="btn bg-white text-primary-600 hover:bg-blue-50 btn-lg">
              Start Free Trial
            </Link>
            <Link to="/contact" className="btn border-2 border-white text-white hover:bg-white hover:text-primary-600 btn-lg">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
      
      <LandingFooter />
    </div>
  );
}

export default PricingPage;