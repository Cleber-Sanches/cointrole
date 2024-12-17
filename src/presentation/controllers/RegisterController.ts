import { Request, Response } from 'express';
import { RegisterUseCase } from '../../application/usecases/auth/RegisterUseCase';
import { facCreateUserUseCase } from '../../application/usecases/factories/user.factories';
import { httpResponse } from '../../infrastructure/helper/httpResponse';
import { UserValidator } from '../../domain/validators/UserValidator';

export class RegisterController {
  constructor(private registerUseCase: RegisterUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const registerUseCase = facCreateUserUseCase();
    console.log('RegisterController: Iniciando execução...');
    UserValidator.parse(req.body);
    const result = await registerUseCase.execute(req.body);
    console.log('RegisterController: Usuário registrado com sucesso!');
    return httpResponse(res, 201, result);
  }
}
