"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TransferRecipient {
    constructor(client) {
        /**
         * Creates a new transfer recipient.
         * @example
         * const recipient = await transferRecipient.create({
         *   type: 'nuban',
         *   name: 'Tolu Robert',
         *   account_number: '01000000010',
         *   bank_code: '058',
         *   currency: 'NGN'
         * });
         */
        this.create = async (body) => {
            const { data } = await this.client.post('/transferrecipient', body);
            return data.data;
        };
        /**
         * Creates multiple transfer recipients in bulk.
         * @example
         * const recipients = await transferRecipient.bulkCreate({
         *   batch: [
         *     { type: 'nuban', name: 'Habenero', account_number: '0123456789', bank_code: '033', currency: 'NGN' },
         *     { type: 'nuban', name: 'Soft Merry', account_number: '98765432310', bank_code: '50211', currency: 'NGN' }
         *   ]
         * });
         */
        this.bulkCreate = async (body) => {
            const { data } = await this.client.post('/transferrecipient/bulk', body);
            return data.data.success;
        };
        /**
         * Lists all transfer recipients.
         * @example
         * const recipients = await transferRecipient.list({ perPage: 10, page: 1 });
         */
        this.list = async (query) => {
            const { data } = await this.client.get('/transferrecipient', { params: query });
            return data.data;
        };
        /**
         * Fetches a single transfer recipient by ID or recipient code.
         * @example
         * const recipient = await transferRecipient.fetch('RCP_2x5j67tnnw1t98k');
         */
        this.fetch = async (idOrCode) => {
            const { data } = await this.client.get(`/transferrecipient/${idOrCode}`);
            return data.data;
        };
        /**
         * Updates a transfer recipient's details.
         * @example
         * const updated = await transferRecipient.update('RCP_2x5j67tnnw1t98k', { name: 'Rick Sanchez' });
         */
        this.update = async (idOrCode, body) => {
            const { data } = await this.client.put(`/transferrecipient/${idOrCode}`, body);
            return data.data;
        };
        /**
         * Deletes (sets as inactive) a transfer recipient.
         * @example
         * const deleted = await transferRecipient.delete('RCP_2x5j67tnnw1t98k');
         */
        this.delete = async (idOrCode) => {
            const { data } = await this.client.delete(`/transferrecipient/${idOrCode}`);
            return { message: data.message };
        };
        this.client = client;
    }
}
exports.default = TransferRecipient;
