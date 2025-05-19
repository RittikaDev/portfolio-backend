"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidations = void 0;
const zod_1 = require("zod");
// DEFINING THE TUser SCHEMA WITH CUSTOM ERROR MESSAGE
const CreateUserValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z
            .string()
            .email({ message: 'Invalid email address' })
            .nonempty({ message: 'Email is required' }),
        password: zod_1.z
            .string()
            .min(6, { message: 'Password must be at least 6 characters long' })
            .nonempty({ message: 'Password is required' }),
    }),
});
const UpdateUserValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z
            .string()
            .email({ message: 'Invalid email address' })
            .nonempty({ message: 'Email is required' })
            .optional(),
        password: zod_1.z
            .string()
            .min(6, { message: 'Password must be at least 6 characters long' })
            .nonempty({ message: 'Password is required' })
            .optional(),
    }),
});
const ManageStatusValidationSchema = zod_1.z.object({
    body: zod_1.z
        .object({
        isBlocked: zod_1.z.boolean(),
    })
        .strict(),
});
const loginValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string({ required_error: 'Email is required' }),
        password: zod_1.z.string({ required_error: ' Password is required' }),
    }),
});
const updatePassValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        password: zod_1.z.string({ required_error: ' Password is required' }),
    }),
});
const changePasswordValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        oldPassword: zod_1.z.string({
            required_error: 'Old password is required',
        }),
        newPassword: zod_1.z.string({ required_error: 'Password is required' }),
    }),
});
const refreshTokenValidationSchema = zod_1.z.object({
    cookies: zod_1.z.object({
        refreshToken: zod_1.z.string({
            required_error: 'refresh token is required',
        }),
    }),
});
exports.UserValidations = {
    CreateUserValidationSchema,
    UpdateUserValidationSchema,
    ManageStatusValidationSchema,
    loginValidationSchema,
    updatePassValidationSchema,
    changePasswordValidationSchema,
    refreshTokenValidationSchema,
};
