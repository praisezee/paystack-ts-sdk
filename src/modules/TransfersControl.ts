import { AxiosInstance } from 'axios';
import { PaystackAPIError } from '../utils/AppError';
import {
  Balance,
  BalanceLedger,
  BalanceLedgerMeta,
  ResendOtpRequest,
  ResendOtpResponse,
  DisableOtpResponse,
  FinalizeDisableOtpRequest,
  FinalizeDisableOtpResponse,
  EnableOtpResponse,
} from '../types';

class TransfersControl {
  private http: AxiosInstance;
  constructor(axiosInstance: AxiosInstance) {
    this.http = axiosInstance;
  }

  /** Fetch available balance on your integration. */
  fetchBalance = async (): Promise<Balance[]> => {
    try {
      const { data: response } = await this.http.get<{
        status: boolean;
        message: string;
        data: Balance[];
      }>('/balance');
      return response.data;
    } catch (error: any) {
      throw new PaystackAPIError(error.response?.data?.message || error.message);
    }
  };

  /** Fetch all pay-ins and pay-outs that occurred on your integration. */
  fetchBalanceLedger = async (): Promise<{ data: BalanceLedger[]; meta: BalanceLedgerMeta }> => {
    try {
      const { data: response } = await this.http.get<{
        status: boolean;
        message: string;
        data: BalanceLedger[];
        meta: BalanceLedgerMeta;
      }>('/balance/ledger');
      return {
        data: response.data,
        meta: response.meta,
      };
    } catch (error: any) {
      throw new PaystackAPIError(error.response?.data?.message || error.message);
    }
  };

  /** Resend OTP for a transfer. */
  resendOtp = async (payload: ResendOtpRequest): Promise<ResendOtpResponse> => {
    try {
      const { data: response } = await this.http.post<{ status: boolean; message: string }>(
        '/transfer/resend_otp',
        payload
      );
      return response;
    } catch (error: any) {
      throw new PaystackAPIError(error.response?.data?.message || error.message);
    }
  };

  /** Disable OTP requirement for transfers. */
  disableOtp = async (): Promise<DisableOtpResponse> => {
    try {
      const { data: response } = await this.http.post<{ status: boolean; message: string }>(
        '/transfer/disable_otp'
      );
      return response;
    } catch (error: any) {
      throw new PaystackAPIError(error.response?.data?.message || error.message);
    }
  };

  /** Finalize disabling OTP requirement. */
  finalizeDisableOtp = async (
    payload: FinalizeDisableOtpRequest
  ): Promise<FinalizeDisableOtpResponse> => {
    try {
      const { data: response } = await this.http.post<{ status: boolean; message: string }>(
        '/transfer/disable_otp_finalize',
        payload
      );
      return response;
    } catch (error: any) {
      throw new PaystackAPIError(error.response?.data?.message || error.message);
    }
  };

  /** Enable OTP requirement for transfers. */
  enableOtp = async (): Promise<EnableOtpResponse> => {
    try {
      const { data: response } = await this.http.post<{ status: boolean; message: string }>(
        '/transfer/enable_otp'
      );
      return response;
    } catch (error: any) {
      throw new PaystackAPIError(error.response?.data?.message || error.message);
    }
  };
}

export default TransfersControl;
