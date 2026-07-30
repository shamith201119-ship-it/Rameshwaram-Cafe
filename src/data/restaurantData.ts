import { MenuItem, LocationItem, TimelineHour, SocialPost } from '../types';
import { ASSETS } from './assets';

export const MENU_ITEMS: MenuItem[] = [
  // DOSA
  {
    id: 'dosa-1',
    name: 'Ghee Podi Masala Dosa',
    category: 'DOSA',
    price: 160,
    description: 'Crispy golden crepe roasted in 100% pure desi ghee, smeared with house-secret red chili gunpowder podi, stuffed with spiced potato masala.',
    image: ASSETS.food.gheePodiMasalaDosa,
    badge: 'CULT FAVORITE',
    calories: '420 kcal',
    spiciness: 'Fire',
    ingredients: ['Fermented Rice & Urad Dal Batter', 'Pure Desi Ghee', 'Fiery Gunpowder Podi', 'Spiced Potato Masala', 'Fresh Curry Leaves'],
    isGheeSpecial: true,
    preparationTime: '4 mins'
  },
  {
    id: 'dosa-2',
    name: 'Open Butter Dosa',
    category: 'DOSA',
    price: 170,
    description: 'Thick yet ultra-crispy open-face dosa slathered with generous dollops of churned white butter and aromatic podi spice mixture.',
    image: ASSETS.food.openButterDosa,
    badge: 'SIGNATURE',
    calories: '480 kcal',
    spiciness: 'Medium',
    ingredients: ['Batter', 'Fresh Churned White Butter', 'Gunpowder Spice', 'Grated Potato Mash'],
    isGheeSpecial: true,
    preparationTime: '5 mins'
  },
  {
    id: 'dosa-3',
    name: 'Ghee Podi Plain Dosa',
    category: 'DOSA',
    price: 140,
    description: 'Minimalist perfection. Paper-thin crispy golden dosa lavishly brushed with hot bubbling ghee and roasted podi spices.',
    image: ASSETS.food.gheePodiMasalaDosa,
    calories: '360 kcal',
    spiciness: 'Fire',
    ingredients: ['Rice Batter', 'Pure Ghee', 'Gunpowder Spice Blend'],
    isGheeSpecial: true,
    preparationTime: '3 mins'
  },

  // IDLI
  {
    id: 'idli-1',
    name: 'Ghee Podi Button Idli (14 pcs)',
    category: 'IDLI',
    price: 150,
    description: '14 bite-sized fluffy white steamed idlis drenched in piping hot spiced ghee and coated in roasted podi powder.',
    image: ASSETS.food.gheePodiIdli,
    badge: 'MUST TRY',
    calories: '310 kcal',
    spiciness: 'Medium',
    ingredients: ['Steamed Rice Batter', 'Piping Hot Ghee', 'Fiery Podi', 'Coconut Chutney'],
    isGheeSpecial: true,
    preparationTime: '2 mins'
  },
  {
    id: 'idli-2',
    name: 'Rameshwaram Special Thatte Idli',
    category: 'IDLI',
    price: 110,
    description: 'Traditional plate-sized ultra-soft steamed idli topped with a pat of fresh white butter and served with 3 signature chutneys.',
    image: ASSETS.food.buttonIdliSambar,
    badge: 'TRADITIONAL',
    calories: '280 kcal',
    spiciness: 'Mild',
    ingredients: ['Fermented Parboiled Rice', 'Urad Dal', 'Fresh White Butter', 'Sambar'],
    preparationTime: '2 mins'
  },

  // VADA
  {
    id: 'vada-1',
    name: 'Uddina Vada (2 pcs)',
    category: 'VADA',
    price: 90,
    description: 'Deep-fried golden crunchy lentil donuts with a pillow-soft interior, served with fiery coconut and tomato chutneys.',
    image: ASSETS.food.uddinaVada,
    badge: 'EXTRA CRISPY',
    calories: '290 kcal',
    spiciness: 'Mild',
    ingredients: ['Whole Black Gram Urad Dal', 'Whole Black Peppercorns', 'Ginger', 'Curry Leaves'],
    preparationTime: '3 mins'
  },
  {
    id: 'vada-2',
    name: 'Sambar Vada Dip',
    category: 'VADA',
    price: 110,
    description: 'Crispy lentil vadas submerged in a bowl of hot, aromatic drumstick and shallot sambar with a drizzle of pure ghee.',
    image: ASSETS.food.uddinaVada,
    badge: 'COMFORT FOOD',
    calories: '340 kcal',
    spiciness: 'Medium',
    ingredients: ['Uddina Vada', 'Shallot Drumstick Sambar', 'Fresh Coriander', 'Desi Ghee'],
    isGheeSpecial: true,
    preparationTime: '2 mins'
  },

  // PONGAL
  {
    id: 'pongal-1',
    name: 'Ghee Khara Pongal',
    category: 'PONGAL',
    price: 120,
    description: 'Melt-in-mouth rice and yellow lentil mash tempered with whole cashews, black peppercorns, cumin, ginger, and abundant ghee.',
    image: ASSETS.food.venPongal,
    badge: 'BREAKFAST KING',
    calories: '390 kcal',
    spiciness: 'Mild',
    ingredients: ['Short Grain Rice', 'Moong Dal', 'Roasted Whole Cashews', 'Peppercorns', 'Ghee'],
    isGheeSpecial: true,
    preparationTime: '3 mins'
  },

  // RICE
  {
    id: 'rice-1',
    name: 'Bisi Bele Bath',
    category: 'RICE',
    price: 140,
    description: 'Authentic Karnataka spicy rice and lentil porridge cooked with garden vegetables, tamarind, aromatic spices, and golden ghee.',
    image: ASSETS.food.bisiBeleBath,
    badge: 'AUTHENTIC KARNATAKA',
    calories: '410 kcal',
    spiciness: 'Medium',
    ingredients: ['Rice', 'Toor Dal', 'Custom Bisi Bele Powder', 'Mixed Vegetables', 'Ghee', 'Khara Boondi'],
    isGheeSpecial: true,
    preparationTime: '4 mins'
  },
  {
    id: 'rice-2',
    name: 'Temper Curd Rice',
    category: 'RICE',
    price: 100,
    description: 'Cooling thick set curd rice tempered with mustard seeds, green chilies, ginger, curry leaves, and pomegranate arils.',
    image: ASSETS.food.curdRice,
    badge: 'SOOTHING',
    calories: '260 kcal',
    spiciness: 'Mild',
    ingredients: ['Steamed Rice', 'Fresh Farm Curd', 'Mustard Seeds', 'Curry Leaves', 'Pomegranate'],
    preparationTime: '2 mins'
  },

  // PADDU
  {
    id: 'paddu-1',
    name: 'Ghee Podi Crisp Paddu (8 pcs)',
    category: 'PADDU',
    price: 130,
    description: 'Golden spherical dumplings cooked in cast-iron appe pans with a crisp shell, soft core, and spicy podi ghee glaze.',
    image: ASSETS.food.crispyPaddu,
    badge: 'HOT OFF TAWA',
    calories: '320 kcal',
    spiciness: 'Medium',
    ingredients: ['Fermented Batter', 'Onion', 'Green Chili', 'Ghee', 'Gunpowder Podi'],
    isGheeSpecial: true,
    preparationTime: '5 mins'
  },

  // BEVERAGES
  {
    id: 'bev-1',
    name: 'Degree Filter Coffee',
    category: 'BEVERAGES',
    price: 50,
    description: 'Iconic South Indian decoction coffee brewed with chicory blend and frothy full-cream milk in a traditional brass tumbler.',
    image: ASSETS.coffee.brassTumbler,
    badge: 'HERITAGE BREW',
    calories: '110 kcal',
    spiciness: 'Mild',
    ingredients: ['80/20 Coffee Chicory Blend', 'Piping Hot Milk', 'Raw Sugar'],
    preparationTime: '2 mins'
  },
  {
    id: 'bev-2',
    name: 'Special Badam Milk',
    category: 'BEVERAGES',
    price: 70,
    description: 'Warm thick milk infused with crushed almonds, saffron strands, cardamom, and topped with toasted pistachio slivers.',
    image: ASSETS.food.badamMilk,
    badge: 'RICH & AROMATIC',
    calories: '210 kcal',
    spiciness: 'Mild',
    ingredients: ['Whole Milk', 'Crushed Almonds', 'Kashmiri Saffron', 'Cardamom', 'Pistachios'],
    preparationTime: '2 mins'
  },

  // DESSERTS
  {
    id: 'dessert-1',
    name: 'Ghee Kesari Bath',
    category: 'DESSERTS',
    price: 80,
    description: 'Velvety roasted semolina pudding fragrant with Kashmiri saffron strands, ghee-soaked cashews, and raisins.',
    image: ASSETS.food.kesariBath,
    badge: 'SWEET BLISS',
    calories: '310 kcal',
    spiciness: 'Mild',
    ingredients: ['Roasted Rava', 'Pure Desi Ghee', 'Saffron', 'Cashews', 'Cardamom'],
    isGheeSpecial: true,
    preparationTime: '2 mins'
  }
];

