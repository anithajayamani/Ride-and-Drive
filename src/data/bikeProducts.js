import helmetImg from "../assets/images/bike/helmet1-men.jpeg";
import jacketImg from "../assets/images/bike/riding-gear1.jpeg";
import glovesImg from "../assets/images/bike/gloves1.jpeg";
import HolderImg from "../assets/images/bike/phone-holder.jpeg";
import USBChargerImg from "../assets/images/bike/usb-charger.jpeg";
import PhonemountImg from "../assets/images/bike/phone-mount.jpeg";
import crashGuardsImg from "../assets/images/bike/crashguards.jpeg";
import ledLightsImg from "../assets/images/bike/ledlights.jpeg";
import luggageSystemImg from "../assets/images/bike/luggagesystem.jpeg";
import headlightsImg from "../assets/images/bike/headlights.jpeg";
import bellImg from "../assets/images/bike/bell.jpeg";
import mirrorImg from "../assets/images/bike/mirror.jpeg";
import bottleHolderImg from "../assets/images/bike/bottleholders.jpeg";
import lockImg from "../assets/images/bike/lock.jpeg";
import mudguardsImg from "../assets/images/bike/mudguards.jpeg";
import rackImg from "../assets/images/bike/rags.jpeg";
import pumpImg from "../assets/images/bike/pumps.png";
import repairKitImg from "../assets/images/bike/repairkit.jpeg";
import lubricantImg from "../assets/images/bike/lubricant.jpeg";

