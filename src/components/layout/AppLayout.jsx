import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import AppHeader from './AppHeader';
import { useState } from 'react';


function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Sidebar is always open on desktop, toggled on mobile
  const handleSidebarToggle = () => setSidebarOpen((open) => !open);
  const handleSidebarClose = () => setSidebarOpen(false);

  return (
    <div className="min-h-screen bg-secondary-50 flex flex-col sm:flex-row">
      {/* Sidebar: fixed on desktop, overlay on mobile */}
      <Sidebar isOpen={sidebarOpen} onClose={handleSidebarClose} />
      {/* Main content area: flex-1, column on mobile, row on desktop */}
      <div className="flex flex-col flex-1 min-h-screen transition-all duration-200">
        <AppHeader onSidebarToggle={handleSidebarToggle} />
        <main className="flex-1 p-4 sm:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;