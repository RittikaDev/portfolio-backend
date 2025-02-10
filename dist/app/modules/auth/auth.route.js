"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_validation_1 = require("../user/user.validation");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const auth_controllers_1 = require("./auth.controllers");
const router = express_1.default.Router();
router.post('/register', (0, validateRequest_1.default)(user_validation_1.UserValidations.CreateUserValidationSchema), auth_controllers_1.AuthControllers.createUser);
router.post('/login', (0, validateRequest_1.default)(user_validation_1.UserValidations.loginValidationSchema), auth_controllers_1.AuthControllers.signInUser);
router.post('/current-user', auth_controllers_1.AuthControllers.getCurrentUser);
router.post('/refresh-token', (0, validateRequest_1.default)(user_validation_1.UserValidations.refreshTokenValidationSchema), auth_controllers_1.AuthControllers.refreshToken);
// ADMIN
exports.AuthRoutes = router;