export const bikeProducts = [
    {
      id: 1,
      name: "Full Face Safety Helmet",
      price: 3999,
      category: "Safety & Protection",
      subcategory: "Helmets",
      brand: "SafeRide",
      image: helmetImg,
      rating: 4.9,
      inStock: true,
      type: "bike-parts",
      compatibleBrands: ["Hero", "Honda", "Bajaj", "TVS", "Royal Enfield", "Harley-Davidson", "KTM", "Yamaha"],
      compatibleModels: ["All Models"],
      compatibleYears: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024]
    },
    {
      id: 2,
      name: "Premium Riding Jacket",
      price: 5999,
      category: "Safety & Protection",
      subcategory: "Jackets & Gear",
      brand: "RideGear",
      image: jacketImg,
      rating: 4.8,
      inStock: true,
      type: "bike-parts",
      compatibleBrands: ["Hero", "Honda", "Bajaj", "TVS", "Royal Enfield", "Harley-Davidson", "KTM", "Yamaha"],
      compatibleModels: ["All Models"],
      compatibleYears: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024]
    },
    {
      id: 3,
      name: "Protective Riding Gloves",
      price: 1499,
      category: "Safety & Protection",
      subcategory: "Gloves",
      brand: "GripPro",
      image: glovesImg,
      rating: 4.7,
      inStock: true,
      type: "bike-parts",
      compatibleBrands: ["Hero", "Honda", "Bajaj", "TVS", "Royal Enfield", "Harley-Davidson", "KTM", "Yamaha"],
      compatibleModels: ["All Models"],
      compatibleYears: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024]
    },
    {
      id: 4,
      name: "Universal Mobile Phone Holder",
      price: 599,
      category: "Electronics & Gadgets",
      subcategory: "Phone Holders",
      brand: "MountPro",
      image: HolderImg,
      rating: 4.8,
      inStock: true,
      compatibleBrands: ["Hero", "Honda", "Bajaj", "TVS", "Royal Enfield", "Harley-Davidson", "KTM", "Yamaha"],
      compatibleModels: ["All Models"],
      compatibleYears: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024]
    },
    {
      id: 5,
      name: "Portable USB Charger",
      price: 899,
      category: "Electronics & Gadgets",
      subcategory: "Chargers",
      brand: "ChargeFast",
      image: USBChargerImg,
      rating: 4.7,
      inStock: true,
      compatibleBrands: ["Hero", "Honda", "Bajaj", "TVS", "Royal Enfield", "Harley-Davidson", "KTM", "Yamaha"],
      compatibleModels: ["All Models"],
      compatibleYears: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024]
    },
    {
      id: 6,
      name: "Carbon Fiber Crash Guards",
      price: 4599,
      category: "Exterior & Protection",
      subcategory: "Crash Guards",
      brand: "ArmorTech",
      image: crashGuardsImg,
      rating: 4.9,
      inStock: true,
      compatibleBrands: ["Hero", "Honda", "Bajaj", "TVS", "Royal Enfield", "Harley-Davidson", "KTM", "Yamaha"],
      compatibleModels: ["All Models"],
      compatibleYears: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024]
    },
    {
      id: 7,
      name: "LED Auxiliary Lights (Pair)",
      price: 1999,
      category: "Lights & Visibility",
      subcategory: "LED Lights",
      brand: "BrightLED",
      image: ledLightsImg,
      rating: 4.8,
      inStock: true,
      compatibleBrands: ["Hero", "Honda", "Bajaj", "TVS", "Royal Enfield", "Harley-Davidson", "KTM", "Yamaha"],
      compatibleModels: ["All Models"],
      compatibleYears: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024]
    },
    {
      id: 8,
      name: "Premium Luggage System",
      price: 3499,
      category: "Storage & Carrying",
      subcategory: "Luggage Systems",
      brand: "CargoMax",
      image: luggageSystemImg,
      rating: 4.7,
      inStock: true,
      compatibleBrands: ["Hero", "Honda", "Bajaj", "TVS", "Royal Enfield", "Harley-Davidson", "KTM", "Yamaha"],
      compatibleModels: ["All Models"],
      compatibleYears: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024]
    },
    {
      id: 9,
      name: "LED Bike Headlight",
      price: 2499,
      category: "Lights & Visibility",
      subcategory: "Headlights",
      brand: "LightPro",
      image: headlightsImg,
      rating: 4.8,
      inStock: true,
      compatibleBrands: ["Hero", "Honda", "Bajaj", "TVS", "Royal Enfield", "Harley-Davidson", "KTM", "Yamaha"],
      compatibleModels: ["All Models"],
      compatibleYears: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024]
    },
    {
      id: 10,
      name: "Loud Bike Bell",
      price: 399,
      category: "Safety & Protection",
      subcategory: "Bells & Horns",
      brand: "SoundAlert",
      image: bellImg,
      rating: 4.6,
      inStock: true,
      compatibleBrands: ["Hero", "Honda", "Bajaj", "TVS", "Royal Enfield", "Harley-Davidson", "KTM", "Yamaha"],
      compatibleModels: ["All Models"],
      compatibleYears: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024]
    },
    {
      id: 11,
      name: "Wide Angle Rearview Mirrors",
      price: 1299,
      category: "Lights & Visibility",
      subcategory: "Mirrors",
      brand: "MirrorPro",
      image: mirrorImg,
      rating: 4.7,
      inStock: true,
      compatibleBrands: ["Hero", "Honda", "Bajaj", "TVS", "Royal Enfield", "Harley-Davidson", "KTM", "Yamaha"],
      compatibleModels: ["All Models"],
      compatibleYears: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024]
    },
    {
      id: 12,
      name: "Water Bottle Cage",
      price: 499,
      category: "Comfort & Convenience",
      subcategory: "Bottle Holders",
      brand: "HydroFit",
      image: bottleHolderImg,
      rating: 4.6,
      inStock: true,
      compatibleBrands: ["Hero", "Honda", "Bajaj", "TVS", "Royal Enfield", "Harley-Davidson", "KTM", "Yamaha"],
      compatibleModels: ["All Models"],
      compatibleYears: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024]
    },
    {
      id: 13,
      name: "Heavy Duty Bike Lock",
      price: 1299,
      category: "Security",
      subcategory: "Locks",
      brand: "SecureGuard",
      image: lockImg,
      rating: 4.8,
      inStock: true,
      compatibleBrands: ["Hero", "Honda", "Bajaj", "TVS", "Royal Enfield", "Harley-Davidson", "KTM", "Yamaha"],
      compatibleModels: ["All Models"],
      compatibleYears: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024]
    },
    {
      id: 14,
      name: "Protective Fenders (Mudguards)",
      price: 1799,
      category: "Exterior & Protection",
      subcategory: "Mudguards",
      brand: "MudShield",
      image: mudguardsImg,
      rating: 4.7,
      inStock: true,
      compatibleBrands: ["Hero", "Honda", "Bajaj", "TVS", "Royal Enfield", "Harley-Davidson", "KTM", "Yamaha"],
      compatibleModels: ["All Models"],
      compatibleYears: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024]
    },
    {
      id: 15,
      name: "Adjustable Phone Mount",
      price: 699,
      category: "Electronics & Gadgets",
      subcategory: "Phone Holders",
      brand: "MountPro",
      image: PhonemountImg,
      rating: 4.7,
      inStock: true,
      compatibleBrands: ["Hero", "Honda", "Bajaj", "TVS", "Royal Enfield", "Harley-Davidson", "KTM", "Yamaha"],
      compatibleModels: ["All Models"],
      compatibleYears: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024]
    },
    {
      id: 16,
      name: "Cargo Rack with Straps",
      price: 2299,
      category: "Storage & Carrying",
      subcategory: "Racks",
      brand: "CargoMax",
      image: rackImg,
      rating: 4.8,
      inStock: true,
      compatibleBrands: ["Hero", "Honda", "Bajaj", "TVS", "Royal Enfield", "Harley-Davidson", "KTM", "Yamaha"],
      compatibleModels: ["All Models"],
      compatibleYears: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024]
    },
    {
      id: 17,
      name: "Portable Air Pump",
      price: 1199,
      category: "Maintenance & Tools",
      subcategory: "Pumps",
      brand: "AirPro",
      image: pumpImg,
      rating: 4.8,
      inStock: true,
      compatibleBrands: ["Hero", "Honda", "Bajaj", "TVS", "Royal Enfield", "Harley-Davidson", "KTM", "Yamaha"],
      compatibleModels: ["All Models"],
      compatibleYears: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024]
    },
    {
      id: 18,
      name: "Complete Repair Kit",
      price: 1899,
      category: "Maintenance & Tools",
      subcategory: "Repair Kits",
      brand: "ToolPro",
      image: repairKitImg,
      rating: 4.9,
      inStock: true,
      compatibleBrands: ["Hero", "Honda", "Bajaj", "TVS", "Royal Enfield", "Harley-Davidson", "KTM", "Yamaha"],
      compatibleModels: ["All Models"],
      compatibleYears: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024]
    },
    {
      id: 19,
      name: "Premium Chain Lubricant",
      price: 599,
      category: "Maintenance & Tools",
      subcategory: "Lubricants",
      brand: "LubriMax",
      image: lubricantImg,
      rating: 4.7,
      inStock: true,
      compatibleBrands: ["Hero", "Honda", "Bajaj", "TVS", "Royal Enfield", "Harley-Davidson", "KTM", "Yamaha"],
      compatibleModels: ["All Models"],
      compatibleYears: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024]
    }
];
