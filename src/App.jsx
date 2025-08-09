import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Public Pages
import HomePage from './pages/public/HomePage';
import LoginPage from './pages/public/LoginPage';
import RegisterPage from './pages/public/RegisterPage';
import ForgotPasswordPage from './pages/public/ForgotPasswordPage';

// App Layout
import AppLayout from './components/layout/AppLayout';

// App Pages
import DashboardPage from './pages/app/DashboardPage';
import TransactionsPage from './pages/app/TransactionsPage';
import AddTransactionPage from './pages/app/AddTransactionPage';
import EditTransactionPage from './pages/app/EditTransactionPage';
import ReportsPage from './pages/app/ReportsPage';
import InsightsPage from './pages/app/InsightsPage';
import SettingsPage from './pages/app/SettingsPage';
import ProfilePage from './pages/app/ProfilePage';

// Additional Pages
import AboutPage from './pages/public/AboutPage';
import FeaturesPage from './pages/public/FeaturesPage';
import PricingPage from './pages/public/PricingPage';
import ContactPage from './pages/public/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        
        {/* App Routes */}
        <Route path="/app" element={<AppLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="transactions" element={<TransactionsPage />} />
          <Route path="transactions/add" element={<AddTransactionPage />} />
          <Route path="transactions/edit/:id" element={<EditTransactionPage />} />
          <Route path="reports" element={<ReportsPage />} />
          <Route path="insights" element={<InsightsPage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>
        
        {/* 404 Page */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;