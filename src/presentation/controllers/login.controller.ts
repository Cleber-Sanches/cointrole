import { LoginUseCase } from '../../application/usecases/auth/LoginUseCase';
import { KnexUserRepository } from '../../infrastructure/database/repositories/knex/Users.repositories';
import { Request, Response } from 'express';
import { httpResponse } from '../../infrastructure/helper/httpResponse';

export async function loginController(req: Request, res: Response) {
  const dataLogin = req.body;
  const userRepository = new KnexUserRepository();
  const loginUseCase = new LoginUseCase(userRepository);

  const result = await loginUseCase.execute(dataLogin);

  return httpResponse(res, 200, result);
}
