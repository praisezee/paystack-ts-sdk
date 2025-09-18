export interface CursorQuery {
    use_cursor?: boolean;
    next?: string;
    previous?: string;
}
export declare function buildCursorParams(query?: CursorQuery): Record<string, any>;
