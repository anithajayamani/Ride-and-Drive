import { sparePartTemplates } from './sparePartTemplates';
import { modelTypeMap } from './modelTypeMap';
import { vehiclePartCompatibility } from './vehiclePartCompatibility';
import { vehiclesData, getYearsForModel } from './vehicles';

export const generateSpareParts = (vehicleType) => {
  const spareParts = [];
  let partIdCounter = 1;

  const isBike = vehicleType === '2-wheeler';
  const dataKey = isBike ? 'bikes' : 'cars';
  const allModels = isBike ? vehiclesData.bikes.models : vehiclesData.cars.models;
  const allBrands = isBike ? vehiclesData.bikes.brands : vehiclesData.cars.brands;

  console.log(`\n🔨 Generating ${isBike ? 'BIKE' : 'CAR'} spare parts...`);
  console.log(`Available brands:`, Object.keys(allModels).length);

  Object.entries(allModels).forEach(([brandKey, models]) => {
    const brandName = allBrands.find(b => b.id === brandKey)?.name || brandKey;

    models.forEach(model => {
      const modelType = modelTypeMap[model.name];
      if (!modelType) {
        console.warn(`❌ Missing modelType for: ${model.name}`);
        return;
      }

      const compatiblePartIds = vehiclePartCompatibility[modelType];
      if (!compatiblePartIds || !compatiblePartIds.length) {
        console.warn(`❌ No parts for type '${modelType}' (model: ${model.name})`);
        return;
      }

      console.log(`✓ ${model.name} (${modelType}): ${compatiblePartIds.length} parts`);

      compatiblePartIds.forEach(partId => {
        const template = sparePartTemplates.find(t => t.id === partId);
        if (!template) {
          console.warn(`❌ Missing template: ${partId}`);
          return;
        }

        const priceMultiplier = getPriceMultiplier(modelType);
        const price = Math.round(template.basePrice * priceMultiplier);
        const years = getYearsForModel(dataKey, brandKey, model.id);

        spareParts.push({
          id: `${model.id}-${partId}-${partIdCounter}`,
          name: template.name,
          category: template.category,
          price: price,
          image: template.image,
          rating: Math.min(5, Math.max(4.5, template.rating)),
          inStock: true,
          vehicleBrand: brandName,
          vehicleModel: model.name,
          compatibleYears: years,
          description: template.description,
        });
        partIdCounter++;
      });
    });
  });

  console.log(`✅ Total ${isBike ? 'BIKE' : 'CAR'} spare parts: ${spareParts.length}\n`);
  return spareParts;
};

const getPriceMultiplier = (modelType) => {
  const multipliers = {
    scooter: 0.9,
    commuter: 1.0,
    sports: 1.3,
    cruiser: 1.2,
    adventure: 1.4,
    hatchback: 1.0,
    sedan: 1.1,
    suv: 1.2,
    mpv: 1.1,
  };
  return multipliers[modelType] || 1.0;
};

// Generate both bike and car spare parts
export const bikeSpareParts = generateSpareParts('2-wheeler');
export const carSpareParts = generateSpareParts('4-wheeler');
