import { AxiosInstance } from 'axios';
import { PaystackAPIError } from '../utils/AppError';
import {
  PaystackResponse,
  SendTerminalEventRequest,
  SendTerminalEventResponse,
  FetchTerminalEventResponse,
  TerminalStatusResponse,
  ListTerminalsQuery,
  ListTerminalsResponse,
  TerminalResponse,
  UpdateTerminalRequest,
  CommissionTerminalRequest,
  DecommissionTerminalRequest,
} from '../types';

/**
 * The Terminal API allows you to build delightful in-person payment experiences.
 * This module provides methods to interact with Paystack Terminal endpoints.
 */
class Terminal {
  private http: AxiosInstance;

  constructor(http: AxiosInstance) {
    this.http = http;
  }

  /**
   * Send an event from your application to a Paystack Terminal.
   * @param terminalId - The ID of the Terminal
   * @param payload - The event payload to send
   * @returns The event response
   */
  async sendEvent(
    terminalId: string,
    payload: SendTerminalEventRequest
  ): Promise<PaystackResponse<SendTerminalEventResponse>> {
    try {
      const res = await this.http.post(`/terminal/${terminalId}/event`, payload);
      return res.data;
    } catch (error: any) {
      throw new PaystackAPIError(error.response?.data?.message || error.message);
    }
  }

  /**
   * Check the status of an event sent to a Terminal.
   * @param terminalId - The ID of the Terminal
   * @param eventId - The ID of the event
   * @returns The event delivery status
   */
  async fetchEventStatus(
    terminalId: string,
    eventId: string
  ): Promise<PaystackResponse<FetchTerminalEventResponse>> {
    try {
      const res = await this.http.get(`/terminal/${terminalId}/event/${eventId}`);
      return res.data;
    } catch (error: any) {
      throw new PaystackAPIError(error.response?.data?.message || error.message);
    }
  }

  /**
   * Check the availability of a Terminal before sending an event.
   * @param terminalId - The ID of the Terminal
   * @returns Terminal availability status
   */
  async fetchStatus(terminalId: string): Promise<PaystackResponse<TerminalStatusResponse>> {
    try {
      const res = await this.http.get(`/terminal/${terminalId}/presence`);
      return res.data;
    } catch (error: any) {
      throw new PaystackAPIError(error.response?.data?.message || error.message);
    }
  }

  /**
   * List the Terminals available on your integration.
   * @param query - Optional filters for pagination
   * @returns List of Terminals and pagination meta
   */
  async list(query?: ListTerminalsQuery): Promise<PaystackResponse<ListTerminalsResponse>> {
    try {
      const res = await this.http.get('/terminal', { params: query });
      return res.data;
    } catch (error: any) {
      throw new PaystackAPIError(error.response?.data?.message || error.message);
    }
  }

  /**
   * Get the details of a Terminal.
   * @param terminalId - The ID of the Terminal
   * @returns Terminal details
   */
  async fetch(terminalId: string): Promise<PaystackResponse<TerminalResponse>> {
    try {
      const res = await this.http.get(`/terminal/${terminalId}`);
      return res.data;
    } catch (error: any) {
      throw new PaystackAPIError(error.response?.data?.message || error.message);
    }
  }

  /**
   * Update the details of a Terminal.
   * @param terminalId - The ID of the Terminal
   * @param payload - Update fields (name, address)
   * @returns Success response
   */
  async update(
    terminalId: string,
    payload: UpdateTerminalRequest
  ): Promise<PaystackResponse<null>> {
    try {
      const res = await this.http.put(`/terminal/${terminalId}`, payload);
      return res.data;
    } catch (error: any) {
      throw new PaystackAPIError(error.response?.data?.message || error.message);
    }
  }

  /**
   * Activate your debug device by linking it to your integration.
   * @param payload - Device serial number
   * @returns Success response
   */
  async commission(payload: CommissionTerminalRequest): Promise<PaystackResponse<null>> {
    try {
      const res = await this.http.post('/terminal/commission_device', payload);
      return res.data;
    } catch (error: any) {
      throw new PaystackAPIError(error.response?.data?.message || error.message);
    }
  }

  /**
   * Unlink your debug device from your integration.
   * @param payload - Device serial number
   * @returns Success response
   */
  async decommission(payload: DecommissionTerminalRequest): Promise<PaystackResponse<null>> {
    try {
      const res = await this.http.post('/terminal/decommission_device', payload);
      return res.data;
    } catch (error: any) {
      throw new PaystackAPIError(error.response?.data?.message || error.message);
    }
  }
}

export default Terminal;
