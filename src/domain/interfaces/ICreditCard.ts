import { BaseModel } from 'bq-knex-base-repository';

export interface ICreditCard extends BaseModel {
  name: string;
  limit: number;
  closingDay: number;
  paymentDay: number;
  accountId: string;
}
