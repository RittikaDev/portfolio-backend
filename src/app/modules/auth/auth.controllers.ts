import httpStatus from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AuthService } from './auth.services';
import config from '../../config';
import { Request, Response } from 'express';

const createUser = catchAsync(async (req, res) => {
  const userData = req.body;

  const user = await AuthService.createUserIntoDB(userData);

  const responseData = {
    _id: user._id,
    name: user.name,
    email: user.email,
  };

  sendResponse(res, {
    success: true,
    message: 'User registered successfully',
    statusCode: httpStatus.CREATED,
    data: responseData,
  });
});

// login user
const signInUser = catchAsync(async (req, res) => {
  console.log(req.body);
  const result = await AuthService.userSignIntoDB(req.body);
  const { refreshToken, accessToken } = result;

  console.log(result);

  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
    maxAge: 1000 * 60 * 60 * 24 * 365,
    path: '/',
  });

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Login successful',
    data: {
      token: `${accessToken}`,
    },
  });
});

const getCurrentUser = catchAsync(async (req, res) => {
  const userEmail = req.user?.userEmail;
  const user = await AuthService.getCurrentUser({ email: userEmail });
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User fetched successfully',
    data: user,
  });
});

// refresh Token
const refreshToken = catchAsync(async (req, res) => {
  const { refreshToken } = req.cookies;
  const result = await AuthService.refreshToken(refreshToken);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Access token retrived successfully',
    data: result,
  });
});

const logoutUser = catchAsync(async (req: Request, res: Response) => {
  res.clearCookie('refreshToken', {
    secure: true,
    httpOnly: true,
    sameSite: 'none',
    maxAge: 1000 * 60 * 60 * 24 * 30,
  });

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Logged out successfully!',
    data: null,
  });
});

export const AuthControllers = {
  createUser,
  signInUser,

  getCurrentUser,

  refreshToken,
  logoutUser,
};
