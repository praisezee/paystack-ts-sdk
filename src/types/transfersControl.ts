// src/types/transfersControl.ts

export interface Balance {
  currency: string;
  balance: number;
}

export interface BalanceResponse {
  status: boolean;
  message: string;
  data: Balance[];
}

export interface BalanceLedger {
  integration: number;
  domain: string;
  balance: number;
  currency: string;
  difference: number;
  reason: string;
  model_responsible: string;
  model_row: number;
  id: number;
  createdAt: string;
  updatedAt: string;
}

export interface BalanceLedgerMeta {
  total: number;
  skipped: number;
  perPage: number;
  page: number;
  pageCount: number;
}

export interface BalanceLedgerResponse {
  status: boolean;
  message: string;
  data: BalanceLedger[];
  meta: BalanceLedgerMeta;
}

export interface ResendOtpRequest {
  transfer_code: string;
  reason: 'resend_otp' | 'transfer';
}

export interface ResendOtpResponse {
  status: boolean;
  message: string;
}

export interface DisableOtpResponse {
  status: boolean;
  message: string;
}

export interface FinalizeDisableOtpRequest {
  otp: string;
}

export interface FinalizeDisableOtpResponse {
  status: boolean;
  message: string;
}

export interface EnableOtpResponse {
  status: boolean;
  message: string;
}
