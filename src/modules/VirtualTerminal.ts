import { AxiosInstance } from 'axios';
import {
  CreateVirtualTerminalRequest,
  CreateVirtualTerminalResponse,
  ListVirtualTerminalsQuery,
  ListVirtualTerminalsResponse,
  FetchVirtualTerminalResponse,
  UpdateVirtualTerminalRequest,
  UpdateVirtualTerminalResponse,
  DeactivateVirtualTerminalResponse,
  AssignDestinationRequest,
  AssignDestinationResponse,
  UnassignDestinationRequest,
  UnassignDestinationResponse,
  AddSplitCodeRequest,
  AddSplitCodeResponse,
  RemoveSplitCodeRequest,
  RemoveSplitCodeResponse,
  PaystackResponse,
} from '../types';
import { PaystackAPIError } from '../utils/AppError';

/**
 * The Virtual Terminal API allows you to manage Paystack's virtual terminals.
 * You can create, update, deactivate terminals, assign/unassign destinations,
 * and manage split codes.
 */
class VirtualTerminal {
  private http: AxiosInstance;

  constructor(http: AxiosInstance) {
    this.http = http;
  }

  /**
   * Create a new Virtual Terminal.
   * @param data - Terminal details
   * @returns The created Virtual Terminal details
   */
  async create(data: CreateVirtualTerminalRequest): Promise<CreateVirtualTerminalResponse> {
    try {
      const res = await this.http.post<PaystackResponse<CreateVirtualTerminalResponse>>(
        '/virtual_terminal',
        data
      );

      if (!res.data.status) {
        throw new PaystackAPIError(res.data.message || 'Failed to create virtual terminal');
      }

      return res.data.data!;
    } catch (error: any) {
      throw new PaystackAPIError(
        `Failed to create virtual terminal: ${error.response?.data?.message || error.message}`
      );
    }
  }

  /**
   * List all Virtual Terminals.
   * @param query - Optional filters
   * @returns A list of Virtual Terminals
   */
  async list(query?: ListVirtualTerminalsQuery): Promise<ListVirtualTerminalsResponse> {
    try {
      const res = await this.http.get<PaystackResponse<ListVirtualTerminalsResponse>>(
        '/virtual_terminal',
        { params: query }
      );

      if (!res.data.status) {
        throw new PaystackAPIError(res.data.message || 'Failed to list virtual terminals');
      }

      return res.data.data!;
    } catch (error: any) {
      throw new PaystackAPIError(
        `Failed to list virtual terminals: ${error.response?.data?.message || error.message}`
      );
    }
  }

  /**
   * Fetch details of a single Virtual Terminal.
   * @param code - The terminal code
   * @returns Virtual Terminal details
   */
  async fetch(code: string): Promise<FetchVirtualTerminalResponse> {
    try {
      const res = await this.http.get<PaystackResponse<FetchVirtualTerminalResponse>>(
        `/virtual_terminal/${code}`
      );

      if (!res.data.status) {
        throw new PaystackAPIError(res.data.message || 'Failed to fetch virtual terminal');
      }

      return res.data.data!;
    } catch (error: any) {
      throw new PaystackAPIError(
        `Failed to fetch virtual terminal: ${error.response?.data?.message || error.message}`
      );
    }
  }

  /**
   * Update an existing Virtual Terminal.
   * @param code - The terminal code
   * @param data - Fields to update
   * @returns Updated Virtual Terminal details
   */
  async update(
    code: string,
    data: UpdateVirtualTerminalRequest
  ): Promise<UpdateVirtualTerminalResponse> {
    try {
      const res = await this.http.put<PaystackResponse<UpdateVirtualTerminalResponse>>(
        `/virtual_terminal/${code}`,
        data
      );

      if (!res.data.status) {
        throw new PaystackAPIError(res.data.message || 'Failed to update virtual terminal');
      }

      return res.data.data!;
    } catch (error: any) {
      throw new PaystackAPIError(
        `Failed to update virtual terminal: ${error.response?.data?.message || error.message}`
      );
    }
  }

