import { useLocation, Link } from 'react-router-dom';
import { useState } from 'react';
import { Bell, ChevronDown } from 'lucide-react';

function AppHeader() {
  const location = useLocation();
  const [showUserMenu, setShowUserMenu] = useState(false);
  
  const getPageTitle = () => {
    switch (location.pathname) {
      case '/app':
        return 'Dashboard';
      case '/app/transactions':
        return 'Transactions';
      case '/app/transactions/add':
        return 'Add Transaction';
      case '/app/reports':
        return 'Reports';
      case '/app/insights':
        return 'Insights';
      case '/app/settings':
        return 'Settings';
      case '/app/profile':
        return 'Profile';
      default:
        if (location.pathname.includes('/transactions/edit/')) {
          return 'Edit Transaction';
        }
        return 'Dashboard';
    }
  };
  
  return (
    <header className="bg-white border-b border-secondary-200 px-6 py-4 ml-72">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-heading font-bold text-secondary-900">
          {getPageTitle()}
        </h1>
        
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <button className="p-2 text-secondary-600 hover:text-secondary-900 hover:bg-secondary-100 rounded-lg transition-colors">
            <Bell className="w-6 h-6" />
          </button>
          
          {/* User Menu */}
          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-secondary-100 transition-colors"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-accent-600 rounded-full flex items-center justify-center text-white font-semibold">
                U
              </div>
              <span className="font-medium text-secondary-900">User</span>
              <ChevronDown className="w-4 h-4 text-secondary-600" />
            </button>
            
            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-secondary-200 py-2 z-50">
                <Link
                  to="/app/profile"
                  className="flex items-center px-4 py-2 text-secondary-700 hover:bg-secondary-100 transition-colors"
                  onClick={() => setShowUserMenu(false)}
                >
                  <User className="w-4 h-4 mr-3" />
                  Profile
                </Link>
                <Link
                  to="/app/settings"
                  className="flex items-center px-4 py-2 text-secondary-700 hover:bg-secondary-100 transition-colors"
                  onClick={() => setShowUserMenu(false)}
                >
                  <Settings className="w-4 h-4 mr-3" />
                  Settings
                </Link>
                <hr className="my-2 border-secondary-200" />
                <Link
                  to="/"
                  className="flex items-center px-4 py-2 text-danger-600 hover:bg-danger-50 transition-colors"
                  onClick={() => setShowUserMenu(false)}
                >
                  <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  Sign Out
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;