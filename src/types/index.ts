export interface Product {
  id: string;
  name: string;
  price: number;
  unit: string;
  imageUrl?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  itemPrice: number;
  savings: number;
  itemCost: number;
}

export interface SpecialOffer {
  id: string;
  description: string;
  type: 'buyOneGetOneFree' | 'halfPrice' | 'percentageDiscount';
  productId: string;
  relatedProductId?: string;
  discountPercentage?: number;
}

export interface CartState {
  items: CartItem[];
  subtotal: number;
  totalSavings: number;
  totalAmount: number;
  offers: SpecialOffer[];
}

export interface RootState {
  cart: CartState;
  products: Product[];
  specialOffers: SpecialOffer[];
}
