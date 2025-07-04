import { Request, Response } from 'express';

import { facCreateUserUseCase } from '../../application/usecases/factories/user.factories';
import { UserValidator } from '../../domain/validators/UserValidator';
import { httpResponse } from '../../infrastructure/helper/httpResponse';

export async function registerController(req: Request, res: Response): Promise<Response> {
  const registerUseCase = facCreateUserUseCase();
  UserValidator.parse(req.body);
  const result = await registerUseCase.execute(req.body);

  return httpResponse(res, 201, result);
}
