import { AxiosInstance } from 'axios';
import { CreateCustomerRequest, CreatedCustomerType, CustomerDataType, CustomersListType, ActivationChargeRequest, ActivationChargeResponse, FetchMandateAuthorizationsResponse, InitializeAuthorizationRequest, InitializeAuthorizationResponse, InitializeDirectDebitRequest, InitializeDirectDebitResponse, PaystackResponse, SetRiskActionRequest, SetRiskActionResponse, UpdateCustomerRequest, ValidateCustomerRequest, VerifyAuthorizationResponse } from '../types';
/**
 * The Customer API allows you to create and manage customers on your integration.
 *
 * @class Customer
 * @example
 * ```ts
 * import Paystack from 'paystack-sdk';
 *
 * const paystack = new Paystack('SECRET_KEY');
 * const customer = await paystack.customer.createCustomer({
 *   email: 'johndoe@email.com',
 *   first_name: 'John',
 *   last_name: 'Doe',
 *   phone: '+2348012345678',
 * });
 * console.log(customer.customer_code);
 * ```
 */
declare class Customer {
    private axiosInstance;
    private http;
    constructor(axiosInstance: AxiosInstance);
    /**
     * Create a customer
     *
     * @param data - Customer details (email, first name, last name, etc.)
     * @returns Newly created customer details
     *
     * @example
     * ```ts
     * const customer = await paystack.customer.createCustomer({
     *   email: 'janedoe@email.com',
     *   first_name: 'Jane',
     *   last_name: 'Doe',
     *   phone: '+2348012345678',
     * });
     * console.log(customer.customer_code);
     * ```
     */
    createCustomer(data: CreateCustomerRequest): Promise<CreatedCustomerType>;
    /**
     * List customers
     *
     * @returns List of customers with pagination metadata
     *
     * @example
     * ```ts
     * const customers = await paystack.customer.listCustomer();
     * console.log(customers.meta.perPage, customers.customer.length);
     * ```
     */
    listCustomer(): Promise<CustomersListType>;
    /**
     * Fetch a single customer
     *
     * @param customer - Customer code or email
     * @returns Customer details
     *
     * @example
     * ```ts
     * const customer = await paystack.customer.getCustomer('CUS_xxxxxxxx');
     * console.log(customer.email);
     * ```
     */
    getCustomer(customer: string): Promise<CustomerDataType>;
    /**
     * Validate a customer’s identity
     *
     * @param customer - Customer code
     * @param data - Validation payload (bank account, BVN, etc.)
     * @returns Validation result
     *
     * @example
     * ```ts
     * const result = await paystack.customer.validateCustomer('CUS_xxxxxxxx', {
     *   first_name: 'John',
     *   last_name: 'Doe',
     *   type: 'bank_account',
     *   value: '1234567890',
     *   country: 'NG',
     *   bvn: '12345678901',
     *   bank_code: '058',
     *   account_number: '0001234567',
     * });
     * console.log(result.message);
     * ```
     */
    validateCustomer(customer: string, data: ValidateCustomerRequest): Promise<PaystackResponse>;
    /**
     * Update a customer
     *
     * @param customer_code - Customer code
     * @param data - Fields to update (first_name, last_name, phone, etc.)
     * @returns Updated customer details
     */
    updateCustomer(customer_code: string, data: UpdateCustomerRequest): Promise<CustomerDataType>;
    /**
     * Whitelist or blacklist a customer
     *
     * @param data - Customer code and risk action
     * @returns Updated customer risk action details
     */
    setRiskAction(data: SetRiskActionRequest): Promise<SetRiskActionResponse>;
    /**
     * Initialize authorization for recurring transactions
     *
     * @param data - Customer email, channel, and optional account/address details
     * @returns Redirect URL, access code, and reference
     */
    initializeAuthorization(data: InitializeAuthorizationRequest): Promise<InitializeAuthorizationResponse>;
    /**
     * Verify an authorization
     *
     * @param reference - Reference from authorization initialization
     * @returns Authorization details
     */
    verifyAuthorization(reference: string): Promise<VerifyAuthorizationResponse>;
    /**
     * Initialize direct debit
     *
     * @param customer_id - Customer ID
     * @param data - Account and address details
     * @returns Redirect URL, access code, and reference
     */
    initializeDirectDebit(customer_id: string, data: InitializeDirectDebitRequest): Promise<InitializeDirectDebitResponse>;
    /**
     * Trigger an activation charge for direct debit mandate
     *
     * @param customer_id - Customer ID
     * @param data - Authorization ID
     * @returns Activation charge status
     */
    directDebitActivationCharge(customer_id: string, data: ActivationChargeRequest): Promise<ActivationChargeResponse>;
    /**
     * Fetch direct debit mandate authorizations
     *
     * @param customer_id - Customer ID
     * @returns List of mandate authorizations and pagination info
     */
    fetchMandateAuthorizations(customer_id: string): Promise<FetchMandateAuthorizationsResponse>;
    /**
     * Deactivate an authorization
     *
     * @param authorization_code - Authorization code
     * @returns Status and message
     */
    deactivateAuthorization(authorization_code: string): Promise<PaystackResponse<{
        status: true;
        message: string;
    }>>;
}
export default Customer;
