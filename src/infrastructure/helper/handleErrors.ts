import { validateInstanceOfErrors } from '../../application/services/validateInstanceOfErrors';

interface IValidateInstanceOfErrors {
  statusCode: number;
  message: string;
  error: string;
  errors?: string[];
}
export function handleErrors(error: unknown): IValidateInstanceOfErrors {
  console.log(error);
  const validateError = validateInstanceOfErrors(error);
  console.log(validateError.message);
  return validateError;
}
