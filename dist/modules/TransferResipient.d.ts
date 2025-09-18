import { AxiosInstance } from 'axios';
import { CreateTransferRecipientRequest, BulkCreateTransferRecipientRequest, UpdateTransferRecipientRequest, ListTransferRecipientsQuery, TransferRecipientData } from '../types';
declare class TransferRecipient {
    private client;
    constructor(client: AxiosInstance);
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
    create: (body: CreateTransferRecipientRequest) => Promise<TransferRecipientData>;
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
    bulkCreate: (body: BulkCreateTransferRecipientRequest) => Promise<TransferRecipientData[]>;
    /**
     * Lists all transfer recipients.
     * @example
     * const recipients = await transferRecipient.list({ perPage: 10, page: 1 });
     */
    list: (query?: ListTransferRecipientsQuery) => Promise<TransferRecipientData[]>;
    /**
     * Fetches a single transfer recipient by ID or recipient code.
     * @example
     * const recipient = await transferRecipient.fetch('RCP_2x5j67tnnw1t98k');
     */
    fetch: (idOrCode: string) => Promise<TransferRecipientData>;
    /**
     * Updates a transfer recipient's details.
     * @example
     * const updated = await transferRecipient.update('RCP_2x5j67tnnw1t98k', { name: 'Rick Sanchez' });
     */
    update: (idOrCode: string, body: UpdateTransferRecipientRequest) => Promise<TransferRecipientData>;
    /**
     * Deletes (sets as inactive) a transfer recipient.
     * @example
     * const deleted = await transferRecipient.delete('RCP_2x5j67tnnw1t98k');
     */
    delete: (idOrCode: string) => Promise<{
        message: string;
    }>;
}
export default TransferRecipient;
