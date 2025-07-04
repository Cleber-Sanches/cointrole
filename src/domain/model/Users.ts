import { BaseModel } from 'bq-knex-base-repository';
export interface IUser extends BaseModel {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}
