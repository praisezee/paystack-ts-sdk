import { AxiosInstance } from 'axios';
import { PaystackAPIError } from '../utils/AppError';
import {
  BulkChargeInitiateRequest,
  BulkChargeInitiateResponse,
  BulkChargeBatch,
  BulkChargeItemsResponse,
  BulkChargePauseResumeResponse,
} from '../types';

class BulkCharges {
  private http: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.http = axiosInstance;
  }

  /**
   * Initiate a bulk charge.
   * @param {BulkChargeInitiateRequest[]} payload - Array of charge objects containing authorization, amount, and reference.
   * @example
   * const charges = [
   *   { authorization: 'AUTH_xxxx', amount: 2500, reference: 'ref1' },
   *   { authorization: 'AUTH_yyyy', amount: 1500, reference: 'ref2' }
   * ];
   * const data = await bulkCharges.initiate(charges);
   */
  initiate = async (payload: BulkChargeInitiateRequest[]): Promise<BulkChargeInitiateResponse> => {
    try {
      const { data: response } = await this.http.post<{
        status: boolean;
        message: string;
        data: BulkChargeInitiateResponse;
      }>('/bulkcharge', payload);
      return response.data;
    } catch (error: any) {
      throw new PaystackAPIError(error.response?.data?.message || error.message);
    }
  };

  /**
   * List all bulk charge batches.
   * @param params Optional query parameters: perPage, page, from, to
   * @example
   * const batches = await bulkCharges.list({ perPage: 20, page: 1 });
   */
  list = async (params?: {
    perPage?: number;
    page?: number;
    from?: string;
    to?: string;
  }): Promise<{ data: BulkChargeBatch[]; meta: any }> => {
    try {
      const { data: response } = await this.http.get<{
        status: boolean;
        message: string;
        data: BulkChargeBatch[];
        meta: any;
      }>('/bulkcharge', { params });
      return { data: response.data, meta: response.meta };
    } catch (error: any) {
      throw new PaystackAPIError(error.response?.data?.message || error.message);
    }
  };

  /**
   * Fetch a specific bulk charge batch by ID or code.
   * @param idOrCode The ID or batch code
   * @example
   * const batch = await bulkCharges.fetch('BCH_xxxxx');
   */
  fetch = async (idOrCode: string): Promise<BulkChargeBatch> => {
    try {
      const { data: response } = await this.http.get<{
        status: boolean;
        message: string;
        data: BulkChargeBatch;
      }>(`/bulkcharge/${idOrCode}`);
      return response.data;
    } catch (error: any) {
      throw new PaystackAPIError(error.response?.data?.message || error.message);
    }
  };

  /**
   * Fetch charges associated with a batch code.
   * @param idOrCode Batch ID or code
   * @param params Optional filters like status, perPage, page, from, to
   * @example
   * const charges = await bulkCharges.fetchCharges('BCH_xxxxx', { status: 'success', perPage: 20 });
   */
  fetchCharges = async (
    idOrCode: string,
    params?: {
      status?: 'pending' | 'success' | 'failed';
      perPage?: number;
      page?: number;
      from?: string;
      to?: string;
    }
  ): Promise<{ data: BulkChargeItemsResponse[]; meta: any }> => {
    try {
      const { data: response } = await this.http.get<{
        status: boolean;
        message: string;
        data: BulkChargeItemsResponse[];
        meta: any;
      }>(`/bulkcharge/${idOrCode}/charges`, { params });
      return { data: response.data, meta: response.meta };
    } catch (error: any) {
      throw new PaystackAPIError(error.response?.data?.message || error.message);
    }
  };

  /**
   * Pause a bulk charge batch.
   * @param batchCode The batch code to pause
   * @example
   * await bulkCharges.pause('BCH_xxxxx');
   */
  pause = async (batchCode: string): Promise<BulkChargePauseResumeResponse> => {
    try {
      const { data: response } = await this.http.get<{ status: boolean; message: string }>(
        `/bulkcharge/pause/${batchCode}`
      );
      return response;
    } catch (error: any) {
      throw new PaystackAPIError(error.response?.data?.message || error.message);
    }
  };

  /**
   * Resume a bulk charge batch.
   * @param batchCode The batch code to resume
   * @example
   * await bulkCharges.resume('BCH_xxxxx');
   */
  resume = async (batchCode: string): Promise<BulkChargePauseResumeResponse> => {
    try {
      const { data: response } = await this.http.get<{ status: boolean; message: string }>(
        `/bulkcharge/resume/${batchCode}`
      );
      return response;
    } catch (error: any) {
      throw new PaystackAPIError(error.response?.data?.message || error.message);
    }
  };
}

export default BulkCharges;
