import { AxiosInstance } from 'axios';
import { ListSettlementsQuery, ListSettlementsResponse, ListSettlementTransactionsQuery, ListSettlementTransactionsResponse } from '../types/settlement';
/**
 * SettlementAPI provides methods to interact with Paystack Settlements endpoints.
 */
declare class Settlement {
    private client;
    constructor(client: AxiosInstance);
    /**
     * List settlements made to your settlement accounts.
     * @param query Optional query parameters to filter settlements.
     * @returns A promise that resolves with the list of settlements.
     */
    list: (query?: ListSettlementsQuery) => Promise<ListSettlementsResponse>;
    /**
     * List transactions that make up a particular settlement.
     * @param settlementId The ID of the settlement to fetch transactions for.
     * @param query Optional query parameters to filter transactions.
     * @returns A promise that resolves with the list of transactions for the settlement.
     */
    transactions: (settlementId: string | number, query?: ListSettlementTransactionsQuery) => Promise<ListSettlementTransactionsResponse>;
}
/**
 * Example usage:
 *
 * import axios from "axios";
 * import { SettlementAPI } from "./modules/settlement";
 *
 * const client = axios.create({
 *   baseURL: "https://api.paystack.co",
 *   headers: {
 *     Authorization: `Bearer YOUR_SECRET_KEY`,
 *   },
 * });
 *
 * const settlementAPI = new SettlementAPI(client);
 *
 * // List settlements
 * const settlements = await settlementAPI.list({ perPage: 10 });
 * console.log(settlements);
 *
 * // List transactions for a settlement
 * const transactions = await settlementAPI.transactions(3090024, { perPage: 5 });
 * console.log(transactions);
 */
export default Settlement;
