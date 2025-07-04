import { hash } from 'bcrypt';

import { ICreateUserRequest } from '../../../domain/schema/user.schema';
import { env } from '../../../infrastructure/config/env';
import { IUserRepositoryAssign } from '../../../infrastructure/database/repositories/assign/users.assign';
import { BadRequestError } from '../errors/BadRequestError';

export class CreateUserUseCase {
  constructor(private readonly userRepository: IUserRepositoryAssign) {}

  async execute(request: ICreateUserRequest): Promise<object> {
    const { firstName, email, lastName, password } = request;

    const userExists = await this.userRepository.findOneBy({
      email,
      deleted_at: null,
    });

    if (userExists) {
      throw new BadRequestError('Este email já está cadastrado');
    }

    const saltRounds = env.SALT_ROUNDS ? parseInt(String(env.SALT_ROUNDS)) : 10;

    if (isNaN(saltRounds)) {
      throw new BadRequestError('SALT_ROUNDS deve ser um número válido');
    }
    const hashedPassword = await hash(password, saltRounds);

    const user = {
      first_name: firstName,
      last_name: lastName,
      email,
      password: hashedPassword,
    };

    await this.userRepository.insert(user);

    return { message: 'Cadastro realizado com sucesso!' };
  }
}
