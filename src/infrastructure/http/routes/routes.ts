import { Router } from 'express';
import { globalErrorHandler } from '../middlewares/errors/error.midllewares';
import { authRoutes } from './auth.routes';

export const routes = Router();

routes.use('/auth', authRoutes);

routes.use(globalErrorHandler);
