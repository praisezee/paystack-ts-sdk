import { AxiosInstance } from 'axios';
import {
  ApplePayDomainRequest,
  RegisterApplePayDomainResponse,
  UnregisterApplePayDomainResponse,
  ListApplePayDomainsResponse,
} from '../types';
import { PaystackAPIError } from '../utils/AppError';

class ApplePay {
  private http: AxiosInstance;
  constructor(private axiosInstance: AxiosInstance) {
    this.http = this.axiosInstance;
  }

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
  registerDomain = async (
    data: ApplePayDomainRequest
  ): Promise<RegisterApplePayDomainResponse['data']> => {
    try {
      const { data: response }: { data: RegisterApplePayDomainResponse } = await this.http.post(
        '/apple-pay/domain',
        data
      );

      if (!response.status) {
        throw new PaystackAPIError(response.message || 'Failed to register domain');
      }

      return response.data;
    } catch (error: any) {
      throw new PaystackAPIError(
        error.response?.data?.message || error.message || 'Error registering domain'
      );
    }
  };

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
  listDomains = async (): Promise<ListApplePayDomainsResponse['data']> => {
    try {
      const { data: response }: { data: ListApplePayDomainsResponse } =
        await this.http.get('/apple-pay/domain');

      if (!response.status) {
        throw new PaystackAPIError(response.message || 'Failed to fetch domains');
      }

      return response.data;
    } catch (error: any) {
      throw new PaystackAPIError(
        error.response?.data?.message || error.message || 'Error fetching domains'
      );
    }
  };

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
  unregisterDomain = async (
    data: ApplePayDomainRequest
  ): Promise<UnregisterApplePayDomainResponse['data']> => {
    try {
      const { data: response }: { data: UnregisterApplePayDomainResponse } = await this.http.delete(
        '/apple-pay/domain',
        { data }
      );

      if (!response.status) {
        throw new PaystackAPIError(response.message || 'Failed to unregister domain');
      }

      return response.data;
    } catch (error: any) {
      throw new PaystackAPIError(
        error.response?.data?.message || error.message || 'Error unregistering domain'
      );
    }
  };
}

export default ApplePay;
