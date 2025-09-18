import { AxiosInstance } from 'axios';
import { CreateRefundRequest, RefundType, RefundsListResponse } from '../types';
declare class Refund {
    private http;
    constructor(axiosInstance: AxiosInstance);
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
    createRefund: (data: CreateRefundRequest) => Promise<RefundType>;
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
    listRefunds: (query?: Record<string, any>) => Promise<RefundsListResponse>;
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
    fetchRefund: (id: string | number) => Promise<RefundType>;
}
export default Refund;
