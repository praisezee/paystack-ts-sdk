"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AppError_1 = require("../utils/AppError");
/**
 * The Direct Debit API allows you to manage mandates and trigger activation charges.
 *
 * @see https://paystack.com/docs/api/direct-debit/
 */
class DirectDebit {
    constructor(axiosInstance) {
        this.axiosInstance = axiosInstance;
        this.http = this.axiosInstance;
    }
    /**
     * Trigger an activation charge on all customers with pending mandates.
     *
     * @param data - Array of customer IDs with pending mandate authorizations
     * @returns Message indicating the activation charge result
     * @throws {PaystackAPIError} If the request fails
     */
    async triggerActivationCharge(data) {
        try {
            const { data: response } = await this.http.put('/directdebit/activation-charge', data);
            if (!response.status) {
                throw new AppError_1.PaystackAPIError(response.message || 'Failed to trigger activation charge');
            }
            return { message: response.message };
        }
        catch (error) {
            throw new AppError_1.PaystackAPIError(error.response?.data?.message || error.message);
        }
    }
    /**
     * Fetch direct debit mandate authorizations.
     *
     * @param query - Optional filters (cursor, status, per_page)
     * @returns List of mandate authorizations with pagination meta
     * @throws {PaystackAPIError} If the request fails
     */
    async listMandateAuthorizations(query) {
        try {
            const { data: response, } = await this.http.get('/directdebit/mandate-authorizations', { params: query });
            if (!response.status) {
                throw new AppError_1.PaystackAPIError(response.message || 'Failed to fetch mandate authorizations');
            }
            return {
                data: response.data,
                meta: response.meta,
            };
        }
        catch (error) {
            throw new AppError_1.PaystackAPIError(error.response?.data?.message || error.message);
        }
    }
}
exports.default = DirectDebit;
