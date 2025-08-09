import { useState } from 'react';
import LandingHeader from '../../components/layout/LandingHeader';
import LandingFooter from '../../components/layout/LandingFooter';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Contact form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  return (
    <div className="min-h-screen">
      <LandingHeader />
      
      {/* Hero Section */}
      <section className="py-20 lg:py-32 hero-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-secondary-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Have questions about Expensoo? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-up">
              <h2 className="text-3xl font-heading font-bold mb-6 text-secondary-900">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-input"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="form-label">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="form-input"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="billing">Billing Question</option>
                    <option value="feature">Feature Request</option>
                    <option value="partnership">Partnership</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="form-input resize-none"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help you..."
                    required
                  />
                </div>
                
                <button type="submit" className="btn btn-primary btn-lg w-full">
                  Send Message
                </button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="animate-slide-up">
              <h2 className="text-3xl font-heading font-bold mb-6 text-secondary-900">
                Other Ways to Reach Us
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-accent-600 rounded-lg flex items-center justify-center text-white text-xl mr-4 flex-shrink-0">
                    📧
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary-900 mb-2">Email Support</h3>
                    <p className="text-secondary-600 mb-2">For general inquiries and support</p>
                    <a href="mailto:support@expensoo.com" className="text-primary-600 hover:text-primary-700 font-medium">
                      support@expensoo.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-accent-600 rounded-lg flex items-center justify-center text-white text-xl mr-4 flex-shrink-0">
                    💬
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary-900 mb-2">Live Chat</h3>
                    <p className="text-secondary-600 mb-2">Available Monday to Friday, 9 AM - 6 PM IST</p>
                    <button className="text-primary-600 hover:text-primary-700 font-medium">
                      Start Live Chat
                    </button>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-accent-600 rounded-lg flex items-center justify-center text-white text-xl mr-4 flex-shrink-0">
                    📞
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary-900 mb-2">Phone Support</h3>
                    <p className="text-secondary-600 mb-2">For urgent matters and enterprise customers</p>
                    <a href="tel:+911234567890" className="text-primary-600 hover:text-primary-700 font-medium">
                      +91 12345 67890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-accent-600 rounded-lg flex items-center justify-center text-white text-xl mr-4 flex-shrink-0">
                    📍
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary-900 mb-2">Office Address</h3>
                    <p className="text-secondary-600">
                      123 Tech Park, Sector 5<br />
                      Bangalore, Karnataka 560001<br />
                      India
                    </p>
                  </div>
                </div>
              </div>
              
              {/* FAQ Link */}
              <div className="mt-12 p-6 bg-secondary-50 rounded-xl">
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                  Looking for Quick Answers?
                </h3>
                <p className="text-secondary-600 mb-4">
                  Check out our FAQ section for instant answers to common questions.
                </p>
                <a href="#" className="btn btn-secondary">
                  View FAQ
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Response Time Section */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-6">
              Our <span className="gradient-text">Response Times</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '⚡',
                title: 'Live Chat',
                time: 'Instant',
                description: 'Get immediate help during business hours'
              },
              {
                icon: '📧',
                title: 'Email Support',
                time: '< 24 hours',
                description: 'We respond to all emails within one business day'
              },
              {
                icon: '📞',
                title: 'Phone Support',
                time: '< 2 hours',
                description: 'Callback within 2 hours for urgent matters'
              }
            ].map((item, index) => (
              <div key={index} className="card text-center animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-heading font-semibold mb-2">{item.title}</h3>
                <div className="text-2xl font-bold text-primary-600 mb-2">{item.time}</div>
                <p className="text-secondary-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <LandingFooter />
    </div>
  );
}

export default ContactPage;