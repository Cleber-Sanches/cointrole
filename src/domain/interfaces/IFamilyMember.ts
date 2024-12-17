import { BaseModel } from 'bq-knex-base-repository';

export interface IFamilyMember extends BaseModel {
  name: string;
  userId: string;
}
