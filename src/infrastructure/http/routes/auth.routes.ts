import { Router } from 'express';
import { registerController } from '../../../presentation/controllers/signup.controller';
import { loginController } from '../../../presentation/controllers/login.controller';

export const authRoutes = Router();

authRoutes.post('/register', registerController);
authRoutes.post('/login', loginController);
