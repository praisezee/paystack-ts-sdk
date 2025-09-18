import { AxiosInstance } from 'axios';
import { CreateSplitRequest, SplitResponse, SplitListResponse, UpdateSplitRequest, AddSubaccountRequest, RemoveSubaccountRequest } from '../types';
/**
 * The Transaction Splits API enables merchants to split settlement
 * for a transaction across multiple subaccounts.
 *
 * @see https://paystack.com/docs/api/split/
 */
declare class Split {
    private axiosInstance;
    private http;
    constructor(axiosInstance: AxiosInstance);
    /**
     * Create a transaction split.
     *
     * @param data - Split details
     * @returns The created split object
     * @throws {PaystackAPIError} If the request fails
     */
    createSplit: (data: CreateSplitRequest) => Promise<SplitResponse>;
    /**
     * List all transaction splits on the integration.
     *
     * @returns Paginated list of transaction splits
     * @throws {PaystackAPIError} If the request fails
     */
    listSplits: () => Promise<SplitListResponse>;
    /**
     * Fetch details of a specific split.
     *
     * @param id - Split ID or code
     * @returns A split object
     * @throws {PaystackAPIError} If the request fails
     */
    fetchSplit: (id: string | number) => Promise<SplitResponse>;
    /**
     * Update details of a split.
     *
     * @param id - Split ID or code
     * @param data - Update details
     * @returns Updated split object
     * @throws {PaystackAPIError} If the request fails
     */
    updateSplit: (id: string | number, data: UpdateSplitRequest) => Promise<SplitResponse>;
    /**
     * Add or update a subaccount in a split.
     *
     * @param id - Split ID or code
     * @param data - Subaccount details
     * @returns Updated split object
     * @throws {PaystackAPIError} If the request fails
     */
    addOrUpdateSubaccount: (id: string | number, data: AddSubaccountRequest) => Promise<SplitResponse>;
    /**
     * Remove a subaccount from a split.
     *
     * @param id - Split ID or code
     * @param data - Subaccount code to remove
     * @returns A success message
     * @throws {PaystackAPIError} If the request fails
     */
    removeSubaccount: (id: string | number, data: RemoveSubaccountRequest) => Promise<{
        message: string;
    }>;
}
export default Split;
