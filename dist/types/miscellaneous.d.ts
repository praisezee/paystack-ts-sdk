/**
 * Query parameters for listing banks
 */
export interface ListBanksQuery {
    country: 'ghana' | 'kenya' | 'nigeria' | 'south africa';
    use_cursor?: boolean;
    perPage?: number;
    pay_with_bank_transfer?: boolean;
    pay_with_bank?: boolean;
    enabled_for_verification?: boolean;
    next?: string;
    previous?: string;
    gateway?: 'emandate' | 'digitalbankmandate';
    type?: 'mobile_money' | 'ghipps';
    currency?: string;
    include_nip_sort_code?: boolean;
}
/**
 * Bank data
 */
export interface BankData {
    id: number;
    name: string;
    slug: string;
    code: string;
    longcode: string;
    gateway: string | null;
    pay_with_bank: boolean;
    active: boolean;
    is_deleted: boolean;
    country: string;
    currency: string;
    type: string;
    createdAt: string;
    updatedAt: string;
}
/**
 * Banks response metadata for pagination
 */
export interface BanksMeta {
    next: string | null;
    previous: string | null;
    perPage: number;
}
/**
 * List banks response
 */
export interface ListBanksResponse {
    status: boolean;
    message: string;
    data: BankData[];
    meta?: BanksMeta;
}
/**
 * Country data
 */
export interface CountryData {
    id: number;
    name: string;
    iso_code: string;
    default_currency_code: string;
    integration_defaults: Record<string, any>;
    relationships: {
        currency: {
            type: string;
            data: string[];
        };
        integration_feature: {
            type: string;
            data: any[];
        };
        integration_type: {
            type: string;
            data: string[];
        };
        payment_method: {
            type: string;
            data: string[];
        };
    };
}
/**
 * List countries response
 */
export interface ListCountriesResponse {
    status: boolean;
    message: string;
    data: CountryData[];
}
