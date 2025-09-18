import { AxiosInstance } from 'axios';
import { ChargeData } from '../types';
declare class Charges {
    private client;
    constructor(client: AxiosInstance);
    /**
     * Create a new charge
     * @param body - Charge request payload
     * @returns {Promise<ChargeData>}
     */
    createCharge: (body: Record<string, any>) => Promise<ChargeData>;
    /**
     * Submit PIN for ongoing charge
     * @param pin - 4-digit PIN
     * @param reference - Transaction reference
     * @returns {Promise<ChargeData>}
     */
    submitPin: (pin: string, reference: string) => Promise<ChargeData>;
    /**
     * Submit OTP for ongoing charge
     * @param otp - OTP code
     * @param reference - Transaction reference
     * @returns {Promise<ChargeData>}
     */
    submitOtp: (otp: string, reference: string) => Promise<ChargeData>;
    /**
     * Submit phone for ongoing charge
     * @param phone - Phone number
     * @param reference - Transaction reference
     * @returns {Promise<ChargeData>}
     */
    submitPhone: (phone: string, reference: string) => Promise<ChargeData>;
    /**
     * Submit birthday for ongoing charge
     * @param birthday - Birthday in YYYY-MM-DD format
     * @param reference - Transaction reference
     * @returns {Promise<ChargeData>}
     */
    submitBirthday: (birthday: string, reference: string) => Promise<ChargeData>;
    /**
     * Submit address for ongoing charge
     * @param reference - Transaction reference
     * @param address - Address
     * @param city - City
     * @param state - State
     * @param zipcode - Zip code
     * @returns {Promise<ChargeData>}
     */
    submitAddress: (reference: string, address: string, city: string, state: string, zipcode: string) => Promise<ChargeData>;
    /**
     * Check status of a pending charge
     * @param reference - Transaction reference
     * @returns {Promise<ChargeData>}
     */
    checkPendingCharge: (reference: string) => Promise<ChargeData>;
}
export default Charges;
