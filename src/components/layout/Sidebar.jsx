import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  CreditCard,
  BarChart3,
  Lightbulb,
  Settings,
  User,
  X
} from 'lucide-react';

function Sidebar({ isOpen, onClose }) {
  const location = useLocation();

  const navItems = [
    { path: '/app', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/app/transactions', label: 'Transactions', icon: CreditCard },
    { path: '/app/reports', label: 'Reports', icon: BarChart3 },
    { path: '/app/insights', label: 'Insights', icon: Lightbulb },
    { path: '/app/settings', label: 'Settings', icon: Settings },
    { path: '/app/profile', label: 'Profile', icon: User }
  ];

  // Responsive sidebar: overlay on mobile, styled and shadowed on desktop/laptop
  return (
    <>
      {/* Overlay for mobile */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-30 z-40 transition-opacity duration-200 sm:hidden ${isOpen ? 'block' : 'hidden'}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        className={`app-sidebar fixed left-0 top-0 h-full z-50 border-r border-secondary-200 w-64 sm:w-72 bg-white transition-transform duration-200
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          sm:translate-x-0 sm:static sm:block
          shadow-none sm:shadow-xl
          sm:rounded-none
        `}
        style={{ maxWidth: '100vw' }}
      >
        <div className="p-4 sm:p-6 flex flex-col h-full">
          {/* Close button for mobile */}
          <button
            className="sm:hidden absolute top-4 right-4 p-2 rounded-lg hover:bg-secondary-100 transition-colors"
            onClick={onClose}
            aria-label="Close sidebar"
          >
            <X className="w-6 h-6 text-secondary-900" />
          </button>
          <Link to="/" className="flex items-center space-x-2 mb-8">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-accent-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">E</span>
            </div>
            <span className="text-2xl font-heading font-bold gradient-text">
              Expensoo
            </span>
          </Link>

          <nav className="flex-1">
            <ul className="space-y-1 sm:space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={`flex items-center space-x-3 px-3 sm:px-4 py-2 sm:py-3 rounded-lg font-medium transition-all duration-200 ${location.pathname === item.path
                        ? 'bg-primary-600 text-white shadow-md sm:shadow-lg'
                        : 'text-secondary-600 hover:bg-secondary-100 hover:text-secondary-900'
                        }`}
                      onClick={onClose}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="truncate">{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          {/* Optional: Add a footer or help link for desktop */}
          <div className="hidden sm:block mt-auto pt-8 text-xs text-secondary-400 text-center">
            &copy; {new Date().getFullYear()} Expensoo
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;