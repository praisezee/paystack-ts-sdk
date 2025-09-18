import { AxiosInstance } from 'axios';
import { PaystackResponse } from '../types';
import { CreateDedicatedAccountRequest, AssignDedicatedAccountRequest, ListDedicatedAccountsQuery, RequeryDedicatedAccountQuery, RemoveSplitRequest, DedicatedVirtualAccountType, ProviderType } from '../types/dedicatedVirtualAccount';
/**
 * The Dedicated Virtual Account API allows you to create and manage
 * dedicated NUBAN accounts for customers.
 *
 * @see https://paystack.com/docs/api/dedicated-virtual-account/
 */
declare class DedicatedVirtualAccount {
    private axios;
    constructor(axios: AxiosInstance);
    /**
     * Create a new dedicated virtual account.
     *
     * @param payload - Parameters for creating the account
     * @returns The created dedicated virtual account
     */
    create(payload: CreateDedicatedAccountRequest): Promise<PaystackResponse<DedicatedVirtualAccountType>>;
    /**
     * Assign a dedicated virtual account to an existing customer.
     *
     * @param payload - Parameters for account assignment
     * @returns Confirmation message
     */
    assign(payload: AssignDedicatedAccountRequest): Promise<PaystackResponse<{
        message: string;
    }>>;
    /**
     * List dedicated virtual accounts.
     *
     * @param query - Optional filters
     * @returns List of dedicated accounts
     */
    list(query?: ListDedicatedAccountsQuery): Promise<PaystackResponse<DedicatedVirtualAccountType[]>>;
    /**
     * Fetch details of a specific dedicated account by ID.
     *
     * @param dedicated_account_id - The account ID
     * @returns The dedicated account details
     */
    fetch(dedicated_account_id: number): Promise<PaystackResponse<DedicatedVirtualAccountType>>;
    /**
     * Requery a dedicated virtual account.
     *
     * @param query - Requery parameters
     * @returns Confirmation message
     */
    requery(query: RequeryDedicatedAccountQuery): Promise<PaystackResponse<{
        message: string;
    }>>;
    /**
     * Deactivate a dedicated account.
     *
     * @param dedicated_account_id - The account ID
     * @returns The deactivated dedicated account
     */
    deactivate(dedicated_account_id: number): Promise<PaystackResponse<DedicatedVirtualAccountType>>;
    /**
     * Split a dedicated account transaction settlement.
     *
     * @param payload - Split parameters
     * @returns The updated dedicated account with split applied
     */
    split(payload: CreateDedicatedAccountRequest): Promise<PaystackResponse<DedicatedVirtualAccountType>>;
    /**
     * Remove a split configuration from a dedicated account.
     *
     * @param payload - Remove split parameters
     * @returns The updated dedicated account
     */
    removeSplit(payload: RemoveSplitRequest): Promise<PaystackResponse<DedicatedVirtualAccountType>>;
    /**
     * Fetch a list of available bank providers for dedicated accounts.
     *
     * @returns List of available providers
     */
    fetchProviders(): Promise<PaystackResponse<ProviderType[]>>;
}
export default DedicatedVirtualAccount;
