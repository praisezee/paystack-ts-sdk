/**
 * Types for Paystack Transfers API
 */

export interface InitiateTransferRequest {
  source: 'balance';
  amount: number;
  recipient: string;
  reference: string;
  reason?: string;
  currency?: string;
  account_reference?: string;
}

export interface TransferType {
  id: number;
  amount: number;
  currency: string;
  reference: string;
  source: string;
  reason: string | null;
  status: string;
  transfer_code: string;
  titan_code: string | null;
  failures: any | null;
  transferred_at: string | null;
  createdAt: string;
  updatedAt: string;
  integration: number;
  recipient: number | Record<string, any>;
  request?: number;
  domain?: string;
  source_details?: any;
  transfersessionid?: any[];
  transfertrials?: any[];
}

export interface FinalizeTransferRequest {
  transfer_code: string;
  otp: string;
}

export interface BulkTransferRequest {
  source: 'balance';
  currency?: string;
  transfers: Array<{
    amount: number;
    reference: string;
    recipient: string;
    reason?: string;
  }>;
}

export interface TransfersListResponse {
  data: TransferType[];
  meta: {
    total: number;
    skipped: number;
    perPage: number;
    page: number;
    pageCount: number;
  };
}
