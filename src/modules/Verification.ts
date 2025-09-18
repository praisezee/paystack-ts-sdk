import { AxiosInstance } from 'axios';
import { PaystackAPIError } from '../utils/AppError';
import {
  ResolveAccountQuery,
  ResolvedAccount,
  ValidateAccountRequest,
  ValidateAccountResponse,
  ResolveCardBinParams,
  CardBinData,
  PaystackResponse,
} from '../types';

class Verification {
  private http: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.http = axiosInstance;
  }

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
  resolveAccount = async (query: ResolveAccountQuery): Promise<ResolvedAccount> => {
    try {
      const { data: response }: { data: PaystackResponse<ResolvedAccount> } = await this.http.get(
        '/bank/resolve',
        { params: query }
      );
      return response.data as ResolvedAccount;
    } catch (error: any) {
      throw new PaystackAPIError(error.response?.data?.message || error.message);
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
  validateAccount = async (data: ValidateAccountRequest): Promise<ValidateAccountResponse> => {
    try {
      const { data: response }: { data: PaystackResponse<ValidateAccountResponse> } =
        await this.http.post('/bank/validate', data);
      return response.data as ValidateAccountResponse;
    } catch (error: any) {
      throw new PaystackAPIError(error.response?.data?.message || error.message);
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
  resolveCardBin = async (params: ResolveCardBinParams): Promise<CardBinData> => {
    try {
      const { data: response }: { data: PaystackResponse<CardBinData> } = await this.http.get(
        `/decision/bin/${params.bin}`
      );
      return response.data as CardBinData;
    } catch (error: any) {
      throw new PaystackAPIError(error.response?.data?.message || error.message);
    }
  };
}

export default Verification;
