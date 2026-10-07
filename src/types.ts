export type Currency = 'PYG' | 'BRL' | 'USD';
export type Language = 'es' | 'pt';

export type CategoryId =
  | 'todos'
  | 'empadas'
  | 'desayunos'
  | 'croissants'
  | 'panificados'
  | 'dulces'
  | 'compartir'
  | 'cafes_calientes'
  | 'cafes_frios'
  | 'tes'
  | 'sodas'
  | 'jugos';

export interface Category {
  id: CategoryId;
  name: {
    es: string;
    pt: string;
  };
  iconName: string;
  description: {
    es: string;
    pt: string;
  };
}

export interface ProductOption {
  name: {
    es: string;
    pt: string;
  };
  choices: {
    name: {
      es: string;
      pt: string;
    };
    priceDelta?: number; // difference in PYG
  }[];
}

export interface MenuItem {
  id: string;
  name: {
    es: string;
    pt: string;
  };
  description: {
    es: string;
    pt: string;
  };
  price: number; // in PYG (Guaraníes)
  categoryId: CategoryId;
  subCategory?: string;
  image?: string;
  featured?: boolean;
  highlightBadge?: {
    es: string;
    pt: string;
  };
  options?: ProductOption[];
  isVegetarian?: boolean;
  isGlutenFree?: boolean;
  serves?: string;
}

export interface CartItem {
  cartItemId: string; // unique hash with options
  productId: string;
  name: string;
  unitPrice: number;
  quantity: number;
  selectedOptions?: Record<string, string>;
  specialInstructions?: string;
  image?: string;
}

export interface CustomerOrderInfo {
  customerName: string;
  customerPhone: string;
  orderType: 'delivery' | 'takeaway' | 'dine_in';
  deliveryAddress: string;
  tableNumber?: string;
  paymentMethod: 'efectivo' | 'transferencia' | 'pix' | 'tarjeta';
  notes: string;
}

export type SortOption = 'default' | 'price_asc' | 'price_desc' | 'name_asc';

export interface StoreConfig {
  storeName: string;
  storeSlogan: string;
  whatsappPhone: string;
  address: string;
  deliveryEstimatedMinutes: string;
  defaultDeliveryFeePyg: number;
  pixKey: string;
  openingHour: number; // e.g. 7
  closingHour: number; // e.g. 21
  isOpenOverride?: boolean | null;
}

