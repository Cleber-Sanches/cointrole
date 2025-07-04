import { Router } from 'express';

import { loginController } from '../../../presentation/controllers/auth/login.controller';
import { createUserController } from '../../../presentation/controllers/auth/signup.controller';

export const authRoutes = Router();

authRoutes.post('/signup', createUserController);
authRoutes.post('/login', loginController);
