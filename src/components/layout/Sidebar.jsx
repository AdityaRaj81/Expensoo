import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  CreditCard, 
  BarChart3, 
  Lightbulb, 
  Settings, 
  User 
} from 'lucide-react';

function Sidebar() {
  const location = useLocation();
  
  const navItems = [
    { path: '/app', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/app/transactions', label: 'Transactions', icon: CreditCard },
    { path: '/app/reports', label: 'Reports', icon: BarChart3 },
    { path: '/app/insights', label: 'Insights', icon: Lightbulb },
    { path: '/app/settings', label: 'Settings', icon: Settings },
    { path: '/app/profile', label: 'Profile', icon: User }
  ];
  
  return (
    <aside className="w-72 app-sidebar fixed left-0 top-0 h-full z-40 border-r border-secondary-200">
      <div className="p-6">
        <Link to="/" className="flex items-center space-x-2 mb-8">
          <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-accent-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">E</span>
          </div>
          <span className="text-2xl font-heading font-bold gradient-text">
            Expensoo
          </span>
        </Link>
        
        <nav>
          <ul className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.path}>
                  <Link 
                    to={item.path} 
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                      location.pathname === item.path 
                        ? 'bg-primary-600 text-white shadow-lg' 
                        : 'text-secondary-600 hover:bg-secondary-100 hover:text-secondary-900'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;