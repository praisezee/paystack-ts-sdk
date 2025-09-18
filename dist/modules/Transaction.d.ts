import { AxiosInstance } from 'axios';
import { InitializeTransactionRequest, InitializeTransactionResponse, VerifyTransactionResponse, ListTransactionsQuery, ChargeAuthorizationRequest, ChargeAuthorizationResponse, PartialDebitRequest, PartialDebitResponse, TransactionTotalsQuery, TransactionTotalsResponse, ExportTransactionsQuery } from '../types/transaction';
import { PaystackResponse } from '../types';
declare class Transactions {
    private http;
    constructor(axiosInstance: AxiosInstance);
    initialize: (body: InitializeTransactionRequest) => Promise<InitializeTransactionResponse>;
    verify: (reference: string) => Promise<VerifyTransactionResponse>;
    list: (query?: ListTransactionsQuery) => Promise<PaystackResponse<any>>;
    fetch: (id: number) => Promise<VerifyTransactionResponse>;
    chargeAuthorization: (body: ChargeAuthorizationRequest) => Promise<ChargeAuthorizationResponse>;
    partialDebit: (body: PartialDebitRequest) => Promise<PartialDebitResponse>;
    totals: (query?: TransactionTotalsQuery) => Promise<TransactionTotalsResponse>;
    export: (query?: ExportTransactionsQuery) => Promise<PaystackResponse<any>>;
}
export default Transactions;
