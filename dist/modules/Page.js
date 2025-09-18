"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pages {
    constructor(axios) {
        /**
         * Create Payment Page
         * @example
         * ```ts
         * const page = await paystack.paymentPage.create({
         *   name: "Buttercup Brunch",
         *   amount: 500000,
         *   description: "Gather your friends for the ritual that is brunch"
         * });
         * console.log(page.slug); // e.g. "buttercup-brunch"
         * ```
         */
        this.create = async (data) => {
            const response = await this.axios.post('/page', data);
            return response.data.data;
        };
        /**
         * List Payment Pages
         * @example
         * ```ts
         * const pages = await paystack.paymentPage.list({ perPage: 5, page: 1 });
         * console.log(pages.map(p => p.name));
         * ```
         */
        this.list = async (query) => {
            const response = await this.axios.get('/page', { params: query });
            return response.data.data;
        };
        /**
         * Fetch Payment Page by ID or Slug
         * @example
         * ```ts
         * const page = await paystack.paymentPage.fetch("special-me");
         * console.log(page.name);
         * ```
         */
        this.fetch = async (idOrSlug) => {
            const response = await this.axios.get(`/page/${idOrSlug}`);
            return response.data.data;
        };
        /**
         * Update Payment Page
         * @example
         * ```ts
         * const updated = await paystack.paymentPage.update("special-me", {
         *   name: "Special Updated",
         *   description: "Updated description"
         * });
         * console.log(updated.description);
         * ```
         */
        this.update = async (idOrSlug, data) => {
            const response = await this.axios.put(`/page/${idOrSlug}`, data);
            return response.data.data;
        };
        /**
         * Check Slug Availability
         * @example
         * ```ts
         * const result = await paystack.paymentPage.checkSlug("buttercup-brunch");
         * console.log(result.message); // "Slug is available"
         * ```
         */
        this.checkSlug = async (slug) => {
            const response = await this.axios.get(`/page/check_slug_availability/${slug}`);
            return { message: response.data.message };
        };
        /**
         * Add Products to a Page
         * @example
         * ```ts
         * const page = await paystack.paymentPage.addProducts(102859, {
         *   product: [523, 522]
         * });
         * console.log(page.products?.length); // 2
         * ```
         */
        this.addProducts = async (id, data) => {
            const response = await this.axios.post(`/page/${id}/product`, data);
            return response.data.data;
        };
        this.axios = axios;
    }
}
exports.default = Pages;