export const LOCATIONS_DATA: LocationItem[] = [
  {
    id: 'indiranagar',
    name: 'Indiranagar Flagship',
    city: 'Bengaluru',
    area: '100ft Road, Indiranagar',
    address: '#2983, 12th Main Rd, HAL 2nd Stage, Indiranagar, Bengaluru, Karnataka 560038',
    timing: '6:30 AM - 1:00 AM',
    phone: '+91 80 4567 8901',
    rating: 4.8,
    reviewsCount: 42500,
    coordinates: { lat: 12.9716, lng: 77.6412 },
    image: ASSETS.outlets.indiranagar,
    features: ['Live Tawa Station', 'Standing Dining Hall', 'High-Speed Billing', 'Valet Parking Available'],
    isMainOutlet: true
  },
  {
    id: 'jp-nagar',
    name: 'JP Nagar Outlet',
    city: 'Bengaluru',
    area: '2nd Phase, JP Nagar',
    address: '55, 15th Cross Rd, 2nd Phase, JP Nagar, Bengaluru, Karnataka 560078',
    timing: '6:30 AM - 12:30 AM',
    phone: '+91 80 4567 8902',
    rating: 4.7,
    reviewsCount: 31200,
    coordinates: { lat: 12.9081, lng: 77.5901 },
    image: ASSETS.outlets.jpNagar,
    features: ['Outdoor Brass Counter', 'Filter Coffee Bar', 'Quick Takeaway Zone']
  },
  {
    id: 'whitefield',
    name: 'Whitefield Tech Hub',
    city: 'Bengaluru',
    area: 'ITPL Main Road',
    address: 'Ground Floor, Prestige Shantiniketan, Whitefield, Bengaluru 560048',
    timing: '6:00 AM - 1:00 AM',
    phone: '+91 80 4567 8903',
    rating: 4.8,
    reviewsCount: 28900,
    coordinates: { lat: 12.9854, lng: 77.7345 },
    image: ASSETS.outlets.whitefield,
    features: ['24/7 Digital Kiosks', 'Express Pickup', 'Open Kitchen']
  },
  {
    id: 'hyderabad',
    name: 'Madhapur Outlet',
    city: 'Hyderabad',
    area: '100ft Road, Madhapur',
    address: 'Plot No. 42, Hitech City Main Rd, Madhapur, Hyderabad, Telangana 500081',
    timing: '6:30 AM - 1:00 AM',
    phone: '+91 40 4567 8904',
    rating: 4.9,
    reviewsCount: 24100,
    coordinates: { lat: 17.4483, lng: 78.3915 },
    image: ASSETS.outlets.hyderabad,
    features: ['Multi-Level Dining', 'Filter Coffee Lounge', 'Specialty Podi Counter']
  },
  {
    id: 'dubai',
    name: 'Dubai Mall Outlet',
    city: 'Dubai (UAE)',
    area: 'Financial Centre Rd, Downtown',
    address: 'Lower Ground Level, Near Fountain Views, Dubai Mall, UAE',
    timing: '8:00 AM - 12:00 Midnight',
    phone: '+971 4 321 8900',
    rating: 4.9,
    reviewsCount: 18500,
    coordinates: { lat: 25.1972, lng: 55.2744 },
    image: ASSETS.outlets.dubai,
    features: ['International Flagship', 'Heritage South Indian Decor', 'Express Service']
  }
];

