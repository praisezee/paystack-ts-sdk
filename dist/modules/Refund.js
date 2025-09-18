"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AppError_1 = require("../utils/AppError");
class Refund {
    constructor(axiosInstance) {
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
        this.createRefund = async (data) => {
            try {
                const { data: response } = await this.http.post('/refund', data);
                return response.data;
            }
            catch (error) {
                throw new AppError_1.PaystackAPIError(error.response?.data?.message || error.message);
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
        this.listRefunds = async (query) => {
            try {
                const { data: response, } = await this.http.get('/refund', { params: query });
                return {
                    data: response.data,
                    meta: response.meta,
                };
            }
            catch (error) {
                throw new AppError_1.PaystackAPIError(error.response?.data?.message || error.message);
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
        this.fetchRefund = async (id) => {
            try {
                const { data: response } = await this.http.get(`/refund/${id}`);
                return response.data;
            }
            catch (error) {
                throw new AppError_1.PaystackAPIError(error.response?.data?.message || error.message);
            }
        };
        this.http = axiosInstance;
    }
}
exports.default = Refund;
