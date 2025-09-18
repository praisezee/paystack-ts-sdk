import axios, { AxiosInstance } from 'axios';
import Customer from './modules/Customer';
import Transaction from './modules/Transaction';
import Split from './modules/Split';
import Terminal from './modules/Terminal';
import VirtualTerminal from './modules/VirtualTerminal';
import DirectDebit from './modules/DirectDebit';
import DedicatedVirtualAccount from './modules/DedicatedVirtualAccount';
import ApplePay from './modules/ApplePay';
import Subaccount from './modules/SubAccount';
import Plan from './modules/Plan';
import Subscription from './modules/Subscription';
import Product from './modules/Product';
import Pages from './modules/Page';
import Settlement from './modules/Settlement';
import TransferRecipient from './modules/TransferResipient';
import Transfers from './modules/Transfers';
import TransfersControl from './modules/TransfersControl';
import BulkCharges from './modules/BulkCharges';
import Integration from './modules/Integration';
import Charges from './modules/Charges';
import Dispute from './modules/Dispute';
import Refund from './modules/Refund';
import Verification from './modules/Verification';
import Miscellaneous from './modules/Miscellaneous';

class Paystack {
  private http: AxiosInstance;
  public customers: Customer;
  public transaction: Transaction;
  public split: Split;
  public terminal: Terminal;
  public virtualTerminal: VirtualTerminal;
  public directDebit: DirectDebit;
  public virtualAccount: DedicatedVirtualAccount;
  public applePay: ApplePay;
  public subaccount: Subaccount;
  public plan: Plan;
  public subscription: Subscription;
  public product: Product;
  public paymentPage: Pages;
  public settlement: Settlement;
  public transferRecipient: TransferRecipient;
  public transfer: Transfers;
  public transferControl: TransfersControl;
  public bulkCharges: BulkCharges;
  public integration: Integration;
  public charges: Charges;
  public dispute: Dispute;
  public refund: Refund;
  public verification: Verification;
  public miscellaneous: Miscellaneous;

  constructor(secretKey: string) {
    this.http = axios.create({
      baseURL: 'https://api.paystack.co',
      timeout: 30000,
      headers: {
        Authorization: `Bearer ${secretKey}`,
        'Content-Type': 'application/json',
      },
      withCredentials: true,
      timeoutErrorMessage: 'Unable to perform request due to timeout. Try again',
    });
    this.customers = new Customer(this.http);
    this.transaction = new Transaction(this.http);
    this.split = new Split(this.http);
    this.terminal = new Terminal(this.http);
    this.virtualTerminal = new VirtualTerminal(this.http);
    this.directDebit = new DirectDebit(this.http);
    this.virtualAccount = new DedicatedVirtualAccount(this.http);
    this.applePay = new ApplePay(this.http);
    this.subaccount = new Subaccount(this.http);
    this.plan = new Plan(this.http);
    this.subscription = new Subscription(this.http);
    this.product = new Product(this.http);
    this.paymentPage = new Pages(this.http);
    this.settlement = new Settlement(this.http);
    this.transferRecipient = new TransferRecipient(this.http);
    this.transfer = new Transfers(this.http);
    this.transferControl = new TransfersControl(this.http);
    this.bulkCharges = new BulkCharges(this.http);
    this.integration = new Integration(this.http);
    this.charges = new Charges(this.http);
    this.dispute = new Dispute(this.http);
    this.refund = new Refund(this.http);
    this.verification = new Verification(this.http);
    this.miscellaneous = new Miscellaneous(this.http);
  }
}

export { Paystack };
export default Paystack;
