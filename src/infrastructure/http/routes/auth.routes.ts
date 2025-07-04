import { Router } from 'express';

import { loginController } from '../../../presentation/controllers/login.controller';
import { registerController } from '../../../presentation/controllers/signup.controller';

export const authRoutes = Router();

authRoutes.post('/register', registerController);
authRoutes.post('/login', loginController);
