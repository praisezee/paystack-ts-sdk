"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AppError_1 = require("../utils/AppError");
class Miscellaneous {
    constructor(axiosInstance) {
        /**
         * List supported banks
         *
         * @param query - Query parameters to filter banks
         * @returns List of banks with optional pagination
         *
         * @example
         * ```ts
         * const banks = await paystack.misc.listBanks({ country: 'nigeria', perPage: 10 });
         * console.log(banks.data[0].name);
         * ```
         */
        this.listBanks = async (query) => {
            try {
                const { data } = await this.http.get('/bank', { params: query });
                return data;
            }
            catch (error) {
                throw new AppError_1.PaystackAPIError(error.response?.data?.message || error.message);
            }
        };
        /**
         * List supported countries
         *
         * @returns List of countries Paystack supports
         *
         * @example
         * ```ts
         * const countries = await paystack.misc.listCountries();
         * console.log(countries.data[0].name);
         * ```
         */
        this.listCountries = async () => {
            try {
                const { data } = await this.http.get('/country');
                return data;
            }
            catch (error) {
                throw new AppError_1.PaystackAPIError(error.response?.data?.message || error.message);
            }
        };
        this.http = axiosInstance;
    }
}
exports.default = Miscellaneous;
