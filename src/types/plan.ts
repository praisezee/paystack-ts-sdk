/**
 * Request payload for creating a new plan
 */
export interface CreatePlanRequest {
  /** Name of the plan */
  name: string;

  /** Amount in kobo, cent, etc. (lowest currency subunit) */
  amount: number;

  /** Interval of subscription e.g. daily, weekly, monthly, annually */
  interval: 'daily' | 'weekly' | 'monthly' | 'annually';

  /** Optional description of the plan */
  description?: string;

  /** If true, invoices will be sent automatically to customers */
  send_invoices?: boolean;

  /** If true, SMS will be sent automatically to customers */
  send_sms?: boolean;

  /** Currency for the plan (default: NGN) */
  currency?: string;

  /** Number of invoices before the subscription automatically stops */
  invoice_limit?: number;

  /** Additional metadata */
  metadata?: Record<string, any>;
}

/**
 * Request payload for updating an existing plan
 */
export interface UpdatePlanRequest {
  /** New name for the plan */
  name?: string;

  /** New amount (in subunits) */
  amount?: number;

  /** New interval */
  interval?: 'daily' | 'weekly' | 'monthly' | 'annually';

  /** Optional description */
  description?: string;

  /** Update invoice sending preference */
  send_invoices?: boolean;

  /** Update SMS sending preference */
  send_sms?: boolean;

  /** Update invoice limit */
  invoice_limit?: number;

  /** Additional metadata */
  metadata?: Record<string, any>;
}

/**
 * A subscription plan object
 */
export interface PlanType {
  id: number;
  name: string;
  plan_code: string;
  description: string;
  amount: number;
  interval: string;
  send_invoices: boolean;
  send_sms: boolean;
  hosted_page: boolean;
  hosted_page_url: string;
  hosted_page_summary: string;
  currency: string;
  createdAt: string;
  updatedAt: string;
}

/**
 * Response when listing plans
 */
export interface PlansListResponse {
  /** Array of plans returned */
  data: PlanType[];

  /** Pagination metadata */
  meta: {
    total: number;
    perPage: number;
    page: number;
  };
}
