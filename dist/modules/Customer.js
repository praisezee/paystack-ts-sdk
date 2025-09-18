"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AppError_1 = require("../utils/AppError");
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
class Customer {
    constructor(axiosInstance) {
        this.axiosInstance = axiosInstance;
        this.http = this.axiosInstance;
    }
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
    async createCustomer(data) {
        try {
            const { data: response } = await this.http.post('/customer', data);
            if (!response.status) {
                throw new AppError_1.PaystackAPIError(response.data?.message || 'Failed to create customer');
            }
            return response.data;
        }
        catch (error) {
            throw new AppError_1.PaystackAPIError(`Failed to create new customer: ${error.response?.data?.message || error.message}`);
        }
    }
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
    async listCustomer() {
        try {
            const { data: response } = await this.http.get('/customer');
            return response.data;
        }
        catch (error) {
            throw new AppError_1.PaystackAPIError(error.response?.data?.message || error.message);
        }
    }
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
    async getCustomer(customer) {
        try {
            const { data: response } = await this.http.get(`/customer/${customer}`);
            return response.data;
        }
        catch (error) {
            throw new AppError_1.PaystackAPIError(error.response?.data?.message || error.message);
        }
    }
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
    async validateCustomer(customer, data) {
        try {
            const response = await this.http.post(`/customer/${customer}/identification`, data);
            if (!response.data.status) {
                throw new AppError_1.PaystackAPIError(response.data.message || 'Failed to validate customer');
            }
            return response.data;
        }
        catch (error) {
            throw new AppError_1.PaystackAPIError(error.response?.data?.message || error.message);
        }
    }
    /**
     * Update a customer
     *
     * @param customer_code - Customer code
     * @param data - Fields to update (first_name, last_name, phone, etc.)
     * @returns Updated customer details
     */
    async updateCustomer(customer_code, data) {
        try {
            const { data: response } = await this.http.put(`/customer/${customer_code}`, data);
            if (!response.status) {
                throw new AppError_1.PaystackAPIError(response.message || 'Failed to update customer');
            }
            return response.data;
        }
        catch (error) {
            throw new AppError_1.PaystackAPIError(error.response?.data?.message || error.message);
        }
    }
    /**
     * Whitelist or blacklist a customer
     *
     * @param data - Customer code and risk action
     * @returns Updated customer risk action details
     */
    async setRiskAction(data) {
        try {
            const { data: response } = await this.http.post('/customer/set_risk_action', data);
            if (!response.status) {
                throw new AppError_1.PaystackAPIError(response.message || 'Failed to update risk action');
            }
            return response.data;
        }
        catch (error) {
            throw new AppError_1.PaystackAPIError(error.response?.data?.message || error.message);
        }
    }
    /**
     * Initialize authorization for recurring transactions
     *
     * @param data - Customer email, channel, and optional account/address details
     * @returns Redirect URL, access code, and reference
     */
    async initializeAuthorization(data) {
        try {
            const { data: response } = await this.http.post('/customer/authorization/initialize', data);
            if (!response.status) {
                throw new AppError_1.PaystackAPIError(response.message || 'Failed to initialize authorization');
            }
            return response.data;
        }
        catch (error) {
            throw new AppError_1.PaystackAPIError(error.response?.data?.message || error.message);
        }
    }
    /**
     * Verify an authorization
     *
     * @param reference - Reference from authorization initialization
     * @returns Authorization details
     */
    async verifyAuthorization(reference) {
        try {
            const { data: response } = await this.http.get(`/customer/authorization/verify/${reference}`);
            if (!response.status) {
                throw new AppError_1.PaystackAPIError(response.message || 'Authorization verification failed');
            }
            return response.data;
        }
        catch (error) {
            throw new AppError_1.PaystackAPIError(error.response?.data?.message || error.message);
        }
    }
    /**
     * Initialize direct debit
     *
     * @param customer_id - Customer ID
     * @param data - Account and address details
     * @returns Redirect URL, access code, and reference
     */
    async initializeDirectDebit(customer_id, data) {
        try {
            const { data: response } = await this.http.post(`/customer/${customer_id}/initialize-direct-debit`, data);
            if (!response.status) {
                throw new AppError_1.PaystackAPIError(response.message || 'Failed to initialize direct debit');
            }
            return response.data;
        }
        catch (error) {
            throw new AppError_1.PaystackAPIError(error.response?.data?.message || error.message);
        }
    }
    /**
     * Trigger an activation charge for direct debit mandate
     *
     * @param customer_id - Customer ID
     * @param data - Authorization ID
     * @returns Activation charge status
     */
    async directDebitActivationCharge(customer_id, data) {
        try {
            const { data: response } = await this.http.put(`/customer/${customer_id}/directdebit-activation-charge`, data);
            if (!response.status) {
                throw new AppError_1.PaystackAPIError(response.message || 'Failed to trigger activation charge');
            }
            return { message: response.message };
        }
        catch (error) {
            throw new AppError_1.PaystackAPIError(error.response?.data?.message || error.message);
        }
    }
    /**
     * Fetch direct debit mandate authorizations
     *
     * @param customer_id - Customer ID
     * @returns List of mandate authorizations and pagination info
     */
    async fetchMandateAuthorizations(customer_id) {
        try {
            const { data: response, } = await this.http.get(`/customer/${customer_id}/directdebit-mandate-authorizations`);
            if (!response.status) {
                throw new AppError_1.PaystackAPIError(response.message || 'Failed to fetch mandate authorizations');
            }
            return {
                data: response.data,
                meta: response.meta,
            };
        }
        catch (error) {
            throw new AppError_1.PaystackAPIError(error.response?.data?.message || error.message);
        }
    }
    /**
     * Deactivate an authorization
     *
     * @param authorization_code - Authorization code
     * @returns Status and message
     */
    async deactivateAuthorization(authorization_code) {
        return this.http.post('/customer/authorization/deactivate', { authorization_code });
    }
}
exports.default = Customer;
