import { AxiosInstance } from 'axios';
import { ListBanksQuery, ListBanksResponse, ListCountriesResponse } from '../types';
declare class Miscellaneous {
    private http;
    constructor(axiosInstance: AxiosInstance);
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
    listBanks: (query: ListBanksQuery) => Promise<ListBanksResponse>;
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
    listCountries: () => Promise<ListCountriesResponse>;
}
export default Miscellaneous;
