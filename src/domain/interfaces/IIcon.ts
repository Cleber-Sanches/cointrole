import { BaseModel } from 'bq-knex-base-repository';

export interface IIcon extends BaseModel {
  name: string;
  unicode: string;
}
