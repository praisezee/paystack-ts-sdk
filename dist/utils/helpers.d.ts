/**
 * @description Formats amount to Paystack subunit
 * @param amount - amount in Naira
 * @returns amount in kobo
 * @example
 * formatAmount(500) // returns 50000
 */
export declare const formatAmount: (amount: number) => number;
export declare const generateRefence: (prefix?: string) => string;
