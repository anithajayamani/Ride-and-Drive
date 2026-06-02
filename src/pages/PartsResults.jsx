import { useSearchParams, useNavigate } from 'react-router-dom';
import { useState, useMemo } from 'react';
import ProductCard from '../components/common/ProductCard';
import { bikeSpareParts, carSpareParts } from '../data/generateSpareParts';
import { bikeProducts } from '../data/bikeProducts';
import { carProducts } from '../data/carProducts';
import '../styles/PartsResults.css';

const PartsResults = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const vehicleType = searchParams.get('type');
  const brand = searchParams.get('brand');
  const model = searchParams.get('model');
  const year = searchParams.get('year');

  const isBike = vehicleType === '2-wheeler';

  // Get spare parts based on vehicle type
  const allSpareParts = isBike ? bikeSpareParts : carSpareParts;
  const allAccessories = isBike ? bikeProducts : carProducts;

  // Filter spare parts
  const compatibleSpareParts = useMemo(() => {
    return allSpareParts.filter(part => {
      return (
        part.vehicleBrand === brand &&
        part.vehicleModel === model &&
        part.compatibleYears.includes(parseInt(year))
      );
    });
  }, [brand, model, year, allSpareParts]);

  // Filter accessories (brand-compatible)
  const compatibleAccessories = useMemo(() => {
    return allAccessories.filter(accessory => {
      return accessory.compatibleBrands?.includes(brand);
    });
  }, [brand, allAccessories]);

  // Get available categories from spare parts
  const availableCategories = useMemo(() => {
    const categories = ['All', ...new Set(compatibleSpareParts.map(p => p.category))];
    return categories;
  }, [compatibleSpareParts]);

  // Filter spare parts by selected category
  const filteredSpareParts = useMemo(() => {
    if (selectedCategory === 'All') {
      return compatibleSpareParts;
    }
    return compatibleSpareParts.filter(part => part.category === selectedCategory);
  }, [compatibleSpareParts, selectedCategory]);

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="parts-results-page">
      <div className="parts-results-container">
        {/* Vehicle Summary Bar */}
        <div className="vehicle-summary-bar">
          <div className="summary-content">
            <div className="vehicle-info">
              <h2 className="vehicle-title">
                {year} {brand} {model}
              </h2>
              <p className="vehicle-type">
                {isBike ? '🏍️ Bike Parts' : '🚗 Car Parts'}
              </p>
            </div>
            <button className="btn-change-vehicle" onClick={handleBackToHome}>
              Change Vehicle →
            </button>
          </div>
        </div>

        <div className="parts-results-content">
          {/* Spare Parts Section */}
          <section className="spare-parts-section">
            <div className="section-header">
              <h3 className="section-title">
                Spare Parts ({filteredSpareParts.length})
              </h3>
              <p className="section-subtitle">
                Compatible parts specifically for your vehicle
              </p>
            </div>

            {/* Category Filter */}
            {availableCategories.length > 1 && (
              <div className="category-filter">
                {availableCategories.map(category => (
                  <button
                    key={category}
                    className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}

            {/* Spare Parts Grid */}
            {filteredSpareParts.length > 0 ? (
              <div className="parts-grid">
                {filteredSpareParts.map(part => (
                  <ProductCard
                    key={part.id}
                    product={part}
                    type={isBike ? 'bike-part' : 'car-part'}
                    showVehicleInfo={true}
                  />
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <div className="empty-icon">🔍</div>
                <h4>No Spare Parts Found</h4>
                <p>No spare parts available for this vehicle</p>
              </div>
            )}
          </section>

          {/* Accessories Section */}
          {compatibleAccessories.length > 0 && (
            <section className="accessories-section">
              <div className="section-header">
                <h3 className="section-title">
                  Accessories ({compatibleAccessories.length})
                </h3>
                <p className="section-subtitle">
                  Universal accessories compatible with your vehicle
                </p>
              </div>

              <div className="parts-grid">
                {compatibleAccessories.map(accessory => (
                  <ProductCard
                    key={accessory.id}
                    product={accessory}
                    type={isBike ? 'ride' : 'drive'}
                    showVehicleInfo={false}
                  />
                ))}
              </div>
            </section>
          )}

          {/* No Results */}
          {filteredSpareParts.length === 0 && compatibleAccessories.length === 0 && (
            <div className="no-results">
              <div className="no-results-icon">📦</div>
              <h3>No Products Found</h3>
              <p>
                We don't have spare parts or accessories for {year} {brand}{' '}
                {model} yet.
              </p>
              <button className="btn-browse-all" onClick={handleBackToHome}>
                Browse All Products
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PartsResults;
