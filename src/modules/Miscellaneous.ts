import { AxiosInstance } from 'axios';
import { PaystackAPIError } from '../utils/AppError';
import { ListBanksQuery, ListBanksResponse, ListCountriesResponse } from '../types';

class Miscellaneous {
  private http: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.http = axiosInstance;
  }

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
  listBanks = async (query: ListBanksQuery): Promise<ListBanksResponse> => {
    try {
      const { data } = await this.http.get<ListBanksResponse>('/bank', { params: query });
      return data;
    } catch (error: any) {
      throw new PaystackAPIError(error.response?.data?.message || error.message);
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
  listCountries = async (): Promise<ListCountriesResponse> => {
    try {
      const { data } = await this.http.get<ListCountriesResponse>('/country');
      return data;
    } catch (error: any) {
      throw new PaystackAPIError(error.response?.data?.message || error.message);
    }
  };
}

export default Miscellaneous;
