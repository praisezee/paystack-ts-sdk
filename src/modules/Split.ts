import { AxiosInstance } from 'axios';
import { PaystackAPIError } from '../utils/AppError';
import {
  PaystackResponse,
  CreateSplitRequest,
  SplitResponse,
  SplitListResponse,
  UpdateSplitRequest,
  AddSubaccountRequest,
  RemoveSubaccountRequest,
} from '../types';

/**
 * The Transaction Splits API enables merchants to split settlement
 * for a transaction across multiple subaccounts.
 *
 * @see https://paystack.com/docs/api/split/
 */
class Split {
  private http: AxiosInstance;

  constructor(private axiosInstance: AxiosInstance) {
    this.http = this.axiosInstance;
  }

  /**
   * Create a transaction split.
   *
   * @param data - Split details
   * @returns The created split object
   * @throws {PaystackAPIError} If the request fails
   */
  createSplit = async (data: CreateSplitRequest): Promise<SplitResponse> => {
    try {
      const { data: response }: { data: PaystackResponse<SplitResponse> } = await this.http.post(
        '/split',
        data
      );

      if (!response.status) {
        throw new PaystackAPIError(response.message || 'Failed to create split');
      }

      return response.data as SplitResponse;
    } catch (error: any) {
      throw new PaystackAPIError(error.response?.data?.message || error.message);
    }
  };

  /**
   * List all transaction splits on the integration.
   *
   * @returns Paginated list of transaction splits
   * @throws {PaystackAPIError} If the request fails
   */
  listSplits = async (): Promise<SplitListResponse> => {
    try {
      const {
        data: response,
      }: { data: PaystackResponse<SplitResponse[], SplitListResponse['meta']> } =
        await this.http.get('/split');

      if (!response.status) {
        throw new PaystackAPIError(response.message || 'Failed to list splits');
      }

      return {
        data: response.data as SplitResponse[],
        meta: response.meta as SplitListResponse['meta'],
      };
    } catch (error: any) {
      throw new PaystackAPIError(error.response?.data?.message || error.message);
    }
  };

  /**
   * Fetch details of a specific split.
   *
   * @param id - Split ID or code
   * @returns A split object
   * @throws {PaystackAPIError} If the request fails
   */
  fetchSplit = async (id: string | number): Promise<SplitResponse> => {
    try {
      const { data: response }: { data: PaystackResponse<SplitResponse> } = await this.http.get(
        `/split/${id}`
      );

      if (!response.status) {
        throw new PaystackAPIError(response.message || 'Failed to fetch split');
      }

      return response.data as SplitResponse;
    } catch (error: any) {
      throw new PaystackAPIError(error.response?.data?.message || error.message);
    }
  };

  /**
   * Update details of a split.
   *
   * @param id - Split ID or code
   * @param data - Update details
   * @returns Updated split object
   * @throws {PaystackAPIError} If the request fails
   */
  updateSplit = async (id: string | number, data: UpdateSplitRequest): Promise<SplitResponse> => {
    try {
      const { data: response }: { data: PaystackResponse<SplitResponse> } = await this.http.put(
        `/split/${id}`,
        data
      );

      if (!response.status) {
        throw new PaystackAPIError(response.message || 'Failed to update split');
      }

      return response.data as SplitResponse;
    } catch (error: any) {
      throw new PaystackAPIError(error.response?.data?.message || error.message);
    }
  };

  /**
   * Add or update a subaccount in a split.
   *
   * @param id - Split ID or code
   * @param data - Subaccount details
   * @returns Updated split object
   * @throws {PaystackAPIError} If the request fails
   */
  addOrUpdateSubaccount = async (
    id: string | number,
    data: AddSubaccountRequest
  ): Promise<SplitResponse> => {
    try {
      const { data: response }: { data: PaystackResponse<SplitResponse> } = await this.http.post(
        `/split/${id}/subaccount/add`,
        data
      );

      if (!response.status) {
        throw new PaystackAPIError(response.message || 'Failed to add subaccount');
      }

      return response.data as SplitResponse;
    } catch (error: any) {
      throw new PaystackAPIError(error.response?.data?.message || error.message);
    }
  };

  /**
   * Remove a subaccount from a split.
   *
   * @param id - Split ID or code
   * @param data - Subaccount code to remove
   * @returns A success message
   * @throws {PaystackAPIError} If the request fails
   */
  removeSubaccount = async (
    id: string | number,
    data: RemoveSubaccountRequest
  ): Promise<{ message: string }> => {
    try {
      const { data: response }: { data: PaystackResponse<{ status: true; message: string }> } =
        await this.http.post(`/split/${id}/subaccount/remove`, data);

      if (!response.status) {
        throw new PaystackAPIError(response.message || 'Failed to remove subaccount');
      }

      return { message: response.message };
    } catch (error: any) {
      throw new PaystackAPIError(error.response?.data?.message || error.message);
    }
  };
}

export default Split;
