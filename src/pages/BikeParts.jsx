import { bikeProducts } from '../data/bikeProducts';
import ProductCard from '../components/common/ProductCard';
import { useState, useMemo } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import '../styles/Products.css';

const Ride = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');

  // Get filter parameters from URL
  const brand = searchParams.get('brand');
  const model = searchParams.get('model');
  const year = searchParams.get('year');
  const categoryParam = searchParams.get('category');

  const [selectedCategory, setSelectedCategory] = useState(categoryParam || 'All');
  const [selectedSubcategory, setSelectedSubcategory] = useState('All');

  // Get filtered products based on vehicle compatibility
  const vehicleFilteredProducts = useMemo(() => {
    return bikeProducts.filter(product => {
      let matchesVehicle = true;
      if (brand && model && year) {
        matchesVehicle = 
          product.compatibleBrands?.includes(brand) &&
          (product.compatibleModels?.includes('All Models') || product.compatibleModels?.includes(model)) &&
          product.compatibleYears?.includes(parseInt(year));
      }
      return matchesVehicle;
    });
  }, [brand, model, year]);

  // Get unique categories from filtered products
  const availableCategories = useMemo(() => {
    const categories = ['All', ...new Set(vehicleFilteredProducts.map(p => p.category))];
    return categories;
  }, [vehicleFilteredProducts]);

  // Get unique subcategories based on selected category
  const availableSubcategories = useMemo(() => {
    let filtered = vehicleFilteredProducts;
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }
    const subcategories = ['All', ...new Set(filtered.map(p => p.subcategory).filter(Boolean))];
    return subcategories;
  }, [vehicleFilteredProducts, selectedCategory]);

  // Final filtered products
  const filteredProducts = vehicleFilteredProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSubcategory = selectedSubcategory === 'All' || product.subcategory === selectedSubcategory;
    
    return matchesSearch && matchesCategory && matchesSubcategory;
  });

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedSubcategory('All');
  };

  const handleReset = () => {
    setSearchTerm('');
    setSelectedCategory('All');
    setSelectedSubcategory('All');
    // Force re-render by triggering state update
    window.scrollTo(0, 0);
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="products-page">
      <div className="products-container">
        {/* Vehicle Selector Bar */}
        {brand && model && year && (
          <div className="vehicle-selector-bar">
            <div className="selector-bar-content">
              <div className="selector-bar-info">
                <span className="selector-label">Current Vehicle:</span>
                <span className="selector-value">{year} {brand} {model}</span>
              </div>
              <div className="selector-bar-actions">
                <button className="btn-change-vehicle" onClick={handleBackToHome}>
                  ← Change Vehicle
                </button>
                <button className="btn-reset-filters" onClick={handleReset}>
                  🔄 Reset Filters
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="products-header">
          <h1 className="products-title ride">
            {brand && model ? `${brand} ${model}` : 'Bike Collection'}
          </h1>
          <p className="products-subtitle">
            {brand && model ? 'Compatible Bike Accessories' : 'Premium Bike Accessories'}
          </p>
          {brand && model && year && (
            <p className="filter-info">Showing parts for {year} {brand} {model}</p>
          )}
        </div>

        <div className="products-content">
          {/* Left Sidebar - Categories */}
          <aside className="products-sidebar">
            <div className="sidebar-section">
              <h3 className="sidebar-title">CATEGORY</h3>
              <div className="category-list">
                {availableCategories.map(cat => (
                  <label key={cat} className="category-item">
                    <input
                      type="checkbox"
                      checked={selectedCategory === cat}
                      onChange={() => handleCategoryChange(cat)}
                    />
                    <span>{cat}</span>
                  </label>
                ))}
              </div>
            </div>

            {selectedCategory !== 'All' && (
              <div className="sidebar-section">
                <h3 className="sidebar-title">SUB CATEGORY</h3>
                <div className="category-list">
                  {availableSubcategories.map(subcat => (
                    <label key={subcat} className="category-item">
                      <input
                        type="checkbox"
                        checked={selectedSubcategory === subcat}
                        onChange={(e) => setSelectedSubcategory(e.target.checked ? subcat : 'All')}
                      />
                      <span>{subcat}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}
          </aside>

          {/* Main Content */}
          <main className="products-main">
            {/* Search and Sort */}
            <div className="filters-section">
              <input
                type="text"
                placeholder="Search bike accessories..."
                className="search-input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="results-info">
                <span>All {filteredProducts.length} results</span>
                <select className="sort-select">
                  <option>Sort by Most relevant</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest First</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="products-grid ride">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} type="ride" />
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <div className="empty-state-icon">🔍</div>
                <h3 className="empty-state-title">No Products Found</h3>
                <p className="empty-state-text">Try adjusting your search or filters</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Ride;
