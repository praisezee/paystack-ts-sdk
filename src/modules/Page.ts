import { AxiosInstance } from 'axios';
import {
  CreatePageRequest,
  Page,
  ListPagesQuery,
  AddProductsRequest,
  SlugAvailabilityResponse,
} from '../types';

class Pages {
  private axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

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
  create = async (data: CreatePageRequest): Promise<Page> => {
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
  list = async (query?: ListPagesQuery): Promise<Page[]> => {
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
  fetch = async (idOrSlug: string | number): Promise<Page> => {
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
  update = async (idOrSlug: string | number, data: Partial<CreatePageRequest>): Promise<Page> => {
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
  checkSlug = async (slug: string): Promise<SlugAvailabilityResponse> => {
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
  addProducts = async (id: number, data: AddProductsRequest): Promise<Page> => {
    const response = await this.axios.post(`/page/${id}/product`, data);
    return response.data.data;
  };
}

export default Pages;
