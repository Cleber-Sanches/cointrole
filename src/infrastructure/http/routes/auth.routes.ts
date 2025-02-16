import { Router } from 'express';
<<<<<<< HEAD:src/infrastructure/http/routes/auth.ts
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
=======
import { registerController } from '../../../presentation/controllers/signup.controller';
import { loginController } from '../../../presentation/controllers/login.controller';
>>>>>>> e911b5f (🚚 chore: renomeado os arquivos):src/infrastructure/http/routes/auth.routes.ts

export const authRoutes = Router();

authRoutes.post('/register', registerController);
<<<<<<< HEAD:src/infrastructure/http/routes/auth.ts
>>>>>>> 53f46ed (✨ feat: adiciona rota de registro)
=======
authRoutes.post('/login', loginController);
>>>>>>> e911b5f (🚚 chore: renomeado os arquivos):src/infrastructure/http/routes/auth.routes.ts
