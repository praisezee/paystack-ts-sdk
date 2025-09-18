import { AxiosInstance } from 'axios';
import { CreateSubscriptionRequest, SubscriptionType, SubscriptionsListResponse, EnableDisableSubscriptionRequest, ManageLinkResponse } from '../types';
declare class Subscription {
    private axiosInstance;
    private http;
    constructor(axiosInstance: AxiosInstance);
    /**
     * Create a new subscription on your Paystack integration.
     *
     * @param data - Subscription details (customer, plan, authorization, start_date).
     * @returns The newly created subscription.
     * @throws {PaystackAPIError} If the request fails or API returns an error.
     */
    createSubscription: (data: CreateSubscriptionRequest) => Promise<SubscriptionType>;
    /**
     * List all subscriptions on your Paystack integration.
     *
     * @param query - Optional filters like `perPage`, `page`, `customer`, `plan`.
     * @returns A list of subscriptions and pagination metadata.
     */
    listSubscriptions: (query?: Record<string, any>) => Promise<SubscriptionsListResponse>;
    /**
     * Fetch details of a specific subscription by ID or code.
     */
    fetchSubscription: (idOrCode: string) => Promise<SubscriptionType>;
    /**
     * Enable a subscription on your integration.
     */
    enableSubscription: (data: EnableDisableSubscriptionRequest) => Promise<string>;
    /**
     * Disable a subscription on your integration.
     */
    disableSubscription: (data: EnableDisableSubscriptionRequest) => Promise<string>;
    /**
     * Generate a link for updating the card on a subscription.
     */
    generateManageLink: (code: string) => Promise<ManageLinkResponse>;
    /**
     * Send a link to the customer’s email for updating the subscription card.
     */
    sendManageEmail: (code: string) => Promise<string>;
}
export default Subscription;
