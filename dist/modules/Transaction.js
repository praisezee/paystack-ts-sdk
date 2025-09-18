"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AppError_1 = require("../utils/AppError");
class Transactions {
    constructor(axiosInstance) {
        this.initialize = async (body) => {
            try {
                const { data } = await this.http.post('/transaction/initialize', body);
                return data;
            }
            catch (error) {
                throw new AppError_1.PaystackAPIError(error.response?.data?.message || error.message);
            }
        };
        this.verify = async (reference) => {
            try {
                const { data } = await this.http.get(`/transaction/verify/${reference}`);
                return data;
            }
            catch (error) {
                throw new AppError_1.PaystackAPIError(error.response?.data?.message || error.message);
            }
        };
        this.list = async (query) => {
            try {
                const { data } = await this.http.get('/transaction', {
                    params: query,
                });
                return data;
            }
            catch (error) {
                throw new AppError_1.PaystackAPIError(error.response?.data?.message || error.message);
            }
        };
        this.fetch = async (id) => {
            try {
                const { data } = await this.http.get(`/transaction/${id}`);
                return data;
            }
            catch (error) {
                throw new AppError_1.PaystackAPIError(error.response?.data?.message || error.message);
            }
        };
        this.chargeAuthorization = async (body) => {
            try {
                const { data } = await this.http.post('/transaction/charge_authorization', body);
                return data;
            }
            catch (error) {
                throw new AppError_1.PaystackAPIError(error.response?.data?.message || error.message);
            }
        };
        this.partialDebit = async (body) => {
            try {
                const { data } = await this.http.post('/transaction/partial_debit', body);
                return data;
            }
            catch (error) {
                throw new AppError_1.PaystackAPIError(error.response?.data?.message || error.message);
            }
        };
        this.totals = async (query) => {
            try {
                const { data } = await this.http.get('/transaction/totals', {
                    params: query,
                });
                return data;
            }
            catch (error) {
                throw new AppError_1.PaystackAPIError(error.response?.data?.message || error.message);
            }
        };
        this.export = async (query) => {
            try {
                const { data } = await this.http.get('/transaction/export', {
                    params: query,
                });
                return data;
            }
            catch (error) {
                throw new AppError_1.PaystackAPIError(error.response?.data?.message || error.message);
            }
        };
        this.http = axiosInstance;
    }
}
exports.default = Transactions;
