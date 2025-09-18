/**
 * Resolve account query parameters
 */
export interface ResolveAccountQuery {
  account_number: string;
  bank_code: string;
}

/**
 * Account resolved response
 */
export interface ResolvedAccount {
  account_number: string;
  account_name: string;
}

/**
 * Validate account request payload
 */
export interface ValidateAccountRequest {
  account_name: string;
  account_number: string;
  account_type: 'personal' | 'business';
  bank_code: string;
  country_code: string;
  document_type: 'identityNumber' | 'passportNumber' | 'businessRegistrationNumber';
  document_number?: string;
}

/**
 * Validate account response data
 */
export interface ValidateAccountResponse {
  verified: boolean;
  verificationMessage: string;
}

/**
 * Resolve card BIN path parameter
 */
export interface ResolveCardBinParams {
  bin: string;
}

/**
 * Card BIN response data
 */
export interface CardBinData {
  bin: string;
  brand: string;
  sub_brand: string;
  country_code: string;
  country_name: string;
  card_type: string;
  bank: string;
  linked_bank_id: number;
}
