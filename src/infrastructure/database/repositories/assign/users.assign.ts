import { Knex } from 'knex';

import { IInsertUser } from '../../../../domain/interfaces/IUser';
import { IUser } from '../../../../domain/model/Users';

export interface IUserRepositoryAssign {
  findOneBy(data: Partial<IUser>): Promise<IUser | undefined>;
  insert(item: IInsertUser, transaction?: Knex.Transaction): Promise<IUser>;
}
