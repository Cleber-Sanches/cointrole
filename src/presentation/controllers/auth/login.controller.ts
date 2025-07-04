import { Request, Response } from 'express';

import { factoryLoginUseCase } from '../../../application/usecases/factories/user.factory';
import { loginSchema } from '../../../domain/schema/user.schema';
import { httpResponse } from '../../../infrastructure/helper/httpResponse';

export async function loginController(req: Request, res: Response) {
  const dataLogin = loginSchema.parse(req.body);
  const loginUseCase = factoryLoginUseCase();

  const result = await loginUseCase.execute(dataLogin);

  return httpResponse(res, 200, result);
}
