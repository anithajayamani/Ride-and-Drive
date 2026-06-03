import airFilterImg from "../assets/images/spare/bike/airfilter.jpeg";
import sparkPlugImg from "../assets/images/spare/bike/sparkplug.jpeg";
import oilFilterImg from "../assets/images/spare/bike/oilfilter.jpeg";
import pistonRingImg from "../assets/images/spare/bike/pistonring.jpeg";
import engineGasketImg from "../assets/images/spare/bike/enginegasket.jpeg";
import timingChainImg from "../assets/images/spare/bike/timingchain.jpeg";
import brakeShoeImg from "../assets/images/spare/bike/brakeshoe.jpeg";
import brakePadImg from "../assets/images/spare/bike/brakepad.jpeg";
import brakeDiscImg from "../assets/images/spare/bike/brakedisc.jpeg";
import brakeFluidImg from "../assets/images/spare/bike/brakefluid.jpeg";
import brakeCableImg from "../assets/images/spare/bike/brakecable.jpeg";
import batteryImg from "../assets/images/spare/bike/battery.jpeg";
import ignitionCoilImg from "../assets/images/spare/bike/ignitioncoil.jpeg";
import alternatorImg from "../assets/images/spare/bike/alternator.jpeg";
import starterMotorImg from "../assets/images/spare/bike/startermotor.jpeg";
import windingCoilImg from "../assets/images/spare/bike/windingcoil.jpeg";
import fuelFilterImg from "../assets/images/spare/bike/fuelfilter.jpeg";
import fuelPumpImg from "../assets/images/spare/bike/fuelpump.jpeg";
import fuelInjectorImg from "../assets/images/spare/bike/fuelinjector.jpeg";
import carburetorImg from "../assets/images/spare/bike/carburetor.jpeg";
import radiatorImg from "../assets/images/spare/bike/radiator.jpeg";
import waterPumpImg from "../assets/images/spare/bike/waterpump.jpeg";
import radiatorFanImg from "../assets/images/spare/bike/radiatorfan.jpeg";
import thermostatImg from "../assets/images/spare/bike/thermostat.jpeg";
import clutchPlateImg from "../assets/images/spare/bike/clutchplate.jpeg";
import gearboxOilImg from "../assets/images/spare/bike/gearboxoil.jpeg";
import chainSprocketImg from "../assets/images/spare/bike/chain.jpeg";
import shockAbsorberImg from "../assets/images/spare/bike/shockabsorber.jpeg";
import springImg from "../assets/images/spare/bike/spring.jpeg";
export const sparePartTemplates = [
  // Engine Parts
  {
    id: 'air-filter',
    name: 'Air Filter',
    category: 'Engine',
    basePrice: 299,
    rating: 4.8,
    image: airFilterImg,
    description: 'Engine air filter'
  },
  {
    id: 'spark-plug',
    name: 'Spark Plug Set',
    category: 'Engine',
    basePrice: 199,
    rating: 4.9,
    image: sparkPlugImg,
    description: 'Premium spark plugs'
  },
  {
    id: 'oil-filter',
    name: 'Oil Filter',
    category: 'Engine',
    basePrice: 149,
    rating: 4.8,
    image: oilFilterImg,
    description: 'Synthetic oil filter'
  },
  {
    id: 'piston-ring',
    name: 'Piston Ring Set',
    category: 'Engine',
    basePrice: 1899,
    rating: 4.8,
    image: pistonRingImg,
    description: 'OEM piston rings'
  },
  {
    id: 'engine-gasket',
    name: 'Engine Gasket',
    category: 'Engine',
    basePrice: 899,
    rating: 4.7,
    image: engineGasketImg,
    description: 'Complete gasket set'
  },
  {
    id: 'timing-chain',
    name: 'Timing Chain',
    category: 'Engine',
    basePrice: 2499,
    rating: 4.8,
    image: timingChainImg,
    description: 'Precision timing chain'
  },
  // Brakes
  { id: 'brake-shoe', name: 'Brake Shoes', category: 'Brakes', basePrice: 499, rating: 4.7, image: brakeShoeImg, description: 'Front & rear brake shoes' },
  { id: 'brake-pad', name: 'Brake Pads', category: 'Brakes', basePrice: 999, rating: 4.8, image: brakePadImg, description: 'High-quality brake pads' },
  { id: 'brake-disc', name: 'Brake Disc', category: 'Brakes', basePrice: 1499, rating: 4.8, image: brakeDiscImg, description: 'Performance brake disc' },
  { id: 'brake-fluid', name: 'Brake Fluid', category: 'Brakes', basePrice: 349, rating: 4.7, image: brakeFluidImg, description: 'DOT 4 brake fluid' },
  { id: 'brake-cable', name: 'Brake Cable Set', category: 'Brakes', basePrice: 349, rating: 4.7, image: brakeCableImg, description: 'Front & rear cables' },
  
  // Electrical
  { id: 'battery', name: 'Battery', category: 'Electrical', basePrice: 2299, rating: 4.9, image: batteryImg, description: 'High-capacity battery' },
  { id: 'ignition-coil', name: 'Ignition Coil', category: 'Electrical', basePrice: 599, rating: 4.7, image: ignitionCoilImg, description: 'Performance ignition coil' },
  { id: 'alternator', name: 'Alternator', category: 'Electrical', basePrice: 5199, rating: 4.8, image: alternatorImg, description: 'Premium alternator' },
  { id: 'starter-motor', name: 'Starter Motor', category: 'Electrical', basePrice: 4099, rating: 4.8, image: starterMotorImg, description: 'Heavy-duty starter' },
  { id: 'winding-coil', name: 'Winding Coil', category: 'Electrical', basePrice: 449, rating: 4.8, image: windingCoilImg, description: 'Motor winding coil' },
  
  // Fuel System
  { id: 'fuel-filter', name: 'Fuel Filter', category: 'Fuel System', basePrice: 349, rating: 4.7, image: fuelFilterImg, description: 'Fuel system filter' },
  { id: 'fuel-pump', name: 'Fuel Pump', category: 'Fuel System', basePrice: 2199, rating: 4.8, image: fuelPumpImg, description: 'Electric fuel pump' },
  { id: 'fuel-injector', name: 'Fuel Injector', category: 'Fuel System', basePrice: 1399, rating: 4.7, image: fuelInjectorImg, description: 'Precision fuel injector' },
  { id: 'carburetor', name: 'Carburetor', category: 'Fuel System', basePrice: 1299, rating: 4.8, image: carburetorImg, description: 'Complete carburetor' },
  
  // Cooling System
  { id: 'radiator', name: 'Radiator', category: 'Cooling', basePrice: 5899, rating: 4.6, image: radiatorImg, description: 'Durable radiator' },
  { id: 'water-pump', name: 'Water Pump', category: 'Cooling', basePrice: 2999, rating: 4.7, image: waterPumpImg, description: 'Liquid cooling pump' },
  { id: 'radiator-fan', name: 'Radiator Fan', category: 'Cooling', basePrice: 1599, rating: 4.7, image: radiatorFanImg, description: 'Electric cooling fan' },
  { id: 'thermostat', name: 'Thermostat', category: 'Cooling', basePrice: 699, rating: 4.8, image: thermostatImg, description: 'Temperature control' },
  
  // Transmission
  { id: 'clutch-plate', name: 'Clutch Plate', category: 'Transmission', basePrice: 799, rating: 4.7, image: clutchPlateImg, description: 'Durable clutch plate' },
  { id: 'gearbox-oil', name: 'Gearbox Oil', category: 'Transmission', basePrice: 499, rating: 4.7, image: gearboxOilImg, description: 'Premium gearbox oil' },
  { id: 'chain-sprocket', name: 'Chain & Sprocket', category: 'Transmission', basePrice: 1299, rating: 4.8, image: chainSprocketImg, description: 'Heavy-duty chain kit' },
  
  // Suspension
  { id: 'shock-absorber', name: 'Shock Absorber', category: 'Suspension', basePrice: 1799, rating: 4.8, image: shockAbsorberImg, description: 'Premium suspension' },
  { id: 'spring', name: 'Suspension Spring', category: 'Suspension', basePrice: 999, rating: 4.7, image: springImg, description: 'Heavy-duty spring' },
];
