import { KnexUserRepository } from '../../../infrastructure/database/repositories/knex/Users.repositories';
import { RegisterUseCase } from '../auth/Register.usecase';

export function facCreateUserUseCase() {
  const userRepository = new KnexUserRepository();

  const useCase = new RegisterUseCase(userRepository);

  return useCase;
}
