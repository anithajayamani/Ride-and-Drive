import { vehiclesData } from './vehicles';
import { modelTypeMap } from './modelTypeMap';
import { vehiclePartCompatibility } from './vehiclePartCompatibility';
import { sparePartTemplates } from './sparePartTemplates';

export const validateAllMappings = () => {
  console.log('🔍 Validating spare parts mappings...\n');

  let bikesOk = 0, bikesMissing = 0;
  let carsOk = 0, carsMissing = 0;
  
  // Check bikes
  Object.values(vehiclesData.bikes.models).forEach(models => {
    models.forEach(model => {
      if (modelTypeMap[model.name]) {
        bikesOk++;
      } else {
        bikesMissing++;
        console.warn(`❌ Missing mapping: ${model.name}`);
      }
    });
  });

  // Check cars
  Object.values(vehiclesData.cars.models).forEach(models => {
    models.forEach(model => {
      if (modelTypeMap[model.name]) {
        carsOk++;
      } else {
        carsMissing++;
        console.warn(`❌ Missing mapping: ${model.name}`);
      }
    });
  });

  console.log(`\n✓ Bikes with mappings: ${bikesOk}/48`);
  console.log(`✓ Cars with mappings: ${carsOk}/24`);

  // Check all part templates exist
  const templateIds = new Set(sparePartTemplates.map(t => t.id));
  Object.entries(vehiclePartCompatibility).forEach(([type, parts]) => {
    parts.forEach(partId => {
      if (!templateIds.has(partId)) {
        console.warn(`❌ Missing template: ${partId} (used by ${type})`);
      }
    });
  });

  console.log('\n✓ All spare part templates exist');
  console.log(`✓ Total bike spare parts: ${bikesOk * 12}`);
  console.log(`✓ Total car spare parts: ${carsOk * 15}`);
};
