import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, LogOut, User, Heart } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { useAuth } from '../../context/AuthContext';
import { useState } from 'react';
import '../../styles/Navbar.css';

const Navbar = () => {
  const { cart } = useCart();
  const { wishlist } = useWishlist();
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  const scrollToSection = (id) => {
    if (isHome) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = `/#${id}`;
    }
    setIsMenuOpen(false);
  };

  const handleLogout = () => {
    logout();
    setIsProfileOpen(false);
    window.location.href = '/';
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <div className="logo-text">
            R<span className="logo-accent">&</span>D
          </div>
          <div className="logo-subtitle">
            <strong>RIDE & DRIVE</strong>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="navbar-menu desktop">
          <button onClick={() => scrollToSection('home')} className="menu-button">Home</button>
          <button onClick={() => scrollToSection('about')} className="menu-button">About Us</button>
          <button onClick={() => scrollToSection('whatwedo')} className="menu-button">What We Do</button>
        </div>

        {/* BIKE PARTS & CAR PARTS */}
        <div className="shop-links desktop">
          <Link to="/bike-parts" className="shop-link ride" onClick={() => setIsMenuOpen(false)}>
            <span className="shop-link-icon"></span> BIKE ACCESSORIES
          </Link>
          <Link to="/car-parts" className="shop-link drive" onClick={() => setIsMenuOpen(false)}>
            <span className="shop-link-icon"></span> CAR ACCESSORIES
          </Link>
          <Link to="/brands" className="shop-link brands" onClick={() => setIsMenuOpen(false)}>
            <span className="shop-link-icon"></span> BRANDS
          </Link>
          <button onClick={() => scrollToSection('contact')} className="shop-link contact">
            <span className="shop-link-icon"></span> CONTACT
          </button>
        </div>

        {/* Right Side */}
        <div className="navbar-right">
          {user ? (
            <>
              {/* User Profile Dropdown */}
              <div className="profile-dropdown desktop">
                <button 
                  className="profile-button"
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                >
                  <div className="profile-avatar">
                    {user.firstName.charAt(0).toUpperCase()}
                  </div>
                  <span className="profile-name">Hi, {user.firstName}</span>
                </button>
                
                {isProfileOpen && (
                  <div className="profile-menu">
                    <Link to="/profile" className="profile-menu-item" onClick={() => setIsProfileOpen(false)}>
                      <User size={18} /> My Profile
                    </Link>
                    <button onClick={handleLogout} className="profile-menu-item logout">
                      <LogOut size={18} /> Logout
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="auth-buttons desktop">
              <Link 
                to="/login"
                className="auth-button login"
              >
                Login
              </Link>
              
              <Link 
                to="/signup"
                className="auth-button signup"
              >
                Sign Up
              </Link>
            </div>
          )}

          {/* Wishlist Icon */}
          <Link 
            to="/wishlist" 
            className="cart-icon-wrapper"
          >
            <button className="cart-button">
              <Heart size={24} />
            </button>
            {wishlist.length > 0 && (
              <span className="cart-badge" style={{ background: 'linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)' }}>
                {wishlist.length}
              </span>
            )}
          </Link>

          {/* Cart Icon */}
          <Link 
            to="/cart" 
            className="cart-icon-wrapper"
          >
            <button className="cart-button">
              <ShoppingCart size={24} />
            </button>
            {cart.length > 0 && (
              <span className="cart-badge">
                {cart.length}
              </span>
            )}
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className={`mobile-menu-button ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu active">
          <div className="mobile-menu-section">
            <button onClick={() => scrollToSection('home')} className="mobile-menu-link">Home</button>
            <button onClick={() => scrollToSection('about')} className="mobile-menu-link">About Us</button>
            <button onClick={() => scrollToSection('whatwedo')} className="mobile-menu-link">What We Do</button>
          </div>
          
          <div className="mobile-menu-section">
            <Link to="/bike-parts" className="mobile-menu-link ride" onClick={() => setIsMenuOpen(false)}>🏍️ BIKE ACCESSORIES</Link>
            <Link to="/car-parts" className="mobile-menu-link drive" onClick={() => setIsMenuOpen(false)}>🚗 CAR ACCESSORIES</Link>
            <Link to="/brands" className="mobile-menu-link brands" onClick={() => setIsMenuOpen(false)}>⭐ BRANDS</Link>
            <button onClick={() => { scrollToSection('contact'); setIsMenuOpen(false); }} className="mobile-menu-link contact">📞 CONTACT</button>
            <Link to="/wishlist" className="mobile-menu-link" style={{ color: '#a855f7' }} onClick={() => setIsMenuOpen(false)}>❤️ Wishlist ({wishlist.length})</Link>
            <Link to="/cart" className="mobile-menu-link cart" data-count={cart.length} onClick={() => setIsMenuOpen(false)}>Cart</Link>
          </div>

          {user ? (
            <div className="mobile-menu-section">
              <Link to="/profile" className="mobile-menu-link" onClick={() => setIsMenuOpen(false)}>
                👤 {user.firstName}'s Profile
              </Link>
              <button onClick={handleLogout} className="mobile-menu-link logout">
                🚪 Logout
              </button>
            </div>
          ) : (
            <div className="mobile-auth-buttons">
              <Link to="/login" className="mobile-auth-button login">Login</Link>
              <Link to="/signup" className="mobile-auth-button signup">Sign Up</Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
