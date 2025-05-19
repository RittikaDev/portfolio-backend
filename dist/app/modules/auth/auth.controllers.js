"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthControllers = void 0;
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const auth_services_1 = require("./auth.services");
const createUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = req.body;
    const user = yield auth_services_1.AuthService.createUserIntoDB(userData);
    const responseData = {
        _id: user._id,
        name: user.name,
        email: user.email,
    };
    (0, sendResponse_1.default)(res, {
        success: true,
        message: 'User registered successfully',
        statusCode: http_status_codes_1.default.CREATED,
        data: responseData,
    });
}));
// login user
const signInUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const result = yield auth_services_1.AuthService.userSignIntoDB(req.body);
    const { refreshToken, accessToken } = result;
    console.log(result);
    res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
        maxAge: 1000 * 60 * 60 * 24 * 365,
        path: '/',
    });
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.default.OK,
        success: true,
        message: 'Login successful',
        data: {
            token: `${accessToken}`,
        },
    });
}));
const getCurrentUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const userEmail = (_a = req.user) === null || _a === void 0 ? void 0 : _a.userEmail;
    const user = yield auth_services_1.AuthService.getCurrentUser({ email: userEmail });
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_codes_1.default.OK,
        message: 'User fetched successfully',
        data: user,
    });
}));
// refresh Token
const refreshToken = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { refreshToken } = req.cookies;
    const result = yield auth_services_1.AuthService.refreshToken(refreshToken);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.default.OK,
        success: true,
        message: 'Access token retrived successfully',
        data: result,
    });
}));
const logoutUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.clearCookie('refreshToken', {
        secure: true,
        httpOnly: true,
        sameSite: 'none',
        maxAge: 1000 * 60 * 60 * 24 * 30,
    });
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.default.OK,
        success: true,
        message: 'Logged out successfully!',
        data: null,
    });
}));
exports.AuthControllers = {
    createUser,
    signInUser,
    getCurrentUser,
    refreshToken,
    logoutUser,
};
