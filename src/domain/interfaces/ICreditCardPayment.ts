import { BaseModel } from 'bq-knex-base-repository';

export interface ICreditCardPayment extends BaseModel {
  creditCardId: string;
  paymentDate: Date;
  amount: number;
}
