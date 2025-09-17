import { AxiosInstance } from 'axios';
import {
  CreateCustomerRequest,
  CreateCustomerResponse,
  CustomerResponse,
  CustomersListResponse,
  PaystackResponse,
  ValidateCustomerRequest,
} from '../types';
import { PaystackAPIError } from '../utils/AppError';

class Customer {
  private http: AxiosInstance;
  constructor(private axiosInstance: AxiosInstance) {
    this.http = this.axiosInstance;
  }

  /**
   * Creates a customer in Paystack
   * @param email - Customer email address
   * @param first_name - Customer’s first name
   * @param last_name - Customer’s last name
   * @param phone - Customer’s phone number
   * @returns A Paystack API response promise
   */
  createCustomer = async (data: CreateCustomerRequest): Promise<CreateCustomerResponse> => {
    try {
      const { data: response } = await this.http.post('/customer', data);
      if (!response.status) {
        throw new PaystackAPIError(response.data.message || 'Failed to create customer');
      }
      return response;
    } catch (error: any) {
      throw new PaystackAPIError(
        `Failed to create new customer: ${error.response?.data?.message || error.message}`
      );
    }
  };

  /**
   * List all Paystack created customer
   * @returns A Paystack API response promise
   */

  listCustomer = async (): Promise<CustomersListResponse> => {
    try {
      const response = await this.http.get('/customer');
      return response.data as CustomersListResponse;
    } catch (error: any) {
      throw new PaystackAPIError(error.response?.data?.message || error.message);
    }
  };

  /**
   * Gets a single Paystack customer
   * @param customer - Customer email address or customer code
   * @returns A Paystack API response promise for a particula customer
   */
  getCustomer = async (customer: string): Promise<CustomerResponse> => {
    try {
      const response = await this.http.get(`/customer/${customer}`);
      return response.data as CustomerResponse;
    } catch (error: any) {
      throw new PaystackAPIError(error.response?.data?.message || error.message);
    }
  };
  /**
   * Validates a customer in Paystack
   * @param customer - Customer paystack code
   * @param data - Customer information {
      first_name: string;
  last_name: string;
  type: string; Predefined types of identification. Only bank_account is supported at the moment
  value: string; Customer's identification number
  country: string; 2 letter country code of identification issuer
  bvn: string;
  bank_code: string;
  account_number: string;
  middle_name?: string;
    }
   * @returns A Paystack API response promise for vaidating paystack user
   */
  validateCustomer = async (
    customer: string,
    data: ValidateCustomerRequest
  ): Promise<PaystackResponse> => {
    try {
      const response = await this.http.post(`/customer/${customer}/identification`, data);
      if (!response.data.status) {
        throw new PaystackAPIError(response.data.message || 'Failed to validate customer');
      }
      return response.data as PaystackResponse;
    } catch (error: any) {
      throw new PaystackAPIError(error.response?.data?.message || error.message);
    }
  };
}

export default Customer;
