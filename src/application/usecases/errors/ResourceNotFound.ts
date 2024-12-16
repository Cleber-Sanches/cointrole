export class ResourceNotFoundError extends Error {
  name: string = 'ResourceNotFoundError';
  statusCode: number = 404;

  constructor(message?: string) {
    super(message || 'Recurso não encontrado');
  }
}
