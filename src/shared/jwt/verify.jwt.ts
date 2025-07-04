import jwt, { JwtPayload, Secret } from 'jsonwebtoken';

export const verifyToken = <T extends JwtPayload>(token: string, secret: Secret): T | null => {
  try {
    return jwt.verify(token, secret) as T;
  } catch {
    return null;
  }
};
