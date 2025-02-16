import { User } from '../../../../domain/entities/User';
import { BaseRepository } from 'bq-knex-base-repository';
import { db } from '../../../config/connection';
import { IUserRepositoryAssign } from '../assign/users.assign';

export class KnexUserRepository extends BaseRepository<User> implements IUserRepositoryAssign {
  constructor() {
    super(db, 'users');
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const result = await db('users').where('email', email).first();

    return result;
  }
}
