import { AxiosInstance } from 'axios';
import { DisputeType, DisputeListResponse, DisputeUpdateRequest, DisputeEvidenceRequest, DisputeResolveRequest, DisputeUploadUrlResponse } from '../types';
declare class Dispute {
    private axiosInstance;
    private http;
    constructor(axiosInstance: AxiosInstance);
    /**
     * List disputes filed against you.
     * @param query - Optional query filters (from, to, perPage, page, transaction, status)
     * @returns List of disputes and pagination metadata
     */
    listDisputes: (query?: Record<string, any>) => Promise<DisputeListResponse>;
    /**
     * Fetch details of a specific dispute by ID.
     */
    fetchDispute: (id: string) => Promise<DisputeType>;
    /**
     * List disputes for a particular transaction.
     */
    listTransactionDisputes: (transactionId: string) => Promise<DisputeType>;
    /**
     * Update a dispute.
     */
    updateDispute: (id: string, data: DisputeUpdateRequest) => Promise<DisputeType>;
    /**
     * Add evidence to a dispute.
     */
    addEvidence: (id: string, data: DisputeEvidenceRequest) => Promise<DisputeType>;
    /**
     * Get upload URL for dispute attachments.
     */
    getUploadUrl: (id: string, upload_filename: string) => Promise<DisputeUploadUrlResponse>;
    /**
     * Resolve a dispute.
     */
    resolveDispute: (id: string, data: DisputeResolveRequest) => Promise<DisputeType>;
}
export default Dispute;
