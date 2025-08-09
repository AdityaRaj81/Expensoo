import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import AppHeader from './AppHeader';

function AppLayout() {
  return (
    <div className="min-h-screen bg-secondary-50">
      <Sidebar />
      <div className="flex flex-col min-h-screen">
        <AppHeader />
        <main className="flex-1 ml-72 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;