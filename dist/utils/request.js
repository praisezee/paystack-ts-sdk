"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleAxiosError = handleAxiosError;
function handleAxiosError(error) {
    if (error.isAxiosError) {
        const axiosError = error;
        throw {
            status: false,
            message: axiosError.message,
            data: axiosError.response?.data,
        };
    }
    throw error;
}
