"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AppError_1 = require("../utils/AppError");
class ApplePay {
    constructor(axiosInstance) {
        this.axiosInstance = axiosInstance;
        /**
         * Register a new domain for Apple Pay on your Paystack integration.
         *
         * @param data - The domain name to register.
         * @returns The registered domain details.
         * @throws {PaystackAPIError} If the request fails or API returns an error.
         *
         * @example
         * ```ts
         * const domain = await paystack.applePay.registerDomain({
         *   domainName: 'example.com',
         * });
         * console.log(domain.domainName);
         * ```
         */
        this.registerDomain = async (data) => {
            try {
                const { data: response } = await this.http.post('/apple-pay/domain', data);
                if (!response.status) {
                    throw new AppError_1.PaystackAPIError(response.message || 'Failed to register domain');
                }
                return response.data;
            }
            catch (error) {
                throw new AppError_1.PaystackAPIError(error.response?.data?.message || error.message || 'Error registering domain');
            }
        };
        /**
         * Retrieve all registered Apple Pay domains.
         *
         * @returns An array of registered domains.
         * @throws {PaystackAPIError} If the request fails or API returns an error.
         *
         * @example
         * ```ts
         * const domains = await paystack.applePay.listDomains();
         * domains.forEach(d => console.log(d.domainName));
         * ```
         */
        this.listDomains = async () => {
            try {
                const { data: response } = await this.http.get('/apple-pay/domain');
                if (!response.status) {
                    throw new AppError_1.PaystackAPIError(response.message || 'Failed to fetch domains');
                }
                return response.data;
            }
            catch (error) {
                throw new AppError_1.PaystackAPIError(error.response?.data?.message || error.message || 'Error fetching domains');
            }
        };
        /**
         * Unregister a domain from Apple Pay.
         *
         * @param data - The domain name to unregister.
         * @returns Confirmation of the unregistered domain.
         * @throws {PaystackAPIError} If the request fails or API returns an error.
         *
         * @example
         * ```ts
         * const result = await paystack.applePay.unregisterDomain({
         *   domainName: 'example.com',
         * });
         * console.log(result.deleted); // true
         * ```
         */
        this.unregisterDomain = async (data) => {
            try {
                const { data: response } = await this.http.delete('/apple-pay/domain', { data });
                if (!response.status) {
                    throw new AppError_1.PaystackAPIError(response.message || 'Failed to unregister domain');
                }
                return response.data;
            }
            catch (error) {
                throw new AppError_1.PaystackAPIError(error.response?.data?.message || error.message || 'Error unregistering domain');
            }
        };
        this.http = this.axiosInstance;
    }
}
exports.default = ApplePay;
