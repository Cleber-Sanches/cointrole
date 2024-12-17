import { BaseModel } from 'bq-knex-base-repository';

export interface ITag extends BaseModel {
  name: string;
}
