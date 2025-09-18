export class AppError extends Error {
  public statusCode: number;
  public isOperational: true;
  constructor(message: string, statusCode: number = 500) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;

    Object.setPrototypeOf(this, new.target.prototype);

    Error.captureStackTrace(this, this.constructor);
  }
}

export class PaystackAPIError extends AppError {
  constructor(message: string) {
    super(`Paystack API Error: ${message}`, 502);
  }
}
