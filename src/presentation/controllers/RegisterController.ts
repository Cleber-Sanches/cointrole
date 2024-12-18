import { Request, Response } from 'express';
<<<<<<< HEAD
import { RegisterUseCase } from '../../application/usecases/auth/RegisterUseCase';
=======
>>>>>>> 72b2b56 (♻️ refactor: melhora o fluxo de login e validações)
import { facCreateUserUseCase } from '../../application/usecases/factories/user.factories';
import { httpResponse } from '../../infrastructure/helper/httpResponse';
import { UserValidator } from '../../domain/validators/UserValidator';

<<<<<<< HEAD
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
=======
export async function registerController(req: Request, res: Response): Promise<Response> {
  const registerUseCase = facCreateUserUseCase();
  UserValidator.parse(req.body);
  const result = await registerUseCase.execute(req.body);

  return httpResponse(res, 201, result);
>>>>>>> 72b2b56 (♻️ refactor: melhora o fluxo de login e validações)
}
