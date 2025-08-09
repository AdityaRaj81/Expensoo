import LandingHeader from '../../components/layout/LandingHeader';
import LandingFooter from '../../components/layout/LandingFooter';

function AboutPage() {
  const team = [
    {
      name: 'Alex Johnson',
      role: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Former financial advisor with 10+ years of experience helping people manage their money better.'
    },
    {
      name: 'Sarah Kim',
      role: 'CTO',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Tech enthusiast who believes in building simple solutions for complex financial problems.'
    },
    {
      name: 'Michael Chen',
      role: 'Head of Design',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'UX designer passionate about creating intuitive interfaces that make finance accessible to everyone.'
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
              About <span className="gradient-text">Expensoo</span>
            </h1>
            <p className="text-xl md:text-2xl text-secondary-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              We're on a mission to make personal finance management simple, intuitive, and accessible for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Our <span className="gradient-text">Story</span>
              </h2>
              <p className="text-lg text-secondary-600 mb-6 leading-relaxed">
                Expensoo was born out of frustration with complicated financial tools that required a degree in accounting to understand. We believed there had to be a better way.
              </p>
              <p className="text-lg text-secondary-600 mb-6 leading-relaxed">
                Founded in 2023, we set out to create the most intuitive expense tracking app that anyone could use, regardless of their financial background. Today, we're proud to serve over 50,000 users worldwide.
              </p>
              <p className="text-lg text-secondary-600 leading-relaxed">
                Our commitment remains the same: to empower individuals and small businesses with the tools they need to make informed financial decisions.
              </p>
            </div>
            <div className="animate-slide-up">
              <img 
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
                alt="Team working together"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              The principles that guide everything we do.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🎯',
                title: 'Simplicity First',
                description: 'We believe financial management should be simple and accessible to everyone, not just financial experts.'
              },
              {
                icon: '🔒',
                title: 'Privacy & Security',
                description: 'Your financial data is yours. We use bank-level security and never share your information.'
              },
              {
                icon: '💡',
                title: 'Continuous Innovation',
                description: 'We constantly improve our platform based on user feedback and emerging financial trends.'
              }
            ].map((value, index) => (
              <div key={index} className="card text-center animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-heading font-semibold mb-4">{value.title}</h3>
                <p className="text-secondary-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              The passionate people behind Expensoo.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card text-center animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-xl font-heading font-semibold mb-2">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-4">{member.role}</p>
                <p className="text-secondary-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              Expensoo by the Numbers
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '50K+', label: 'Active Users' },
              { number: '$2M+', label: 'Money Tracked' },
              { number: '150+', label: 'Countries' },
              { number: '99.9%', label: 'Uptime' }
            ].map((stat, index) => (
              <div key={index} className="text-center animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <LandingFooter />
    </div>
  );
}

export default AboutPage;