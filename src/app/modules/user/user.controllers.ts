// import httpStatus from 'http-status-codes';
// import catchAsync from '../../utils/catchAsync';
// import sendResponse from '../../utils/sendResponse';
// import { userServices } from './user.services';
// import config from '../../config';

// const createUser = catchAsync(async (req, res) => {
//   const userData = req.body;

//   const user = await userServices.createUserIntoDB(userData);

//   const responseData = {
//     _id: user._id,
//     name: user.name,
//     email: user.email,
//   };

//   sendResponse(res, {
//     success: true,
//     message: 'User registered successfully',
//     statusCode: httpStatus.CREATED,
//     data: responseData,
//   });
// });

// // login user
// const signInUser = catchAsync(async (req, res) => {
//   console.log(req.body);
//   const result = await userServices.userSignIntoDB(req.body);
//   const { refreshToken, accessToken } = result;

//   res.cookie('refreshToken', refreshToken, {
//     secure: config.NODE_ENV === 'production',
//     httpOnly: true,
//     sameSite: 'none',
//     maxAge: 1000 * 60 * 60 * 24 * 365,
//   });

//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Login successful',
//     data: {
//       token: `${accessToken}`,
//     },
//   });
// });

// const getCurrentUser = catchAsync(async (req, res) => {
//   console.log(req.body);
//   const user = await userServices.getCurrentUser(req.body);
//   sendResponse(res, {
//     success: true,
//     statusCode: httpStatus.OK,
//     message: 'User fetched successfully',
//     data: user,
//   });
// });

// // refresh Token
// const refreshToken = catchAsync(async (req, res) => {
//   const { refreshToken } = req.cookies;
//   const result = await userServices.refreshToken(refreshToken);
//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Access token retrived successfully',
//     data: result,
//   });
// });

// // ADMIN PARTS
// const blockAUser = catchAsync(async (req, res) => {
//   // console.log(req);
//   const { id } = req.params;
//   await userServices.blockUserFromDB(id);

//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'User blocked successfully',
//   });
// });

// export const UserControllers = {
//   createUser,
//   signInUser,

//   getCurrentUser,

//   refreshToken,

//   blockAUser,
// };
