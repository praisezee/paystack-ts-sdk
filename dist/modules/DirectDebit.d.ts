import { AxiosInstance } from 'axios';
import { DirectDebitActivationChargeRequest, DirectDebitActivationChargeResponse, DirectDebitFetchMandateAuthorizationsResponse } from '../types/directDebit';
/**
 * The Direct Debit API allows you to manage mandates and trigger activation charges.
 *
 * @see https://paystack.com/docs/api/direct-debit/
 */
declare class DirectDebit {
    private axiosInstance;
    private http;
    constructor(axiosInstance: AxiosInstance);
    /**
     * Trigger an activation charge on all customers with pending mandates.
     *
     * @param data - Array of customer IDs with pending mandate authorizations
     * @returns Message indicating the activation charge result
     * @throws {PaystackAPIError} If the request fails
     */
    triggerActivationCharge(data: DirectDebitActivationChargeRequest): Promise<DirectDebitActivationChargeResponse>;
    /**
     * Fetch direct debit mandate authorizations.
     *
     * @param query - Optional filters (cursor, status, per_page)
     * @returns List of mandate authorizations with pagination meta
     * @throws {PaystackAPIError} If the request fails
     */
    listMandateAuthorizations(query?: {
        cursor?: string;
        status?: 'pending' | 'active' | 'revoked';
        per_page?: number;
    }): Promise<DirectDebitFetchMandateAuthorizationsResponse>;
}
export default DirectDebit;
