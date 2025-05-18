import { z } from 'zod';

// DEFINING THE TUser SCHEMA WITH CUSTOM ERROR MESSAGE
const CreateUserValidationSchema = z.object({
  body: z.object({
    email: z
      .string()
      .email({ message: 'Invalid email address' })
      .nonempty({ message: 'Email is required' }),
    password: z
      .string()
      .min(6, { message: 'Password must be at least 6 characters long' })
      .nonempty({ message: 'Password is required' }),
  }),
});

const UpdateUserValidationSchema = z.object({
  body: z.object({
    email: z
      .string()
      .email({ message: 'Invalid email address' })
      .nonempty({ message: 'Email is required' })
      .optional(),
    password: z
      .string()
      .min(6, { message: 'Password must be at least 6 characters long' })
      .nonempty({ message: 'Password is required' })
      .optional(),
  }),
});

const ManageStatusValidationSchema = z.object({
  body: z
    .object({
      isBlocked: z.boolean(),
    })
    .strict(),
});

const loginValidationSchema = z.object({
  body: z.object({
    email: z.string({ required_error: 'Email is required' }),
    password: z.string({ required_error: ' Password is required' }),
  }),
});

const updatePassValidationSchema = z.object({
  body: z.object({
    password: z.string({ required_error: ' Password is required' }),
  }),
});

const changePasswordValidationSchema = z.object({
  body: z.object({
    oldPassword: z.string({
      required_error: 'Old password is required',
    }),
    newPassword: z.string({ required_error: 'Password is required' }),
  }),
});

const refreshTokenValidationSchema = z.object({
  cookies: z.object({
    refreshToken: z.string({
      required_error: 'refresh token is required',
    }),
  }),
});

export const UserValidations = {
  CreateUserValidationSchema,
  UpdateUserValidationSchema,
  ManageStatusValidationSchema,
  loginValidationSchema,
  updatePassValidationSchema,
  changePasswordValidationSchema,
  refreshTokenValidationSchema,
};
