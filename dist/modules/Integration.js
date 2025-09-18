"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Integration {
    constructor(client) {
        /**
         * Fetch the payment session timeout on your integration
         * @example
         * ```ts
         * const timeout = await integration.fetchPaymentSessionTimeout();
         * console.log(timeout.payment_session_timeout); // e.g., 30
         * ```
         * @returns {Promise<PaymentSessionTimeoutResponse>}
         */
        this.fetchPaymentSessionTimeout = async () => {
            try {
                const response = await this.client.get('/integration/payment_session_timeout');
                return response.data.data;
            }
            catch (error) {
                // Handle Paystack API error
                throw new Error(error.response?.data?.message || error.message);
            }
        };
        /**
         * Update the payment session timeout on your integration
         * @param {number} timeout - Time before stopping session in seconds. Set 0 to cancel session timeouts
         * @example
         * ```ts
         * const updated = await integration.updatePaymentSessionTimeout(60);
         * console.log(updated.payment_session_timeout); // e.g., 60
         * ```
         * @returns {Promise<PaymentSessionTimeoutResponse>}
         */
        this.updatePaymentSessionTimeout = async (timeout) => {
            try {
                const response = await this.client.put('/integration/payment_session_timeout', { timeout });
                return response.data.data;
            }
            catch (error) {
                throw new Error(error.response?.data?.message || error.message);
            }
        };
        this.client = client;
    }
}
exports.default = Integration;
