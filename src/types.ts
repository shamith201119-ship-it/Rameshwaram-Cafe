export interface MenuItem {
  id: string;
  name: string;
  category: 'DOSA' | 'IDLI' | 'VADA' | 'PONGAL' | 'RICE' | 'PADDU' | 'BEVERAGES' | 'DESSERTS';
  price: number;
  description: string;
  image: string;
  badge?: string;
  calories?: string;
  spiciness?: 'Mild' | 'Medium' | 'Fire';
  ingredients: string[];
  isGheeSpecial?: boolean;
  preparationTime?: string;
}

export interface LocationItem {
  id: string;
  name: string;
  city: string;
  address: string;
  area: string;
  timing: string;
  phone: string;
  rating: number;
  reviewsCount: number;
  coordinates: { lat: number; lng: number };
  image: string;
  features: string[];
  isMainOutlet?: boolean;
}

export interface TimelineHour {
  hour: number;
  displayTime: string;
  period: 'MORNING' | 'AFTERNOON' | 'EVENING' | 'NIGHT';
  title: string;
  subtitle: string;
  recommendedItem: string;
  itemPrice: number;
  image: string;
  themeColor: string;
  ambientDescription: string;
}

export interface SocialPost {
  id: string;
  user: string;
  handle: string;
  platform: 'Instagram' | 'Twitter' | 'Foodie';
  comment: string;
  likes: string;
  image: string;
  dishTag: string;
  verifiedUser?: boolean;
}

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
  extraGhee?: boolean;
  extraPodi?: boolean;
}

export type CursorMode = 'DEFAULT' | 'EXPLORE' | 'VIEW' | 'MENU' | 'ENTER' | 'DRAG' | 'DISCOVER' | 'SIZZLE' | 'COFFEE' | 'GHEE';
