import { Star, ShoppingCart, Check, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { useAuth } from '../../context/AuthContext';
import { useState } from 'react';
import '../../styles/ProductCard.css';

const ProductCard = ({ product, type }) => {
  const { addToCart } = useCart();
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [isAdded, setIsAdded] = useState(false);
  const isRide = type === 'ride';
  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  const handleWishlist = (e) => {
    e.stopPropagation();
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleCardClick = () => {
    navigate(`/product/${product.id}/${type}`);
  };

  return (
    <div className="product-card-container" onClick={handleCardClick}>
      <div className={`product-card ${isAdded ? 'flip-animation' : ''}`}>
        <div className="product-image-wrapper">
          <img 
            src={product.image} 
            alt={product.name}
            className="product-image"
          />
          <div className="product-badge">
            {product.brand}
          </div>
          <button 
            onClick={handleWishlist}
            className={`wishlist-button ${inWishlist ? 'active' : ''}`}
          >
            <Heart size={20} fill={inWishlist ? 'currentColor' : 'none'} />
          </button>
        </div>

        <div className="product-content">
          <h3 className="product-name">
            {product.name}
          </h3>
          
          <p className="product-compatibility">
            {product.category}
          </p>
          
          <div className="product-rating">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={18} 
                className={`product-star ${i < product.rating ? 'filled' : 'empty'}`}
              />
            ))}
          </div>

          <div className="product-stock">
            {product.inStock ? (
              <span className="stock-available">✓ In Stock</span>
            ) : (
              <span className="stock-unavailable">Out of Stock</span>
            )}
          </div>

          <div className="product-footer">
            <div className="product-price">₹{product.price}</div>
            
            <button 
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className={`action-button add-to-cart ${isAdded ? 'added' : ''}`}
            >
              {isAdded ? <Check size={22} strokeWidth={3} /> : <ShoppingCart size={22} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;