export const TIMELINE_HOURS: TimelineHour[] = [
  {
    hour: 6,
    displayTime: '06:00 AM',
    period: 'MORNING',
    title: 'The Golden Sunrise Sizzle',
    subtitle: 'Cast-iron tawas ignite as fresh ghee hits the fire.',
    recommendedItem: 'Ghee Podi Button Idli',
    itemPrice: 150,
    image: ASSETS.food.gheePodiIdli,
    themeColor: '#e5a83b',
    ambientDescription: 'The aroma of roasted cumin, fresh curry leaves, and bubbling clarified butter fills the morning air.'
  },
  {
    hour: 9,
    displayTime: '09:00 AM',
    period: 'MORNING',
    title: 'Peak Breakfast Energy',
    subtitle: 'Thousands of crispy golden crepes served every hour.',
    recommendedItem: 'Ghee Podi Masala Dosa',
    itemPrice: 160,
    image: ASSETS.food.gheePodiMasalaDosa,
    themeColor: '#d4973b',
    ambientDescription: 'Sizzling tawas, clinking brass coffee tumblers, and high-octane South Indian breakfast passion.'
  },
  {
    hour: 13,
    displayTime: '01:00 PM',
    period: 'AFTERNOON',
    title: 'Comfort Meal Savor',
    subtitle: 'Steaming Bisi Bele Bath and soothing curd rice.',
    recommendedItem: 'Bisi Bele Bath with Khara Boondi',
    itemPrice: 140,
    image: ASSETS.food.bisiBeleBath,
    themeColor: '#c27b2b',
    ambientDescription: 'A balanced feast of tamarind, spices, lentils, and generous ghee drizzles.'
  },
  {
    hour: 17,
    displayTime: '05:00 PM',
    period: 'EVENING',
    title: 'The Filter Coffee Ritual',
    subtitle: 'Frothy brass tumbler brews paired with crunchy vadas.',
    recommendedItem: 'Degree Filter Coffee & Uddina Vada',
    itemPrice: 140,
    image: ASSETS.coffee.brassTumbler,
    themeColor: '#8c5025',
    ambientDescription: 'Decoction poured from high heights, generating velvety foam and rich chicory aromas.'
  },
  {
    hour: 22,
    displayTime: '10:00 PM',
    period: 'NIGHT',
    title: 'Late Night Dosa Craving',
    subtitle: 'Bengaluru city lights glow as late-night crowds gather.',
    recommendedItem: 'Open Butter Dosa',
    itemPrice: 170,
    image: ASSETS.food.openButterDosa,
    themeColor: '#281811',
    ambientDescription: 'The ultimate late-night comfort destination. Crisp, buttery, and intensely flavorful.'
  }
];

