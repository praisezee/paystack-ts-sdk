export interface SendTerminalEventRequest {
    type: 'invoice' | 'transaction';
    action: 'process' | 'view' | 'print';
    data: Record<string, any>;
}
export interface SendTerminalEventResponse {
    id: string;
}
export interface FetchTerminalEventResponse {
    delivered: boolean;
}
export interface TerminalStatusResponse {
    online: boolean;
    available: boolean;
}
export interface ListTerminalsQuery {
    perPage?: number;
    next?: string;
    previous?: string;
}
export interface Terminal {
    id: number;
    serial_number: string;
    device_make?: string | null;
    terminal_id: string;
    integration: number;
    domain: string;
    name: string;
    address?: string | null;
    status: string;
}
export interface ListTerminalsResponse {
    data: Terminal[];
    meta: {
        next: string | null;
        previous: string | null;
        perPage: number;
    };
}
export type TerminalResponse = Terminal;
export interface UpdateTerminalRequest {
    name?: string;
    address?: string;
}
export interface CommissionTerminalRequest {
    serial_number: string;
}
export interface DecommissionTerminalRequest {
    serial_number: string;
}
