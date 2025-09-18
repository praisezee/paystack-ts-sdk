import { AxiosInstance } from 'axios';
import { PaystackAPIError } from '../utils/AppError';
import {
  InitializeTransactionRequest,
  InitializeTransactionResponse,
  VerifyTransactionResponse,
  ListTransactionsQuery,
  ChargeAuthorizationRequest,
  ChargeAuthorizationResponse,
  PartialDebitRequest,
  PartialDebitResponse,
  TransactionTotalsQuery,
  TransactionTotalsResponse,
  ExportTransactionsQuery,
} from '../types/transaction';
import { PaystackResponse } from '../types';

class Transactions {
  private http: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.http = axiosInstance;
  }

  initialize = async (
    body: InitializeTransactionRequest
  ): Promise<InitializeTransactionResponse> => {
    try {
      const { data } = await this.http.post<InitializeTransactionResponse>(
        '/transaction/initialize',
        body
      );
      return data;
    } catch (error: any) {
      throw new PaystackAPIError(error.response?.data?.message || error.message);
    }
  };

  verify = async (reference: string): Promise<VerifyTransactionResponse> => {
    try {
      const { data } = await this.http.get<VerifyTransactionResponse>(
        `/transaction/verify/${reference}`
      );
      return data;
    } catch (error: any) {
      throw new PaystackAPIError(error.response?.data?.message || error.message);
    }
  };

  list = async (query?: ListTransactionsQuery): Promise<PaystackResponse<any>> => {
    try {
      const { data } = await this.http.get<PaystackResponse<any>>('/transaction', {
        params: query,
      });
      return data;
    } catch (error: any) {
      throw new PaystackAPIError(error.response?.data?.message || error.message);
    }
  };

  fetch = async (id: number): Promise<VerifyTransactionResponse> => {
    try {
      const { data } = await this.http.get<VerifyTransactionResponse>(`/transaction/${id}`);
      return data;
    } catch (error: any) {
      throw new PaystackAPIError(error.response?.data?.message || error.message);
    }
  };

  chargeAuthorization = async (
    body: ChargeAuthorizationRequest
  ): Promise<ChargeAuthorizationResponse> => {
    try {
      const { data } = await this.http.post<ChargeAuthorizationResponse>(
        '/transaction/charge_authorization',
        body
      );
      return data;
    } catch (error: any) {
      throw new PaystackAPIError(error.response?.data?.message || error.message);
    }
  };

  partialDebit = async (body: PartialDebitRequest): Promise<PartialDebitResponse> => {
    try {
      const { data } = await this.http.post<PartialDebitResponse>(
        '/transaction/partial_debit',
        body
      );
      return data;
    } catch (error: any) {
      throw new PaystackAPIError(error.response?.data?.message || error.message);
    }
  };

  totals = async (query?: TransactionTotalsQuery): Promise<TransactionTotalsResponse> => {
    try {
      const { data } = await this.http.get<TransactionTotalsResponse>('/transaction/totals', {
        params: query,
      });
      return data;
    } catch (error: any) {
      throw new PaystackAPIError(error.response?.data?.message || error.message);
    }
  };

  export = async (query?: ExportTransactionsQuery): Promise<PaystackResponse<any>> => {
    try {
      const { data } = await this.http.get<PaystackResponse<any>>('/transaction/export', {
        params: query,
      });
      return data;
    } catch (error: any) {
      throw new PaystackAPIError(error.response?.data?.message || error.message);
    }
  };
}

export default Transactions;
