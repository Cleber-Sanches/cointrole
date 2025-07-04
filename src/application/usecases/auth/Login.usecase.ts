import { compare } from 'bcrypt';
import jwt from 'jsonwebtoken';

import { User } from '../../../domain/entities/User';
import { KnexUserRepository } from '../../../infrastructure/database/repositories/knex/Users.repositories';
import { BadRequestError } from '../errors/BadRequestError';

export class LoginUseCase {
  constructor(private userRepository: KnexUserRepository) {}

  async execute(data: User): Promise<object> {
    const { email, password } = data;

    if (!email || !password) {
      throw new BadRequestError('Email e senha são obrigatórios');
    }

    const user = await this.userRepository.findByEmail(email);

    if (!user || !user.password) {
      throw new BadRequestError('Email ou senha incorretos');
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new BadRequestError('Email ou senha incorretos');
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET || 'secret', {
      expiresIn: '1h',
    });

    return { token };
  }
}
