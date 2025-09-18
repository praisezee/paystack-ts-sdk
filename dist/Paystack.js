"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paystack = void 0;
const axios_1 = __importDefault(require("axios"));
const Customer_1 = __importDefault(require("./modules/Customer"));
const Transaction_1 = __importDefault(require("./modules/Transaction"));
const Split_1 = __importDefault(require("./modules/Split"));
const Terminal_1 = __importDefault(require("./modules/Terminal"));
const VirtualTerminal_1 = __importDefault(require("./modules/VirtualTerminal"));
const DirectDebit_1 = __importDefault(require("./modules/DirectDebit"));
const DedicatedVirtualAccount_1 = __importDefault(require("./modules/DedicatedVirtualAccount"));
const ApplePay_1 = __importDefault(require("./modules/ApplePay"));
const SubAccount_1 = __importDefault(require("./modules/SubAccount"));
const Plan_1 = __importDefault(require("./modules/Plan"));
const Subscription_1 = __importDefault(require("./modules/Subscription"));
const Product_1 = __importDefault(require("./modules/Product"));
const Page_1 = __importDefault(require("./modules/Page"));
const Settlement_1 = __importDefault(require("./modules/Settlement"));
const TransferResipient_1 = __importDefault(require("./modules/TransferResipient"));
const Transfers_1 = __importDefault(require("./modules/Transfers"));
const TransfersControl_1 = __importDefault(require("./modules/TransfersControl"));
const BulkCharges_1 = __importDefault(require("./modules/BulkCharges"));
const Integration_1 = __importDefault(require("./modules/Integration"));
const Charges_1 = __importDefault(require("./modules/Charges"));
const Dispute_1 = __importDefault(require("./modules/Dispute"));
const Refund_1 = __importDefault(require("./modules/Refund"));
const Verification_1 = __importDefault(require("./modules/Verification"));
const Miscellaneous_1 = __importDefault(require("./modules/Miscellaneous"));
class Paystack {
    constructor(secretKey) {
        this.http = axios_1.default.create({
            baseURL: 'https://api.paystack.co',
            timeout: 30000,
            headers: {
                Authorization: `Bearer ${secretKey}`,
                'Content-Type': 'application/json',
            },
            withCredentials: true,
            timeoutErrorMessage: 'Unable to perform request due to timeout. Try again',
        });
        this.customers = new Customer_1.default(this.http);
        this.transaction = new Transaction_1.default(this.http);
        this.split = new Split_1.default(this.http);
        this.terminal = new Terminal_1.default(this.http);
        this.virtualTerminal = new VirtualTerminal_1.default(this.http);
        this.directDebit = new DirectDebit_1.default(this.http);
        this.virtualAccount = new DedicatedVirtualAccount_1.default(this.http);
        this.applePay = new ApplePay_1.default(this.http);
        this.subaccount = new SubAccount_1.default(this.http);
        this.plan = new Plan_1.default(this.http);
        this.subscription = new Subscription_1.default(this.http);
        this.product = new Product_1.default(this.http);
        this.paymentPage = new Page_1.default(this.http);
        this.settlement = new Settlement_1.default(this.http);
        this.transferRecipient = new TransferResipient_1.default(this.http);
        this.transfer = new Transfers_1.default(this.http);
        this.transferControl = new TransfersControl_1.default(this.http);
        this.bulkCharges = new BulkCharges_1.default(this.http);
        this.integration = new Integration_1.default(this.http);
        this.charges = new Charges_1.default(this.http);
        this.dispute = new Dispute_1.default(this.http);
        this.refund = new Refund_1.default(this.http);
        this.verification = new Verification_1.default(this.http);
        this.miscellaneous = new Miscellaneous_1.default(this.http);
    }
}
exports.Paystack = Paystack;
exports.default = Paystack;
