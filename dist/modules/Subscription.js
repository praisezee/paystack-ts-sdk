"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AppError_1 = require("../utils/AppError");
class Subscription {
    constructor(axiosInstance) {
        this.axiosInstance = axiosInstance;
        /**
         * Create a new subscription on your Paystack integration.
         *
         * @param data - Subscription details (customer, plan, authorization, start_date).
         * @returns The newly created subscription.
         * @throws {PaystackAPIError} If the request fails or API returns an error.
         */
        this.createSubscription = async (data) => {
            try {
                const { data: response } = await this.http.post('/subscription', data);
                return response.data;
            }
            catch (error) {
                throw new AppError_1.PaystackAPIError(error.response?.data?.message || error.message);
            }
        };
        /**
         * List all subscriptions on your Paystack integration.
         *
         * @param query - Optional filters like `perPage`, `page`, `customer`, `plan`.
         * @returns A list of subscriptions and pagination metadata.
         */
        this.listSubscriptions = async (query) => {
            try {
                const { data: response, } = await this.http.get('/subscription', { params: query });
                return {
                    data: response.data,
                    meta: response.meta,
                };
            }
            catch (error) {
                throw new AppError_1.PaystackAPIError(error.response?.data?.message || error.message);
            }
        };
        /**
         * Fetch details of a specific subscription by ID or code.
         */
        this.fetchSubscription = async (idOrCode) => {
            try {
                const { data: response } = await this.http.get(`/subscription/${idOrCode}`);
                return response.data;
            }
            catch (error) {
                throw new AppError_1.PaystackAPIError(error.response?.data?.message || error.message);
            }
        };
        /**
         * Enable a subscription on your integration.
         */
        this.enableSubscription = async (data) => {
            try {
                const { data: response } = await this.http.post('/subscription/enable', data);
                return response.message;
            }
            catch (error) {
                throw new AppError_1.PaystackAPIError(error.response?.data?.message || error.message);
            }
        };
        /**
         * Disable a subscription on your integration.
         */
        this.disableSubscription = async (data) => {
            try {
                const { data: response } = await this.http.post('/subscription/disable', data);
                return response.message;
            }
            catch (error) {
                throw new AppError_1.PaystackAPIError(error.response?.data?.message || error.message);
            }
        };
        /**
         * Generate a link for updating the card on a subscription.
         */
        this.generateManageLink = async (code) => {
            try {
                const { data: response } = await this.http.get(`/subscription/${code}/manage/link`);
                return response.data;
            }
            catch (error) {
                throw new AppError_1.PaystackAPIError(error.response?.data?.message || error.message);
            }
        };
        /**
         * Send a link to the customer’s email for updating the subscription card.
         */
        this.sendManageEmail = async (code) => {
            try {
                const { data: response } = await this.http.post(`/subscription/${code}/manage/email`);
                return response.message;
            }
            catch (error) {
                throw new AppError_1.PaystackAPIError(error.response?.data?.message || error.message);
            }
        };
        this.http = this.axiosInstance;
    }
}
exports.default = Subscription;
