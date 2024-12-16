export class BadRequestError extends Error {
  name: string;
  statusCode: number = 400;
  constructor(message?: string) {
    super(message || 'Bad Request Error');
    this.name = 'BadRequestError';
    this.statusCode = 400;
  }
}
