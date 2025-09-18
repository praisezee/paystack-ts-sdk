/**
 * Request payload for creating a refund
 */
export interface CreateRefundRequest {
    /** Transaction reference or ID */
    transaction: string;
    /** Amount in subunits to refund (optional) */
    amount?: number;
    /** Currency of refund (optional) */
    currency?: string;
    /** Reason given by customer (optional) */
    customer_note?: string;
    /** Reason given by merchant (optional) */
    merchant_note?: string;
}
/**
 * Refund object returned by Paystack
 */
export interface RefundType {
    id: number;
    integration: number;
    domain: string;
    transaction: number;
    dispute: number | null;
    amount: number;
    deducted_amount: number | null;
    currency: string;
    channel: string | null;
    fully_deducted: boolean | number | null;
    refunded_by: string;
    refunded_at?: string;
    expected_at: string;
    settlement: any | null;
    customer_note?: string;
    merchant_note?: string;
    status: string;
    createdAt: string;
    updatedAt: string;
}
/**
 * Response for listing refunds
 */
export interface RefundsListResponse {
    data: RefundType[];
    meta: {
        total: number;
        perPage: number;
        page: number;
        pageCount?: number;
        skipped?: number;
    };
}
