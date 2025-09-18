import { AxiosInstance } from 'axios';
import { CreatePlanRequest, PlanType, PlansListResponse, UpdatePlanRequest } from '../types';
declare class Plan {
    private axiosInstance;
    private http;
    constructor(axiosInstance: AxiosInstance);
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
    createPlan: (data: CreatePlanRequest) => Promise<PlanType>;
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
    listPlans: (query?: Record<string, any>) => Promise<PlansListResponse>;
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
    fetchPlan: (idOrCode: string) => Promise<PlanType>;
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
    updatePlan: (idOrCode: string, data: UpdatePlanRequest) => Promise<PlanType>;
}
export default Plan;
