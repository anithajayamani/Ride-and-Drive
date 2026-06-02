import { carProducts } from '../data/carProducts';
import ProductCard from '../components/common/ProductCard';
import { useState, useMemo } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import '../styles/Products.css';

const Drive = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState('');

  // Get filter parameters from URL
  const brand = searchParams.get('brand');
  const model = searchParams.get('model');
  const year = searchParams.get('year');
  const categoryParam = searchParams.get('category');

  const [selectedCategory, setSelectedCategory] = useState(categoryParam || 'All');
  const [selectedSubcategory, setSelectedSubcategory] = useState('All');

  // Get filtered products based on vehicle compatibility
  const vehicleFilteredProducts = useMemo(() => {
    return carProducts.filter(product => {
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
    const subArray = filtered.map(p => p.subcategory);
    console.log('Category:', selectedCategory, 'Filtered count:', filtered.length, 'Subcategories:', subArray, 'First product:', filtered[0]);
    const subcategories = ['All', ...new Set(subArray.filter(Boolean))];
    return subcategories;
  }, [vehicleFilteredProducts, selectedCategory]);

  // Final filtered products
  const filtered = vehicleFilteredProducts.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSubcategory = selectedSubcategory === 'All' || p.subcategory === selectedSubcategory;
    
    return matchesSearch && matchesCategory && matchesSubcategory;
  });

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedSubcategory('All');
  };

  const handleReset = () => {
    setSearch('');
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
          <h1 className="products-title drive">
            {brand && model ? `${brand} ${model}` : 'Car Collection'}
          </h1>
          <p className="products-subtitle">
            {brand && model ? 'Compatible Car Accessories' : 'Premium accessories for luxury cars'}
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
                placeholder="Search car accessories..."
                className="search-input"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <div className="results-info">
                <span>All {filtered.length} results</span>
                <select className="sort-select">
                  <option>Sort by Most relevant</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest First</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            {filtered.length > 0 ? (
              <div className="products-grid drive">
                {filtered.map(product => (
                  <ProductCard key={product.id} product={product} type="drive" />
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

export default Drive;
