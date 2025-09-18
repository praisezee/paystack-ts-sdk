import { AxiosInstance } from 'axios';
import { PaystackAPIError } from '../utils/AppError';
import {
  CreateSubscriptionRequest,
  SubscriptionType,
  SubscriptionsListResponse,
  EnableDisableSubscriptionRequest,
  PaystackResponse,
  ManageLinkResponse,
} from '../types';

class Subscription {
  private http: AxiosInstance;
  constructor(private axiosInstance: AxiosInstance) {
    this.http = this.axiosInstance;
  }

  /**
   * Create a new subscription on your Paystack integration.
   *
   * @param data - Subscription details (customer, plan, authorization, start_date).
   * @returns The newly created subscription.
   * @throws {PaystackAPIError} If the request fails or API returns an error.
   */
  createSubscription = async (data: CreateSubscriptionRequest): Promise<SubscriptionType> => {
    try {
      const { data: response }: { data: PaystackResponse<SubscriptionType> } = await this.http.post(
        '/subscription',
        data
      );
      return response.data as SubscriptionType;
    } catch (error: any) {
      throw new PaystackAPIError(error.response?.data?.message || error.message);
    }
  };

  /**
   * List all subscriptions on your Paystack integration.
   *
   * @param query - Optional filters like `perPage`, `page`, `customer`, `plan`.
   * @returns A list of subscriptions and pagination metadata.
   */
  listSubscriptions = async (query?: Record<string, any>): Promise<SubscriptionsListResponse> => {
    try {
      const {
        data: response,
      }: {
        data: PaystackResponse<SubscriptionType[], SubscriptionsListResponse['meta']>;
      } = await this.http.get('/subscription', { params: query });

      return {
        data: response.data as SubscriptionType[],
        meta: response.meta as SubscriptionsListResponse['meta'],
      };
    } catch (error: any) {
      throw new PaystackAPIError(error.response?.data?.message || error.message);
    }
  };

  /**
   * Fetch details of a specific subscription by ID or code.
   */
  fetchSubscription = async (idOrCode: string): Promise<SubscriptionType> => {
    try {
      const { data: response }: { data: PaystackResponse<SubscriptionType> } = await this.http.get(
        `/subscription/${idOrCode}`
      );
      return response.data as SubscriptionType;
    } catch (error: any) {
      throw new PaystackAPIError(error.response?.data?.message || error.message);
    }
  };

  /**
   * Enable a subscription on your integration.
   */
  enableSubscription = async (data: EnableDisableSubscriptionRequest): Promise<string> => {
    try {
      const { data: response }: { data: PaystackResponse } = await this.http.post(
        '/subscription/enable',
        data
      );
      return response.message;
    } catch (error: any) {
      throw new PaystackAPIError(error.response?.data?.message || error.message);
    }
  };

  /**
   * Disable a subscription on your integration.
   */
  disableSubscription = async (data: EnableDisableSubscriptionRequest): Promise<string> => {
    try {
      const { data: response }: { data: PaystackResponse } = await this.http.post(
        '/subscription/disable',
        data
      );
      return response.message;
    } catch (error: any) {
      throw new PaystackAPIError(error.response?.data?.message || error.message);
    }
  };

  /**
   * Generate a link for updating the card on a subscription.
   */
  generateManageLink = async (code: string): Promise<ManageLinkResponse> => {
    try {
      const { data: response }: { data: PaystackResponse<ManageLinkResponse> } =
        await this.http.get(`/subscription/${code}/manage/link`);
      return response.data as ManageLinkResponse;
    } catch (error: any) {
      throw new PaystackAPIError(error.response?.data?.message || error.message);
    }
  };

  /**
   * Send a link to the customer’s email for updating the subscription card.
   */
  sendManageEmail = async (code: string): Promise<string> => {
    try {
      const { data: response }: { data: PaystackResponse } = await this.http.post(
        `/subscription/${code}/manage/email`
      );
      return response.message;
    } catch (error: any) {
      throw new PaystackAPIError(error.response?.data?.message || error.message);
    }
  };
}

export default Subscription;
