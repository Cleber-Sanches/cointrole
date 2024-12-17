import { BaseModel } from 'bq-knex-base-repository';

export interface ICategory extends BaseModel {
  name: string;
  iconId: string;
}
