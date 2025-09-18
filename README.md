# Paystack API Integration Module

This project provides TypeScript modules for integrating with Paystack APIs, including Subscriptions, Charges, Transfer Recipients, Direct Debit, Virtual Terminals, and Customers. The modules use Axios for HTTP requests and are strongly typed for safer and cleaner code.

---

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
   - [Customers](#customers)
   - [Subscriptions](#subscriptions)
   - [Charges](#charges)
   - [Transfer Recipients](#transfer-recipients)
   - [Virtual Terminals](#virtual-terminals)
3. [Type Definitions](#type-definitions)
4. [Utilities and Helpers](#utilities-and-helpers)
5. [References](#references)

---

## Installation

Install via npm:

```bash
npm install axios
```

Or if you are publishing your own module:

```bash
npm publish --access public
```

> **Note:** Make sure your npm scope exists before publishing to avoid `scope not found` errors.

---

## Usage

### Customers

#### Create Customer

```ts
import { CreateCustomerRequest, CreatedCustomerType } from './customer';
import axios from 'axios';

const client = axios.create({
  baseURL: 'https://api.paystack.co',
  headers: {
    Authorization: 'Bearer YOUR_SECRET_KEY',
    'Content-Type': 'application/json',
  },
});

const createCustomer = async (customer: CreateCustomerRequest) => {
  const response = await client.post<CreatedCustomerType>('/customer', customer);
  return response.data;
};
```

#### Fetch Customer

```ts
import { CreatedCustomerType } from './customer';

const fetchCustomer = async (customerId: string) => {
  const response = await client.get<CreatedCustomerType>(`/customer/${customerId}`);
  return response.data;
};
```

---

### Subscriptions

```ts
import { CreateSubscriptionRequest, SubscriptionResponse } from './subscription';

const createSubscription = async (subscription: CreateSubscriptionRequest) => {
  const response = await client.post<SubscriptionResponse>('/subscription', subscription);
  return response.data;
};
```

---

### Charges

```ts
import { CreateChargeRequest, ChargeResponse } from './charges';

const createCharge = async (charge: CreateChargeRequest) => {
  const response = await client.post<ChargeResponse>('/charge', charge);
  return response.data;
};
```

---

### Transfer Recipients

```ts
import { CreateTransferRecipientRequest, TransferRecipientResponse } from './transferRecipient';

const createRecipient = async (recipient: CreateTransferRecipientRequest) => {
  const response = await client.post<TransferRecipientResponse>('/transferrecipient', recipient);
  return response.data;
};
```

---

### Virtual Terminals

```ts
import { CreateVirtualTerminalRequest, CreateVirtualTerminalResponse } from './virtualTerminal';

const createVirtualTerminal = async (terminal: CreateVirtualTerminalRequest) => {
  const response = await client.post<CreateVirtualTerminalResponse>('/virtual-terminal', terminal);
  return response.data;
};
```

---

## Type Definitions

All modules provide strong typing for requests and responses.

Example: `customer.ts`

```ts
export interface CreateCustomerRequest<T = any> {
  email: string;
  first_name: string;
  last_name: string;
  phone?: string;
  metadata?: T;
}

export interface CreatedCustomerType {
  email: string;
  integration: number;
  first_name: string;
  last_name: string;
  customer_code: string;
  phone: string;
  metadata?: Record<string, any>;
}

export interface PaystackResponse<T = any, Z = any> {
  status: boolean;
  message: string;
  data?: T;
  meta?: Z;
}
```

---

## Utilities and Helpers

- Use AxiosInstance for HTTP requests.
- Centralized constants and helper functions can be added in `/utils` folder.
- All functions use arrow function syntax and are documented with JSDoc.

Example:

```ts
/**
 * @description Formats amount to Paystack subunit
 * @param amount - amount in Naira
 * @returns amount in kobo
 * @example
 * formatAmount(500) // returns 50000
 */
export const formatAmount = (amount: number) => amount * 100;
```

---

## References

- [Paystack API Documentation](https://paystack.com/docs/api)
- [Axios Documentation](https://axios-http.com/docs/intro)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

> All modules follow consistent patterns for request and response typing, arrow function usage, and JSDoc documentation for clear integration and maintenance.
