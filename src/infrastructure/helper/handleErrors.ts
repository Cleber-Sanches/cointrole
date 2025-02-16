import { validateInstanceOfErrors } from '../../shared/services/validateInstanceOfErrors.service';

interface IValidateInstanceOfErrors {
  statusCode: number;
  message: string;
  error: string;
  errors?: object[];
  issue?: string[];
}
export function handleErrors(error: unknown): IValidateInstanceOfErrors {
  console.log(error);
  const validateError = validateInstanceOfErrors(error);
  console.log(validateError.message);
  return validateError;
}
