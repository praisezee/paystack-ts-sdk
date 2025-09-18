import { AxiosInstance } from 'axios';
import { CreateVirtualTerminalRequest, CreateVirtualTerminalResponse, ListVirtualTerminalsQuery, ListVirtualTerminalsResponse, FetchVirtualTerminalResponse, UpdateVirtualTerminalRequest, UpdateVirtualTerminalResponse, DeactivateVirtualTerminalResponse, AssignDestinationRequest, AssignDestinationResponse, UnassignDestinationRequest, UnassignDestinationResponse, AddSplitCodeRequest, AddSplitCodeResponse, RemoveSplitCodeRequest, RemoveSplitCodeResponse } from '../types';
/**
 * The Virtual Terminal API allows you to manage Paystack's virtual terminals.
 * You can create, update, deactivate terminals, assign/unassign destinations,
 * and manage split codes.
 */
declare class VirtualTerminal {
    private http;
    constructor(http: AxiosInstance);
    /**
     * Create a new Virtual Terminal.
     * @param data - Terminal details
     * @returns The created Virtual Terminal details
     */
    create(data: CreateVirtualTerminalRequest): Promise<CreateVirtualTerminalResponse>;
    /**
     * List all Virtual Terminals.
     * @param query - Optional filters
     * @returns A list of Virtual Terminals
     */
    list(query?: ListVirtualTerminalsQuery): Promise<ListVirtualTerminalsResponse>;
    /**
     * Fetch details of a single Virtual Terminal.
     * @param code - The terminal code
     * @returns Virtual Terminal details
     */
    fetch(code: string): Promise<FetchVirtualTerminalResponse>;
    /**
     * Update an existing Virtual Terminal.
     * @param code - The terminal code
     * @param data - Fields to update
     * @returns Updated Virtual Terminal details
     */
    update(code: string, data: UpdateVirtualTerminalRequest): Promise<UpdateVirtualTerminalResponse>;
    /**
     * Deactivate a Virtual Terminal.
     * @param code - The terminal code
     * @returns Status of deactivation
     */
    deactivate(code: string): Promise<DeactivateVirtualTerminalResponse>;
    /**
     * Assign destinations to a Virtual Terminal.
     * @param code - The terminal code
     * @param data - Destination details
     * @returns Assigned destination info
     */
    assignDestination(code: string, data: AssignDestinationRequest): Promise<AssignDestinationResponse>;
    /**
     * Unassign destinations from a Virtual Terminal.
     * @param code - The terminal code
     * @param data - Target destinations to unassign
     * @returns Status of unassignment
     */
    unassignDestination(code: string, data: UnassignDestinationRequest): Promise<UnassignDestinationResponse>;
    /**
     * Add a split code to a Virtual Terminal.
     * @param code - The terminal code
     * @param data - Split code details
     * @returns Updated Virtual Terminal split info
     */
    addSplitCode(code: string, data: AddSplitCodeRequest): Promise<AddSplitCodeResponse>;
    /**
     * Remove a split code from a Virtual Terminal.
     * @param code - The terminal code
     * @param data - Split code details
     * @returns Status of removal
     */
    removeSplitCode(code: string, data: RemoveSplitCodeRequest): Promise<RemoveSplitCodeResponse>;
}
export default VirtualTerminal;
