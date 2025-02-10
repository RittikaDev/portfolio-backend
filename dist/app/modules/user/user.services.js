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
exports.UserService = void 0;
const config_1 = __importDefault(require("../../config"));
const user_model_1 = require("./user.model");
const bcrypt_1 = __importDefault(require("bcrypt"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const changePassword = (userData, payload) => __awaiter(void 0, void 0, void 0, function* () {
    // checking if the user is exist
    const user = yield user_model_1.User.isUserExistByEmail(userData.userEmail);
    if (!user) {
        throw new AppError_1.default(http_status_codes_1.default.NOT_FOUND, 'This user is not found !');
    }
    // checking if the user is blocked
    const userStatus = user === null || user === void 0 ? void 0 : user.isBlocked;
    if (userStatus)
        throw new AppError_1.default(http_status_codes_1.default.FORBIDDEN, 'This user is blocked ! !');
    //checking if the password is correct
    if (!(yield user_model_1.User.isPasswordMatched(payload.oldPassword, user === null || user === void 0 ? void 0 : user.password)))
        throw new AppError_1.default(http_status_codes_1.default.FORBIDDEN, 'Password do not match');
    //hash new password
    const newHashedPassword = yield bcrypt_1.default.hash(payload.newPassword, Number(config_1.default.bcrypt_salt_round));
    // console.log('change pass service', newHashedPassword);
    // console.log(userData);
    yield user_model_1.User.findOneAndUpdate({
        email: userData.userEmail,
        role: userData.role,
    }, {
        password: newHashedPassword,
        passwordChangedAt: new Date(),
    });
    return null;
});
const updateProfile = (userData, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.User.isUserExistByEmail(userData.userEmail);
    if (!user)
        throw new AppError_1.default(http_status_codes_1.default.NOT_FOUND, 'User not found');
    const updatedUser = yield user_model_1.User.findByIdAndUpdate(user._id, payload, {
        new: true,
        runValidators: true,
    });
    return updatedUser;
});
// MANAGING USERS
const manageUserStatus = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.User.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    });
    if (!user)
        throw new AppError_1.default(http_status_codes_1.default.NOT_FOUND, 'User not found');
    return user;
});
exports.UserService = {
    changePassword,
    updateProfile,
    manageUserStatus,
};
