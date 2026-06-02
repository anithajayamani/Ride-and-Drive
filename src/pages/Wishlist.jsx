import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowLeft, ShoppingCart, Trash2 } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import '../styles/Wishlist.css';

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const handleRemove = (productId) => {
    removeFromWishlist(productId);
  };

  return (
    <div className="wishlist-page">
      <div className="wishlist-container">
        <div className="wishlist-header">
          <Link to="/" className="wishlist-back-link">
            <ArrowLeft size={24} />
            <span>Back to Home</span>
          </Link>
          <h1 className="wishlist-title">My Wishlist</h1>
          <span className="wishlist-count">{wishlist.length} items</span>
        </div>

        {wishlist.length === 0 ? (
          <div className="empty-wishlist">
            <div className="empty-wishlist-icon">💔</div>
            <h2 className="empty-wishlist-title">Your wishlist is empty</h2>
            <p className="empty-wishlist-text">Start adding your favorite accessories to your wishlist</p>
            <Link to="/ride" className="empty-wishlist-button">
              Browse R RIDE
            </Link>
            <span style={{ margin: '0 12px', color: '#a0aec0' }}>or</span>
            <Link to="/drive" className="empty-wishlist-button" style={{ background: 'linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)' }}>
              Browse D DRIVE
            </Link>
          </div>
        ) : (
          <>
            <div className="wishlist-grid">
              {wishlist.map(product => (
                <div key={product.id} className="wishlist-item">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="wishlist-item-image"
                  />
                  <div className="wishlist-item-content">
                    <h3 className="wishlist-item-name">{product.name}</h3>
                    <p className="wishlist-item-brand">{product.brand}</p>
                    <div className="wishlist-item-price">₹{product.price}</div>
                    <div className="wishlist-item-actions">
                      <button 
                        onClick={() => handleAddToCart(product)}
                        className="wishlist-action-button add-cart"
                      >
                        <ShoppingCart size={18} />
                        Add to Cart
                      </button>
                      <button 
                        onClick={() => handleRemove(product.id)}
                        className="wishlist-action-button remove"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="wishlist-summary">
              <h3>Ready to shop?</h3>
              <p>You have {wishlist.length} item{wishlist.length !== 1 ? 's' : ''} in your wishlist</p>
              <Link to="/cart" className="wishlist-summary-button">
                View Cart
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
