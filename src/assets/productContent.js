const products = [
  {
    id: 1,
    title: "Bot wireless earbuds",
    price: 29.99,
    category: "Audio",
    description: "High-quality wireless earbuds with noise cancellation and long battery life.",
    image: "/assets/imgs/img1.png"
  },
  {
    id: 2,
    title: "Apple iPhone 15",
    price: 799.00,
    category: "Smartphones",
    description: "Modern smartphone with advanced camera system, powerful chip, and all-day battery life.",
    image: "/assets/imgs/img2.png"
  },
  {
    id: 3,
    title: "Samsung Galaxy S24",
    price: 799.00,
    category: "Smartphones",
    description: "Flagship Android phone with strong AI features, bright OLED display, and versatile triple camera.",
    image: "/assets/imgs/img3.png"
  },
  {
    id: 4,
    title: "Sony WH-1000XM5 Headphones",
    price: 398.00,
    category: "Audio",
    description: "Premium over-ear wireless headphones with industry-leading noise cancellation and rich sound.",
    image: "/assets/imgs/img4.png"
  },
  {
    id: 5,
    title: "Logitech MX Master 3S Mouse",
    price: 99.99,
    category: "Gadgets",
    description: "Ergonomic wireless mouse with ultra-precise scroll wheel and multi-device support.",
    image: "/assets/imgs/img5.png"
  },
  {
    id: 6,
    title: "Nintendo Switch – OLED Model",
    price: 349.99,
    category: "Gaming",
    description: "Hybrid game console with a vibrant 7-inch OLED screen and detachable controllers.",
    image: "/assets/imgs/img6.png"
  },
  {
    id: 7,
    title: "Kindle Paperwhite (11th Gen)",
    price: 149.99,
    category: "Gadgets",
    description: "6.8-inch glare-free eReader with adjustable warm light and weeks of battery life.",
    image: "/assets/imgs/img7.png"
  },
  {
    id: 8,
    title: "GoPro HERO12 Black",
    price: 399.99,
    category: "Cameras",
    description: "Waterproof action camera with high-resolution video, advanced stabilization, and dual screens.",
    image: "/assets/imgs/img8.png"
  },
  {
    id: 9,
    title: "Sony PlayStation 5",
    price: 499.99,
    category: "Gaming",
    description: "Next-gen gaming console with ultra-fast SSD, ray tracing, and 4K HDR support.",
    image: "/assets/imgs/img9.png"
  },
  {
    id: 10,
    title: "Xbox Series X",
    price: 499.99,
    category: "Gaming",
    description: "Powerful gaming console capable of true 4K gaming with up to 120 FPS.",
    image: "/assets/imgs/img10.png"
  },
  {
    id: 11,
    title: "Dell XPS 13 Laptop",
    price: 1399.99,
    category: "laptops",
    description: "Premium 13-inch ultrabook with thin-bezel display, long battery life, and powerful CPU.",
    image: "/assets/imgs/img11.png"
  },
  {
    id: 12,
    title: "Canon EOS R50 Mirrorless Camera",
    price: 799.99,
    category: "Cameras",
    description: "APS-C mirrorless camera with fast autofocus, 24MP sensor, and oversampled 4K video.",
    image: "/assets/imgs/img12.png"
  },
  {
    id: 13,
    title: "Dyson V15 Detect Vacuum",
    price: 749.99,
    category: "Gadgets",
    description: "Cordless vacuum that reveals hidden dust and intelligently adjusts suction power.",
    image: "/assets/imgs/img13.png"
  },
  {
    id: 14,
    title: "Apple Watch Series 9",
    price: 399.00,
    category: "Gadgets",
    description: "Smartwatch with advanced health tracking, bright display, and tight iPhone integration.",
    image: "/assets/imgs/img14.png"
  },
  {
    id: 15,
    title: "Fitbit Charge 6",
    price: 159.95,
    category: "Gadgets",
    description: "Fitness tracker with heart-rate monitoring, built-in GPS, and Google app integration.",
    image: "/assets/imgs/img15.png"
  },
  {
    id: 16,
    title: "Anker PowerCore 20000 Power Bank",
    price: 49.99,
    category: "Gadgets",
    description: "High-capacity portable charger with dual USB outputs for fast charging on the go.",
    image: "/assets/imgs/img16.png"
  },
  {
    id: 17,
    title: "Samsung 55\" Crystal UHD 4K Smart TV",
    price: 379.99,
    category: "Gadgets",
    description: "55-inch 4K Smart TV with Crystal Processor 4K and vivid color reproduction.",
    image: "/assets/imgs/img17.png"
  },
  {
    id: 18,
    title: "Apple MacBook Air 13\" (M2)",
    price: 1199.00,
    category: "laptops",
    description: "Thin and light laptop with Apple M2 chip, Retina display, and all-day battery life.",
    image: "/assets/imgs/img18.png"
  },
  {
    id: 19,
    title: "Apple iPad Air (5th Generation)",
    price: 599.00,
    category: "Gadgets",
    description: "10.9-inch tablet with powerful chip, Apple Pencil support, and high-resolution display.",
    image: "/assets/imgs/img19.png"
  },
  {
    id: 20,
    title: "JBL Flip 6 Bluetooth Speaker",
    price: 129.95,
    category: "Audio",
    description: "Portable Bluetooth speaker with powerful sound, IP67 water resistance, and long playtime.",
    image: "/assets/imgs/img20.png"
  },

  {
    id: 21,
    title: "Apple AirPods Pro (2nd Generation)",
    price: 249.00,
    category: "Audio",
    description: "Wireless earbuds with active noise cancellation, spatial audio, and MagSafe charging case.",
    image: "/assets/imgs/img21.avif"
  },
  {
    id: 22,
    title: "Samsung Galaxy Buds 2 Pro",
    price: 229.99,
    category: "Audio",
    description: "Premium true wireless earbuds with immersive sound and intelligent ANC.",
    image: "/assets/imgs/img22.jpg"
  },
  {
    id: 23,
    title: "Sony PlayStation DualSense Controller",
    price: 69.99,
    category: "Gaming",
    description: "Wireless controller featuring haptic feedback and adaptive triggers for PS5.",
    image: "/assets/imgs/img23.avif"
  },
  {
    id: 24,
    title: "Apple MacBook Pro 14-inch (M3)",
    price: 1999.00,
    category: "laptops",
    description: "Powerful laptop with Apple M3 chip, Liquid Retina XDR display, and long battery life.",
    image: "/assets/imgs/img24.avif"
  },
  {
    id: 25,
    title: "Dell Inspiron 15 Laptop",
    price: 749.99,
    category: "laptops",
    description: "15.6-inch laptop for everyday productivity with Intel processor and SSD storage.",
    image: "/assets/imgs/img25.jpg"
  },

  {
    id: 26,
    title: "Apple iPhone 14",
    price: 699.00,
    category: "Smartphones",
    description: "Smartphone with A15 Bionic chip, advanced dual-camera system, and iOS.",
    image: "/assets/imgs/img26.avif"
  },
  {
    id: 27,
    title: "Google Pixel 8",
    price: 699.00,
    category: "Smartphones",
    description: "AI-powered smartphone with exceptional camera quality and clean Android experience.",
    image: "/assets/imgs/img27.webp"
  },
  {
    id: 28,
    title: "Samsung Galaxy Z Flip 5",
    price: 999.99,
    category: "Smartphones",
    description: "Foldable smartphone with compact design and powerful performance.",
    image: "/assets/imgs/img28.avif"
  },
  {
    id: 29,
    title: "Canon EOS R10 Mirrorless Camera",
    price: 979.99,
    category: "Cameras",
    description: "APS-C mirrorless camera with fast autofocus and 4K video recording.",
    image: "/assets/imgs/img29.avif"
  },
  {
    id: 30,
    title: "Sony ZV-E10 Camera",
    price: 799.99,
    category: "Cameras",
    description: "Mirrorless camera designed for content creators and vloggers.",
    image: "/assets/imgs/img30.jpg"
  },

  {
    id: 31,
    title: "GoPro HERO11 Black",
    price: 399.99,
    category: "Cameras",
    description: "Rugged action camera with 5.3K video and advanced stabilization.",
    image: "/assets/imgs/img31.avif"
  },
  {
    id: 32,
    title: "Apple Watch SE (2nd Gen)",
    price: 249.00,
    category: "Gadgets",
    description: "Smartwatch with fitness tracking, crash detection, and Retina display.",
    image: "/assets/imgs/img32.jpg"
  },
  {
    id: 33,
    title: "Samsung Galaxy Watch 6",
    price: 299.99,
    category: "Gadgets",
    description: "Wearable smartwatch with advanced health monitoring features.",
    image: "/assets/imgs/img33.jpg"
  },
  {
    id: 34,
    title: "Amazon Echo (5th Gen)",
    price: 99.99,
    category: "Gadgets",
    description: "Smart speaker with Alexa voice assistant and improved audio.",
    image: "/assets/imgs/img34.webp"
  },
  {
    id: 35,
    title: "Google Nest Hub (2nd Gen)",
    price: 99.99,
    category: "Gadgets",
    description: "Smart display with Google Assistant and sleep tracking features.",
    image: "/assets/imgs/img35.jpg"
  },

  {
    id: 36,
    title: "Microsoft Xbox Series S",
    price: 299.99,
    category: "Gaming",
    description: "Compact next-gen gaming console with fast load times and 1440p gaming.",
    image: "/assets/imgs/img36.jpg"
  },
  {
    id: 37,
    title: "Nintendo Switch Pro Controller",
    price: 69.99,
    category: "Gaming",
    description: "Wireless controller designed for comfort and precision gaming.",
    image: "/assets/imgs/img37.webp"
  },
  {
    id: 38,
    title: "Razer BlackWidow V4 Keyboard",
    price: 169.99,
    category: "Gaming",
    description: "Mechanical gaming keyboard with RGB lighting and tactile switches.",
    image: "/assets/imgs/img38.webp"
  },
  {
    id: 39,
    title: "Logitech G Pro X Headset",
    price: 129.99,
    category: "Audio",
    description: "Professional gaming headset with Blue VO!CE microphone technology.",
    image: "/assets/imgs/img39.webp"
  },
  {
    id: 40,
    title: "Bose QuietComfort Ultra Headphones",
    price: 429.00,
    category: "Audio",
    description: "Over-ear headphones with world-class noise cancellation and spatial audio.",
    image: "/assets/imgs/img40.webp"
  },

  {
    id: 41,
    title: "Apple Magic Keyboard",
    price: 99.00,
    category: "Gadgets",
    description: "Wireless keyboard with sleek design and rechargeable battery.",
    image: "/assets/imgs/img41.jpg"
  },
  {
    id: 42,
    title: "Logitech MX Keys Mini",
    price: 99.99,
    category: "Gadgets",
    description: "Compact wireless keyboard optimized for creators.",
    image: "/assets/imgs/img42.jpg"
  },
  {
    id: 43,
    title: "HP Pavilion 14 Laptop",
    price: 899.99,
    category: "laptops",
    description: "Portable laptop with modern design and powerful performance.",
    image: "/assets/imgs/img43.jpg"
  },
  {
    id: 44,
    title: "Lenovo ThinkPad X1 Carbon",
    price: 1599.99,
    category: "laptops",
    description: "Business-class ultrabook with lightweight build and durability.",
    image: "/assets/imgs/img44.avif"
  },
  {
    id: 45,
    title: "Apple MacBook Air 15-inch (M2)",
    price: 1299.00,
    category: "laptops",
    description: "Thin and light laptop with large display and Apple silicon performance.",
    image: "/assets/imgs/img45.jpg"
  },

  {
    id: 46,
    title: "Samsung Galaxy Tab S9",
    price: 799.99,
    category: "Gadgets",
    description: "Premium Android tablet with AMOLED display and S Pen support.",
    image: "/assets/imgs/img46.webp"
  },
  {
    id: 47,
    title: "Apple Pencil (2nd Generation)",
    price: 129.00,
    category: "Gadgets",
    description: "Precision stylus for drawing, note-taking, and creative work.",
    image: "/assets/imgs/img47.webp"
  },
  {
    id: 48,
    title: "Anker Soundcore Motion+ Speaker",
    price: 99.99,
    category: "Audio",
    description: "Portable Bluetooth speaker with Hi-Res sound and deep bass.",
    image: "/assets/imgs/img48.jpg"
  },
  {
    id: 49,
    title: "SteelSeries Arctis Nova 7",
    price: 179.99,
    category: "Audio",
    description: "Wireless gaming headset with immersive sound and comfort.",
    image: "/assets/imgs/img49.jpg"
  },
  {
    id: 50,
    title: "Elgato Stream Deck MK.2",
    price: 149.99,
    category: "Gaming",
    description: "Customizable control pad for streamers and content creators.",
    image: "/assets/imgs/img50.webp"
  }

];

export default products;
