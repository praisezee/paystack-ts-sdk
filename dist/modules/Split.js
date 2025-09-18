"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AppError_1 = require("../utils/AppError");
/**
 * The Transaction Splits API enables merchants to split settlement
 * for a transaction across multiple subaccounts.
 *
 * @see https://paystack.com/docs/api/split/
 */
class Split {
    constructor(axiosInstance) {
        this.axiosInstance = axiosInstance;
        /**
         * Create a transaction split.
         *
         * @param data - Split details
         * @returns The created split object
         * @throws {PaystackAPIError} If the request fails
         */
        this.createSplit = async (data) => {
            try {
                const { data: response } = await this.http.post('/split', data);
                if (!response.status) {
                    throw new AppError_1.PaystackAPIError(response.message || 'Failed to create split');
                }
                return response.data;
            }
            catch (error) {
                throw new AppError_1.PaystackAPIError(error.response?.data?.message || error.message);
            }
        };
        /**
         * List all transaction splits on the integration.
         *
         * @returns Paginated list of transaction splits
         * @throws {PaystackAPIError} If the request fails
         */
        this.listSplits = async () => {
            try {
                const { data: response, } = await this.http.get('/split');
                if (!response.status) {
                    throw new AppError_1.PaystackAPIError(response.message || 'Failed to list splits');
                }
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
         * Fetch details of a specific split.
         *
         * @param id - Split ID or code
         * @returns A split object
         * @throws {PaystackAPIError} If the request fails
         */
        this.fetchSplit = async (id) => {
            try {
                const { data: response } = await this.http.get(`/split/${id}`);
                if (!response.status) {
                    throw new AppError_1.PaystackAPIError(response.message || 'Failed to fetch split');
                }
                return response.data;
            }
            catch (error) {
                throw new AppError_1.PaystackAPIError(error.response?.data?.message || error.message);
            }
        };
        /**
         * Update details of a split.
         *
         * @param id - Split ID or code
         * @param data - Update details
         * @returns Updated split object
         * @throws {PaystackAPIError} If the request fails
         */
        this.updateSplit = async (id, data) => {
            try {
                const { data: response } = await this.http.put(`/split/${id}`, data);
                if (!response.status) {
                    throw new AppError_1.PaystackAPIError(response.message || 'Failed to update split');
                }
                return response.data;
            }
            catch (error) {
                throw new AppError_1.PaystackAPIError(error.response?.data?.message || error.message);
            }
        };
        /**
         * Add or update a subaccount in a split.
         *
         * @param id - Split ID or code
         * @param data - Subaccount details
         * @returns Updated split object
         * @throws {PaystackAPIError} If the request fails
         */
        this.addOrUpdateSubaccount = async (id, data) => {
            try {
                const { data: response } = await this.http.post(`/split/${id}/subaccount/add`, data);
                if (!response.status) {
                    throw new AppError_1.PaystackAPIError(response.message || 'Failed to add subaccount');
                }
                return response.data;
            }
            catch (error) {
                throw new AppError_1.PaystackAPIError(error.response?.data?.message || error.message);
            }
        };
        /**
         * Remove a subaccount from a split.
         *
         * @param id - Split ID or code
         * @param data - Subaccount code to remove
         * @returns A success message
         * @throws {PaystackAPIError} If the request fails
         */
        this.removeSubaccount = async (id, data) => {
            try {
                const { data: response } = await this.http.post(`/split/${id}/subaccount/remove`, data);
                if (!response.status) {
                    throw new AppError_1.PaystackAPIError(response.message || 'Failed to remove subaccount');
                }
                return { message: response.message };
            }
            catch (error) {
                throw new AppError_1.PaystackAPIError(error.response?.data?.message || error.message);
            }
        };
        this.http = this.axiosInstance;
    }
}
exports.default = Split;
