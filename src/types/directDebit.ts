/**
 * Request body for triggering direct debit activation charge.
 */
export interface DirectDebitActivationChargeRequest {
  customer_ids: number[];
}

/**
 * Response for triggering activation charge.
 */
export interface DirectDebitActivationChargeResponse {
  message: string;
}

/**
 * A mandate authorization object.
 */
export interface DirectDebitMandateAuthorization {
  id: number;
  customer_id: number;
  mandate_code: string;
  bank: {
    id: number;
    name: string;
    slug: string;
  };
  status: 'pending' | 'active' | 'revoked';
  created_at: string;
  updated_at: string;
}

/**
 * Response when fetching mandate authorizations.
 */
export interface DirectDebitFetchMandateAuthorizationsResponse {
  data: DirectDebitMandateAuthorization[];
  meta: {
    next?: string;
    previous?: string;
    per_page: number;
  };
}
