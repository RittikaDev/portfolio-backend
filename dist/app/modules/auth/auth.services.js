"use strict";
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const user_model_1 = require("../user/user.model");
const AppError_1 = __importDefault(require("../../errors/AppError"));
const config_1 = __importDefault(require("../../config"));
const auth_utils_1 = require("./auth.utils");
const createUserIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isUserExits = yield user_model_1.User.findOne({ email: payload.email });
    if (isUserExits) {
        throw new AppError_1.default(http_status_codes_1.default.NOT_FOUND, 'User with this email id exists');
    }
    try {
        const userData = payload;
        userData.password = payload.password || config_1.default.default_password;
        const newUser = yield user_model_1.User.create(userData);
        if (!newUser)
            throw new AppError_1.default(http_status_codes_1.default.BAD_REQUEST, 'Failed to create a new user');
        return newUser;
    }
    catch (err) {
        throw new AppError_1.default(http_status_codes_1.default.BAD_REQUEST, 'Failed to create a user');
    }
});
// USER LOGIN
const userSignIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.User.isUserExistByEmail(payload.email);
    if (!user)
        throw new AppError_1.default(http_status_codes_1.default.NOT_FOUND, 'User not found');
    if (typeof payload.password !== 'string')
        throw new AppError_1.default(http_status_codes_1.default.BAD_REQUEST, 'Please provide a password');
    if (!(yield user_model_1.User.isPasswordMatched(payload.password, user === null || user === void 0 ? void 0 : user.password)))
        throw new AppError_1.default(http_status_codes_1.default.UNAUTHORIZED, 'Invalid credentials');
    const jwtPayload = {
        userEmail: user.email,
        role: user.role,
    };
    const accessToken = (0, auth_utils_1.createToken)(jwtPayload, config_1.default.jwt_access_secret, config_1.default.jwt_access_expires_in);
    const refreshToken = (0, auth_utils_1.createToken)(jwtPayload, config_1.default.jwt_refresh_secret, config_1.default.jwt_refresh_expires_in);
    // SENT USER DATA WITHOUT PASSWORD
    const { password } = user, userWithoutPassword = __rest(user, ["password"]);
    return {
        accessToken,
        refreshToken,
        user: userWithoutPassword,
    };
});
const getCurrentUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.User.findOne({ email: payload.email });
    if (!user)
        throw new AppError_1.default(http_status_codes_1.default.NOT_FOUND, 'User not found');
    return user;
});
const refreshToken = (token) => __awaiter(void 0, void 0, void 0, function* () {
    const decoded = (0, auth_utils_1.verifyToken)(token, config_1.default.jwt_refresh_secret);
    const { userEmail, iat } = decoded;
    const user = yield user_model_1.User.isUserExistByEmail(userEmail);
    if (!user)
        throw new AppError_1.default(http_status_codes_1.default.NOT_FOUND, 'user is not register');
    if (user.passwordChangedAt &&
        user_model_1.User.isJWTIssuedBeforePasswordChanged(user.passwordChangedAt, iat))
        throw new AppError_1.default(http_status_codes_1.default.UNAUTHORIZED, 'You are not authorized !');
    const jwtPayload = {
        userEmail: user.email,
        role: user.role,
    };
    const accessToken = (0, auth_utils_1.createToken)(jwtPayload, config_1.default.jwt_access_secret, config_1.default.jwt_access_expires_in);
    return {
        accessToken,
    };
});
// ADMIN PARTS
const blockUserFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedStudent = yield user_model_1.User.findByIdAndUpdate(id, { isBlocked: true }, { new: true });
    if (!deletedStudent)
        throw new AppError_1.default(http_status_codes_1.default.BAD_REQUEST, 'Failed to block the user');
    return deletedStudent;
});
exports.AuthService = {
    createUserIntoDB,
    userSignIntoDB,
    getCurrentUser,
    refreshToken,
    blockUserFromDB,
};
