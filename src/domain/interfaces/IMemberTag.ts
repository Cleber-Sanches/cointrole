import { BaseModel } from 'bq-knex-base-repository';

export interface IMemberTag extends BaseModel {
  memberId: string;
  tagId: string;
}
