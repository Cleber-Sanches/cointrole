import { compare } from 'bcrypt';

import { ILoginRequest } from '../../../domain/schema/user.schema';
import { env } from '../../../infrastructure/config/env';
import { IUserRepositoryAssign } from '../../../infrastructure/database/repositories/assign/users.assign';
import { generateToken } from '../../../shared/jwt/generateToken.jwt';
import { BadRequestError } from '../errors/BadRequestError';

export class LoginUseCase {
  constructor(private readonly userRepository: IUserRepositoryAssign) {}

  async execute(data: ILoginRequest): Promise<object> {
    const { email, password } = data;

    if (!email || !password) {
      throw new BadRequestError('Email e senha são obrigatórios');
    }

    const user = await this.userRepository.findOneBy({ email, deleted_at: null });

    if (!user || !user.password) {
      throw new BadRequestError('Email ou senha incorretos');
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new BadRequestError('Email ou senha incorretos');
    }

    const token = generateToken({ userId: user.id }, env.JWT_SECRET);

    return { token };
  }
}
