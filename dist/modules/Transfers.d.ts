import { AxiosInstance } from 'axios';
import { InitiateTransferRequest, TransferType, FinalizeTransferRequest, BulkTransferRequest, TransfersListResponse } from '../types';
declare class Transfers {
    private axiosInstance;
    private http;
    constructor(axiosInstance: AxiosInstance);
    /**
     * Initiate a new transfer to a customer.
     *
     * @param data - Transfer details (source, amount, recipient, reference, reason, etc.)
     * @returns The transfer object queued for processing.
     * @throws {PaystackAPIError} If the request fails or API returns an error.
     *
     * @example
     * ```ts
     * const transfer = await paystack.transfers.initiateTransfer({
     *   source: 'balance',
     *   amount: 100000,
     *   recipient: 'RCP_gd9vgag7n5lr5ix',
     *   reference: 'unique_ref_123',
     *   reason: 'Bonus for the week',
     * });
     * console.log(transfer.status, transfer.transfer_code);
     * ```
     */
    initiateTransfer: (data: InitiateTransferRequest) => Promise<TransferType>;
    /**
     * Finalize an OTP-based transfer.
     *
     * @param data - Transfer code and OTP.
     * @returns The finalized transfer object.
     * @throws {PaystackAPIError} If the request fails or API returns an error.
     *
     * @example
     * ```ts
     * const finalized = await paystack.transfers.finalizeTransfer({
     *   transfer_code: 'TRF_vsyqdmlzble3uii',
     *   otp: '928783',
     * });
     * console.log(finalized.status);
     * ```
     */
    finalizeTransfer: (data: FinalizeTransferRequest) => Promise<TransferType>;
    /**
     * Initiate multiple transfers in a single batch request.
     *
     * @param data - Bulk transfer details including list of transfers.
     * @returns A list of queued transfer objects.
     * @throws {PaystackAPIError} If the request fails or API returns an error.
     *
     * @example
     * ```ts
     * const bulk = await paystack.transfers.bulkTransfer({
     *   source: 'balance',
     *   currency: 'NGN',
     *   transfers: [
     *     { amount: 20000, reference: 'ref_1', recipient: 'RCP_xxx1' },
     *     { amount: 35000, reference: 'ref_2', recipient: 'RCP_xxx2' },
     *   ],
     * });
     * console.log(bulk.length);
     * ```
     */
    bulkTransfer: (data: BulkTransferRequest) => Promise<TransferType[]>;
    /**
     * List all transfers on your integration.
     *
     * @param query - Optional filters (perPage, page, recipient, from, to).
     * @returns Paginated list of transfers.
     * @throws {PaystackAPIError} If the request fails or API returns an error.
     *
     * @example
     * ```ts
     * const { data, meta } = await paystack.transfers.listTransfers({ perPage: 20 });
     * console.log(meta.total, data[0].reference);
     * ```
     */
    listTransfers: (query?: Record<string, any>) => Promise<TransfersListResponse>;
    /**
     * Fetch details of a specific transfer by ID or transfer code.
     *
     * @param idOrCode - Transfer ID or transfer code.
     * @returns The transfer details.
     * @throws {PaystackAPIError} If the request fails or API returns an error.
     *
     * @example
     * ```ts
     * const transfer = await paystack.transfers.fetchTransfer('TRF_fpmd0l8uta8upow7');
     * console.log(transfer.amount, transfer.status);
     * ```
     */
    fetchTransfer: (idOrCode: string) => Promise<TransferType>;
    /**
     * Verify the status of a transfer by reference.
     *
     * @param reference - Transfer reference string.
     * @returns The verified transfer object.
     * @throws {PaystackAPIError} If the request fails or API returns an error.
     *
     * @example
     * ```ts
     * const verified = await paystack.transfers.verifyTransfer('unique_ref_123');
     * console.log(verified.status);
     * ```
     */
    verifyTransfer: (reference: string) => Promise<TransferType>;
}
export default Transfers;
