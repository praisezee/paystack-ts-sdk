import { AuthorizationType, CustomerType } from './customer';

/**
 * @typedef ChargeData
 */
export interface ChargeData {
  id?: number;
  amount: number;
  currency: string;
  transaction_date?: string;
  status: string;
  reference: string;
  domain: string;
  metadata?: any;
  gateway_response?: string | null;
  message?: string | null;
  channel?: string;
  ip_address?: string | null;
  log?: any;
  fees?: number | null;
  fees_split?: any;
  authorization?: AuthorizationType;
  customer?: CustomerType;
  plan?: any;
  split?: any;
  order_id?: any;
  paidAt?: string;
  createdAt?: string;
  requested_amount?: number;
  pos_transaction_data?: any;
  source?: any;
  fees_breakdown?: any;
  plan_object?: any;
  subaccount?: any;
}

/**
 * @typedef ChargeResponse
 */
export interface ChargeResponse {
  status: boolean;
  message: string;
  data: ChargeData;
}
