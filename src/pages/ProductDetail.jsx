import { useParams, Link, useNavigate } from 'react-router-dom';
import { bikeProducts } from '../data/bikeProducts';
import { carProducts } from '../data/carProducts';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { ArrowLeft, ShoppingCart, Check, Star, Heart } from 'lucide-react';
import { useState } from 'react';
import '../styles/ProductDetail.css';

const ProductDetail = () => {
  const { id, type } = useParams();
  const { addToCart } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [isAdded, setIsAdded] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const products = type === 'ride' ? bikeProducts : carProducts;
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div className="pt-24 text-center text-2xl text-zinc-400">Product not found</div>;
  }

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  const handleWishlist = () => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    setIsWishlisted(!isWishlisted);
  };

  return (
    <div className="product-detail-page">
      <div className="product-detail-container">
        <Link 
          to={type === 'ride' ? '/bike-parts' : '/car-parts'} 
          className="back-button"
        >
          <ArrowLeft size={20} /> Back to {type === 'ride' ? 'BIKE' : 'CAR'}
        </Link>

        <div className="product-detail-grid">
          {/* 3D Image Viewer */}
          <div className="image-viewer-section">
            <div className="image-viewer-container">
              <img 
                src={product.image} 
                alt={product.name} 
                className="product-image-3d"
              />
              <div className="image-badge">
                3D View Available
              </div>
              <div className="image-controls">
                <button className="control-button">↻</button>
                <button className="control-button">⊕</button>
                <button className="control-button">⊖</button>
              </div>
            </div>
          </div>

          {/* Details Section */}
          <div className="details-section">
            <div className="product-header">
              <h1 className="product-title">{product.name}</h1>
              <p className="product-brand">{product.brand}</p>
            </div>

            <div className="product-rating-section">
              <div className="rating-stars">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={24} 
                    className={`rating-star ${i < product.rating ? 'filled' : ''}`}
                  />
                ))}
              </div>
              <span className="rating-text">{product.rating} out of 5 stars</span>
            </div>

            <div className="price-section">
              <div className="price-label">Price</div>
              <div className="price-value">₹{product.price}</div>
            </div>

            <div className="description">
              Premium quality {product.category.toLowerCase()} designed for performance and style. 
              Built to last and make your {type === 'ride' ? 'ride' : 'drive'} stand out with exceptional craftsmanship and durability.
            </div>

            <div className="specs-section">
              <div className="specs-title">Specifications</div>
              <div className="spec-item">
                <span className="spec-label">Category</span>
                <span className="spec-value">{product.category}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Brand</span>
                <span className="spec-value">{product.brand}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Rating</span>
                <span className="spec-value">{product.rating}★</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Stock Status</span>
                <span className="spec-value" style={{ color: product.inStock ? '#10b981' : '#ef4444' }}>
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="action-buttons">
              <button 
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className={`btn-add-to-cart ${isAdded ? 'added' : ''}`}
              >
                {isAdded ? (
                  <>
                    <Check size={28} strokeWidth={3} /> Added to Cart
                  </>
                ) : (
                  <>
                    <ShoppingCart size={28} /> Add to Cart
                  </>
                )}
              </button>
              <button 
                onClick={handleWishlist}
                className="btn-wishlist"
              >
                <Heart size={24} fill={isWishlisted ? 'currentColor' : 'none'} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;