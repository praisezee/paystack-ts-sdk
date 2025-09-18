"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AppError_1 = require("../utils/AppError");
class TransfersControl {
    constructor(axiosInstance) {
        /** Fetch available balance on your integration. */
        this.fetchBalance = async () => {
            try {
                const { data: response } = await this.http.get('/balance');
                return response.data;
            }
            catch (error) {
                throw new AppError_1.PaystackAPIError(error.response?.data?.message || error.message);
            }
        };
        /** Fetch all pay-ins and pay-outs that occurred on your integration. */
        this.fetchBalanceLedger = async () => {
            try {
                const { data: response } = await this.http.get('/balance/ledger');
                return {
                    data: response.data,
                    meta: response.meta,
                };
            }
            catch (error) {
                throw new AppError_1.PaystackAPIError(error.response?.data?.message || error.message);
            }
        };
        /** Resend OTP for a transfer. */
        this.resendOtp = async (payload) => {
            try {
                const { data: response } = await this.http.post('/transfer/resend_otp', payload);
                return response;
            }
            catch (error) {
                throw new AppError_1.PaystackAPIError(error.response?.data?.message || error.message);
            }
        };
        /** Disable OTP requirement for transfers. */
        this.disableOtp = async () => {
            try {
                const { data: response } = await this.http.post('/transfer/disable_otp');
                return response;
            }
            catch (error) {
                throw new AppError_1.PaystackAPIError(error.response?.data?.message || error.message);
            }
        };
        /** Finalize disabling OTP requirement. */
        this.finalizeDisableOtp = async (payload) => {
            try {
                const { data: response } = await this.http.post('/transfer/disable_otp_finalize', payload);
                return response;
            }
            catch (error) {
                throw new AppError_1.PaystackAPIError(error.response?.data?.message || error.message);
            }
        };
        /** Enable OTP requirement for transfers. */
        this.enableOtp = async () => {
            try {
                const { data: response } = await this.http.post('/transfer/enable_otp');
                return response;
            }
            catch (error) {
                throw new AppError_1.PaystackAPIError(error.response?.data?.message || error.message);
            }
        };
        this.http = axiosInstance;
    }
}
exports.default = TransfersControl;
