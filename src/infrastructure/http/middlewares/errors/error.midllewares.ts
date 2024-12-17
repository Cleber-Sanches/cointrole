import { NextFunction, Request, Response } from 'express';
import { handleErrors } from '../../../helper/handleErrors';
import { httpResponse } from '../../../helper/httpResponse';

export function globalErrorHandler(err: unknown, _req: Request, res: Response, next: NextFunction) {
  const { error, message, statusCode, issue, errors } = handleErrors(err);
  if (statusCode) {
    return httpResponse(res, statusCode, { message, error, issue, errors });
  } else {
    return next(err);
  }
}
