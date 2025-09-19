"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRefence = exports.formatAmount = void 0;
const crypto_1 = __importDefault(require("crypto"));
/**
 * @description Formats amount to Paystack subunit
 * @param amount - amount in Naira
 * @returns amount in kobo
 * @example
 * formatAmount(500) // returns 50000
 */
const formatAmount = (amount) => amount * 100;
exports.formatAmount = formatAmount;
const generateRefence = (prefix) => {
    return `${prefix?.toUpperCase() || 'REF_'}${Date.now()}_${crypto_1.default.randomBytes(4).toString('hex').toUpperCase()}`;
};
exports.generateRefence = generateRefence;
