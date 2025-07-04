import { KnexUserRepository } from '../../../infrastructure/database/repositories/knex/Users.repositories';
import { LoginUseCase } from '../auth/Login.usecase';
import { CreateUserUseCase } from '../auth/CreateUser.usecase';

const userRepository = new KnexUserRepository();

export function factoryCreateUserUseCase(): CreateUserUseCase {
  return new CreateUserUseCase(userRepository);
}

export function factoryLoginUseCase(): LoginUseCase {
  return new LoginUseCase(userRepository);
}
