import { AxiosInstance } from 'axios';
/**
 * @typedef PaymentSessionTimeoutResponse
 * @property {number} payment_session_timeout - Timeout in seconds
 */
export interface PaymentSessionTimeoutResponse {
    payment_session_timeout: number;
}
declare class Integration {
    private client;
    constructor(client: AxiosInstance);
    /**
     * Fetch the payment session timeout on your integration
     * @example
     * ```ts
     * const timeout = await integration.fetchPaymentSessionTimeout();
     * console.log(timeout.payment_session_timeout); // e.g., 30
     * ```
     * @returns {Promise<PaymentSessionTimeoutResponse>}
     */
    fetchPaymentSessionTimeout: () => Promise<PaymentSessionTimeoutResponse>;
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
    updatePaymentSessionTimeout: (timeout: number) => Promise<PaymentSessionTimeoutResponse>;
}
export default Integration;
