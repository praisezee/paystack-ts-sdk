import { AxiosInstance } from 'axios';
import { PaystackResponse } from '../types';
import {
  CreateDedicatedAccountRequest,
  AssignDedicatedAccountRequest,
  ListDedicatedAccountsQuery,
  RequeryDedicatedAccountQuery,
  RemoveSplitRequest,
  DedicatedVirtualAccountType,
  ProviderType,
} from '../types/dedicatedVirtualAccount';

/**
 * The Dedicated Virtual Account API allows you to create and manage
 * dedicated NUBAN accounts for customers.
 *
 * @see https://paystack.com/docs/api/dedicated-virtual-account/
 */
class DedicatedVirtualAccount {
  private axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  /**
   * Create a new dedicated virtual account.
   *
   * @param payload - Parameters for creating the account
   * @returns The created dedicated virtual account
   */
  async create(
    payload: CreateDedicatedAccountRequest
  ): Promise<PaystackResponse<DedicatedVirtualAccountType>> {
    const response = await this.axios.post('/dedicated_account', payload);
    return response.data;
  }

  /**
   * Assign a dedicated virtual account to an existing customer.
   *
   * @param payload - Parameters for account assignment
   * @returns Confirmation message
   */
  async assign(
    payload: AssignDedicatedAccountRequest
  ): Promise<PaystackResponse<{ message: string }>> {
    const response = await this.axios.post('/dedicated_account/assign', payload);
    return response.data;
  }

  /**
   * List dedicated virtual accounts.
   *
   * @param query - Optional filters
   * @returns List of dedicated accounts
   */
  async list(
    query?: ListDedicatedAccountsQuery
  ): Promise<PaystackResponse<DedicatedVirtualAccountType[]>> {
    const response = await this.axios.get('/dedicated_account', { params: query });
    return response.data;
  }

  /**
   * Fetch details of a specific dedicated account by ID.
   *
   * @param dedicated_account_id - The account ID
   * @returns The dedicated account details
   */
  async fetch(
    dedicated_account_id: number
  ): Promise<PaystackResponse<DedicatedVirtualAccountType>> {
    const response = await this.axios.get(`/dedicated_account/${dedicated_account_id}`);
    return response.data;
  }

  /**
   * Requery a dedicated virtual account.
   *
   * @param query - Requery parameters
   * @returns Confirmation message
   */
  async requery(
    query: RequeryDedicatedAccountQuery
  ): Promise<PaystackResponse<{ message: string }>> {
    const response = await this.axios.get('/dedicated_account/requery', { params: query });
    return response.data;
  }

  /**
   * Deactivate a dedicated account.
   *
   * @param dedicated_account_id - The account ID
   * @returns The deactivated dedicated account
   */
  async deactivate(
    dedicated_account_id: number
  ): Promise<PaystackResponse<DedicatedVirtualAccountType>> {
    const response = await this.axios.delete(`/dedicated_account/${dedicated_account_id}`);
    return response.data;
  }

  /**
   * Split a dedicated account transaction settlement.
   *
   * @param payload - Split parameters
   * @returns The updated dedicated account with split applied
   */
  async split(
    payload: CreateDedicatedAccountRequest
  ): Promise<PaystackResponse<DedicatedVirtualAccountType>> {
    const response = await this.axios.post('/dedicated_account/split', payload);
    return response.data;
  }

  /**
   * Remove a split configuration from a dedicated account.
   *
   * @param payload - Remove split parameters
   * @returns The updated dedicated account
   */
  async removeSplit(
    payload: RemoveSplitRequest
  ): Promise<PaystackResponse<DedicatedVirtualAccountType>> {
    const response = await this.axios.delete('/dedicated_account/split', { data: payload });
    return response.data;
  }

  /**
   * Fetch a list of available bank providers for dedicated accounts.
   *
   * @returns List of available providers
   */
  async fetchProviders(): Promise<PaystackResponse<ProviderType[]>> {
    const response = await this.axios.get('/dedicated_account/available_providers');
    return response.data;
  }
}

export default DedicatedVirtualAccount;
