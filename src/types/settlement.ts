export interface Settlement {
  id: number;
  domain: string;
  status: 'success' | 'processing' | 'pending' | 'failed';
  currency: string;
  integration: number;
  total_amount: number; // kobo
  effective_amount: number; // kobo
  total_fees: number; // kobo
  total_processed: number; // kobo
  deductions?: any;
  settlement_date: string;
  settled_by?: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface SettlementTransactionCustomer {
  id: number;
  first_name?: string | null;
  last_name?: string | null;
  email: string;
  phone?: string | null;
  metadata?: Record<string, any> | null;
  customer_code: string;
  risk_action?: string;
}

export interface SettlementTransactionAuthorization {
  authorization_code: string;
  bin: string;
  last4: string;
  exp_month: string;
  exp_year: string;
  channel: string;
  card_type: string;
  bank?: string;
  country_code: string;
  brand: string;
  reusable: boolean;
  signature: string;
  account_name?: string | null;
}

export interface SettlementTransactionSource {
  source: string;
  type: string;
  identifier?: string | null;
  entry_point?: string;
}

export interface SettlementTransaction {
  id: number;
  domain: string;
  status: 'success' | 'failed' | 'pending';
  reference: string;
  amount: number; // kobo
  message: string;
  gateway_response: string;
  paid_at: string;
  created_at: string;
  channel: string;
  currency: string;
  ip_address?: string;
  metadata?: Record<string, any>;
  log?: any;
  fees: number;
  fees_split?: any;
  customer: SettlementTransactionCustomer;
  authorization?: SettlementTransactionAuthorization;
  plan?: Record<string, any>;
  split?: Record<string, any>;
  subaccount?: Record<string, any>;
  order_id?: string | null;
  paidAt?: string;
  createdAt?: string;
  requested_amount?: number;
  source?: SettlementTransactionSource;
  pos_transaction_data?: any;
}

// List Settlements Query
export interface ListSettlementsQuery {
  perPage?: number;
  page?: number;
  status?: 'success' | 'processing' | 'pending' | 'failed';
  subaccount?: string;
  from?: string; // ISO date
  to?: string; // ISO date
}

export interface ListSettlementsResponse {
  data: Settlement[];
  meta: {
    total: number;
    skipped: number;
    perPage: number;
    page: number;
    pageCount: number;
  };
}

// List Settlement Transactions Query
export interface ListSettlementTransactionsQuery {
  perPage?: number;
  page?: number;
  from?: string; // ISO date
  to?: string; // ISO date
}

export interface ListSettlementTransactionsResponse {
  data: SettlementTransaction[];
  meta: {
    total: number;
    total_volume?: number;
    skipped: number;
    perPage: number;
    page: number;
    pageCount: number;
  };
}
