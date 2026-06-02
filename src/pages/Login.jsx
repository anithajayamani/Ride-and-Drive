import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import '../styles/Auth.css';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      // Extract first name from email
      const firstName = formData.email.split('@')[0].charAt(0).toUpperCase() + formData.email.split('@')[0].slice(1);
      
      // Login user
      login({
        email: formData.email,
        firstName: firstName,
        password: formData.password,
      });
      
      setIsLoading(false);
      setFormData({ email: '', password: '' });
      
      // Redirect to home
      navigate('/');
    }, 1000);
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <h2 className="auth-title">Welcome Back</h2>
            <p className="auth-subtitle">Sign in to access premium accessories</p>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                className={`form-input ${errors.email ? 'error' : ''}`}
              />
              {errors.email && <div className="form-error">{errors.email}</div>}
            </div>

            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                className={`form-input ${errors.password ? 'error' : ''}`}
              />
              {errors.password && <div className="form-error">{errors.password}</div>}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`auth-submit ${isLoading ? 'loading' : ''}`}
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          <div className="auth-footer">
            <span className="auth-footer-text">
              Don't have an account?
              <Link to="/signup" className="auth-footer-link">Sign Up</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;