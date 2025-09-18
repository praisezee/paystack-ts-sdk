import { AxiosInstance } from 'axios';
import {
  CreateTransferRecipientRequest,
  BulkCreateTransferRecipientRequest,
  UpdateTransferRecipientRequest,
  ListTransferRecipientsQuery,
  TransferRecipientData,
} from '../types';

class TransferRecipient {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

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
  create = async (body: CreateTransferRecipientRequest): Promise<TransferRecipientData> => {
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
  bulkCreate = async (
    body: BulkCreateTransferRecipientRequest
  ): Promise<TransferRecipientData[]> => {
    const { data } = await this.client.post('/transferrecipient/bulk', body);
    return (data.data as any).success;
  };

  /**
   * Lists all transfer recipients.
   * @example
   * const recipients = await transferRecipient.list({ perPage: 10, page: 1 });
   */
  list = async (query?: ListTransferRecipientsQuery): Promise<TransferRecipientData[]> => {
    const { data } = await this.client.get('/transferrecipient', { params: query });
    return data.data as TransferRecipientData[];
  };

  /**
   * Fetches a single transfer recipient by ID or recipient code.
   * @example
   * const recipient = await transferRecipient.fetch('RCP_2x5j67tnnw1t98k');
   */
  fetch = async (idOrCode: string): Promise<TransferRecipientData> => {
    const { data } = await this.client.get(`/transferrecipient/${idOrCode}`);
    return data.data!;
  };

  /**
   * Updates a transfer recipient's details.
   * @example
   * const updated = await transferRecipient.update('RCP_2x5j67tnnw1t98k', { name: 'Rick Sanchez' });
   */
  update = async (
    idOrCode: string,
    body: UpdateTransferRecipientRequest
  ): Promise<TransferRecipientData> => {
    const { data } = await this.client.put(`/transferrecipient/${idOrCode}`, body);
    return data.data!;
  };

  /**
   * Deletes (sets as inactive) a transfer recipient.
   * @example
   * const deleted = await transferRecipient.delete('RCP_2x5j67tnnw1t98k');
   */
  delete = async (idOrCode: string): Promise<{ message: string }> => {
    const { data } = await this.client.delete(`/transferrecipient/${idOrCode}`);
    return { message: data.message };
  };
}

export default TransferRecipient;
