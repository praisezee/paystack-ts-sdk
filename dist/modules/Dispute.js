"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AppError_1 = require("../utils/AppError");
class Dispute {
    constructor(axiosInstance) {
        this.axiosInstance = axiosInstance;
        /**
         * List disputes filed against you.
         * @param query - Optional query filters (from, to, perPage, page, transaction, status)
         * @returns List of disputes and pagination metadata
         */
        this.listDisputes = async (query) => {
            try {
                const { data: response, } = await this.http.get('/dispute', { params: query });
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
         * Fetch details of a specific dispute by ID.
         */
        this.fetchDispute = async (id) => {
            try {
                const { data: response } = await this.http.get(`/dispute/${id}`);
                return response.data;
            }
            catch (error) {
                throw new AppError_1.PaystackAPIError(error.response?.data?.message || error.message);
            }
        };
        /**
         * List disputes for a particular transaction.
         */
        this.listTransactionDisputes = async (transactionId) => {
            try {
                const { data: response } = await this.http.get(`/dispute/transaction/${transactionId}`);
                return response.data;
            }
            catch (error) {
                throw new AppError_1.PaystackAPIError(error.response?.data?.message || error.message);
            }
        };
        /**
         * Update a dispute.
         */
        this.updateDispute = async (id, data) => {
            try {
                const { data: response } = await this.http.put(`/dispute/${id}`, data);
                return response.data;
            }
            catch (error) {
                throw new AppError_1.PaystackAPIError(error.response?.data?.message || error.message);
            }
        };
        /**
         * Add evidence to a dispute.
         */
        this.addEvidence = async (id, data) => {
            try {
                const { data: response } = await this.http.post(`/dispute/${id}/evidence`, data);
                return response.data;
            }
            catch (error) {
                throw new AppError_1.PaystackAPIError(error.response?.data?.message || error.message);
            }
        };
        /**
         * Get upload URL for dispute attachments.
         */
        this.getUploadUrl = async (id, upload_filename) => {
            try {
                const { data: response } = await this.http.get(`/dispute/${id}/upload_url`, { params: { upload_filename } });
                return response.data;
            }
            catch (error) {
                throw new AppError_1.PaystackAPIError(error.response?.data?.message || error.message);
            }
        };
        /**
         * Resolve a dispute.
         */
        this.resolveDispute = async (id, data) => {
            try {
                const { data: response } = await this.http.put(`/dispute/${id}/resolve`, data);
                return response.data;
            }
            catch (error) {
                throw new AppError_1.PaystackAPIError(error.response?.data?.message || error.message);
            }
        };
        this.http = this.axiosInstance;
    }
}
exports.default = Dispute;