export const SOCIAL_POSTS: SocialPost[] = [
  {
    id: 'post-1',
    user: 'Karan Vir',
    handle: '@karanvir_foodie',
    platform: 'Instagram',
    comment: 'The ghee podi masala dosa here is not just food, it is an emotional spiritual experience. Look at that shine!',
    likes: '14.2k',
    image: ASSETS.food.gheePodiMasalaDosa,
    dishTag: '#GheePodiDosa',
    verifiedUser: true
  },
  {
    id: 'post-2',
    user: 'Shreya Roy',
    handle: '@shreyaeats',
    platform: 'Twitter',
    comment: 'Nothing beats taking a sip of Rameshwaram degree filter coffee at 7 AM. Pure perfection in a brass tumbler.',
    likes: '8.9k',
    image: ASSETS.coffee.brassTumbler,
    dishTag: '#FilterCoffee',
    verifiedUser: true
  },
  {
    id: 'post-3',
    user: 'Anish Bhat',
    handle: '@bengaluru.bites',
    platform: 'Foodie',
    comment: '14 button idlis soaked in hot ghee and podi powder. You literally do not need anything else in life.',
    likes: '21.5k',
    image: ASSETS.food.gheePodiIdli,
    dishTag: '#ButtonIdli',
    verifiedUser: true
  }
];

export const INGREDIENTS_HIGHLIGHT = [
  {
    word: 'GHEE.',
    subtitle: '100% PURE CLARIFIED BUTTER',
    description: 'Directly sourced from grass-fed cows. Poured red-hot over tawas to create an irreplaceable golden crust.',
    image: ASSETS.ingredients.ghee
  },
  {
    word: 'PODI.',
    subtitle: 'FIERY GUNPOWDER SPICE BLEND',
    description: 'Hand-milled blend of slow-roasted lentils, Kashmiri red chilies, sesame seeds, asafoetida, and rock salt.',
    image: ASSETS.ingredients.podi
  },
  {
    word: 'FIRE.',
    subtitle: 'INTENSE CAST-IRON HEAT',
    description: 'Heavy seasoned iron tawas kept at precise temperatures to achieve the signature micro-bubble crunch.',
    image: ASSETS.ingredients.fire
  },
  {
    word: 'TIME.',
    subtitle: 'NATURAL 18-HOUR FERMENTATION',
    description: 'Stone-ground batter fermented in controlled stone pots to yield naturally airy, digestible, cloud-soft idlis.',
    image: ASSETS.ingredients.time
  }
];
