import { useLocation, Link } from 'react-router-dom';
import { useState } from 'react';
import { Bell, ChevronDown, Menu } from 'lucide-react';

function AppHeader({ onSidebarToggle }) {
  const location = useLocation();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

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
    <header className="bg-white border-b border-secondary-200 px-4 sm:px-6 py-4 w-full sticky top-0 z-30 sm:static sm:top-auto">
      <div className="flex justify-between items-center">
        {/* Mobile menu button */}
        <div className="flex items-center">
          <button
            className="sm:hidden mr-2 p-2 rounded-lg hover:bg-secondary-100 transition-colors focus:outline-none"
            onClick={onSidebarToggle}
            aria-label="Open sidebar"
          >
            <Menu className="w-6 h-6 text-secondary-900" />
          </button>
          <h1 className="text-xl sm:text-2xl font-heading font-bold text-secondary-900">
            {getPageTitle()}
          </h1>
        </div>

        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Notifications */}
          <div className="relative">
            <button
              className="p-2 text-secondary-600 hover:text-secondary-900 hover:bg-secondary-100 rounded-lg transition-colors"
              onClick={() => setShowNotifications((prev) => !prev)}
              aria-label="Show notifications"
            >
              <Bell className="w-6 h-6" />
            </button>
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-secondary-200 py-4 z-50 text-center">
                <p className="text-secondary-700 text-sm">No notifications yet.</p>
              </div>
            )}
          </div>

          {/* User Menu */}
          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center space-x-2 sm:space-x-3 p-2 rounded-lg hover:bg-secondary-100 transition-colors"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-accent-600 rounded-full flex items-center justify-center text-white font-semibold">
                U
              </div>
              <span className="hidden sm:inline font-medium text-secondary-900">User</span>
              <ChevronDown className="w-4 h-4 text-secondary-600" />
            </button>

            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-secondary-200 py-2 z-50">
                <Link
                  to="/app/profile"
                  className="flex items-center px-4 py-2 text-secondary-700 hover:bg-secondary-100 transition-colors"
                  onClick={() => setShowUserMenu(false)}
                >
                  {/* User icon hidden on mobile for less clutter */}
                  <span className="hidden sm:inline-block mr-3"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg></span>
                  Profile
                </Link>
                <Link
                  to="/app/settings"
                  className="flex items-center px-4 py-2 text-secondary-700 hover:bg-secondary-100 transition-colors"
                  onClick={() => setShowUserMenu(false)}
                >
                  <span className="hidden sm:inline-block mr-3"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" /></svg></span>
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