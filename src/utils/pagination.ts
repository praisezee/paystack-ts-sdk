// utils/pagination.ts
export interface CursorQuery {
  use_cursor?: boolean;
  next?: string;
  previous?: string;
}

export function buildCursorParams(query?: CursorQuery): Record<string, any> {
  return {
    ...(query?.use_cursor !== undefined && { use_cursor: query.use_cursor }),
    ...(query?.next && { next: query.next }),
    ...(query?.previous && { previous: query.previous }),
  };
}
