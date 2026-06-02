import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Trash2, ArrowLeft, Plus, Minus } from 'lucide-react';
import '../styles/Cart.css';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  const total = cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);

  return (
    <div className="cart-page">
      <div className="cart-container">
        <div className="cart-header">
          <Link to="/" className="back-link">
            <ArrowLeft size={24} />
            <span>Continue Shopping</span>
          </Link>
          <h1 className="cart-title">Your Cart</h1>
        </div>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <div className="empty-cart-icon">🛒</div>
            <h2 className="empty-cart-title">Your cart is empty</h2>
            <p className="empty-cart-text">Add some premium accessories to get started</p>
            <Link 
              to="/" 
              className="empty-cart-button"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="cart-grid">
            {/* Cart Items */}
            <div className="cart-items">
              {cart.map((item) => (
                <div 
                  key={item.id} 
                  className="cart-item"
                >
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="item-image"
                  />
                  
                  <div className="item-details">
                    <h3 className="item-name">{item.name}</h3>
                    <p className="item-brand">{item.brand}</p>
                    <p className="item-price">₹{item.price}</p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="item-controls">
                    <button
                      onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)}
                      className="quantity-button"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="quantity-display">{item.quantity || 1}</span>
                    <button
                      onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
                      className="quantity-button"
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  {/* Delete Button */}
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="remove-button"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="order-summary">
              <h3 className="summary-title">Order Summary</h3>
              
              <div className="summary-row">
                <span>Items ({cart.length})</span>
                <span>₹{total}</span>
              </div>
              <div className="summary-row free">
                <span>Shipping</span>
                <span>FREE</span>
              </div>
              <div className="summary-row total">
                <span>Total</span>
                <span className="value">₹{total}</span>
              </div>

              <button className="checkout-button">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
