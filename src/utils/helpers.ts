import crypto from 'crypto';
/**
 * @description Formats amount to Paystack subunit
 * @param amount - amount in Naira
 * @returns amount in kobo
 * @example
 * formatAmount(500) // returns 50000
 */
export const formatAmount = (amount: number) => amount * 100;

export const generateRefence = (prefix?: string) => {
  return `${prefix?.toUpperCase() || 'REF_'}${Date.now()}_${crypto.randomBytes(4).toString('hex').toUpperCase()}`;
};
