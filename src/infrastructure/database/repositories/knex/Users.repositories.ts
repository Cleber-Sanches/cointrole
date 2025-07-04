import { BaseRepository } from 'bq-knex-base-repository';

import { IUser } from '../../../../domain/model/Users';
import { db } from '../../../config/connection';
import { IUserRepositoryAssign } from '../assign/users.assign';

export class KnexUserRepository extends BaseRepository<IUser> implements IUserRepositoryAssign {
  constructor() {
    super(db, 'users');
  }
}
