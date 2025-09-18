/**
 * Request payload for creating a new subaccount
 */
export interface CreateSubAccountRequest {
  /** Name of the business */
  business_name: string;

  /** Bank code (e.g. '058' for GTBank) */
  settlement_bank: string;

  /** Account number for settlement */
  account_number: string;

  /** Percentage of charge to be borne by subaccount */
  percentage_charge: number;

  /** Description of the subaccount */
  description?: string;

  /** Primary contact email */
  primary_contact_email?: string;

  /** Primary contact name */
  primary_contact_name?: string;

  /** Primary contact phone */
  primary_contact_phone?: string;

  /** Metadata for the subaccount */
  metadata?: Record<string, any>;
}

/**
 * Request payload for updating a subaccount
 */
export interface UpdateSubAccountRequest {
  /** Updated business name */
  business_name?: string;

  /** Updated bank code */
  settlement_bank?: string;

  /** Updated account number */
  account_number?: string;

  /** Updated percentage charge */
  percentage_charge?: number;

  /** Updated description */
  description?: string;

  /** Updated primary contact email */
  primary_contact_email?: string;

  /** Updated primary contact name */
  primary_contact_name?: string;

  /** Updated primary contact phone */
  primary_contact_phone?: string;

  /** Updated metadata */
  metadata?: Record<string, any>;
}

/**
 * A subaccount object
 */
export interface SubAccountType {
  id: number;
  subaccount_code: string;
  business_name: string;
  description: string;
  percentage_charge: number;
  settlement_bank: string;
  account_number: string;
  currency: string;
  active: boolean;
  is_verified: boolean;
  createdAt: string;
  updatedAt: string;
  [key: string]: any; // fallback for untyped extra fields
}

/**
 * Response when listing subaccounts
 */
export interface SubAccountsListResponse {
  /** Array of subaccounts returned */
  data: SubAccountType[];

  /** Pagination metadata */
  meta: {
    total: number;
    perPage: number;
    page: number;
  };
}
