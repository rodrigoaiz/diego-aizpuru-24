export type ShippingClass = 'small' | 'medium' | 'large';
export type PaymentProvider = 'mercado_pago' | 'stripe';
export type AvailabilityStatus = 'available' | 'sold';

export interface ShopItemConfig {
  enabled: boolean;
  shippingClass: ShippingClass;
  allowInternational: boolean;
  paymentProvider: PaymentProvider;
  status: AvailabilityStatus;
  checkoutUrl?: string;
}

export const SHOP_ITEMS: Record<number, ShopItemConfig> = {
  1: {
    enabled: true,
    shippingClass: 'small',
    allowInternational: true,
    paymentProvider: 'mercado_pago',
    status: 'available',
    checkoutUrl: 'https://www.mercadopago.com.mx/checkout/v1/redirect?pref_id=TEST-OBRA-1',
  },
  2: {
    enabled: true,
    shippingClass: 'large',
    allowInternational: true,
    paymentProvider: 'mercado_pago',
    status: 'available',
  },
  4: {
    enabled: true,
    shippingClass: 'medium',
    allowInternational: true,
    paymentProvider: 'mercado_pago',
    status: 'available',
  },
  6: {
    enabled: true,
    shippingClass: 'small',
    allowInternational: true,
    paymentProvider: 'mercado_pago',
    status: 'available',
  },
  10: {
    enabled: true,
    shippingClass: 'small',
    allowInternational: true,
    paymentProvider: 'mercado_pago',
    status: 'available',
  },
  18: {
    enabled: true,
    shippingClass: 'medium',
    allowInternational: true,
    paymentProvider: 'mercado_pago',
    status: 'available',
  },
  29: {
    enabled: false,
    shippingClass: 'medium',
    allowInternational: false,
    paymentProvider: 'mercado_pago',
    status: 'sold',
  },
};

export const SHIPPING_RATES_MXN = {
  mexico: {
    small: 280,
    medium: 480,
    large: 980,
  },
  international: {
    northAmerica: {
      small: 1850,
      medium: 2850,
      large: 4850,
    },
    latam: {
      small: 1650,
      medium: 2550,
      large: 4450,
    },
    europe: {
      small: 2250,
      medium: 3350,
      large: 5650,
    },
    asiaOceania: {
      small: 2550,
      medium: 3750,
      large: 6350,
    },
  },
} as const;

export const INSURANCE_RATE = 0.018;
export const PACKAGING_FEE_MXN = 180;

export function getShopItemConfig(id: number): ShopItemConfig | undefined {
  return SHOP_ITEMS[id];
}

export function parsePriceMXN(price: string): number | null {
  if (!price.toUpperCase().includes('MXN')) {
    return null;
  }

  const normalized = price
    .replace(/MXN/gi, '')
    .replace(/\s/g, '')
    .replace(/,/g, '');

  const parsed = Number(normalized);
  return Number.isFinite(parsed) ? parsed : null;
}
