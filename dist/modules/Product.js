"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    constructor(axios) {
        /**
         * Create Product
         * @example
         * ```ts
         * const product = await paystack.products.create({
         *   name: "Puff Puff",
         *   description: "Crispy flour ball with fluffy interior",
         *   price: 5000,
         *   currency: "NGN",
         *   unlimited: false,
         *   quantity: 100,
         * });
         * console.log(product.name);
         * ```
         */
        this.create = async (data) => {
            const response = await this.axios.post('/product', data);
            return response.data.data;
        };
        /**
         * List Products
         * @example
         * ```ts
         * const products = await paystack.products.list({ perPage: 10, page: 1 });
         * console.log(products[0].name);
         * ```
         */
        this.list = async (query) => {
            const response = await this.axios.get('/product', { params: query });
            return response.data.data;
        };
        /**
         * Fetch Product
         * @example
         * ```ts
         * const product = await paystack.products.fetch(489399);
         * console.log(product.name); // Puff Puff
         * ```
         */
        this.fetch = async (id) => {
            const response = await this.axios.get(`/product/${id}`);
            return response.data.data;
        };
        /**
         * Update Product
         * @example
         * ```ts
         * const updated = await paystack.products.update(489399, {
         *   name: "Product Six",
         *   description: "Updated product description",
         *   price: 750000,
         *   currency: "USD",
         *   quantity: 50,
         *   unlimited: false,
         * });
         * console.log(updated.name);
         * ```
         */
        this.update = async (id, data) => {
            const response = await this.axios.put(`/product/${id}`, data);
            return response.data.data;
        };
        this.axios = axios;
    }
}
exports.default = Product;
