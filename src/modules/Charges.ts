import { AxiosInstance } from 'axios';
import { ChargeData } from '../types';

class Charges {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  /**
   * Create a new charge
   * @param body - Charge request payload
   * @returns {Promise<ChargeData>}
   */
  createCharge = async (body: Record<string, any>): Promise<ChargeData> => {
    try {
      const response = await this.client.post('/charge', body);
      return response.data.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || error.message);
    }
  };

  /**
   * Submit PIN for ongoing charge
   * @param pin - 4-digit PIN
   * @param reference - Transaction reference
   * @returns {Promise<ChargeData>}
   */
  submitPin = async (pin: string, reference: string): Promise<ChargeData> => {
    try {
      const response = await this.client.post('/charge/submit_pin', { pin, reference });
      return response.data.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || error.message);
    }
  };

  /**
   * Submit OTP for ongoing charge
   * @param otp - OTP code
   * @param reference - Transaction reference
   * @returns {Promise<ChargeData>}
   */
  submitOtp = async (otp: string, reference: string): Promise<ChargeData> => {
    try {
      const response = await this.client.post('/charge/submit_otp', { otp, reference });
      return response.data.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || error.message);
    }
  };

  /**
   * Submit phone for ongoing charge
   * @param phone - Phone number
   * @param reference - Transaction reference
   * @returns {Promise<ChargeData>}
   */
  submitPhone = async (phone: string, reference: string): Promise<ChargeData> => {
    try {
      const response = await this.client.post('/charge/submit_phone', { phone, reference });
      return response.data.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || error.message);
    }
  };

  /**
   * Submit birthday for ongoing charge
   * @param birthday - Birthday in YYYY-MM-DD format
   * @param reference - Transaction reference
   * @returns {Promise<ChargeData>}
   */
  submitBirthday = async (birthday: string, reference: string): Promise<ChargeData> => {
    try {
      const response = await this.client.post('/charge/submit_birthday', { birthday, reference });
      return response.data.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || error.message);
    }
  };

  /**
   * Submit address for ongoing charge
   * @param reference - Transaction reference
   * @param address - Address
   * @param city - City
   * @param state - State
   * @param zipcode - Zip code
   * @returns {Promise<ChargeData>}
   */
  submitAddress = async (
    reference: string,
    address: string,
    city: string,
    state: string,
    zipcode: string
  ): Promise<ChargeData> => {
    try {
      const response = await this.client.post('/charge/submit_address', {
        reference,
        address,
        city,
        state,
        zip_code: zipcode,
      });
      return response.data.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || error.message);
    }
  };

  /**
   * Check status of a pending charge
   * @param reference - Transaction reference
   * @returns {Promise<ChargeData>}
   */
  checkPendingCharge = async (reference: string): Promise<ChargeData> => {
    try {
      const response = await this.client.get(`/charge/${reference}`);
      return response.data.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || error.message);
    }
  };
}

export default Charges;
