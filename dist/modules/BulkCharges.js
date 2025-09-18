"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AppError_1 = require("../utils/AppError");
class BulkCharges {
    constructor(axiosInstance) {
        /**
         * Initiate a bulk charge.
         * @param {BulkChargeInitiateRequest[]} payload - Array of charge objects containing authorization, amount, and reference.
         * @example
         * const charges = [
         *   { authorization: 'AUTH_xxxx', amount: 2500, reference: 'ref1' },
         *   { authorization: 'AUTH_yyyy', amount: 1500, reference: 'ref2' }
         * ];
         * const data = await bulkCharges.initiate(charges);
         */
        this.initiate = async (payload) => {
            try {
                const { data: response } = await this.http.post('/bulkcharge', payload);
                return response.data;
            }
            catch (error) {
                throw new AppError_1.PaystackAPIError(error.response?.data?.message || error.message);
            }
        };
        /**
         * List all bulk charge batches.
         * @param params Optional query parameters: perPage, page, from, to
         * @example
         * const batches = await bulkCharges.list({ perPage: 20, page: 1 });
         */
        this.list = async (params) => {
            try {
                const { data: response } = await this.http.get('/bulkcharge', { params });
                return { data: response.data, meta: response.meta };
            }
            catch (error) {
                throw new AppError_1.PaystackAPIError(error.response?.data?.message || error.message);
            }
        };
        /**
         * Fetch a specific bulk charge batch by ID or code.
         * @param idOrCode The ID or batch code
         * @example
         * const batch = await bulkCharges.fetch('BCH_xxxxx');
         */
        this.fetch = async (idOrCode) => {
            try {
                const { data: response } = await this.http.get(`/bulkcharge/${idOrCode}`);
                return response.data;
            }
            catch (error) {
                throw new AppError_1.PaystackAPIError(error.response?.data?.message || error.message);
            }
        };
        /**
         * Fetch charges associated with a batch code.
         * @param idOrCode Batch ID or code
         * @param params Optional filters like status, perPage, page, from, to
         * @example
         * const charges = await bulkCharges.fetchCharges('BCH_xxxxx', { status: 'success', perPage: 20 });
         */
        this.fetchCharges = async (idOrCode, params) => {
            try {
                const { data: response } = await this.http.get(`/bulkcharge/${idOrCode}/charges`, { params });
                return { data: response.data, meta: response.meta };
            }
            catch (error) {
                throw new AppError_1.PaystackAPIError(error.response?.data?.message || error.message);
            }
        };
        /**
         * Pause a bulk charge batch.
         * @param batchCode The batch code to pause
         * @example
         * await bulkCharges.pause('BCH_xxxxx');
         */
        this.pause = async (batchCode) => {
            try {
                const { data: response } = await this.http.get(`/bulkcharge/pause/${batchCode}`);
                return response;
            }
            catch (error) {
                throw new AppError_1.PaystackAPIError(error.response?.data?.message || error.message);
            }
        };
        /**
         * Resume a bulk charge batch.
         * @param batchCode The batch code to resume
         * @example
         * await bulkCharges.resume('BCH_xxxxx');
         */
        this.resume = async (batchCode) => {
            try {
                const { data: response } = await this.http.get(`/bulkcharge/resume/${batchCode}`);
                return response;
            }
            catch (error) {
                throw new AppError_1.PaystackAPIError(error.response?.data?.message || error.message);
            }
        };
        this.http = axiosInstance;
    }
}
exports.default = BulkCharges;
