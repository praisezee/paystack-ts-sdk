/**
 * Request payload for creating a subscription
 */
export interface CreateSubscriptionRequest {
    customer: string;
    plan: string;
    authorization?: string;
    start_date?: string;
}
/**
 * Request payload for enabling/disabling a subscription
 */
export interface EnableDisableSubscriptionRequest {
    code: string;
    token: string;
}
/**
 * A subscription object
 */
export interface SubscriptionType {
    id: number;
    customer: any;
    plan: any;
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
