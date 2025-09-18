import { AxiosInstance } from 'axios';
import { CreateProductRequest, CreateProductResponse, ListProductsQuery, ListProductsResponse, FetchProductResponse, UpdateProductRequest, UpdateProductResponse } from '../types';
declare class Product {
    private axios;
    constructor(axios: AxiosInstance);
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
    create: (data: CreateProductRequest) => Promise<CreateProductResponse>;
    /**
     * List Products
     * @example
     * ```ts
     * const products = await paystack.products.list({ perPage: 10, page: 1 });
     * console.log(products[0].name);
     * ```
     */
    list: (query?: ListProductsQuery) => Promise<ListProductsResponse["data"]>;
    /**
     * Fetch Product
     * @example
     * ```ts
     * const product = await paystack.products.fetch(489399);
     * console.log(product.name); // Puff Puff
     * ```
     */
    fetch: (id: string | number) => Promise<FetchProductResponse>;
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
    update: (id: string | number, data: UpdateProductRequest) => Promise<UpdateProductResponse>;
}
export default Product;
