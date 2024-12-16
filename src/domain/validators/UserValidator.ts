import { z } from 'zod';
import { errorMessages } from '../../application/usecases/errors/errorMessagesZod';

export const UserValidator = z.object({
  first_name: z
    .string({ required_error: errorMessages.required('first_name') })
    .min(3)
    .max(255),
  last_name: z
    .string({ required_error: errorMessages.required('last_name') })
    .min(3)
    .max(255),
  email: z.string({ required_error: errorMessages.required('email') }).email(),
  password: z
    .string({ required_error: errorMessages.required('password') })
    .min(6)
    .max(255),
});
