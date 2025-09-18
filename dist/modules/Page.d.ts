import { AxiosInstance } from 'axios';
import { CreatePageRequest, Page, ListPagesQuery, AddProductsRequest, SlugAvailabilityResponse } from '../types';
declare class Pages {
    private axios;
    constructor(axios: AxiosInstance);
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
    create: (data: CreatePageRequest) => Promise<Page>;
    /**
     * List Payment Pages
     * @example
     * ```ts
     * const pages = await paystack.paymentPage.list({ perPage: 5, page: 1 });
     * console.log(pages.map(p => p.name));
     * ```
     */
    list: (query?: ListPagesQuery) => Promise<Page[]>;
    /**
     * Fetch Payment Page by ID or Slug
     * @example
     * ```ts
     * const page = await paystack.paymentPage.fetch("special-me");
     * console.log(page.name);
     * ```
     */
    fetch: (idOrSlug: string | number) => Promise<Page>;
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
    update: (idOrSlug: string | number, data: Partial<CreatePageRequest>) => Promise<Page>;
    /**
     * Check Slug Availability
     * @example
     * ```ts
     * const result = await paystack.paymentPage.checkSlug("buttercup-brunch");
     * console.log(result.message); // "Slug is available"
     * ```
     */
    checkSlug: (slug: string) => Promise<SlugAvailabilityResponse>;
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
    addProducts: (id: number, data: AddProductsRequest) => Promise<Page>;
}
export default Pages;
