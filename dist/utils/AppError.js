"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaystackAPIError = exports.AppError = void 0;
class AppError extends Error {
    constructor(message, statusCode = 500) {
        super(message);
        this.statusCode = statusCode;
        this.isOperational = true;
        Object.setPrototypeOf(this, new.target.prototype);
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.AppError = AppError;
class PaystackAPIError extends AppError {
    constructor(message) {
        super(`Paystack API Error: ${message}`, 502);
    }
}
exports.PaystackAPIError = PaystackAPIError;
