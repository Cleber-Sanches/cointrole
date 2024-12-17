import { KnexUserRepository } from '../../../infrastructure/database/repositories/knex/UserRepository';
import { User } from '../../../domain/entities/User';
import { hash } from 'bcrypt';
import { BadRequestError } from '../errors/BadRequestError';
import { UserValidator } from '../../../domain/validators/UserValidator';

export class RegisterUseCase {
  constructor(private userRepository: KnexUserRepository) {}

  async execute(data: User): Promise<User> {
    const { email } = data;
    console.log('RegisterUseCase: Iniciando execução...');
    const userExists = await this.userRepository.findByEmail(email);

    if (userExists) {
      console.log('RegisterUseCase: Usuário já existe!');
      throw new BadRequestError('Este email já está cadastrado');
    }

    const validatedData = UserValidator.parse(data);

    const hashedPassword = await hash(validatedData.password, 10);

    const user = new User({
      ...data,
      password: hashedPassword,
    });

    console.log('RegisterUseCase: Usuário criado com sucesso!');
    return this.userRepository.insert(user);
  }
}
