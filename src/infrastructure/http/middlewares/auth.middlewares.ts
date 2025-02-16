import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { BadRequestError } from '../../../application/usecases/errors/BadRequestError';

declare module 'express' {
  interface Request {
    userId?: string;
  }
}

interface TokenPayload {
  userId: string;
  iat: number;
  exp: number;
}

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new BadRequestError('Token não fornecido');
  }

  const parts = authHeader.split(' ');

  if (parts.length !== 2) {
    throw new BadRequestError('Erro no token');
  }

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme)) {
    throw new BadRequestError('Token mal formatado');
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret');
    const { userId } = decoded as TokenPayload;
    req.userId = userId; // Assign userId to the request object
    return next();
  } catch (err) {
    throw new BadRequestError('Token inválido');
  }
}
