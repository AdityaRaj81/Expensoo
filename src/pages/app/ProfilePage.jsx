import { useState } from 'react';

function ProfilePage() {
  const [profileData, setProfileData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    bio: '',
    location: '',
    website: '',
    avatar: null
  });

  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    pushNotifications: false,
    weeklyReports: true,
    monthlyReports: true,
    budgetAlerts: true
  });

  const handleProfileChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value
    });
  };

  const handlePreferenceChange = (e) => {
    setPreferences({
      ...preferences,
      [e.target.name]: e.target.checked
    });
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    console.log('Profile updated:', profileData);
    alert('Profile updated successfully!');
  };

  const handlePreferencesSubmit = (e) => {
    e.preventDefault();
    console.log('Preferences updated:', preferences);
    alert('Preferences updated successfully!');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Profile Header */}
      <div className="card">
        <div className="flex items-center space-x-6">
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-br from-primary-600 to-accent-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
              U
            </div>
            <button className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-full shadow-lg border-2 border-secondary-200 flex items-center justify-center text-secondary-600 hover:text-secondary-900 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
          </div>
          <div>
            <h2 className="text-2xl font-heading font-bold text-secondary-900 mb-2">
              Welcome back, User!
            </h2>
            <p className="text-secondary-600">
              Manage your profile information and preferences
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Personal Information */}
        <div className="card">
          <div className="border-b border-secondary-200 pb-4 mb-6">
            <h3 className="text-xl font-heading font-semibold text-secondary-900">
              Personal Information
            </h3>
            <p className="text-secondary-600 mt-1">
              Update your personal details and contact information
            </p>
          </div>
          
          <form onSubmit={handleProfileSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="form-input"
                  value={profileData.firstName}
                  onChange={handleProfileChange}
                  placeholder="Enter your first name"
                />
              </div>
              
              <div>
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="form-input"
                  value={profileData.lastName}
                  onChange={handleProfileChange}
                  placeholder="Enter your last name"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                value={profileData.email}
                onChange={handleProfileChange}
                placeholder="Enter your email address"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="form-label">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="form-input"
                value={profileData.phone}
                onChange={handleProfileChange}
                placeholder="Enter your phone number"
              />
            </div>
            
            <div>
              <label htmlFor="location" className="form-label">
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                className="form-input"
                value={profileData.location}
                onChange={handleProfileChange}
                placeholder="City, Country"
              />
            </div>
            
            <div>
              <label htmlFor="website" className="form-label">
                Website
              </label>
              <input
                type="url"
                id="website"
                name="website"
                className="form-input"
                value={profileData.website}
                onChange={handleProfileChange}
                placeholder="https://yourwebsite.com"
              />
            </div>
            
            <div>
              <label htmlFor="bio" className="form-label">
                Bio
              </label>
              <textarea
                id="bio"
                name="bio"
                rows={4}
                className="form-input resize-none"
                value={profileData.bio}
                onChange={handleProfileChange}
                placeholder="Tell us a bit about yourself..."
              />
            </div>
            
            <button type="submit" className="btn btn-primary w-full">
              Update Profile
            </button>
          </form>
        </div>

        {/* Preferences */}
        <div className="card">
          <div className="border-b border-secondary-200 pb-4 mb-6">
            <h3 className="text-xl font-heading font-semibold text-secondary-900">
              Notification Preferences
            </h3>
            <p className="text-secondary-600 mt-1">
              Choose how you want to receive notifications
            </p>
          </div>
          
          <form onSubmit={handlePreferencesSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <label htmlFor="emailNotifications" className="font-medium text-secondary-900">
                    Email Notifications
                  </label>
                  <p className="text-sm text-secondary-600">
                    Receive important updates via email
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    id="emailNotifications"
                    name="emailNotifications"
                    className="sr-only peer"
                    checked={preferences.emailNotifications}
                    onChange={handlePreferenceChange}
                  />
                  <div className="w-11 h-6 bg-secondary-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-secondary-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <label htmlFor="pushNotifications" className="font-medium text-secondary-900">
                    Push Notifications
                  </label>
                  <p className="text-sm text-secondary-600">
                    Get instant notifications on your device
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    id="pushNotifications"
                    name="pushNotifications"
                    className="sr-only peer"
                    checked={preferences.pushNotifications}
                    onChange={handlePreferenceChange}
                  />
                  <div className="w-11 h-6 bg-secondary-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-secondary-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <label htmlFor="weeklyReports" className="font-medium text-secondary-900">
                    Weekly Reports
                  </label>
                  <p className="text-sm text-secondary-600">
                    Receive weekly spending summaries
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    id="weeklyReports"
                    name="weeklyReports"
                    className="sr-only peer"
                    checked={preferences.weeklyReports}
                    onChange={handlePreferenceChange}
                  />
                  <div className="w-11 h-6 bg-secondary-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-secondary-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <label htmlFor="monthlyReports" className="font-medium text-secondary-900">
                    Monthly Reports
                  </label>
                  <p className="text-sm text-secondary-600">
                    Get detailed monthly financial reports
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    id="monthlyReports"
                    name="monthlyReports"
                    className="sr-only peer"
                    checked={preferences.monthlyReports}
                    onChange={handlePreferenceChange}
                  />
                  <div className="w-11 h-6 bg-secondary-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-secondary-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <label htmlFor="budgetAlerts" className="font-medium text-secondary-900">
                    Budget Alerts
                  </label>
                  <p className="text-sm text-secondary-600">
                    Get notified when approaching budget limits
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    id="budgetAlerts"
                    name="budgetAlerts"
                    className="sr-only peer"
                    checked={preferences.budgetAlerts}
                    onChange={handlePreferenceChange}
                  />
                  <div className="w-11 h-6 bg-secondary-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-secondary-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                </label>
              </div>
            </div>
            
            <button type="submit" className="btn btn-primary w-full">
              Save Preferences
            </button>
          </form>
        </div>
      </div>

      {/* Account Actions */}
      <div className="card">
        <div className="border-b border-secondary-200 pb-4 mb-6">
          <h3 className="text-xl font-heading font-semibold text-secondary-900">
            Account Actions
          </h3>
          <p className="text-secondary-600 mt-1">
            Manage your account settings and data
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="btn btn-secondary">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Export Data
          </button>
          
          <button className="btn btn-secondary">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
            Import Data
          </button>
          
          <button className="btn btn-danger">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;