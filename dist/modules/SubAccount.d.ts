import { AxiosInstance } from 'axios';
import { CreateSubAccountRequest, UpdateSubAccountRequest, SubAccountType, SubAccountsListResponse } from '../types';
/**
 * SubAccount Module
 *
 * Provides methods for managing subaccounts on Paystack.
 * Subaccounts let you split payments to different bank accounts.
 */
declare class SubAccount {
    private axiosInstance;
    private http;
    constructor(axiosInstance: AxiosInstance);
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
    createSubAccount: (data: CreateSubAccountRequest) => Promise<SubAccountType>;
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
    listSubAccounts: (query?: Record<string, any>) => Promise<SubAccountsListResponse>;
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
    fetchSubAccount: (idOrCode: string) => Promise<SubAccountType>;
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
    updateSubAccount: (idOrCode: string, data: UpdateSubAccountRequest) => Promise<SubAccountType>;
}
export default SubAccount;
