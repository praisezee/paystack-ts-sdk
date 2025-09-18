/**
 * Request payload for registering/unregistering an Apple Pay domain
 */
export interface ApplePayDomainRequest {
    /** Domain name to register or unregister */
    domainName: string;
}
/**
 * Response when registering a domain for Apple Pay
 */
export interface RegisterApplePayDomainResponse {
    status: boolean;
    message: string;
    data: {
        domainName: string;
        createdAt: string;
        updatedAt: string;
    };
}
/**
 * Response when listing registered Apple Pay domains
 */
export interface ListApplePayDomainsResponse {
    status: boolean;
    message: string;
    data: {
        domainName: string;
        createdAt: string;
        updatedAt: string;
    }[];
}
/**
 * Response when unregistering a domain from Apple Pay
 */
export interface UnregisterApplePayDomainResponse {
    status: boolean;
    message: string;
    data: {
        domainName: string;
        deleted: boolean;
    };
}
