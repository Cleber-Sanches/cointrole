import { BaseModel } from 'bq-knex-base-repository';

export interface ITransactionPayment extends BaseModel {
  transactionId: string;
  paymentDate: Date;
  amount: number;
}
