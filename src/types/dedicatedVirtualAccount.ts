import { PaystackResponse } from './';

/**
 * Request body for creating a dedicated account.
 */
export interface CreateDedicatedAccountRequest {
  customer: string | number;
  preferred_bank?: string;
  subaccount?: string;
  split_code?: string;
}

/**
 * Request body for assigning a dedicated account to a customer.
 */
export interface AssignDedicatedAccountRequest {
  email: string;
  first_name: string;
  last_name: string;
  phone: string;
  preferred_bank?: string;
  country?: string;
}

/**
 * Query params for listing dedicated accounts.
 */
export interface ListDedicatedAccountsQuery {
  active?: boolean;
  currency?: string;
  provider_slug?: string;
  bank_id?: number;
  customer?: number;
}

/**
 * Query params for requerying a dedicated account.
 */
export interface RequeryDedicatedAccountQuery {
  account_number: string;
  provider_slug?: string;
  date?: string;
}

/**
 * Request body for removing a split configuration.
 */
export interface RemoveSplitRequest {
  account_number: string;
  provider_slug: string;
}

/**
 * Response type for a dedicated virtual account.
 */
export interface DedicatedVirtualAccountType {
  id: number;
  account_name: string;
  account_number: string;
  bank: {
    id: number;
    name: string;
    slug: string;
  };
  assigned: boolean;
  currency: string;
  active: boolean;
  created_at: string;
  updated_at: string;
  customer: {
    id: number;
    email: string;
    first_name?: string;
    last_name?: string;
    phone?: string;
  };
}

/**
 * Bank provider type for dedicated accounts.
 */
export interface ProviderType {
  id: number;
  name: string;
  slug: string;
  active: boolean;
}
