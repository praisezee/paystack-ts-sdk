export interface CreatePageRequest {
  name: string;
  description?: string;
  amount?: number;
  currency?: string;
  slug?: string;
  type?: 'payment' | 'subscription' | 'product' | 'plan';
  plan?: string;
  fixed_amount?: boolean;
  split_code?: string;
  metadata?: Record<string, any>;
  redirect_url?: string;
  success_message?: string;
  notification_email?: string;
  collect_phone?: boolean;
  custom_fields?: Array<Record<string, any>>;
}

export interface Page {
  id: number;
  name: string;
  description?: string | null;
  amount?: number | null;
  currency: string;
  slug: string;
  type?: string;
  plan?: string | null;
  split_code?: string | null;
  metadata?: Record<string, any> | null;
  redirect_url?: string | null;
  success_message?: string | null;
  notification_email?: string | null;
  collect_phone?: boolean;
  custom_fields?: Array<Record<string, any>> | null;
  integration: number;
  domain: string;
  active: boolean;
  published?: boolean;
  migrate?: boolean | null;
  createdAt: string;
  updatedAt: string;
  products?: PageProduct[];
}

export interface PageProduct {
  product_id: number;
  name: string;
  description: string;
  product_code: string;
  page: number;
  price: number;
  currency: string;
  quantity: number;
  type: string;
  features: string | null;
  is_shippable: number;
  domain: string;
  integration: number;
  active: number;
  in_stock: number;
}

export interface ListPagesQuery {
  perPage?: number;
  page?: number;
  from?: string;
  to?: string;
}

export interface AddProductsRequest {
  product: number[];
}

export interface SlugAvailabilityResponse {
  message: string; // e.g. "Slug is available"
}
