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
    <div className="min-h-screen bg-secondary-50">
      <Sidebar isOpen={sidebarOpen} onClose={handleSidebarClose} />
      <div className="flex flex-col min-h-screen sm:ml-72 transition-all duration-200">
        <AppHeader onSidebarToggle={handleSidebarToggle} />
        <main className="flex-1 p-4 sm:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;