"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Charges {
    constructor(client) {
        /**
         * Create a new charge
         * @param body - Charge request payload
         * @returns {Promise<ChargeData>}
         */
        this.createCharge = async (body) => {
            try {
                const response = await this.client.post('/charge', body);
                return response.data.data;
            }
            catch (error) {
                throw new Error(error.response?.data?.message || error.message);
            }
        };
        /**
         * Submit PIN for ongoing charge
         * @param pin - 4-digit PIN
         * @param reference - Transaction reference
         * @returns {Promise<ChargeData>}
         */
        this.submitPin = async (pin, reference) => {
            try {
                const response = await this.client.post('/charge/submit_pin', { pin, reference });
                return response.data.data;
            }
            catch (error) {
                throw new Error(error.response?.data?.message || error.message);
            }
        };
        /**
         * Submit OTP for ongoing charge
         * @param otp - OTP code
         * @param reference - Transaction reference
         * @returns {Promise<ChargeData>}
         */
        this.submitOtp = async (otp, reference) => {
            try {
                const response = await this.client.post('/charge/submit_otp', { otp, reference });
                return response.data.data;
            }
            catch (error) {
                throw new Error(error.response?.data?.message || error.message);
            }
        };
        /**
         * Submit phone for ongoing charge
         * @param phone - Phone number
         * @param reference - Transaction reference
         * @returns {Promise<ChargeData>}
         */
        this.submitPhone = async (phone, reference) => {
            try {
                const response = await this.client.post('/charge/submit_phone', { phone, reference });
                return response.data.data;
            }
            catch (error) {
                throw new Error(error.response?.data?.message || error.message);
            }
        };
        /**
         * Submit birthday for ongoing charge
         * @param birthday - Birthday in YYYY-MM-DD format
         * @param reference - Transaction reference
         * @returns {Promise<ChargeData>}
         */
        this.submitBirthday = async (birthday, reference) => {
            try {
                const response = await this.client.post('/charge/submit_birthday', { birthday, reference });
                return response.data.data;
            }
            catch (error) {
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
        this.submitAddress = async (reference, address, city, state, zipcode) => {
            try {
                const response = await this.client.post('/charge/submit_address', {
                    reference,
                    address,
                    city,
                    state,
                    zip_code: zipcode,
                });
                return response.data.data;
            }
            catch (error) {
                throw new Error(error.response?.data?.message || error.message);
            }
        };
        /**
         * Check status of a pending charge
         * @param reference - Transaction reference
         * @returns {Promise<ChargeData>}
         */
        this.checkPendingCharge = async (reference) => {
            try {
                const response = await this.client.get(`/charge/${reference}`);
                return response.data.data;
            }
            catch (error) {
                throw new Error(error.response?.data?.message || error.message);
            }
        };
        this.client = client;
    }
}
exports.default = Charges;
