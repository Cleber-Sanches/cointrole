import { Response } from 'express';

export function httpResponse(response: Response, statusCode: number, data?: object): Response {
  response.status(statusCode);
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Credentials', 'true');
  response.setHeader('Access-Control-Allow-Headers', '*');

  // logger.info({ responseHttp: { statusCode, data } });
  return response.json(data || {});
}
