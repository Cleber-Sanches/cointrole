import { KnexUserRepository } from '../../../infrastructure/database/repositories/knex/UserRepository';
import { RegisterUseCase } from '../auth/RegisterUseCase';

export function facCreateUserUseCase() {
  const userRepository = new KnexUserRepository();

  const useCase = new RegisterUseCase(userRepository);

  return useCase;
}
