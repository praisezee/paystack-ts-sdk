"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AppError_1 = require("../utils/AppError");
class Verification {
    constructor(axiosInstance) {
        /**
         * Resolve a bank account number
         *
         * @param query - Account number and bank code
         * @returns Resolved account details
         * @throws {PaystackAPIError} If request fails
         *
         * @example
         * ```ts
         * const account = await paystack.verification.resolveAccount({
         *   account_number: '0022728151',
         *   bank_code: '063'
         * });
         * console.log(account.account_name);
         * ```
         */
        this.resolveAccount = async (query) => {
            try {
                const { data: response } = await this.http.get('/bank/resolve', { params: query });
                return response.data;
            }
            catch (error) {
                throw new AppError_1.PaystackAPIError(error.response?.data?.message || error.message);
            }
        };
        /**
         * Validate a customer's account
         *
         * @param data - Account validation payload
         * @returns Validation result
         * @throws {PaystackAPIError} If request fails
         *
         * @example
         * ```ts
         * const result = await paystack.verification.validateAccount({
         *   account_name: 'Ann Bron',
         *   account_number: '0123456789',
         *   account_type: 'personal',
         *   bank_code: '632005',
         *   country_code: 'ZA',
         *   document_type: 'identityNumber',
         *   document_number: '1234567890123'
         * });
         * console.log(result.verified);
         * ```
         */
        this.validateAccount = async (data) => {
            try {
                const { data: response } = await this.http.post('/bank/validate', data);
                return response.data;
            }
            catch (error) {
                throw new AppError_1.PaystackAPIError(error.response?.data?.message || error.message);
            }
        };
        /**
         * Resolve card BIN details
         *
         * @param params - First 6 digits of the card
         * @returns Card BIN information
         * @throws {PaystackAPIError} If request fails
         *
         * @example
         * ```ts
         * const binInfo = await paystack.verification.resolveCardBin({ bin: '539983' });
         * console.log(binInfo.bank);
         * ```
         */
        this.resolveCardBin = async (params) => {
            try {
                const { data: response } = await this.http.get(`/decision/bin/${params.bin}`);
                return response.data;
            }
            catch (error) {
                throw new AppError_1.PaystackAPIError(error.response?.data?.message || error.message);
            }
        };
        this.http = axiosInstance;
    }
}
exports.default = Verification;
