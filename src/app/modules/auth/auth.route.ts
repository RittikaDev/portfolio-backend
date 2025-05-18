import express from 'express';
import { UserValidations } from '../user/user.validation';
import validateRequest from '../../middlewares/validateRequest';
import auth from '../../middlewares/auth';
import { USER_ROLE } from './auth.constant';
import { AuthControllers } from './auth.controllers';

const router = express.Router();

router.post(
  '/register',
  validateRequest(UserValidations.CreateUserValidationSchema),
  AuthControllers.createUser,
);

router.post(
  '/login',
  validateRequest(UserValidations.loginValidationSchema),
  AuthControllers.signInUser,
);

router.get(
  '/current-user',
  auth(USER_ROLE.admin),
  AuthControllers.getCurrentUser,
);

router.post(
  '/refresh-token',
  validateRequest(UserValidations.refreshTokenValidationSchema),
  AuthControllers.refreshToken,
);

router.post('/logout', AuthControllers.logoutUser);

// ADMIN

export const AuthRoutes = router;
