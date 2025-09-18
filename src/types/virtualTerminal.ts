import { PaystackResponse } from './customer';

/**
 * Request & Response Types for Virtual Terminal API
 */

// --------- CREATE ---------
export interface VirtualTerminalDestination {
  target: string; // WhatsApp phone number
  name: string; // Descriptive label
}

export interface VirtualTerminalCustomField {
  display_name: string;
  variable_name: string;
}

export interface CreateVirtualTerminalRequest {
  name: string;
  destinations: VirtualTerminalDestination[];
  metadata?: Record<string, any>; // Stringified JSON object
  currency?: string;
  custom_fields?: VirtualTerminalCustomField[];
}

export interface CreateVirtualTerminalResponse {
  id: number;
  name: string;
  integration: number;
  domain: string;
  code: string;
  paymentMethods: string[];
  active: boolean;
  metadata: Record<string, any> | null;
  destinations: (VirtualTerminalDestination & { type: string })[];
  currency: string;
}

// --------- LIST ---------
export interface ListVirtualTerminalsQuery {
  status?: 'active' | 'inactive';
  perPage?: number;
  search?: string;
  next?: string;
  previous?: string;
}

export interface ListVirtualTerminalItem {
  id: number;
  code: string;
  name: string;
  integration: number;
  domain: string;
  paymentMethods: string[];
  active: boolean;
  created_at: string;
  currency: string;
}

export interface ListVirtualTerminalsResponse {
  data: ListVirtualTerminalItem[];
  meta: {
    next: string | null;
    previous: string | null;
    perPage: number;
  };
}

// --------- FETCH ---------
export interface FetchVirtualTerminalResponse {
  id: number;
  code: string;
  name: string;
  integration: number;
  domain: string;
  paymentMethods: string[];
  active: boolean;
  created_at: string;
  connect_account_id: string | null;
  destinations: (VirtualTerminalDestination & {
    type: string;
    created_at: string;
  })[];
  currency: string;
}

// --------- UPDATE ---------
export interface UpdateVirtualTerminalRequest {
  name: string;
}

export interface UpdateVirtualTerminalResponse {
  id: number;
  code: string;
  name: string;
  integration: number;
  active: boolean;
  updated_at: string;
}

// --------- DEACTIVATE ---------
export interface DeactivateVirtualTerminalResponse {
  status: boolean;
  message: string;
}

// --------- ASSIGN DESTINATION ---------
export interface AssignDestinationRequest {
  destinations: VirtualTerminalDestination[];
}

export interface AssignDestinationResponse {
  integration: number;
  target: string;
  name: string;
  type: string;
  id: number;
  createdAt: string;
  updatedAt: string;
}

// --------- UNASSIGN DESTINATION ---------
export interface UnassignDestinationRequest {
  targets: string[];
}

export interface UnassignDestinationResponse {
  status: boolean;
  message: string;
}

// --------- ADD SPLIT CODE ---------
export interface AddSplitCodeRequest {
  split_code: string;
}

export interface AddSplitCodeResponse {
  id: number;
  name: string;
  type: string;
  currency: string;
  integration: number;
  domain: string;
  split_code: string;
  active: boolean;
  bearer_type: string;
  bearer_subaccount: number;
  createdAt: string;
  updatedAt: string;
  is_dynamic: boolean;
  subaccounts: {
    subaccount: {
      id: number;
      subaccount_code: string;
      business_name: string;
      description: string;
      settlement_bank: string;
      currency: string;
      account_number: string;
    };
    share: number;
  }[];
  total_subaccounts: number;
}

// --------- REMOVE SPLIT CODE ---------
export interface RemoveSplitCodeRequest {
  split_code: string;
}

export interface RemoveSplitCodeResponse {
  status: boolean;
  message: string;
}
