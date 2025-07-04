import { Request, Response } from 'express';

import { factoryCreateUserUseCase } from '../../../application/usecases/factories/user.factory';
import { createUserSchema } from '../../../domain/schema/user.schema';
import { httpResponse } from '../../../infrastructure/helper/httpResponse';

export async function createUserController(req: Request, res: Response): Promise<Response> {
  const bodyData = createUserSchema.parse(req.body);

  const createUserUseCase = factoryCreateUserUseCase();

  const result = await createUserUseCase.execute(bodyData);

  return httpResponse(res, 201, result);
}
