import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { vehiclesData, years } from '../data/vehicles';
import '../styles/Brands.css';

const Brands = () => {
  const navigate = useNavigate();
  const [vehicleType, setVehicleType] = useState('2-wheeler');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  // Get brands and models based on vehicle type
  const getBrandsAndModels = () => {
    if (vehicleType === '2-wheeler') {
      return vehiclesData.bikes;
    } else if (vehicleType === '4-wheeler') {
      return vehiclesData.cars;
    }
    return { brands: [], models: {} };
  };

  const { brands, models } = getBrandsAndModels();

  // Get model ID from brand name
  const getBrandId = (brandName) => {
    const brand = brands.find(b => b.name === brandName);
    return brand ? brand.id : '';
  };

  const currentBrandId = getBrandId(selectedBrand);
  const currentBrandModels = currentBrandId ? (models[currentBrandId] || []) : [];

  const handleSearch = () => {
    if (selectedBrand && selectedModel && selectedYear) {
      const params = new URLSearchParams({
        type: vehicleType,
        brand: selectedBrand,
        model: selectedModel,
        year: selectedYear
      });
      navigate(`/parts-results?${params.toString()}`);
    } else {
      alert('Please select Brand, Model, and Year');
    }
  };

  const handleReset = () => {
    setSelectedBrand('');
    setSelectedModel('');
    setSelectedYear('');
  };

  const handleVehicleTypeChange = (type) => {
    setVehicleType(type);
    handleReset();
  };

  return (
    <div className="brands-page">
      <div className="brands-container">
        <div className="brands-header">
          <h1 className="brands-title">Shop By Brand</h1>
          <p className="brands-subtitle">Select your brand and model to find compatible spare parts & accessories</p>
        </div>

        {/* Vehicle Type Tabs */}
        <div className="brands-category-tabs">
          <button
            className={`category-tab ${vehicleType === '2-wheeler' ? 'active' : ''}`}
            onClick={() => handleVehicleTypeChange('2-wheeler')}
          >
            2-Wheeler
          </button>
          <button
            className={`category-tab ${vehicleType === '4-wheeler' ? 'active' : ''}`}
            onClick={() => handleVehicleTypeChange('4-wheeler')}
          >
            4-Wheeler
          </button>
        </div>

        {/* Brand Selection Section */}
        <div className="brand-selector-section">
          <div className="selector-wrapper">
            <h3 className="section-title">Step 1: Select Your Brand</h3>
            
            {/* Brand Grid */}
            <div className="brand-grid">
              {brands.map((brand) => (
                <button
                  key={brand.id}
                  className={`brand-card ${selectedBrand === brand.name ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedBrand(brand.name);
                    setSelectedModel('');
                  }}
                >
                  <div className="brand-icon">
                    {vehicleType === '2-wheeler' ? '🏍️' : '🚗'}
                  </div>
                  <div className="brand-name">{brand.name}</div>
                </button>
              ))}
            </div>

            {/* Model, Year Selection */}
            {selectedBrand && (
              <div className="model-year-section">
                <h3 className="section-title">Step 2 & 3: Select Model & Year</h3>
                
                <div className="selector-inputs">
                  <div className="selector-group">
                    <label>Model</label>
                    <select
                      value={selectedModel}
                      onChange={(e) => setSelectedModel(e.target.value)}
                      className="selector-input"
                    >
                      <option value="">Select Model</option>
                      {currentBrandModels.map((model) => (
                        <option key={model.id} value={model.name}>
                          {model.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="selector-group">
                    <label>Year</label>
                    <select
                      value={selectedYear}
                      onChange={(e) => setSelectedYear(e.target.value)}
                      className="selector-input"
                    >
                      <option value="">Select Year</option>
                      {years.map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="selector-actions">
                  <button 
                    className="btn-search" 
                    onClick={handleSearch}
                    disabled={!selectedModel || !selectedYear}
                  >
                    🔍 Find Parts
                  </button>
                  <button className="btn-reset" onClick={handleReset}>
                    Reset
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
