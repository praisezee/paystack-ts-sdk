"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * SettlementAPI provides methods to interact with Paystack Settlements endpoints.
 */
class Settlement {
    constructor(client) {
        this.client = client;
        /**
         * List settlements made to your settlement accounts.
         * @param query Optional query parameters to filter settlements.
         * @returns A promise that resolves with the list of settlements.
         */
        this.list = async (query) => {
            const { data } = await this.client.get('/settlement', {
                params: query,
            });
            return {
                data: data.data,
                meta: data.meta,
            };
        };
        /**
         * List transactions that make up a particular settlement.
         * @param settlementId The ID of the settlement to fetch transactions for.
         * @param query Optional query parameters to filter transactions.
         * @returns A promise that resolves with the list of transactions for the settlement.
         */
        this.transactions = async (settlementId, query) => {
            const { data } = await this.client.get(`/settlement/${settlementId}/transactions`, {
                params: query,
            });
            return data.data;
        };
    }
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
exports.default = Settlement;
