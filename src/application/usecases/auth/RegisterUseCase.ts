import { KnexUserRepository } from '../../../infrastructure/database/repositories/knex/UserRepository';
import { User } from '../../../domain/entities/User';
import { hash } from 'bcrypt';
import { BadRequestError } from '../errors/BadRequestError';
import { UserValidator } from '../../../domain/validators/UserValidator';
import env from '../../../infrastructure/config/env';

export class RegisterUseCase {
  constructor(private userRepository: KnexUserRepository) {}

  async execute(data: User): Promise<object> {
    const { email } = data;

    const userExists = await this.userRepository.findByEmail(email);

    if (userExists) {
      console.log('RegisterUseCase: Usuário já existe!');
      throw new BadRequestError('Este email já está cadastrado');
    }

    const validatedData = UserValidator.parse(data);

    const saltRounds = env.SALT_ROUNDS ? parseInt(env.SALT_ROUNDS) : 10;
    const hashedPassword = await hash(validatedData.password, saltRounds);

    const user = new User({
      first_name: validatedData.first_name,
      last_name: validatedData.last_name,
      email: validatedData.email,
      password: hashedPassword,
    });

    await this.userRepository.insert(user);

    return { message: 'Cadastro realizado com sucesso!' };
  }
}
