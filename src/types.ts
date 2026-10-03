export interface SocialChannel {
  id: string;
  name: string;
  handle: string;
  url: string;
  description: string;
  brandColor: string;
  hoverBg: string;
  hoverBorder: string;
  badgeText: string;
}

export interface Product {
  id: string;
  name: string;
  category: 'Luxury Lawn' | 'Festive Prêt' | 'Home Couture' | 'Velvet & Silk';
  pricePKR: number;
  originalPricePKR?: number;
  image: string;
  description: string;
  details: string[];
  fabric: string;
  pieces: string;
  sizes: string[];
  isNewArrival?: boolean;
  isBestSeller?: boolean;
}

export interface CartItem {
  product: Product;
  selectedSize: string;
  quantity: number;
}
