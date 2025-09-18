import { PaystackResponse } from './customer';
export interface InitializeTransactionRequest {
    amount: string;
    email: string;
    channels?: ('card' | 'bank' | 'apple_pay' | 'ussd' | 'qr' | 'mobile_money' | 'bank_transfer' | 'eft' | 'payattitude')[];
    currency?: string;
    reference?: string;
    callback_url?: string;
    plan?: string;
    invoice_limit?: number;
    metadata?: Record<string, any> | string;
    split_code?: string;
    subaccount?: string;
    transaction_charge?: number;
    bearer?: 'account' | 'subaccount';
}
export interface InitializeTransactionResponseData {
    authorization_url: string;
    access_code: string;
    reference: string;
}
export type InitializeTransactionResponse = PaystackResponse<InitializeTransactionResponseData>;
export interface VerifyTransactionResponseData {
    id: number;
    status: string;
    reference: string;
    amount: number;
    currency: string;
    paidAt: string;
    createdAt: string;
    customer: {
        id: number;
        email: string;
        first_name?: string | null;
        last_name?: string | null;
        phone?: string | null;
        metadata?: Record<string, any> | null;
        customer_code: string;
        risk_action: string;
    };
    authorization?: any;
    gateway_response: string;
    log?: any;
    fees?: number;
    channel?: string;
    [key: string]: any;
}
export type VerifyTransactionResponse = PaystackResponse<VerifyTransactionResponseData>;
export interface ListTransactionsQuery {
    perPage?: number;
    page?: number;
    customer?: number;
    terminalid?: string;
    status?: 'failed' | 'success' | 'abandoned';
    from?: string;
    to?: string;
    amount?: number;
    currency?: string;
}
export interface ChargeAuthorizationRequest {
    email: string;
    amount: string;
    authorization_code: string;
    reference?: string;
    currency?: string;
    metadata?: Record<string, any> | string;
    channels?: ('card' | 'bank')[];
    subaccount?: string;
    transaction_charge?: number;
    bearer?: 'account' | 'subaccount';
    queue?: boolean;
}
export type ChargeAuthorizationResponse = PaystackResponse<VerifyTransactionResponseData>;
export interface PartialDebitRequest {
    authorization_code: string;
    currency: 'NGN' | 'GHS';
    amount: string;
    email: string;
    reference?: string;
    at_least?: string;
}
export type PartialDebitResponse = PaystackResponse<VerifyTransactionResponseData>;
export interface TransactionTotalsQuery {
    perPage?: number;
    page?: number;
    from?: string;
    to?: string;
}
export interface TransactionTotalCurrency {
    currency: string;
    amount: number;
}
export interface TransactionTotalsData {
    total_transactions: number;
    total_volume: number;
    total_volume_by_currency: TransactionTotalCurrency[];
    pending_transfers: number;
    pending_transfers_by_currency: TransactionTotalCurrency[];
}
export type TransactionTotalsResponse = PaystackResponse<TransactionTotalsData>;
export interface ExportTransactionsQuery extends ListTransactionsQuery {
    settled?: boolean;
    settlement?: number;
    payment_page?: number;
}
