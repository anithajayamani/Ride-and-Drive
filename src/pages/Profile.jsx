import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../styles/Profile.css';

const Profile = () => {
  const { user, updateProfile, logout } = useAuth();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    firstName: user?.firstName || '',
    email: user?.email || '',
    phone: user?.phone || '',
    address: user?.address || '',
    bio: user?.bio || '',
  });

  if (!user) {
    navigate('/login');
    return null;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    updateProfile(formData);
    setIsEditing(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleCancel = () => {
    setFormData({
      firstName: user?.firstName || '',
      email: user?.email || '',
      phone: user?.phone || '',
      address: user?.address || '',
      bio: user?.bio || '',
    });
    setIsEditing(false);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const memberSince = new Date(user.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="profile-page">
      <div className="profile-container">
        {/* Profile Header */}
        <div className="profile-header">
          <div className="profile-avatar-large">
            {user.firstName.charAt(0).toUpperCase()}
          </div>
          <div className="profile-header-info">
            <h1>Welcome, {user.firstName}!</h1>
            <p>Manage your account and preferences</p>
          </div>
        </div>

        {/* Success Message */}
        {showSuccess && (
          <div className="success-message">
            Profile updated successfully!
          </div>
        )}

        {/* Profile Grid */}
        <div className="profile-grid">
          {/* Personal Information */}
          <div className="profile-card">
            <h2>Personal Information</h2>
            {!isEditing ? (
              <>
                <div className="profile-info-item">
                  <span className="profile-info-label">Name</span>
                  <span className="profile-info-value">{user.firstName}</span>
                </div>
                <div className="profile-info-item">
                  <span className="profile-info-label">Email</span>
                  <span className="profile-info-value">{user.email}</span>
                </div>
                <div className="profile-info-item">
                  <span className="profile-info-label">Phone</span>
                  <span className="profile-info-value">{user.phone || 'Not added'}</span>
                </div>
                <div className="profile-info-item">
                  <span className="profile-info-label">Address</span>
                  <span className="profile-info-value">{user.address || 'Not added'}</span>
                </div>
                <button 
                  onClick={() => setIsEditing(true)}
                  className="btn-save"
                  style={{ marginTop: '20px' }}
                >
                  Edit Profile
                </button>
              </>
            ) : (
              <form onSubmit={handleSave} className="profile-form">
                <div className="form-group-profile">
                  <label>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group-profile">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group-profile">
                  <label>Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group-profile">
                  <label>Address</label>
                  <input
                    type="text"
                    name="address"
                    placeholder="Your address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>
                <div className="profile-buttons">
                  <button type="submit" className="btn-save">Save Changes</button>
                  <button type="button" onClick={handleCancel} className="btn-cancel">Cancel</button>
                </div>
              </form>
            )}
          </div>

          {/* Account Settings */}
          <div className="profile-card">
            <h2>Account Settings</h2>
            <div className="profile-info-item">
              <span className="profile-info-label">Member Since</span>
              <span className="profile-info-value">{memberSince}</span>
            </div>
            <div className="profile-info-item">
              <span className="profile-info-label">Account Status</span>
              <span className="profile-info-value" style={{ color: '#10b981' }}>Active</span>
            </div>
            <div className="profile-info-item">
              <span className="profile-info-label">Verification</span>
              <span className="profile-info-value" style={{ color: '#10b981' }}>✓ Verified</span>
            </div>
            <button 
              onClick={handleLogout}
              className="btn-save"
              style={{ marginTop: '20px', background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)' }}
            >
              Logout
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="profile-stats">
          <div className="stat-item">
            <div className="stat-value">0</div>
            <div className="stat-label">Orders</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">0</div>
            <div className="stat-label">Wishlist Items</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">0</div>
            <div className="stat-label">Reviews</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
