// Request types
export interface CreateTransferRecipientRequest {
  type: 'nuban' | 'ghipss' | 'mobile_money' | 'basa';
  name: string;
  account_number?: string;
  bank_code?: string;
  currency?: string;
  description?: string;
  authorization_code?: string;
  metadata?: Record<string, any>;
}

export interface BulkCreateTransferRecipientRequest {
  batch: CreateTransferRecipientRequest[];
}

export interface UpdateTransferRecipientRequest {
  name: string;
  email?: string;
}

export interface ListTransferRecipientsQuery {
  perPage?: number;
  page?: number;
  from?: string;
  to?: string;
}

// Response types
export interface TransferRecipientDetails {
  account_number: string;
  account_name: string | null;
  bank_code: string;
  bank_name: string;
  authorization_code?: string | null; // optional for some cases
}

export interface TransferRecipientData {
  id: number;
  recipient_code: string;
  type: string;
  name: string;
  currency: string;
  domain?: string;
  details: TransferRecipientDetails;
  metadata?: Record<string, any> | null;
  active: boolean;
  createdAt: string;
  updatedAt: string;
  isDeleted?: boolean;
}

export interface TransferRecipientResponse<T = TransferRecipientData> {
  status: boolean;
  message: string;
  data: T | T[];
  meta?: {
    total?: number;
    skipped?: number;
    perPage?: number;
    page?: number;
    pageCount?: number;
  };
}

export interface BulkCreateTransferRecipientResponse {
  status: boolean;
  message: string;
  data: {
    success: TransferRecipientData[];
    errors: any[];
  };
}
