import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { vehiclesData, getYearsForModel } from '../../data/vehicles';
import '../../styles/VehicleSelector.css';

const VehicleSelector = () => {
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

  // Get years for selected model
  const getModelId = (modelName) => {
    const model = currentBrandModels.find(m => m.name === modelName);
    return model ? model.id : '';
  };

  const currentModelId = getModelId(selectedModel);
  const vehicleTypeKey = vehicleType === '2-wheeler' ? 'bikes' : 'cars';
  const availableYears = currentModelId ? getYearsForModel(vehicleTypeKey, currentBrandId, currentModelId) : [];

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
      alert('Please select all fields');
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
    <section className="vehicle-selector-section">
      <div className="vehicle-selector-container">
        <h2 className="selector-title">Find Parts For Your Vehicle</h2>
        <p className="selector-subtitle">Select your vehicle to see compatible spare parts and accessories</p>

        <div className="selector-wrapper">
          {/* Vehicle Type Tabs */}
          <div className="vehicle-tabs">
            <button
              className={`vehicle-tab ${vehicleType === '2-wheeler' ? 'active' : ''}`}
              onClick={() => handleVehicleTypeChange('2-wheeler')}
            >
              BIKE
            </button>
            <button
              className={`vehicle-tab ${vehicleType === '4-wheeler' ? 'active' : ''}`}
              onClick={() => handleVehicleTypeChange('4-wheeler')}
            >
              CAR
            </button>
          </div>

          {/* Selector Dropdowns */}
          <div className="selector-inputs">
            <div className="selector-group">
              <label>Brand</label>
              <select
                value={selectedBrand}
                onChange={(e) => {
                  setSelectedBrand(e.target.value);
                  setSelectedModel('');
                }}
                className="selector-input"
              >
                <option value="">Select Brand</option>
                {brands.map((brand) => (
                  <option key={brand.id} value={brand.name}>
                    {brand.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="selector-group">
              <label>Model</label>
              <select
                value={selectedModel}
                onChange={(e) => {
                  setSelectedModel(e.target.value);
                  setSelectedYear('');
                }}
                disabled={!selectedBrand}
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
                disabled={!selectedModel}
                className="selector-input"
              >
                <option value="">Select Year</option>
                {availableYears.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="selector-actions">
            <button className="btn-search" onClick={handleSearch}>
              🔍 Search Parts
            </button>
            <button className="btn-reset" onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VehicleSelector;
