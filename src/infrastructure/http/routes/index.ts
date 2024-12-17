import { Router } from 'express';
import { authRoutes } from './auth';
import { globalErrorHandler } from '../middlewares/errors/error.midllewares';

export const routes = Router();

routes.use('/auth', authRoutes);

routes.use(globalErrorHandler);
