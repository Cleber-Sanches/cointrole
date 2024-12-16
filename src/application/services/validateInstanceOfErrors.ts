import { ZodError } from 'zod';
import { ResourceNotFoundError } from '../usecases/errors/ResourceNotFound';
import { BadRequestError } from '../usecases/errors/BadRequestError';

interface IValidateInstanceOfErrors {
  statusCode: number;
  message: string;
  error: string;
  errors?: string[];
}
export function validateInstanceOfErrors(error: unknown): IValidateInstanceOfErrors {
  if (error instanceof ResourceNotFoundError) {
    return {
      statusCode: error.statusCode,
      message: error.message,
      error: error.name,
    };
  }
  if (error instanceof ZodError) {
    return {
      statusCode: 400,
      message: 'Erro na requisição',
      error: error.name,
      errors: error.issues.map((issue) => issue.message),
    };
  }
  if (error instanceof BadRequestError) {
    return {
      statusCode: error.statusCode,
      message: error.message,
      error: error.name,
    };
  }

  return {
    statusCode: 500,
    message: 'Erro interno do servidor',
    error: 'Internal Error',
  };
}
