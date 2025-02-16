import { KnexUserRepository } from '../../../infrastructure/database/repositories/knex/Users.repositories';
import { User } from '../../../domain/entities/User';
import { hash } from 'bcrypt';
import { BadRequestError } from '../errors/BadRequestError';
import env from '../../../infrastructure/config/env';

interface IRegisterUserRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export class RegisterUseCase {
  constructor(private userRepository: KnexUserRepository) {}

  async execute(request: IRegisterUserRequest): Promise<object> {
    const { firstName, email, lastName, password } = request;

    const userExists = await this.userRepository.findByEmail(email);

    if (userExists) {
      console.log('RegisterUseCase: Usuário já existe!');
      throw new BadRequestError('Este email já está cadastrado');
    }

    const saltRounds = env.SALT_ROUNDS ? parseInt(env.SALT_ROUNDS) : 10;
    const hashedPassword = await hash(password, saltRounds);

    const user = new User({
      first_name: firstName,
      last_name: lastName,
      email,
      password: hashedPassword,
    });

    await this.userRepository.insert(user);

    return { message: 'Cadastro realizado com sucesso!' };
  }
}
