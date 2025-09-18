import { AxiosInstance } from 'axios';
import { ApplePayDomainRequest, RegisterApplePayDomainResponse, UnregisterApplePayDomainResponse, ListApplePayDomainsResponse } from '../types';
declare class ApplePay {
    private axiosInstance;
    private http;
    constructor(axiosInstance: AxiosInstance);
    /**
     * Register a new domain for Apple Pay on your Paystack integration.
     *
     * @param data - The domain name to register.
     * @returns The registered domain details.
     * @throws {PaystackAPIError} If the request fails or API returns an error.
     *
     * @example
     * ```ts
     * const domain = await paystack.applePay.registerDomain({
     *   domainName: 'example.com',
     * });
     * console.log(domain.domainName);
     * ```
     */
    registerDomain: (data: ApplePayDomainRequest) => Promise<RegisterApplePayDomainResponse["data"]>;
    /**
     * Retrieve all registered Apple Pay domains.
     *
     * @returns An array of registered domains.
     * @throws {PaystackAPIError} If the request fails or API returns an error.
     *
     * @example
     * ```ts
     * const domains = await paystack.applePay.listDomains();
     * domains.forEach(d => console.log(d.domainName));
     * ```
     */
    listDomains: () => Promise<ListApplePayDomainsResponse["data"]>;
    /**
     * Unregister a domain from Apple Pay.
     *
     * @param data - The domain name to unregister.
     * @returns Confirmation of the unregistered domain.
     * @throws {PaystackAPIError} If the request fails or API returns an error.
     *
     * @example
     * ```ts
     * const result = await paystack.applePay.unregisterDomain({
     *   domainName: 'example.com',
     * });
     * console.log(result.deleted); // true
     * ```
     */
    unregisterDomain: (data: ApplePayDomainRequest) => Promise<UnregisterApplePayDomainResponse["data"]>;
}
export default ApplePay;
