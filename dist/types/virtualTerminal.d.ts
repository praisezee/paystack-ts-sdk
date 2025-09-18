/**
 * Request & Response Types for Virtual Terminal API
 */
export interface VirtualTerminalDestination {
    target: string;
    name: string;
}
export interface VirtualTerminalCustomField {
    display_name: string;
    variable_name: string;
}
export interface CreateVirtualTerminalRequest {
    name: string;
    destinations: VirtualTerminalDestination[];
    metadata?: Record<string, any>;
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
    destinations: (VirtualTerminalDestination & {
        type: string;
    })[];
    currency: string;
}
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
export interface DeactivateVirtualTerminalResponse {
    status: boolean;
    message: string;
}
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
export interface UnassignDestinationRequest {
    targets: string[];
}
export interface UnassignDestinationResponse {
    status: boolean;
    message: string;
}
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
export interface RemoveSplitCodeRequest {
    split_code: string;
}
export interface RemoveSplitCodeResponse {
    status: boolean;
    message: string;
}
