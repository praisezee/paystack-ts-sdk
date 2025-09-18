// utils/request.ts
import { AxiosError } from 'axios';
import { PaystackResponse } from '../types';

export function handleAxiosError(error: unknown): never {
  if ((error as AxiosError).isAxiosError) {
    const axiosError = error as AxiosError;
    throw {
      status: false,
      message: axiosError.message,
      data: axiosError.response?.data,
    } as PaystackResponse;
  }
  throw error;
}
