export declare class AppError extends Error {
    statusCode: number;
    isOperational: true;
    constructor(message: string, statusCode?: number);
}
export declare class PaystackAPIError extends AppError {
    constructor(message: string);
}
