import { Router } from 'express';
import { RegisterController } from '../../../presentation/controllers/RegisterController';
import { KnexUserRepository } from '../../database/repositories/knex/UserRepository';
import { RegisterUseCase } from '../../../application/usecases/auth/RegisterUseCase';

export const authRoutes = Router();

const userRepository = new KnexUserRepository();
const registerUseCase = new RegisterUseCase(userRepository);
const registerController = new RegisterController(registerUseCase);

authRoutes.post('/register', registerController.handle);
