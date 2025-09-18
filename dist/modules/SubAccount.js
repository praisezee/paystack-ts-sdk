"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AppError_1 = require("../utils/AppError");
/**
 * SubAccount Module
 *
 * Provides methods for managing subaccounts on Paystack.
 * Subaccounts let you split payments to different bank accounts.
 */
class SubAccount {
    constructor(axiosInstance) {
        this.axiosInstance = axiosInstance;
        /**
         * Create a new subaccount on your Paystack integration.
         *
         * @param data - Subaccount details (business name, settlement bank, account number, etc.)
         * @returns The newly created subaccount details.
         * @throws {PaystackAPIError} If the request fails or API returns an error.
         *
         * @example
         * ```ts
         * const sub = await paystack.subaccount.createSubAccount({
         *   business_name: 'Acme Partners',
         *   settlement_bank: '058',
         *   account_number: '0123456789',
         *   percentage_charge: 20,
         * });
         * console.log(sub.subaccount_code);
         * ```
         */
        this.createSubAccount = async (data) => {
            try {
                const { data: response } = await this.http.post('/subaccount', data);
                return response.data;
            }
            catch (error) {
                throw new AppError_1.PaystackAPIError(error.response?.data?.message || error.message);
            }
        };
        /**
         * List all subaccounts on your Paystack integration.
         *
         * @param query - Optional filters like `perPage`, `page`, `from`, `to`.
         * @returns A list of subaccounts and pagination metadata.
         * @throws {PaystackAPIError} If the request fails or API returns an error.
         *
         * @example
         * ```ts
         * const { data, meta } = await paystack.subaccount.listSubAccounts({ perPage: 10 });
         * console.log(data.length, meta.total);
         * ```
         */
        this.listSubAccounts = async (query) => {
            try {
                const { data: response, } = await this.http.get('/subaccount', { params: query });
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
         * Fetch details of a specific subaccount by ID or code.
         *
         * @param idOrCode - The unique subaccount ID or code from Paystack.
         * @returns The subaccount details.
         * @throws {PaystackAPIError} If the request fails or API returns an error.
         *
         * @example
         * ```ts
         * const sub = await paystack.subaccount.fetchSubAccount('SUB_abc123');
         * console.log(sub.business_name);
         * ```
         */
        this.fetchSubAccount = async (idOrCode) => {
            try {
                const { data: response } = await this.http.get(`/subaccount/${idOrCode}`);
                return response.data;
            }
            catch (error) {
                throw new AppError_1.PaystackAPIError(error.response?.data?.message || error.message);
            }
        };
        /**
         * Update an existing subaccount on your Paystack integration.
         *
         * @param idOrCode - The subaccount ID or code to update.
         * @param data - Fields to update (business name, account number, percentage charge, etc.)
         * @returns The updated subaccount details.
         * @throws {PaystackAPIError} If the request fails or API returns an error.
         *
         * @example
         * ```ts
         * const updatedSub = await paystack.subaccount.updateSubAccount('SUB_abc123', {
         *   business_name: 'New Business Name',
         *   percentage_charge: 25,
         * });
         * console.log(updatedSub.business_name);
         * ```
         */
        this.updateSubAccount = async (idOrCode, data) => {
            try {
                const { data: response } = await this.http.put(`/subaccount/${idOrCode}`, data);
                return response.data;
            }
            catch (error) {
                throw new AppError_1.PaystackAPIError(error.response?.data?.message || error.message);
            }
        };
        this.http = this.axiosInstance;
    }
}
exports.default = SubAccount;
