"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AppError_1 = require("../utils/AppError");
class Plan {
    constructor(axiosInstance) {
        this.axiosInstance = axiosInstance;
        /**
         * Create a new plan on your Paystack integration.
         *
         * @param data - Plan details (name, amount in subunits, interval, description, etc.)
         * @returns The newly created plan details.
         * @throws {PaystackAPIError} If the request fails or API returns an error.
         *
         * @example
         * ```ts
         * const plan = await paystack.plan.createPlan({
         *   name: 'Monthly Retainer',
         *   amount: 500000,
         *   interval: 'monthly',
         * });
         * console.log(plan.plan_code);
         * ```
         */
        this.createPlan = async (data) => {
            try {
                const { data: response } = await this.http.post('/plan', data);
                return response.data;
            }
            catch (error) {
                throw new AppError_1.PaystackAPIError(error.response?.data?.message || error.message);
            }
        };
        /**
         * List all plans on your Paystack integration.
         *
         * @param query - Optional filters like `perPage`, `page`, `status`, `interval`, `amount`.
         * @returns A list of plans and pagination metadata.
         * @throws {PaystackAPIError} If the request fails or API returns an error.
         *
         * @example
         * ```ts
         * const { data, meta } = await paystack.plan.listPlans({ perPage: 20 });
         * console.log(data.length, meta.total);
         * ```
         */
        this.listPlans = async (query) => {
            try {
                const { data: response } = await this.http.get('/plan', { params: query });
                return {
                    data: response.data,
                    meta: response.meta,
                };
            }
            catch (error) {
                throw new AppError_1.PaystackAPIError(error.response?.data?.message || error.message);
            }
        };
        /**
         * Fetch details of a specific plan by ID or plan code.
         *
         * @param idOrCode - The unique plan ID or plan code from Paystack.
         * @returns The plan details.
         * @throws {PaystackAPIError} If the request fails or API returns an error.
         *
         * @example
         * ```ts
         * const plan = await paystack.plan.fetchPlan('PLN_xxxx1234');
         * console.log(plan.name, plan.amount);
         * ```
         */
        this.fetchPlan = async (idOrCode) => {
            try {
                const { data: response } = await this.http.get(`/plan/${idOrCode}`);
                return response.data;
            }
            catch (error) {
                throw new AppError_1.PaystackAPIError(error.response?.data?.message || error.message);
            }
        };
        /**
         * Update an existing plan on your Paystack integration.
         *
         * @param idOrCode - The plan ID or code to update.
         * @param data - Fields to update (name, amount, interval, description, etc.)
         * @returns The updated plan details.
         * @throws {PaystackAPIError} If the request fails or API returns an error.
         *
         * @example
         * ```ts
         * const updatedPlan = await paystack.plan.updatePlan('PLN_xxxx1234', {
         *   name: 'Pro Annual Plan',
         *   amount: 1200000,
         *   interval: 'annually',
         * });
         * console.log(updatedPlan.name);
         * ```
         */
        this.updatePlan = async (idOrCode, data) => {
            try {
                const { data: response } = await this.http.put(`/plan/${idOrCode}`, data);
                return response.data;
            }
            catch (error) {
                throw new AppError_1.PaystackAPIError(error.response?.data?.message || error.message);
            }
        };
        this.http = this.axiosInstance;
    }
}
exports.default = Plan;
