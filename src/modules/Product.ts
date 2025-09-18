import { AxiosInstance } from 'axios';
import {
  CreateProductRequest,
  CreateProductResponse,
  ListProductsQuery,
  ListProductsResponse,
  FetchProductResponse,
  UpdateProductRequest,
  UpdateProductResponse,
} from '../types';

class Product {
  private axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

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
  create = async (data: CreateProductRequest): Promise<CreateProductResponse> => {
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
  list = async (query?: ListProductsQuery): Promise<ListProductsResponse['data']> => {
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
  fetch = async (id: string | number): Promise<FetchProductResponse> => {
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
  update = async (
    id: string | number,
    data: UpdateProductRequest
  ): Promise<UpdateProductResponse> => {
    const response = await this.axios.put(`/product/${id}`, data);
    return response.data.data;
  };
}

export default Product;
