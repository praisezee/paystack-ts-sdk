"use strict";
// utils/queryBuilder.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildQueryParams = void 0;
const buildQueryParams = (params) => {
    const query = Object.entries(params)
        .filter(([_, value]) => value !== undefined && value !== null)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join('&');
    return query ? `?${query}` : '';
};
exports.buildQueryParams = buildQueryParams;
