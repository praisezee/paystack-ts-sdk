export interface CreateCustomerRequest<T = any> {
  email: string;
  first_name: string;
  last_name: string;
  phone?: string;
  metadata?: T;
}

export interface PaystackResponse<T = any, Z = any> {
  status: boolean;
  message: string;
  data?: T;
  meta?: Z;
}

export interface CreateCustomerResponse extends PaystackResponse {
  data: {
    email: string;
    integration: number;
    domain: string;
    customer_code: string;
    id: number;
    identified: boolean;
    identifications?: any;
    createdAt: string;
    updatedAt: string;
  };
}

export interface CustomerType {
  integration: number;
  first_name?: string;
  last_name?: string;
  email: string;
  phone?: string;
  metadata?: any;
  domain: string;
  customer_code: string;
  risk_action: string;
  id: number;
  createdAt: string;
  updatedAt: string;
}

export interface CustomersListResponse extends PaystackResponse {
  data: CustomerType[];
  meta: {
    next: string;
    previous?: string | number;
    perPage: number;
  };
}

interface AuthorizationType {
  authorization_code: string;
  bin: string;
  last4: string;
  exp_month: string;
  exp_year: string;
  channel: string;
  card_type: string;
  bank: string;
  country_code: string;
  brand: string;
  reusable: boolean;
  signature: string;
  account_name?: string;
}

export interface CustomerResponse extends PaystackResponse {
  data: {
    transactions: any[];
    subscriptions: any[];
    authorizations: AuthorizationType[];
    first_name?: string;
    last_name?: string;
    email: string;
    phone?: string;
    metadata?: any;
    domain: string;
    customer_code: string;
    risk_action?: string;
    id: number;
    integration: number;
    createdAt: string;
    updatedAt: string;
    created_at?: string;
    updated_at?: string;
    total_transactions?: number;
    total_transaction_value?: any[];
    dedicated_account?: any;
    identified: boolean;
    identifications?: any;
  };
}

export interface UpdateCustomerRequest<T = any> {
  first_name: string;
  last_name: string;
  phone?: string;
  metadata?: T;
}

export interface ValidateCustomerRequest {
  first_name: string;
  last_name: string;
  type: string; //Predefined types of identification. Only bank_account is supported at the moment
  value: string; //Customer's identification number
  country: string; //2 letter country code of identification issuer
  bvn: string;
  bank_code: string;
  account_number: string;
  middle_name?: string;
}
