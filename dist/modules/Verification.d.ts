import { AxiosInstance } from 'axios';
import { ResolveAccountQuery, ResolvedAccount, ValidateAccountRequest, ValidateAccountResponse, ResolveCardBinParams, CardBinData } from '../types';
declare class Verification {
    private http;
    constructor(axiosInstance: AxiosInstance);
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
    resolveAccount: (query: ResolveAccountQuery) => Promise<ResolvedAccount>;
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
    validateAccount: (data: ValidateAccountRequest) => Promise<ValidateAccountResponse>;
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
    resolveCardBin: (params: ResolveCardBinParams) => Promise<CardBinData>;
}
export default Verification;
