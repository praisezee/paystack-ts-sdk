export interface CreateCustomerRequest<T = any> {
    email: string;
    first_name: string;
    last_name: string;
    phone?: string;
    metadata?: T;
}
export interface PaystackResponse<T = any, Z = any> {
    status: boolean;
    message: string;
    data?: T;
    meta?: Z;
}
export interface CreatedCustomerType {
    email: string;
    integration: number;
    domain: string;
    customer_code: string;
    id: number;
    identified: boolean;
    identifications?: any;
    createdAt: string;
    updatedAt: string;
}
export interface CustomerType {
    integration: number;
    first_name?: string;
    last_name?: string;
    email: string;
    phone?: string;
    metadata?: any;
    domain: string;
    customer_code: string;
    risk_action: string;
    id: number;
    createdAt: string;
    updatedAt: string;
}
export interface CustomersListType {
    customer: CustomerType[];
    meta: {
        next: string;
        previous?: string | number;
        perPage: number;
    };
}
export interface AuthorizationType {
    authorization_code: string;
    bin: string;
    last4: string;
    exp_month: string;
    exp_year: string;
    channel: string;
    card_type: string;
    bank: string;
    country_code: string;
    brand: string;
    reusable: boolean;
    signature: string;
    account_name?: string;
}
export interface CustomerDataType {
    transactions: any[];
    subscriptions: any[];
    authorizations: AuthorizationType[];
    first_name?: string;
    last_name?: string;
    email: string;
    phone?: string;
    metadata?: any;
    domain: string;
    customer_code: string;
    risk_action?: string;
    id: number;
    integration: number;
    createdAt: string;
    updatedAt: string;
    created_at?: string;
    updated_at?: string;
    total_transactions?: number;
    total_transaction_value?: any[];
    dedicated_account?: any;
    identified: boolean;
    identifications?: any;
}
export interface UpdateCustomerRequest<T = any> {
    first_name?: string;
    last_name?: string;
    phone?: string;
    metadata?: T;
}
export interface ValidateCustomerRequest {
    first_name: string;
    last_name: string;
    type: string;
    value: string;
    country: string;
    bvn: string;
    bank_code: string;
    account_number: string;
    middle_name?: string;
}
export interface SetRiskActionRequest {
    customer: string;
    risk_action: 'allow' | 'deny';
}
export interface SetRiskActionResponse {
    customer_code: string;
    risk_action: string;
    email: string;
    id: number;
}
export interface InitializeAuthorizationAccount {
    number: string;
    bank_code: string;
}
export interface InitializeAuthorizationAddress {
    street: string;
    city: string;
    state: string;
}
export interface InitializeAuthorizationRequest {
    email: string;
    channel: 'direct_debit';
    callback_url?: string;
    account?: InitializeAuthorizationAccount;
    address?: InitializeAuthorizationAddress;
}
export interface InitializeAuthorizationResponse {
    redirect_url: string;
    access_code: string;
    reference: string;
}
export interface VerifyAuthorizationResponse {
    authorization_code: string;
    channel: string;
    bank: string;
    active: boolean;
    customer: {
        code: string;
        email: string;
    };
}
export interface InitializeDirectDebitRequest {
    account: InitializeAuthorizationAccount;
    address: InitializeAuthorizationAddress;
}
export interface InitializeDirectDebitResponse {
    redirect_url: string;
    access_code: string;
    reference: string;
}
export interface ActivationChargeRequest {
    authorization_id: number;
}
export interface ActivationChargeResponse {
    message: string;
}
export interface MandateAuthorizationCustomer {
    id: number;
    customer_code: string;
    email: string;
    first_name: string;
    last_name: string;
}
export interface MandateAuthorization {
    id: number;
    status: string;
    mandate_id: number;
    authorization_id: number;
    authorization_code: string;
    integration_id: number;
    account_number: string;
    bank_code: string;
    bank_name?: string | null;
    customer: MandateAuthorizationCustomer;
    authorized_at: string;
}
export interface FetchMandateAuthorizationsResponse {
    data: MandateAuthorization[];
    meta: {
        per_page: number;
        next: string | null;
        count: number;
        total: number;
    };
}
