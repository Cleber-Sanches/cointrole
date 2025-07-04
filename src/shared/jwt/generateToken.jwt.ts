import jwt, { Secret, SignOptions } from 'jsonwebtoken';

type ExpirationString = `${number}${'s' | 'm' | 'h' | 'd'}`;

export const generateToken = <T extends object>(
  payload: T,
  secret: Secret,
  expiresIn: ExpirationString = '7d'
): string => {
  const options: SignOptions = { expiresIn };
  return jwt.sign(payload, secret, options);
};
