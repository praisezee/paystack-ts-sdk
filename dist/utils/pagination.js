"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildCursorParams = buildCursorParams;
function buildCursorParams(query) {
    return {
        ...(query?.use_cursor !== undefined && { use_cursor: query.use_cursor }),
        ...(query?.next && { next: query.next }),
        ...(query?.previous && { previous: query.previous }),
    };
}
