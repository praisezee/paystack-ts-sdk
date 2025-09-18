import { AxiosInstance } from 'axios';
import {
  DirectDebitActivationChargeRequest,
  DirectDebitActivationChargeResponse,
  DirectDebitFetchMandateAuthorizationsResponse,
  DirectDebitMandateAuthorization,
} from '../types/directDebit';
import { PaystackResponse } from '../types';
import { PaystackAPIError } from '../utils/AppError';

/**
 * The Direct Debit API allows you to manage mandates and trigger activation charges.
 *
 * @see https://paystack.com/docs/api/direct-debit/
 */
class DirectDebit {
  private http: AxiosInstance;

  constructor(private axiosInstance: AxiosInstance) {
    this.http = this.axiosInstance;
  }

  /**
   * Trigger an activation charge on all customers with pending mandates.
   *
   * @param data - Array of customer IDs with pending mandate authorizations
   * @returns Message indicating the activation charge result
   * @throws {PaystackAPIError} If the request fails
   */
  async triggerActivationCharge(
    data: DirectDebitActivationChargeRequest
  ): Promise<DirectDebitActivationChargeResponse> {
    try {
      const { data: response }: { data: PaystackResponse<DirectDebitActivationChargeResponse> } =
        await this.http.put('/directdebit/activation-charge', data);

      if (!response.status) {
        throw new PaystackAPIError(response.message || 'Failed to trigger activation charge');
      }

      return { message: response.message };
    } catch (error: any) {
      throw new PaystackAPIError(error.response?.data?.message || error.message);
    }
  }

  /**
   * Fetch direct debit mandate authorizations.
   *
   * @param query - Optional filters (cursor, status, per_page)
   * @returns List of mandate authorizations with pagination meta
   * @throws {PaystackAPIError} If the request fails
   */
  async listMandateAuthorizations(query?: {
    cursor?: string;
    status?: 'pending' | 'active' | 'revoked';
    per_page?: number;
  }): Promise<DirectDebitFetchMandateAuthorizationsResponse> {
    try {
      const {
        data: response,
      }: {
        data: PaystackResponse<
          DirectDebitMandateAuthorization[],
          DirectDebitFetchMandateAuthorizationsResponse['meta']
        >;
      } = await this.http.get('/directdebit/mandate-authorizations', { params: query });

      if (!response.status) {
        throw new PaystackAPIError(response.message || 'Failed to fetch mandate authorizations');
      }

      return {
        data: response.data as DirectDebitMandateAuthorization[],
        meta: response.meta as DirectDebitFetchMandateAuthorizationsResponse['meta'],
      };
    } catch (error: any) {
      throw new PaystackAPIError(error.response?.data?.message || error.message);
    }
  }
}

export default DirectDebit;
