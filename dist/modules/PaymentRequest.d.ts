import { AxiosInstance } from 'axios';
import { CreatePaymentRequestRequest, CreatePaymentRequestResponse, ListPaymentRequestsQuery, ListPaymentRequestsResponse, FetchPaymentRequestResponse, VerifyPaymentRequestResponse, PaymentRequestTotalsResponse, UpdatePaymentRequestRequest, UpdatePaymentRequestResponse } from '../types';
export declare class PaymentRequests {
    private axios;
    constructor(axios: AxiosInstance);
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
    create: (data: CreatePaymentRequestRequest) => Promise<CreatePaymentRequestResponse>;
    /**
     * List Payment Requests
     * @example
     * ```ts
     * const list = await paystack.paymentRequests.list({ perPage: 10, page: 1 });
     * console.log(list[0].description);
     * ```
     */
    list: (query?: ListPaymentRequestsQuery) => Promise<ListPaymentRequestsResponse["data"]>;
    /**
     * Fetch Payment Request
     * @example
     * ```ts
     * const pr = await paystack.paymentRequests.fetch("PRQ_1weqqsn2wwzgft8");
     * console.log(pr.description, pr.status);
     * ```
     */
    fetch: (idOrCode: string | number) => Promise<FetchPaymentRequestResponse>;
    /**
     * Verify Payment Request
     * @example
     * ```ts
     * const pr = await paystack.paymentRequests.verify("PRQ_1weqqsn2wwzgft8");
     * console.log(pr.amount, pr.currency);
     * ```
     */
    verify: (code: string) => Promise<VerifyPaymentRequestResponse>;
    /**
     * Send Notification
     * @example
     * ```ts
     * await paystack.paymentRequests.sendNotification("PRQ_1weqqsn2wwzgft8");
     * ```
     */
    sendNotification: (code: string) => Promise<void>;
    /**
     * Get Payment Request Totals
     * @example
     * ```ts
     * const totals = await paystack.paymentRequests.totals();
     * console.log(totals.total);
     * ```
     */
    totals: () => Promise<PaymentRequestTotalsResponse>;
    /**
     * Finalize Payment Request
     * @example
     * ```ts
     * const finalized = await paystack.paymentRequests.finalize("PRQ_abc123", true);
     * console.log(finalized.status);
     * ```
     */
    finalize: (code: string, send_notification?: boolean) => Promise<FetchPaymentRequestResponse>;
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
    update: (idOrCode: string | number, data: UpdatePaymentRequestRequest) => Promise<UpdatePaymentRequestResponse>;
    /**
     * Archive Payment Request
     * @example
     * ```ts
     * await paystack.paymentRequests.archive("PRQ_abc123");
     * ```
     */
    archive: (code: string) => Promise<void>;
}
