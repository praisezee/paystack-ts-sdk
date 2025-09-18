import { AxiosInstance } from 'axios';
import {
  CreatePaymentRequestRequest,
  CreatePaymentRequestResponse,
  ListPaymentRequestsQuery,
  ListPaymentRequestsResponse,
  FetchPaymentRequestResponse,
  VerifyPaymentRequestResponse,
  PaymentRequestTotalsResponse,
  UpdatePaymentRequestRequest,
  UpdatePaymentRequestResponse,
} from '../types';

export class PaymentRequests {
  private axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  /**
   * Create Payment Request
   * @example
   * ```ts
   * const pr = await paystack.paymentRequests.create({
   *   description: "Invoice for order #1234",
   *   line_items: [
   *     { name: "item 1", amount: 20000 },
   *     { name: "item 2", amount: 20000 },
   *   ],
   *   tax: [{ name: "VAT", amount: 2000 }],
   *   customer: "CUS_xwaj0txjryg393b",
   *   due_date: "2025-09-30",
   * });
   * console.log(pr.id, pr.status);
   * ```
   */
  create = async (data: CreatePaymentRequestRequest): Promise<CreatePaymentRequestResponse> => {
    const response = await this.axios.post('/paymentrequest', data);
    return response.data.data;
  };

  /**
   * List Payment Requests
   * @example
   * ```ts
   * const list = await paystack.paymentRequests.list({ perPage: 10, page: 1 });
   * console.log(list[0].description);
   * ```
   */
  list = async (query?: ListPaymentRequestsQuery): Promise<ListPaymentRequestsResponse['data']> => {
    const response = await this.axios.get('/paymentrequest', { params: query });
    return response.data.data;
  };

  /**
   * Fetch Payment Request
   * @example
   * ```ts
   * const pr = await paystack.paymentRequests.fetch("PRQ_1weqqsn2wwzgft8");
   * console.log(pr.description, pr.status);
   * ```
   */
  fetch = async (idOrCode: string | number): Promise<FetchPaymentRequestResponse> => {
    const response = await this.axios.get(`/paymentrequest/${idOrCode}`);
    return response.data.data;
  };

  /**
   * Verify Payment Request
   * @example
   * ```ts
   * const pr = await paystack.paymentRequests.verify("PRQ_1weqqsn2wwzgft8");
   * console.log(pr.amount, pr.currency);
   * ```
   */
  verify = async (code: string): Promise<VerifyPaymentRequestResponse> => {
    const response = await this.axios.get(`/paymentrequest/verify/${code}`);
    return response.data.data;
  };

  /**
   * Send Notification
   * @example
   * ```ts
   * await paystack.paymentRequests.sendNotification("PRQ_1weqqsn2wwzgft8");
   * ```
   */
  sendNotification = async (code: string): Promise<void> => {
    await this.axios.post(`/paymentrequest/notify/${code}`);
  };

  /**
   * Get Payment Request Totals
   * @example
   * ```ts
   * const totals = await paystack.paymentRequests.totals();
   * console.log(totals.total);
   * ```
   */
  totals = async (): Promise<PaymentRequestTotalsResponse> => {
    const response = await this.axios.get('/paymentrequest/totals');
    return response.data.data;
  };

  /**
   * Finalize Payment Request
   * @example
   * ```ts
   * const finalized = await paystack.paymentRequests.finalize("PRQ_abc123", true);
   * console.log(finalized.status);
   * ```
   */
  finalize = async (
    code: string,
    send_notification = true
  ): Promise<FetchPaymentRequestResponse> => {
    const response = await this.axios.post(`/paymentrequest/finalize/${code}`, {
      send_notification,
    });
    return response.data.data;
  };

  /**
   * Update Payment Request
   * @example
   * ```ts
   * const updated = await paystack.paymentRequests.update("PRQ_abc123", {
   *   description: "Updated invoice description",
   *   due_date: "2025-10-10",
   * });
   * console.log(updated.description);
   * ```
   */
  update = async (
    idOrCode: string | number,
    data: UpdatePaymentRequestRequest
  ): Promise<UpdatePaymentRequestResponse> => {
    const response = await this.axios.put(`/paymentrequest/${idOrCode}`, data);
    return response.data.data;
  };

  /**
   * Archive Payment Request
   * @example
   * ```ts
   * await paystack.paymentRequests.archive("PRQ_abc123");
   * ```
   */
  archive = async (code: string): Promise<void> => {
    await this.axios.post(`/paymentrequest/archive/${code}`);
  };
}
