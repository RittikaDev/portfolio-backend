"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactRoute = void 0;
const express_1 = __importDefault(require("express"));
const contact_controller_1 = require("./contact.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const auth_constant_1 = require("../auth/auth.constant");
const router = express_1.default.Router();
router.post('/', contact_controller_1.ContactController.sendMessage);
router.get('/', (0, auth_1.default)(auth_constant_1.USER_ROLE.admin), contact_controller_1.ContactController.getAllMessages);
exports.ContactRoute = router;
