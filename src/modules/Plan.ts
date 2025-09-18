import { AxiosInstance } from 'axios';
import { PaystackAPIError } from '../utils/AppError';
import {
  CreatePlanRequest,
  PlanType,
  PlansListResponse,
  UpdatePlanRequest,
  PaystackResponse,
} from '../types';

class Plan {
  private http: AxiosInstance;
  constructor(private axiosInstance: AxiosInstance) {
    this.http = this.axiosInstance;
  }

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
  createPlan = async (data: CreatePlanRequest): Promise<PlanType> => {
    try {
      const { data: response }: { data: PaystackResponse<PlanType> } = await this.http.post(
        '/plan',
        data
      );
      return response.data as PlanType;
    } catch (error: any) {
      throw new PaystackAPIError(error.response?.data?.message || error.message);
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
  listPlans = async (query?: Record<string, any>): Promise<PlansListResponse> => {
    try {
      const { data: response }: { data: PaystackResponse<PlanType[], PlansListResponse['meta']> } =
        await this.http.get('/plan', { params: query });
      return {
        data: response.data as PlanType[],
        meta: response.meta as PlansListResponse['meta'],
      };
    } catch (error: any) {
      throw new PaystackAPIError(error.response?.data?.message || error.message);
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
  fetchPlan = async (idOrCode: string): Promise<PlanType> => {
    try {
      const { data: response }: { data: PaystackResponse<PlanType> } = await this.http.get(
        `/plan/${idOrCode}`
      );
      return response.data as PlanType;
    } catch (error: any) {
      throw new PaystackAPIError(error.response?.data?.message || error.message);
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
  updatePlan = async (idOrCode: string, data: UpdatePlanRequest): Promise<PlanType> => {
    try {
      const { data: response }: { data: PaystackResponse<PlanType> } = await this.http.put(
        `/plan/${idOrCode}`,
        data
      );
      return response.data as PlanType;
    } catch (error: any) {
      throw new PaystackAPIError(error.response?.data?.message || error.message);
    }
  };
}

export default Plan;