  /**
   * Deactivate a Virtual Terminal.
   * @param code - The terminal code
   * @returns Status of deactivation
   */
  async deactivate(code: string): Promise<DeactivateVirtualTerminalResponse> {
    try {
      const res = await this.http.put<PaystackResponse<DeactivateVirtualTerminalResponse>>(
        `/virtual_terminal/${code}/deactivate`
      );

      if (!res.data.status) {
        throw new PaystackAPIError(res.data.message || 'Failed to deactivate virtual terminal');
      }

      return res.data.data!;
    } catch (error: any) {
      throw new PaystackAPIError(
        `Failed to deactivate virtual terminal: ${error.response?.data?.message || error.message}`
      );
    }
  }

  /**
   * Assign destinations to a Virtual Terminal.
   * @param code - The terminal code
   * @param data - Destination details
   * @returns Assigned destination info
   */
  async assignDestination(
    code: string,
    data: AssignDestinationRequest
  ): Promise<AssignDestinationResponse> {
    try {
      const res = await this.http.post<PaystackResponse<AssignDestinationResponse>>(
        `/virtual_terminal/${code}/destination/assign`,
        data
      );

      if (!res.data.status) {
        throw new PaystackAPIError(res.data.message || 'Failed to assign destination');
      }

      return res.data.data!;
    } catch (error: any) {
      throw new PaystackAPIError(
        `Failed to assign destination: ${error.response?.data?.message || error.message}`
      );
    }
  }

  /**
   * Unassign destinations from a Virtual Terminal.
   * @param code - The terminal code
   * @param data - Target destinations to unassign
   * @returns Status of unassignment
   */
  async unassignDestination(
    code: string,
    data: UnassignDestinationRequest
  ): Promise<UnassignDestinationResponse> {
    try {
      const res = await this.http.post<PaystackResponse<UnassignDestinationResponse>>(
        `/virtual_terminal/${code}/destination/unassign`,
        data
      );

      if (!res.data.status) {
        throw new PaystackAPIError(res.data.message || 'Failed to unassign destination');
      }

      return res.data.data!;
    } catch (error: any) {
      throw new PaystackAPIError(
        `Failed to unassign destination: ${error.response?.data?.message || error.message}`
      );
    }
  }

  /**
   * Add a split code to a Virtual Terminal.
   * @param code - The terminal code
   * @param data - Split code details
   * @returns Updated Virtual Terminal split info
   */
  async addSplitCode(code: string, data: AddSplitCodeRequest): Promise<AddSplitCodeResponse> {
    try {
      const res = await this.http.put<PaystackResponse<AddSplitCodeResponse>>(
        `/virtual_terminal/${code}/split_code`,
        data
      );

      if (!res.data.status) {
        throw new PaystackAPIError(res.data.message || 'Failed to add split code');
      }

      return res.data.data!;
    } catch (error: any) {
      throw new PaystackAPIError(
        `Failed to add split code: ${error.response?.data?.message || error.message}`
      );
    }
  }

  /**
   * Remove a split code from a Virtual Terminal.
   * @param code - The terminal code
   * @param data - Split code details
   * @returns Status of removal
   */
  async removeSplitCode(
    code: string,
    data: RemoveSplitCodeRequest
  ): Promise<RemoveSplitCodeResponse> {
    try {
      const res = await this.http.delete<PaystackResponse<RemoveSplitCodeResponse>>(
        `/virtual_terminal/${code}/split_code`,
        { data }
      );

      if (!res.data.status) {
        throw new PaystackAPIError(res.data.message || 'Failed to remove split code');
      }

      return res.data.data!;
    } catch (error: any) {
      throw new PaystackAPIError(
        `Failed to remove split code: ${error.response?.data?.message || error.message}`
      );
    }
  }
}

export default VirtualTerminal;
