import { Product } from "@/types/product";
import ceilingFanImage from "@/assets/ceiling-fan.jpg";
import wallSocketImage from "@/assets/wall-socket.jpg";
import smartBulbsImage from "@/assets/smart-bulbs.jpg";
import wallSwitchImage from "@/assets/wall-switch.jpg";
import pendantLightImage from "@/assets/pendant-light.jpg";
import extensionCordImage from "@/assets/extension-cord.jpg";
import ledStripImage from "@/assets/led-strip.jpg";
import motionSensorImage from "@/assets/motion-sensor.jpg";
import chandelierImage from "@/assets/chandelier.jpg";
import outdoorLightImage from "@/assets/outdoor-light.jpg";
import timerSwitchImage from "@/assets/timer-switch.jpg";
import dimmerSwitchImage from "@/assets/dimmer-switch.jpg";

export const products: Product[] = [
  {
    id: 1,
    name: "Modern Ceiling Fan 52\" with LED",
    price: 189.99,
    image: ceilingFanImage,
    category: "Ceiling Fans",
    description: "Energy-efficient ceiling fan with integrated LED lighting and remote control for optimal comfort and ambiance.",
    specifications: [
      "52-inch blade span",
      "Integrated LED light kit",
      "Remote control included",
      "6-speed settings",
      "Energy Star certified"
    ],
    inStock: true
  },
  {
    id: 2,
    name: "Smart WiFi Wall Socket with USB",
    price: 29.99,
    image: wallSocketImage,
    category: "Wall Sockets & Outlets",
    description: "Modern wall outlet with dual USB-A and USB-C ports for convenient device charging.",
    specifications: [
      "2x USB-A ports (2.4A)",
      "1x USB-C port (3A)",
      "Tamper-resistant design",
      "Easy installation",
      "White finish"
    ],
    inStock: true
  },
  {
    id: 3,
    name: "LED Smart Bulbs RGB 4-Pack",
    price: 49.99,
    image: smartBulbsImage,
    category: "Light Bulbs",
    description: "Color-changing smart LED bulbs with app control and voice assistant compatibility.",
    specifications: [
      "16 million colors",
      "E27 base",
      "WiFi enabled",
      "Works with Alexa & Google",
      "Dimmable"
    ],
    inStock: true
  },
  {
    id: 4,
    name: "Touch Panel Smart Light Switch",
    price: 39.99,
    image: wallSwitchImage,
    category: "Switches",
    description: "Premium glass panel touch switch with LED indicator and modern design.",
    specifications: [
      "Tempered glass panel",
      "Touch-sensitive control",
      "LED indicator light",
      "3-gang configuration",
      "Black finish"
    ],
    inStock: true
  },
  {
    id: 5,
    name: "Industrial Pendant Light Fixture",
    price: 79.99,
    image: pendantLightImage,
    category: "Light Fixtures",
    description: "Stylish industrial pendant light with brushed metal shade, perfect for kitchen or dining areas.",
    specifications: [
      "12-inch diameter",
      "Adjustable cord length",
      "E26 socket",
      "Brushed nickel finish",
      "Max 60W bulb"
    ],
    inStock: true
  },
  {
    id: 6,
    name: "Surge Protector Power Strip 6-Outlet",
    price: 34.99,
    image: extensionCordImage,
    category: "Extension Cords & Power Strips",
    description: "Heavy-duty power strip with surge protection and multiple USB charging ports.",
    specifications: [
      "6 AC outlets",
      "4 USB ports (2 USB-C)",
      "1800W/15A capacity",
      "Surge protection",
      "6-foot power cord"
    ],
    inStock: true
  },
  {
    id: 7,
    name: "RGB LED Strip Lights 16.4ft",
    price: 27.99,
    image: ledStripImage,
    category: "LED Strip Lights",
    description: "Flexible RGB LED strip lights with remote control, perfect for accent lighting.",
    specifications: [
      "16.4 feet length",
      "300 LEDs",
      "Remote control included",
      "Self-adhesive backing",
      "Color-changing modes"
    ],
    inStock: true
  },
  {
    id: 8,
    name: "Motion Sensor Light Detector",
    price: 24.99,
    image: motionSensorImage,
    category: "Sensors & Detectors",
    description: "PIR motion sensor for automatic lighting control with adjustable sensitivity.",
    specifications: [
      "180° detection angle",
      "12m detection range",
      "Adjustable delay timer",
      "Indoor/outdoor use",
      "Easy installation"
    ],
    inStock: true
  },
  {
    id: 9,
    name: "Crystal Chandelier 8-Light",
    price: 299.99,
    image: chandelierImage,
    category: "Chandeliers",
    description: "Elegant crystal chandelier with modern design, perfect for dining rooms and entryways.",
    specifications: [
      "8 light fixtures",
      "Crystal accents",
      "Chrome finish",
      "24-inch diameter",
      "Adjustable height"
    ],
    inStock: true
  },
  {
    id: 10,
    name: "Outdoor LED Wall Sconce",
    price: 54.99,
    image: outdoorLightImage,
    category: "Outdoor Lighting",
    description: "Weather-resistant LED wall light for exterior applications with modern design.",
    specifications: [
      "LED integrated",
      "Weather-proof IP65",
      "Dusk to dawn sensor",
      "Black aluminum finish",
      "5-year warranty"
    ],
    inStock: true
  },
  {
    id: 11,
    name: "Digital Timer Switch Programmable",
    price: 19.99,
    image: timerSwitchImage,
    category: "Timers & Controls",
    description: "Programmable digital timer for automated lighting and appliance control.",
    specifications: [
      "LCD display",
      "24-hour/7-day program",
      "Battery backup",
      "Countdown function",
      "Easy setup"
    ],
    inStock: true
  },
  {
    id: 12,
    name: "Rotary Dimmer Light Switch",
    price: 32.99,
    image: dimmerSwitchImage,
    category: "Dimmer Switches",
    description: "Premium rotary dimmer switch with smooth operation and LED compatibility.",
    specifications: [
      "Compatible with LED/CFL",
      "150W LED capacity",
      "Smooth dimming",
      "Brushed steel finish",
      "Single pole"
    ],
    inStock: true
  },
  {
    id: 13,
    name: "Reversible Ceiling Fan 44\"",
    price: 149.99,
    image: ceilingFanImage,
    category: "Ceiling Fans",
    description: "Compact ceiling fan with reversible motor for year-round comfort.",
    specifications: [
      "44-inch blade span",
      "3-speed motor",
      "Reversible operation",
      "Pull chain control",
      "Bronze finish"
    ],
    inStock: true
  },
  {
    id: 14,
    name: "USB Wall Outlet Charger",
    price: 18.99,
    image: wallSocketImage,
    category: "Wall Sockets & Outlets",
    description: "Convenient USB wall charger outlet with fast charging capability.",
    specifications: [
      "2x USB-A ports",
      "Quick charge 3.0",
      "15A AC outlet",
      "Compact design",
      "White or ivory"
    ],
    inStock: true
  },
  {
    id: 15,
    name: "LED Daylight Bulbs 6-Pack",
    price: 24.99,
    image: smartBulbsImage,
    category: "Light Bulbs",
    description: "Energy-efficient LED bulbs with bright daylight color temperature.",
    specifications: [
      "60W equivalent",
      "5000K daylight",
      "800 lumens",
      "A19 shape",
      "Non-dimmable"
    ],
    inStock: true
  },
  {
    id: 16,
    name: "3-Way Rocker Light Switch",
    price: 12.99,
    image: wallSwitchImage,
    category: "Switches",
    description: "Standard 3-way rocker switch for multi-location light control.",
    specifications: [
      "15A/120V rated",
      "Rocker style",
      "Grounding screw",
      "White finish",
      "UL listed"
    ],
    inStock: true
  },
  {
    id: 17,
    name: "Track Lighting Kit 4-Light",
    price: 119.99,
    image: pendantLightImage,
    category: "Light Fixtures",
    description: "Adjustable track lighting system with 4 directional spotlights.",
    specifications: [
      "4-foot track",
      "4 adjustable heads",
      "GU10 bulbs included",
      "Brushed nickel",
      "Easy installation"
    ],
    inStock: true
  },
  {
    id: 18,
    name: "Heavy Duty Extension Cord 25ft",
    price: 29.99,
    image: extensionCordImage,
    category: "Extension Cords & Power Strips",
    description: "Professional-grade outdoor extension cord with weather-resistant jacket.",
    specifications: [
      "25 feet length",
      "12 AWG wire",
      "15A capacity",
      "Triple-tap outlet",
      "SJTW jacket"
    ],
    inStock: true
  },
  {
    id: 19,
    name: "Under Cabinet LED Strip",
    price: 39.99,
    image: ledStripImage,
    category: "LED Strip Lights",
    description: "Bright LED strip kit for under-cabinet kitchen lighting.",
    specifications: [
      "6 feet total",
      "Plug-in design",
      "Linkable",
      "Warm white 3000K",
      "Adhesive backing"
    ],
    inStock: true
  },
  {
    id: 20,
    name: "Occupancy Sensor Switch",
    price: 34.99,
    image: motionSensorImage,
    category: "Sensors & Detectors",
    description: "Wall switch with built-in occupancy sensor for hands-free lighting control.",
    specifications: [
      "PIR technology",
      "Auto on/off",
      "Adjustable timeout",
      "500W capacity",
      "Neutral required"
    ],
    inStock: true
  },
  {
    id: 21,
    name: "Mini Crystal Chandelier 3-Light",
    price: 159.99,
    image: chandelierImage,
    category: "Chandeliers",
    description: "Compact crystal chandelier perfect for smaller spaces and bedrooms.",
    specifications: [
      "3 light fixtures",
      "Crystal droplets",
      "Chrome finish",
      "14-inch diameter",
      "Flush mount option"
    ],
    inStock: true
  },
  {
    id: 22,
    name: "Solar Outdoor Security Light",
    price: 69.99,
    image: outdoorLightImage,
    category: "Outdoor Lighting",
    description: "Solar-powered motion sensor security light for outdoor areas.",
    specifications: [
      "Solar panel included",
      "Motion activated",
      "2000 lumens",
      "IP65 waterproof",
      "Adjustable heads"
    ],
    inStock: true
  },
  {
    id: 23,
    name: "Astronomical Timer Switch",
    price: 44.99,
    image: timerSwitchImage,
    category: "Timers & Controls",
    description: "Advanced timer with astronomical clock for automatic sunrise/sunset adjustment.",
    specifications: [
      "Astronomical programming",
      "Random vacation mode",
      "Battery backup",
      "Digital display",
      "Multiple programs"
    ],
    inStock: true
  },
  {
    id: 24,
    name: "Smart WiFi Dimmer Switch",
    price: 47.99,
    image: dimmerSwitchImage,
    category: "Dimmer Switches",
    description: "WiFi-enabled smart dimmer with app and voice control capabilities.",
    specifications: [
      "WiFi connectivity",
      "Voice control ready",
      "Schedule & scenes",
      "150W LED compatible",
      "White finish"
    ],
    inStock: true
  },
  {
    id: 25,
    name: "DC Motor Ceiling Fan 60\"",
    price: 279.99,
    image: ceilingFanImage,
    category: "Ceiling Fans",
    description: "Large DC motor ceiling fan with superior energy efficiency and quiet operation.",
    specifications: [
      "60-inch blade span",
      "DC motor technology",
      "8-speed remote",
      "LED light kit",
      "Black finish"
    ],
    inStock: true
  },
  {
    id: 26,
    name: "GFCI Outlet 20A",
    price: 22.99,
    image: wallSocketImage,
    category: "Wall Sockets & Outlets",
    description: "Ground Fault Circuit Interrupter outlet for safety in wet locations.",
    specifications: [
      "20A rated",
      "Tamper-resistant",
      "Weather-resistant",
      "LED indicator",
      "Self-test function"
    ],
    inStock: true
  },
  {
    id: 27,
    name: "Vintage Edison Bulbs 4-Pack",
    price: 32.99,
    image: smartBulbsImage,
    category: "Light Bulbs",
    description: "Decorative vintage-style LED bulbs with warm amber glow.",
    specifications: [
      "ST64 vintage shape",
      "2200K warm white",
      "Dimmable",
      "E26 base",
      "40W equivalent"
    ],
    inStock: true
  },
  {
    id: 28,
    name: "Double Pole Switch 30A",
    price: 18.99,
    image: wallSwitchImage,
    category: "Switches",
    description: "Heavy-duty double pole switch for high-power applications.",
    specifications: [
      "30A/240V rated",
      "Double pole",
      "Heavy-duty contacts",
      "Side wiring",
      "Gray finish"
    ],
    inStock: true
  },
  {
    id: 29,
    name: "Flush Mount LED Ceiling Light",
    price: 64.99,
    image: pendantLightImage,
    category: "Light Fixtures",
    description: "Modern LED flush mount fixture for hallways and bedrooms.",
    specifications: [
      "Integrated LED",
      "1200 lumens",
      "12-inch diameter",
      "Brushed nickel",
      "Easy installation"
    ],
    inStock: true
  },
  {
    id: 30,
    name: "Retractable Extension Cord Reel",
    price: 54.99,
    image: extensionCordImage,
    category: "Extension Cords & Power Strips",
    description: "Convenient retractable cord reel with automatic rewind mechanism.",
    specifications: [
      "40 feet retractable",
      "Wall or ceiling mount",
      "14 AWG wire",
      "Triple outlet",
      "Locking mechanism"
    ],
    inStock: true
  },
  {
    id: 31,
    name: "Waterproof LED Strip IP67",
    price: 44.99,
    image: ledStripImage,
    category: "LED Strip Lights",
    description: "Fully waterproof LED strip for outdoor and bathroom applications.",
    specifications: [
      "IP67 rated",
      "32.8 feet",
      "5050 SMD LEDs",
      "RGB + Warm white",
      "Remote control"
    ],
    inStock: true
  },
  {
    id: 32,
    name: "Photocell Light Sensor",
    price: 16.99,
    image: motionSensorImage,
    category: "Sensors & Detectors",
    description: "Automatic dusk-to-dawn sensor for outdoor lighting control.",
    specifications: [
      "Photocell technology",
      "1000W capacity",
      "Adjustable sensitivity",
      "Weather-resistant",
      "Easy installation"
    ],
    inStock: true
  },
  {
    id: 33,
    name: "Rustic Wagon Wheel Chandelier",
    price: 349.99,
    image: chandelierImage,
    category: "Chandeliers",
    description: "Rustic farmhouse-style wagon wheel chandelier with vintage charm.",
    specifications: [
      "6 light fixtures",
      "Wooden wheel design",
      "Aged bronze finish",
      "30-inch diameter",
      "Adjustable chain"
    ],
    inStock: true
  },
  {
    id: 34,
    name: "LED Flood Light 100W",
    price: 89.99,
    image: outdoorLightImage,
    category: "Outdoor Lighting",
    description: "High-power LED flood light for security and area illumination.",
    specifications: [
      "100W LED",
      "10000 lumens",
      "IP66 waterproof",
      "Die-cast aluminum",
      "5000K daylight"
    ],
    inStock: true
  },
  {
    id: 35,
    name: "In-Wall Timer Switch 7-Day",
    price: 27.99,
    image: timerSwitchImage,
    category: "Timers & Controls",
    description: "In-wall programmable timer switch with 7-day scheduling.",
    specifications: [
      "7-day programming",
      "LCD display",
      "10 events per day",
      "Random mode",
      "White finish"
    ],
    inStock: true
  },
  {
    id: 36,
    name: "3-Way Dimmer Switch",
    price: 38.99,
    image: dimmerSwitchImage,
    category: "Dimmer Switches",
    description: "Three-way dimmer switch for multi-location dimming control.",
    specifications: [
      "3-way configuration",
      "600W incandescent",
      "150W LED/CFL",
      "Slide dimmer",
      "Ivory or white"
    ],
    inStock: true
  },
  {
    id: 37,
    name: "Outdoor Ceiling Fan 52\" Wet Rated",
    price: 219.99,
    image: ceilingFanImage,
    category: "Ceiling Fans",
    description: "Weather-resistant ceiling fan designed for covered outdoor spaces.",
    specifications: [
      "52-inch blades",
      "Wet rated",
      "Stainless steel",
      "4-speed motor",
      "Light kit adaptable"
    ],
    inStock: true
  },
  {
    id: 38,
    name: "Dual USB-C Wall Outlet",
    price: 34.99,
    image: wallSocketImage,
    category: "Wall Sockets & Outlets",
    description: "Modern outlet with dual USB-C ports for fast charging latest devices.",
    specifications: [
      "2x USB-C PD ports",
      "20W total output",
      "15A AC outlet",
      "Tamper-resistant",
      "White finish"
    ],
    inStock: true
  },
  {
    id: 39,
    name: "LED Candelabra Bulbs 6-Pack",
    price: 29.99,
    image: smartBulbsImage,
    category: "Light Bulbs",
    description: "Decorative candelabra LED bulbs for chandeliers and wall sconces.",
    specifications: [
      "E12 candelabra base",
      "40W equivalent",
      "Soft white 2700K",
      "Dimmable",
      "Clear glass"
    ],
    inStock: true
  },
  {
    id: 40,
    name: "Smart 4-Gang Light Switch",
    price: 79.99,
    image: wallSwitchImage,
    category: "Switches",
    description: "WiFi-enabled 4-gang smart switch with independent control and scheduling.",
    specifications: [
      "WiFi connected",
      "4 independent switches",
      "Voice control",
      "Schedule & scenes",
      "Touch panel design"
    ],
    inStock: true
  }
];
