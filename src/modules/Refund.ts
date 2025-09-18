import { AxiosInstance } from 'axios';
import { PaystackAPIError } from '../utils/AppError';
import { CreateRefundRequest, RefundType, RefundsListResponse, PaystackResponse } from '../types';

class Refund {
  private http: AxiosInstance;
  constructor(axiosInstance: AxiosInstance) {
    this.http = axiosInstance;
  }

  /**
   * Create a refund for a transaction
   *
   * @param data - Refund payload (transaction, amount, notes, etc.)
   * @returns The created refund object
   * @throws {PaystackAPIError} If request fails
   *
   * @example
   * ```ts
   * const refund = await paystack.refund.createRefund({
   *   transaction: 'T685312322670591',
   *   amount: 10000,
   *   customer_note: 'Refund for item returned',
   *   merchant_note: 'Approved refund'
   * });
   * console.log(refund.id, refund.status);
   * ```
   */
  createRefund = async (data: CreateRefundRequest): Promise<RefundType> => {
    try {
      const { data: response }: { data: PaystackResponse<RefundType> } = await this.http.post(
        '/refund',
        data
      );
      return response.data as RefundType;
    } catch (error: any) {
      throw new PaystackAPIError(error.response?.data?.message || error.message);
    }
  };

  /**
   * List refunds on your integration
   *
   * @param query - Optional filters like transaction, currency, from, to, perPage, page
   * @returns A list of refunds with metadata
   * @throws {PaystackAPIError} If request fails
   *
   * @example
   * ```ts
   * const refunds = await paystack.refund.listRefunds({ perPage: 20, page: 1 });
   * console.log(refunds.data.length, refunds.meta.total);
   * ```
   */
  listRefunds = async (query?: Record<string, any>): Promise<RefundsListResponse> => {
    try {
      const {
        data: response,
      }: { data: PaystackResponse<RefundType[], RefundsListResponse['meta']> } =
        await this.http.get('/refund', { params: query });
      return {
        data: response.data as RefundType[],
        meta: response.meta as RefundsListResponse['meta'],
      };
    } catch (error: any) {
      throw new PaystackAPIError(error.response?.data?.message || error.message);
    }
  };

  /**
   * Fetch a refund by its ID
   *
   * @param id - Refund ID
   * @returns Refund object
   * @throws {PaystackAPIError} If request fails
   *
   * @example
   * ```ts
   * const refund = await paystack.refund.fetchRefund('3018284');
   * console.log(refund.status, refund.amount);
   * ```
   */
  fetchRefund = async (id: string | number): Promise<RefundType> => {
    try {
      const { data: response }: { data: PaystackResponse<RefundType> } = await this.http.get(
        `/refund/${id}`
      );
      return response.data as RefundType;
    } catch (error: any) {
      throw new PaystackAPIError(error.response?.data?.message || error.message);
    }
  };
}

export default Refund;
