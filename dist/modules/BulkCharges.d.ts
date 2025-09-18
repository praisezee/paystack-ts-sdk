import { AxiosInstance } from 'axios';
import { BulkChargeInitiateRequest, BulkChargeInitiateResponse, BulkChargeBatch, BulkChargeItemsResponse, BulkChargePauseResumeResponse } from '../types';
declare class BulkCharges {
    private http;
    constructor(axiosInstance: AxiosInstance);
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
    initiate: (payload: BulkChargeInitiateRequest[]) => Promise<BulkChargeInitiateResponse>;
    /**
     * List all bulk charge batches.
     * @param params Optional query parameters: perPage, page, from, to
     * @example
     * const batches = await bulkCharges.list({ perPage: 20, page: 1 });
     */
    list: (params?: {
        perPage?: number;
        page?: number;
        from?: string;
        to?: string;
    }) => Promise<{
        data: BulkChargeBatch[];
        meta: any;
    }>;
    /**
     * Fetch a specific bulk charge batch by ID or code.
     * @param idOrCode The ID or batch code
     * @example
     * const batch = await bulkCharges.fetch('BCH_xxxxx');
     */
    fetch: (idOrCode: string) => Promise<BulkChargeBatch>;
    /**
     * Fetch charges associated with a batch code.
     * @param idOrCode Batch ID or code
     * @param params Optional filters like status, perPage, page, from, to
     * @example
     * const charges = await bulkCharges.fetchCharges('BCH_xxxxx', { status: 'success', perPage: 20 });
     */
    fetchCharges: (idOrCode: string, params?: {
        status?: "pending" | "success" | "failed";
        perPage?: number;
        page?: number;
        from?: string;
        to?: string;
    }) => Promise<{
        data: BulkChargeItemsResponse[];
        meta: any;
    }>;
    /**
     * Pause a bulk charge batch.
     * @param batchCode The batch code to pause
     * @example
     * await bulkCharges.pause('BCH_xxxxx');
     */
    pause: (batchCode: string) => Promise<BulkChargePauseResumeResponse>;
    /**
     * Resume a bulk charge batch.
     * @param batchCode The batch code to resume
     * @example
     * await bulkCharges.resume('BCH_xxxxx');
     */
    resume: (batchCode: string) => Promise<BulkChargePauseResumeResponse>;
}
export default BulkCharges;
