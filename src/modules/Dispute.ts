import { AxiosInstance } from 'axios';
import { PaystackAPIError } from '../utils/AppError';
import {
  DisputeType,
  DisputeListResponse,
  DisputeUpdateRequest,
  DisputeEvidenceRequest,
  DisputeResolveRequest,
  DisputeUploadUrlResponse,
  PaystackResponse,
} from '../types';

class Dispute {
  private http: AxiosInstance;

  constructor(private axiosInstance: AxiosInstance) {
    this.http = this.axiosInstance;
  }

  /**
   * List disputes filed against you.
   * @param query - Optional query filters (from, to, perPage, page, transaction, status)
   * @returns List of disputes and pagination metadata
   */
  listDisputes = async (query?: Record<string, any>): Promise<DisputeListResponse> => {
    try {
      const {
        data: response,
      }: { data: PaystackResponse<DisputeType[], DisputeListResponse['meta']> } =
        await this.http.get('/dispute', { params: query });
      return {
        data: response.data as DisputeType[],
        meta: response.meta as DisputeListResponse['meta'],
      };
    } catch (error: any) {
      throw new PaystackAPIError(error.response?.data?.message || error.message);
    }
  };

  /**
   * Fetch details of a specific dispute by ID.
   */
  fetchDispute = async (id: string): Promise<DisputeType> => {
    try {
      const { data: response }: { data: PaystackResponse<DisputeType> } = await this.http.get(
        `/dispute/${id}`
      );
      return response.data as DisputeType;
    } catch (error: any) {
      throw new PaystackAPIError(error.response?.data?.message || error.message);
    }
  };

  /**
   * List disputes for a particular transaction.
   */
  listTransactionDisputes = async (transactionId: string): Promise<DisputeType> => {
    try {
      const { data: response }: { data: PaystackResponse<DisputeType> } = await this.http.get(
        `/dispute/transaction/${transactionId}`
      );
      return response.data as DisputeType;
    } catch (error: any) {
      throw new PaystackAPIError(error.response?.data?.message || error.message);
    }
  };

  /**
   * Update a dispute.
   */
  updateDispute = async (id: string, data: DisputeUpdateRequest): Promise<DisputeType> => {
    try {
      const { data: response }: { data: PaystackResponse<DisputeType> } = await this.http.put(
        `/dispute/${id}`,
        data
      );
      return response.data as DisputeType;
    } catch (error: any) {
      throw new PaystackAPIError(error.response?.data?.message || error.message);
    }
  };

  /**
   * Add evidence to a dispute.
   */
  addEvidence = async (id: string, data: DisputeEvidenceRequest): Promise<DisputeType> => {
    try {
      const { data: response }: { data: PaystackResponse<DisputeType> } = await this.http.post(
        `/dispute/${id}/evidence`,
        data
      );
      return response.data as DisputeType;
    } catch (error: any) {
      throw new PaystackAPIError(error.response?.data?.message || error.message);
    }
  };

  /**
   * Get upload URL for dispute attachments.
   */
  getUploadUrl = async (id: string, upload_filename: string): Promise<DisputeUploadUrlResponse> => {
    try {
      const { data: response }: { data: PaystackResponse<DisputeUploadUrlResponse> } =
        await this.http.get(`/dispute/${id}/upload_url`, { params: { upload_filename } });
      return response.data as DisputeUploadUrlResponse;
    } catch (error: any) {
      throw new PaystackAPIError(error.response?.data?.message || error.message);
    }
  };

  /**
   * Resolve a dispute.
   */
  resolveDispute = async (id: string, data: DisputeResolveRequest): Promise<DisputeType> => {
    try {
      const { data: response }: { data: PaystackResponse<DisputeType> } = await this.http.put(
        `/dispute/${id}/resolve`,
        data
      );
      return response.data as DisputeType;
    } catch (error: any) {
      throw new PaystackAPIError(error.response?.data?.message || error.message);
    }
  };
}

export default Dispute;
