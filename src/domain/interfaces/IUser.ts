import { IUser } from '../model/Users';

export interface IInsertUser
  extends Omit<IUser, 'id' | 'created_at' | 'updated_at' | 'deleted_at'> {}
