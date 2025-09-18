import { AxiosInstance } from 'axios';
import { PaystackResponse, SendTerminalEventRequest, SendTerminalEventResponse, FetchTerminalEventResponse, TerminalStatusResponse, ListTerminalsQuery, ListTerminalsResponse, TerminalResponse, UpdateTerminalRequest, CommissionTerminalRequest, DecommissionTerminalRequest } from '../types';
/**
 * The Terminal API allows you to build delightful in-person payment experiences.
 * This module provides methods to interact with Paystack Terminal endpoints.
 */
declare class Terminal {
    private http;
    constructor(http: AxiosInstance);
    /**
     * Send an event from your application to a Paystack Terminal.
     * @param terminalId - The ID of the Terminal
     * @param payload - The event payload to send
     * @returns The event response
     */
    sendEvent(terminalId: string, payload: SendTerminalEventRequest): Promise<PaystackResponse<SendTerminalEventResponse>>;
    /**
     * Check the status of an event sent to a Terminal.
     * @param terminalId - The ID of the Terminal
     * @param eventId - The ID of the event
     * @returns The event delivery status
     */
    fetchEventStatus(terminalId: string, eventId: string): Promise<PaystackResponse<FetchTerminalEventResponse>>;
    /**
     * Check the availability of a Terminal before sending an event.
     * @param terminalId - The ID of the Terminal
     * @returns Terminal availability status
     */
    fetchStatus(terminalId: string): Promise<PaystackResponse<TerminalStatusResponse>>;
    /**
     * List the Terminals available on your integration.
     * @param query - Optional filters for pagination
     * @returns List of Terminals and pagination meta
     */
    list(query?: ListTerminalsQuery): Promise<PaystackResponse<ListTerminalsResponse>>;
    /**
     * Get the details of a Terminal.
     * @param terminalId - The ID of the Terminal
     * @returns Terminal details
     */
    fetch(terminalId: string): Promise<PaystackResponse<TerminalResponse>>;
    /**
     * Update the details of a Terminal.
     * @param terminalId - The ID of the Terminal
     * @param payload - Update fields (name, address)
     * @returns Success response
     */
    update(terminalId: string, payload: UpdateTerminalRequest): Promise<PaystackResponse<null>>;
    /**
     * Activate your debug device by linking it to your integration.
     * @param payload - Device serial number
     * @returns Success response
     */
    commission(payload: CommissionTerminalRequest): Promise<PaystackResponse<null>>;
    /**
     * Unlink your debug device from your integration.
     * @param payload - Device serial number
     * @returns Success response
     */
    decommission(payload: DecommissionTerminalRequest): Promise<PaystackResponse<null>>;
}
export default Terminal;
