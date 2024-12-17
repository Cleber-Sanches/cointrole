import { BaseModel } from 'bq-knex-base-repository';

export interface ITransaction extends BaseModel {
  description: string;
  value: number;
  date: Date;
  accountId: string;
  categoryId: string;
}
