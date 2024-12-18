import { Router } from 'express';
<<<<<<< HEAD
import { RegisterController } from '../../../presentation/controllers/RegisterController';
import { KnexUserRepository } from '../../database/repositories/knex/UserRepository';
import { RegisterUseCase } from '../../../application/usecases/auth/RegisterUseCase';

export const authRoutes = Router();

const userRepository = new KnexUserRepository();
const registerUseCase = new RegisterUseCase(userRepository);
const registerController = new RegisterController(registerUseCase);

authRoutes.post('/register', registerController.handle);
=======
import { registerController } from '../../../presentation/controllers/RegisterController';

export const authRoutes = Router();

authRoutes.post('/register', registerController);
>>>>>>> 53f46ed (✨ feat: adiciona rota de registro)
