import dashcamImg from "../assets/images/car/dashcam1.jpeg";
import tyreInflatorImg from "../assets/images/car/tyre-inflator1.jpeg";
import firstAidImg from "../assets/images/car/first-aid-kit.jpeg";
import jumperCablesImg from "../assets/images/car/jumper-cables1.jpeg";
import puncherKitImg from "../assets/images/car/puncher-kit1.jpeg";
import dualCamImg from "../assets/images/car/dualcam.jpeg";
import phoneHolderImg from "../assets/images/car/phoneholders.jpeg";
import airPurifierImg from "../assets/images/car/airpurifiers.jpeg";
import chargerImg from "../assets/images/car/charger.jpeg";
import steeringCoverImg from "../assets/images/car/steeringcover.jpeg";
import seatCushionImg from "../assets/images/car/seatcushion.jpeg";
import floorMatsImg from "../assets/images/car/floormats.jpeg";
import sunshadesImg from "../assets/images/car/sunshades.jpeg";
import bodyMoldingImg from "../assets/images/car/bodymolding.jpeg";
import doorGuardsImg from "../assets/images/car/doorguards.jpeg";
import paintProtectionImg from "../assets/images/car/paintprotection.jpeg";
import washSoapImg from "../assets/images/car/washsoap.jpeg";
import brushImg from "../assets/images/car/brush.jpeg";
import waxImg from "../assets/images/car/wax.jpeg";
import restoreKitImg from "../assets/images/car/restorekit.jpeg";
export const carProducts = [
    {
      id: 101,
      name: "Dashcam Full HD 1080P",
      price: 4999,
      category: "Safety & Emergency",
      subcategory: "Dashcams",
      brand: "SafeView",
      image: dashcamImg,
      rating: 4.7,
      inStock: true,
      type: "car-parts",
      compatibleBrands: ["Toyota", "Honda", "Maruti", "Hyundai", "Mahindra", "Tata", "BMW", "Audi"],
      compatibleModels: ["All Models"],
      compatibleYears: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020,2021,2022,2023,2024]
    },
    {
      id: 102,
      name: "Dual Dashcam Front and Rear",
      price: 8999,
      category: "Safety & Emergency",
      subcategory: "Dashcams",
      brand: "DriveGuard",
      image: dualCamImg,
      rating: 4.8,
      inStock: true,
      compatibleBrands: ["Toyota", "Honda", "Maruti", "Hyundai", "Mahindra", "Tata", "BMW", "Audi"],
      compatibleModels: ["All Models"],
      compatibleYears: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024]
    },
    {
      id: 103,
      name: "First Aid Kit Emergency Box",
      price: 1999,
      category: "Safety & Emergency",
      subcategory: "First Aid Kits",
      brand: "SafeHealth",
      image: firstAidImg,
      rating: 4.6,
      inStock: true,
      compatibleBrands: ["Toyota", "Honda", "Maruti", "Hyundai", "Mahindra", "Tata", "BMW", "Audi"],
      compatibleModels: ["All Models"],
      compatibleYears: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024]
    },
    {
      id: 104,
      name: "Jumper Cables Heavy Duty",
      price: 1299,
      category: "Safety & Emergency",
      subcategory: "Jumper Cables",
      brand: "PowerStart",
      image: jumperCablesImg,
      rating: 4.7,
      inStock: true,
      compatibleBrands: ["Toyota", "Honda", "Maruti", "Hyundai", "Mahindra", "Tata", "BMW", "Audi"],
      compatibleModels: ["All Models"],
      compatibleYears: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024]
    },
    {
      id: 105,
      name: "Portable Tire Puncture Kit",
      price: 899,
      category: "Safety & Emergency",
      subcategory: "Puncture Kits",
      brand: "TireRescue",
      image: puncherKitImg,
      rating: 4.6,
      inStock: true,
      compatibleBrands: ["Toyota", "Honda", "Maruti", "Hyundai", "Mahindra", "Tata", "BMW", "Audi"],
      compatibleModels: ["All Models"],
      compatibleYears: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024]
    },
    {
      id: 106,
      name: "Digital Tire Inflator",
      price: 2499,
      category: "Gadgets & Electronics",
      subcategory: "Tire Inflators",
      brand: "AirPump Pro",
      image: tyreInflatorImg,
      rating: 4.8,
      inStock: true,
      compatibleBrands: ["Toyota", "Honda", "Maruti", "Hyundai", "Mahindra", "Tata", "BMW", "Audi"],
      compatibleModels: ["All Models"],
      compatibleYears: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024]
    },
    {
      id: 107,
      name: "Wireless Phone Holder",
      price: 1999,
      category: "Gadgets & Electronics",
      subcategory: "Phone Holders",
      brand: "MountPro",
      image: phoneHolderImg,
      rating: 4.7,
      inStock: true,
      compatibleBrands: ["Toyota", "Honda", "Maruti", "Hyundai", "Mahindra", "Tata", "BMW", "Audi"],
      compatibleModels: ["All Models"],
      compatibleYears: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024]
    },
    {
      id: 108,
      name: "Car Air Purifier",
      price: 2999,
      category: "Gadgets & Electronics",
      subcategory: "Air Purifiers",
      brand: "FreshAir",
      image: airPurifierImg,
      rating: 4.8,
      inStock: true,
      compatibleBrands: ["Toyota", "Honda", "Maruti", "Hyundai", "Mahindra", "Tata", "BMW", "Audi"],
      compatibleModels: ["All Models"],
      compatibleYears: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024]
    },
    {
      id: 109,
      name: "USB Car Charger Dual Port",
      price: 599,
      category: "Gadgets & Electronics",
      subcategory: "Chargers",
      brand: "ChargeFast",
      image: chargerImg,
      rating: 4.6,
      inStock: true,
      compatibleBrands: ["Toyota", "Honda", "Maruti", "Hyundai", "Mahindra", "Tata", "BMW", "Audi"],
      compatibleModels: ["All Models"],
      compatibleYears: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024]
    },
    {
      id: 110,
      name: "Premium Leather Steering Wheel Cover",
      price: 1499,
      category: "Comfort & Convenience",
      subcategory: "Steering Wheel Covers",
      brand: "ComfortDrive",
      image: steeringCoverImg,
      rating: 4.7,
      inStock: true,
      compatibleBrands: ["Toyota", "Honda", "Maruti", "Hyundai", "Mahindra", "Tata", "BMW", "Audi"],
      compatibleModels: ["All Models"],
      compatibleYears: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024]
    },
    {
      id: 111,
      name: "Car Seat Cushion",
      price: 1299,
      category: "Comfort & Convenience",
      subcategory: "Seat Cushions",
      brand: "SoftComfort",
      image: seatCushionImg,
      rating: 4.8,
      inStock: true,
      compatibleBrands: ["Toyota", "Honda", "Maruti", "Hyundai", "Mahindra", "Tata", "BMW", "Audi"],
      compatibleModels: ["All Models"],
      compatibleYears: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024]
    },
    {
      id: 112,
      name: "Car Floor Mats Set",
      price: 1999,
      category: "Comfort & Convenience",
      subcategory: "Floor Mats",
      brand: "FloorGuard",
      image: floorMatsImg,
      rating: 4.7,
      inStock: true,
      compatibleBrands: ["Toyota", "Honda", "Maruti", "Hyundai", "Mahindra", "Tata", "BMW", "Audi"],
      compatibleModels: ["All Models"],
      compatibleYears: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024]
    },
    {
      id: 113,
      name: "Car Windshield Sunshade",
      price: 899,
      category: "Comfort & Convenience",
      subcategory: "Sunshades",
      brand: "SunBlock",
      image: sunshadesImg,
      rating: 4.6,
      inStock: true,
      compatibleBrands: ["Toyota", "Honda", "Maruti", "Hyundai", "Mahindra", "Tata", "BMW", "Audi"],
      compatibleModels: ["All Models"],
      compatibleYears: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024]
    },
    {
      id: 114,
      name: "Body Side Molding",
      price: 2999,
      category: "Exterior & Protection",
      subcategory: "Body Molding",
      brand: "BodyShield",
      image: bodyMoldingImg,
      rating: 4.8,
      inStock: true,
      compatibleBrands: ["Toyota", "Honda", "Maruti", "Hyundai", "Mahindra", "Tata", "BMW", "Audi"],
      compatibleModels: ["All Models"],
      compatibleYears: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024]
    },
    {
      id: 115,
      name: "Car Door Edge Guards",
      price: 1799,
      category: "Exterior & Protection",
      subcategory: "Door Guards",
      brand: "EdgeProtect",
      image: doorGuardsImg,
      rating: 4.7,
      inStock: true,
      compatibleBrands: ["Toyota", "Honda", "Maruti", "Hyundai", "Mahindra", "Tata", "BMW", "Audi"],
      compatibleModels: ["All Models"],
      compatibleYears: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024]
    },
    {
      id: 116,
      name: "Car Paint Protection Film",
      price: 3999,
      category: "Exterior & Protection",
      subcategory: "Paint Protection",
      brand: "PaintGuard",
      image: paintProtectionImg,
      rating: 4.9,
      inStock: true,
      compatibleBrands: ["Toyota", "Honda", "Maruti", "Hyundai", "Mahindra", "Tata", "BMW", "Audi"],
      compatibleModels: ["All Models"],
      compatibleYears: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024]
    },
    {
      id: 117,
      name: "Car Wash Soap Premium",
      price: 499,
      category: "Cleaning & Care",
      subcategory: "Wash Soap",
      brand: "ShineMax",
      image: washSoapImg,
      rating: 4.7,
      inStock: true,
      compatibleBrands: ["Toyota", "Honda", "Maruti", "Hyundai", "Mahindra", "Tata", "BMW", "Audi"],
      compatibleModels: ["All Models"],
      compatibleYears: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024]
    },
    {
      id: 118,
      name: "Car Interior Detailing Brush Set",
      price: 899,
      category: "Cleaning & Care",
      subcategory: "Detailing Brushes",
      brand: "DetailPro",
      image: brushImg,
      rating: 4.6,
      inStock: true,
      compatibleBrands: ["Toyota", "Honda", "Maruti", "Hyundai", "Mahindra", "Tata", "BMW", "Audi"],
      compatibleModels: ["All Models"],
      compatibleYears: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024]
    },
    {
      id: 119,
      name: "Car Wax and Polish",
      price: 699,
      category: "Cleaning & Care",
      subcategory: "Wax & Polish",
      brand: "GlossShine",
      image: waxImg,
      rating: 4.8,
      inStock: true,
      compatibleBrands: ["Toyota", "Honda", "Maruti", "Hyundai", "Mahindra", "Tata", "BMW", "Audi"],
      compatibleModels: ["All Models"],
      compatibleYears: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024]
    },
    {
      id: 120,
      name: "Headlight Restoration Kit",
      price: 1599,
      category: "Cleaning & Care",
      subcategory: "Restoration Kits",
      brand: "BrightRestore",
      image: restoreKitImg,
      rating: 4.7,
      inStock: true,
      compatibleBrands: ["Toyota", "Honda", "Maruti", "Hyundai", "Mahindra", "Tata", "BMW", "Audi"],
      compatibleModels: ["All Models"],
      compatibleYears: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024]
    }
];
