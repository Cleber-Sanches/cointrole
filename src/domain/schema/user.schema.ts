import { z } from 'zod';

import { errorMessages } from '../../application/usecases/errors/errorMessagesZod';

export const createUserSchema = z.object({
  firstName: z
    .string({ required_error: errorMessages.required('firstName') })
    .min(3)
    .max(255),
  lastName: z
    .string({ required_error: errorMessages.required('lastName') })
    .min(3)
    .max(255),
  email: z.string({ required_error: errorMessages.required('email') }).email(),
  password: z
    .string({ required_error: errorMessages.required('password') })
    .min(6)
    .max(255),
});

export type ICreateUserRequest = z.infer<typeof createUserSchema>;

export const loginSchema = z.object({
  email: z.string({ required_error: errorMessages.required('email') }).email(),
  password: z
    .string({ required_error: errorMessages.required('password') })
    .min(6)
    .max(255),
});

export type ILoginRequest = z.infer<typeof loginSchema>;
