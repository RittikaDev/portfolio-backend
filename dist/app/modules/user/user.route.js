"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoute = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const auth_1 = __importDefault(require("../../middlewares/auth"));
const user_constant_1 = require("./user.constant");
const user_controller_1 = require("./user.controller");
const user_validation_1 = require("./user.validation");
const router = express_1.default.Router();
router.post('/update-password', (0, auth_1.default)(user_constant_1.USER_ROLE.user), (0, validateRequest_1.default)(user_validation_1.UserValidations.changePasswordValidationSchema), user_controller_1.UserController.changePassword);
router.patch('/update-profile', (0, auth_1.default)(user_constant_1.USER_ROLE.user, user_constant_1.USER_ROLE.admin), (0, validateRequest_1.default)(user_validation_1.UserValidations.UpdateUserValidationSchema), user_controller_1.UserController.updateProfile);
// router.get('/all-users', auth(USER_ROLE.admin), UserController.getAllUsers);
router.patch('/:id/manage-status', (0, auth_1.default)(user_constant_1.USER_ROLE.admin), (0, validateRequest_1.default)(user_validation_1.UserValidations.ManageStatusValidationSchema), user_controller_1.UserController.manageUserStatus);
exports.UserRoute = router;
