import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { User, Lock, Bell, Palette, Database, Shield } from 'lucide-react';

function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile');
  
  const profileForm = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      currency: 'INR',
      timezone: 'Asia/Kolkata',
      language: 'en'
    }
  });
  
  const passwordForm = useForm({
    defaultValues: {
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    }
  });

  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    pushNotifications: false,
    weeklyReports: true,
    monthlyReports: true,
    budgetAlerts: true,
    transactionReminders: false
  });

  const [preferences, setPreferences] = useState({
    theme: 'light',
    dateFormat: 'DD/MM/YYYY',
    numberFormat: 'indian',
    defaultTransactionType: 'expense',
    autoCategories: true
  });

  const handleProfileSubmit = async (data) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success('Profile updated successfully!');
    } catch (error) {
      toast.error('Failed to update profile');
    }
  };

  const handlePasswordSubmit = async (data) => {
    if (data.newPassword !== data.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      passwordForm.reset();
      toast.success('Password updated successfully!');
    } catch (error) {
      toast.error('Failed to update password');
    }
  };

  const handleNotificationChange = (key) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
    toast.success('Notification preferences updated');
  };

  const handlePreferenceChange = (key, value) => {
    setPreferences(prev => ({
      ...prev,
      [key]: value
    }));
    toast.success('Preferences updated');
  };

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'security', label: 'Security', icon: Lock },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'preferences', label: 'Preferences', icon: Palette },
    { id: 'data', label: 'Data & Privacy', icon: Database }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-heading font-bold text-secondary-900">Settings</h1>
        <p className="text-secondary-600 mt-1">Manage your account settings and preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="card p-0">
            <nav className="space-y-1">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center px-4 py-3 text-left transition-colors ${
                      activeTab === tab.id
                        ? 'bg-primary-50 text-primary-700 border-r-2 border-primary-600'
                        : 'text-secondary-600 hover:bg-secondary-50 hover:text-secondary-900'
                    }`}
                  >
                    <Icon className="w-5 h-5 mr-3" />
                    {tab.label}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-3">
          {activeTab === 'profile' && (
            <div className="card">
              <div className="border-b border-secondary-200 pb-4 mb-6">
                <h3 className="text-xl font-heading font-semibold text-secondary-900">
                  Profile Information
                </h3>
                <p className="text-secondary-600 mt-1">
                  Update your personal details and contact information
                </p>
              </div>
              
              <form onSubmit={profileForm.handleSubmit(handleProfileSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      className="form-input"
                      placeholder="Enter your first name"
                      {...profileForm.register('firstName')}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      className="form-input"
                      placeholder="Enter your last name"
                      {...profileForm.register('lastName')}
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="form-input"
                    placeholder="Enter your email address"
                    {...profileForm.register('email')}
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    className="form-input"
                    placeholder="Enter your phone number"
                    {...profileForm.register('phone')}
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="currency" className="form-label">Default Currency</label>
                    <select
                      id="currency"
                      className="form-input"
                      {...profileForm.register('currency')}
                    >
                      <option value="INR">Indian Rupee (₹)</option>
                      <option value="USD">US Dollar ($)</option>
                      <option value="EUR">Euro (€)</option>
                      <option value="GBP">British Pound (£)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="timezone" className="form-label">Timezone</label>
                    <select
                      id="timezone"
                      className="form-input"
                      {...profileForm.register('timezone')}
                    >
                      <option value="Asia/Kolkata">Asia/Kolkata</option>
                      <option value="America/New_York">America/New_York</option>
                      <option value="Europe/London">Europe/London</option>
                      <option value="Asia/Tokyo">Asia/Tokyo</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="language" className="form-label">Language</label>
                    <select
                      id="language"
                      className="form-input"
                      {...profileForm.register('language')}
                    >
                      <option value="en">English</option>
                      <option value="hi">Hindi</option>
                      <option value="es">Spanish</option>
                      <option value="fr">French</option>
                    </select>
                  </div>
                </div>
                
                <button type="submit" className="btn btn-primary">
                  Update Profile
                </button>
              </form>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="space-y-6">
              <div className="card">
                <div className="border-b border-secondary-200 pb-4 mb-6">
                  <h3 className="text-xl font-heading font-semibold text-secondary-900">
                    Change Password
                  </h3>
                  <p className="text-secondary-600 mt-1">
                    Update your password to keep your account secure
                  </p>
                </div>
                
                <form onSubmit={passwordForm.handleSubmit(handlePasswordSubmit)} className="space-y-6">
                  <div>
                    <label htmlFor="currentPassword" className="form-label">Current Password</label>
                    <input
                      type="password"
                      id="currentPassword"
                      className="form-input"
                      placeholder="Enter current password"
                      {...passwordForm.register('currentPassword', { required: true })}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="newPassword" className="form-label">New Password</label>
                    <input
                      type="password"
                      id="newPassword"
                      className="form-input"
                      placeholder="Enter new password"
                      {...passwordForm.register('newPassword', { required: true, minLength: 6 })}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="confirmPassword" className="form-label">Confirm New Password</label>
                    <input
                      type="password"
                      id="confirmPassword"
                      className="form-input"
                      placeholder="Confirm new password"
                      {...passwordForm.register('confirmPassword', { required: true })}
                    />
                  </div>
                  
                  <button type="submit" className="btn btn-primary">
                    Update Password
                  </button>
                </form>
              </div>

              <div className="card">
                <div className="border-b border-secondary-200 pb-4 mb-6">
                  <h3 className="text-xl font-heading font-semibold text-secondary-900">
                    Two-Factor Authentication
                  </h3>
                  <p className="text-secondary-600 mt-1">
                    Add an extra layer of security to your account
                  </p>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-secondary-900">SMS Authentication</h4>
                    <p className="text-sm text-secondary-600">Receive verification codes via SMS</p>
                  </div>
                  <button className="btn btn-secondary">
                    Enable
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="card">
              <div className="border-b border-secondary-200 pb-4 mb-6">
                <h3 className="text-xl font-heading font-semibold text-secondary-900">
                  Notification Preferences
                </h3>
                <p className="text-secondary-600 mt-1">
                  Choose how you want to receive notifications
                </p>
              </div>
              
              <div className="space-y-6">
                {Object.entries(notifications).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between">
                    <div>
                      <label htmlFor={key} className="font-medium text-secondary-900 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                      </label>
                      <p className="text-sm text-secondary-600">
                        {key === 'emailNotifications' && 'Receive important updates via email'}
                        {key === 'pushNotifications' && 'Get instant notifications on your device'}
                        {key === 'weeklyReports' && 'Receive weekly spending summaries'}
                        {key === 'monthlyReports' && 'Get detailed monthly financial reports'}
                        {key === 'budgetAlerts' && 'Get notified when approaching budget limits'}
                        {key === 'transactionReminders' && 'Reminders to log your transactions'}
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        id={key}
                        className="sr-only peer"
                        checked={value}
                        onChange={() => handleNotificationChange(key)}
                      />
                      <div className="w-11 h-6 bg-secondary-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-secondary-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'preferences' && (
            <div className="card">
              <div className="border-b border-secondary-200 pb-4 mb-6">
                <h3 className="text-xl font-heading font-semibold text-secondary-900">
                  App Preferences
                </h3>
                <p className="text-secondary-600 mt-1">
                  Customize your app experience
                </p>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="form-label">Theme</label>
                  <select
                    className="form-input"
                    value={preferences.theme}
                    onChange={(e) => handlePreferenceChange('theme', e.target.value)}
                  >
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                    <option value="auto">Auto</option>
                  </select>
                </div>
                
                <div>
                  <label className="form-label">Date Format</label>
                  <select
                    className="form-input"
                    value={preferences.dateFormat}
                    onChange={(e) => handlePreferenceChange('dateFormat', e.target.value)}
                  >
                    <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                    <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                    <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                  </select>
                </div>
                
                <div>
                  <label className="form-label">Number Format</label>
                  <select
                    className="form-input"
                    value={preferences.numberFormat}
                    onChange={(e) => handlePreferenceChange('numberFormat', e.target.value)}
                  >
                    <option value="indian">Indian (1,00,000)</option>
                    <option value="international">International (100,000)</option>
                  </select>
                </div>
                
                <div>
                  <label className="form-label">Default Transaction Type</label>
                  <select
                    className="form-input"
                    value={preferences.defaultTransactionType}
                    onChange={(e) => handlePreferenceChange('defaultTransactionType', e.target.value)}
                  >
                    <option value="expense">Expense</option>
                    <option value="income">Income</option>
                  </select>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <label className="font-medium text-secondary-900">Auto-categorize transactions</label>
                    <p className="text-sm text-secondary-600">Automatically suggest categories based on description</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={preferences.autoCategories}
                      onChange={(e) => handlePreferenceChange('autoCategories', e.target.checked)}
                    />
                    <div className="w-11 h-6 bg-secondary-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-secondary-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                  </label>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'data' && (
            <div className="space-y-6">
              <div className="card">
                <div className="border-b border-secondary-200 pb-4 mb-6">
                  <h3 className="text-xl font-heading font-semibold text-secondary-900">
                    Data Management
                  </h3>
                  <p className="text-secondary-600 mt-1">
                    Manage your data and privacy settings
                  </p>
                </div>
                
                <div className="space-y-4">
                  <button className="btn btn-secondary w-full justify-start">
                    <Database className="w-5 h-5 mr-2" />
                    Export All Data
                  </button>
                  
                  <button className="btn btn-secondary w-full justify-start">
                    <Shield className="w-5 h-5 mr-2" />
                    Download Privacy Report
                  </button>
                  
                  <button className="btn btn-danger w-full justify-start">
                    <Database className="w-5 h-5 mr-2" />
                    Delete All Data
                  </button>
                </div>
              </div>

              <div className="card">
                <div className="border-b border-secondary-200 pb-4 mb-6">
                  <h3 className="text-xl font-heading font-semibold text-secondary-900">
                    Account Actions
                  </h3>
                  <p className="text-secondary-600 mt-1">
                    Manage your account
                  </p>
                </div>
                
                <button className="btn btn-danger">
                  Delete Account
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;