import axios, { AxiosInstance } from 'axios';
import Customer from './modules/customer';

class Paystack {
  private http: AxiosInstance;
  public customers: Customer;
  constructor(secretKey: string) {
    this.http = axios.create({
      baseURL: 'https://api.paystack.co',
      headers: {
        Authorization: `Bearer ${secretKey}`,
        'Content-Type': 'application/json',
      },
    });

    this.customers = new Customer(this.http);
  }
}

export { Paystack };
export default Paystack;
