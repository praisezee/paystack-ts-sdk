/**
 * Base dispute type
 */
export interface DisputeType {
    id: number;
    refund_amount?: number;
    currency?: string;
    status: string;
    resolution?: string;
    domain: string;
    transaction: Record<string, any>;
    transaction_reference?: string | null;
    category?: string | null;
    customer: Record<string, any>;
    bin?: string | null;
    last4?: string | null;
    dueAt?: string | null;
    resolvedAt?: string | null;
    evidence?: any;
    attachments?: string;
    note?: string | null;
    history?: any[];
    messages?: any[];
    createdAt: string;
    updatedAt: string;
}
/**
 * Response when listing disputes
 */
export interface DisputeListResponse {
    data: DisputeType[];
    meta: {
        total: number;
        perPage: number;
        page: number;
        pageCount?: number;
        skipped?: number;
    };
}
/**
 * Update dispute request payload
 */
export interface DisputeUpdateRequest {
    refund_amount: number;
    uploaded_filename?: string;
}
/**
 * Add evidence request payload
 */
export interface DisputeEvidenceRequest {
    customer_email: string;
    customer_name: string;
    customer_phone: string;
    service_details: string;
    delivery_address?: string;
    delivery_date?: string;
}
/**
 * Resolve dispute request payload
 */
export interface DisputeResolveRequest {
    resolution: 'merchant-accepted' | 'declined';
    message: string;
    refund_amount?: number;
    uploaded_filename?: string;
    evidence?: number;
}
/**
 * Response for getting upload URL
 */
export interface DisputeUploadUrlResponse {
    signedUrl: string;
    fileName: string;
}
