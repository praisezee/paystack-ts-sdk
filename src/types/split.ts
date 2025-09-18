/**
 * Defines a subaccount share in a split.
 */
export interface SubaccountShare {
  subaccount: string;
  share: number;
}

/**
 * Request body for creating a split.
 */
export interface CreateSplitRequest {
  name: string;
  type: 'percentage' | 'flat';
  currency: string;
  subaccounts: SubaccountShare[];
  bearer_type: 'subaccount' | 'account' | 'all-proportional' | 'all';
  bearer_subaccount?: string;
}

/**
 * Response object representing a split.
 */
export interface SplitResponse {
  id: number;
  name: string;
  type: string;
  currency: string;
  integration: number;
  domain: string;
  split_code: string;
  active: boolean;
  bearer_type: string;
  bearer_subaccount?: string;
  createdAt: string;
  updatedAt: string;
  is_dynamic: boolean;
  subaccounts: {
    subaccount: {
      id: number;
      subaccount_code: string;
      business_name: string;
      description: string;
      settlement_bank: string;
      currency: string;
      account_number: string;
    };
    share: number;
  }[];
  total_subaccounts: number;
}

/**
 * Paginated list of transaction splits.
 */
export interface SplitListResponse {
  data: SplitResponse[];
  meta: {
    total: number;
    skipped: number;
    perPage: number;
    page: number;
    pageCount: number;
  };
}

/**
 * Request body for updating a split.
 */
export interface UpdateSplitRequest {
  name?: string;
  active?: boolean;
  bearer_type?: 'subaccount' | 'account' | 'all-proportional' | 'all';
  bearer_subaccount?: string;
}

/**
 * Request body for adding or updating a subaccount in a split.
 */
export interface AddSubaccountRequest {
  subaccount: string;
  share: number;
}

/**
 * Request body for removing a subaccount from a split.
 */
export interface RemoveSubaccountRequest {
  subaccount: string;
}
