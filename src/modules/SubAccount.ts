import { AxiosInstance } from 'axios';
import { PaystackAPIError } from '../utils/AppError';
import {
  CreateSubAccountRequest,
  UpdateSubAccountRequest,
  SubAccountType,
  SubAccountsListResponse,
  PaystackResponse,
} from '../types';

/**
 * SubAccount Module
 *
 * Provides methods for managing subaccounts on Paystack.
 * Subaccounts let you split payments to different bank accounts.
 */
class SubAccount {
  private http: AxiosInstance;

  constructor(private axiosInstance: AxiosInstance) {
    this.http = this.axiosInstance;
  }

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
  createSubAccount = async (data: CreateSubAccountRequest): Promise<SubAccountType> => {
    try {
      const { data: response }: { data: PaystackResponse<SubAccountType> } = await this.http.post(
        '/subaccount',
        data
      );
      return response.data as SubAccountType;
    } catch (error: any) {
      throw new PaystackAPIError(error.response?.data?.message || error.message);
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
  listSubAccounts = async (query?: Record<string, any>): Promise<SubAccountsListResponse> => {
    try {
      const {
        data: response,
      }: { data: PaystackResponse<SubAccountType[], SubAccountsListResponse['meta']> } =
        await this.http.get('/subaccount', { params: query });
      return {
        data: response.data as SubAccountType[],
        meta: response.meta as SubAccountsListResponse['meta'],
      };
    } catch (error: any) {
      throw new PaystackAPIError(error.response?.data?.message || error.message);
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
  fetchSubAccount = async (idOrCode: string): Promise<SubAccountType> => {
    try {
      const { data: response }: { data: PaystackResponse<SubAccountType> } = await this.http.get(
        `/subaccount/${idOrCode}`
      );
      return response.data as SubAccountType;
    } catch (error: any) {
      throw new PaystackAPIError(error.response?.data?.message || error.message);
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
  updateSubAccount = async (
    idOrCode: string,
    data: UpdateSubAccountRequest
  ): Promise<SubAccountType> => {
    try {
      const { data: response }: { data: PaystackResponse<SubAccountType> } = await this.http.put(
        `/subaccount/${idOrCode}`,
        data
      );
      return response.data as SubAccountType;
    } catch (error: any) {
      throw new PaystackAPIError(error.response?.data?.message || error.message);
    }
  };
}

export default SubAccount;
