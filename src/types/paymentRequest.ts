export interface PaymentRequestCustomer {
  id: number;
  customer_code: string;
  email: string;
  first_name?: string;
  last_name?: string;
  phone?: string;
  metadata?: Record<string, any>;
  risk_action?: string;
  integration?: number;
  createdAt: string;
  updatedAt: string;
}

export interface PaymentRequestLineItem {
  name: string;
  amount: number; // kobo
  quantity?: number;
}

export interface PaymentRequestTax {
  name: string;
  amount: number; // kobo
}

export interface PaymentRequest {
  id: number;
  integration: number;
  domain: string;
  request_code: string;
  description: string;
  line_items: PaymentRequestLineItem[];
  tax?: PaymentRequestTax[];
  amount: number;
  currency: string;
  due_date?: string;
  has_invoice: boolean;
  invoice_number?: number;
  offline_reference?: string;
  pdf_url?: string;
  status: 'pending' | 'success' | 'failed' | 'cancelled';
  paid: boolean;
  createdAt: string;
  updatedAt: string;
  customer: PaymentRequestCustomer;
}

export interface CreatePaymentRequestRequest {
  customer: string | number; // customer ID or code
  description: string;
  line_items?: PaymentRequestLineItem[];
  tax?: PaymentRequestTax[];
  amount?: number; // required if no line_items
  currency?: string;
  due_date?: string; // YYYY-MM-DD
  draft?: boolean;
  has_invoice?: boolean;
  send_notification?: boolean;
  metadata?: Record<string, any>;
}

export type CreatePaymentRequestResponse = PaymentRequest;

export interface ListPaymentRequestsQuery {
  customer?: string;
  status?: 'pending' | 'success' | 'failed' | 'cancelled';
  currency?: string;
  include_archive?: boolean;
  perPage?: number;
  page?: number;
  from?: string; // ISO date
  to?: string; // ISO date
}

export interface ListPaymentRequestsResponse {
  data: PaymentRequest[];
  meta: {
    total: number;
    skipped: number;
    perPage: number;
    page: number;
    pageCount: number;
  };
}

export type FetchPaymentRequestResponse = PaymentRequest;

export type VerifyPaymentRequestResponse = PaymentRequest;

export interface PaymentRequestTotalsResponse {
  total: number;
  pending: number;
  successful: number;
  failed: number;
}

export interface UpdatePaymentRequestRequest {
  description?: string;
  line_items?: PaymentRequestLineItem[];
  tax?: PaymentRequestTax[];
  amount?: number;
  currency?: string;
  due_date?: string;
  send_notification?: boolean;
  metadata?: Record<string, any>;
}

export type UpdatePaymentRequestResponse = PaymentRequest;
