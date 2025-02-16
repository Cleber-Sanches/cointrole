import { User } from '../../../../domain/entities/User';

export interface IUserRepositoryAssign {
  findByEmail(email: string): Promise<User | undefined>;
}
