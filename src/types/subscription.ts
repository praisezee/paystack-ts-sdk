/**
 * Request payload for creating a subscription
 */
export interface CreateSubscriptionRequest {
  customer: string; // email or customer_code
  plan: string; // plan_code
  authorization?: string;
  start_date?: string; // ISO 8601 date
}

/**
 * Request payload for enabling/disabling a subscription
 */
export interface EnableDisableSubscriptionRequest {
  code: string; // subscription_code
  token: string; // email_token
}

/**
 * A subscription object
 */
export interface SubscriptionType {
  id: number;
  customer: any; // Could be expanded into CustomerType if needed
  plan: any; // Could be expanded into PlanType if needed
  integration: number;
  domain: string;
  start: number;
  status: string;
  quantity: number;
  amount: number;
  authorization: any;
  subscription_code: string;
  email_token: string;
  easy_cron_id?: string;
  cron_expression?: string;
  next_payment_date?: string;
  open_invoice?: string | null;
  createdAt: string;
  updatedAt: string;
}

/**
 * Response when listing subscriptions
 */
export interface SubscriptionsListResponse {
  data: SubscriptionType[];
  meta: {
    total: number;
    skipped: number;
    perPage: number;
    page: number;
    pageCount: number;
  };
}

/**
 * Response for generating manage link
 */
export interface ManageLinkResponse {
  link: string;
}
