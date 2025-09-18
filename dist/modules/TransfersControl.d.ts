import { AxiosInstance } from 'axios';
import { Balance, BalanceLedger, BalanceLedgerMeta, ResendOtpRequest, ResendOtpResponse, DisableOtpResponse, FinalizeDisableOtpRequest, FinalizeDisableOtpResponse, EnableOtpResponse } from '../types';
declare class TransfersControl {
    private http;
    constructor(axiosInstance: AxiosInstance);
    /** Fetch available balance on your integration. */
    fetchBalance: () => Promise<Balance[]>;
    /** Fetch all pay-ins and pay-outs that occurred on your integration. */
    fetchBalanceLedger: () => Promise<{
        data: BalanceLedger[];
        meta: BalanceLedgerMeta;
    }>;
    /** Resend OTP for a transfer. */
    resendOtp: (payload: ResendOtpRequest) => Promise<ResendOtpResponse>;
    /** Disable OTP requirement for transfers. */
    disableOtp: () => Promise<DisableOtpResponse>;
    /** Finalize disabling OTP requirement. */
    finalizeDisableOtp: (payload: FinalizeDisableOtpRequest) => Promise<FinalizeDisableOtpResponse>;
    /** Enable OTP requirement for transfers. */
    enableOtp: () => Promise<EnableOtpResponse>;
}
export default TransfersControl;
