"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceRoutes = void 0;
const express_1 = __importDefault(require("express"));
const experience_controller_1 = require("./experience.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const auth_constant_1 = require("../auth/auth.constant");
const router = express_1.default.Router();
router.get('/', experience_controller_1.ExperienceController.getAllExperiences);
router.post('/', (0, auth_1.default)(auth_constant_1.USER_ROLE.admin), experience_controller_1.ExperienceController.createExperience);
router.put('/:id', (0, auth_1.default)(auth_constant_1.USER_ROLE.admin), experience_controller_1.ExperienceController.updateExperience);
router.delete('/:id', (0, auth_1.default)(auth_constant_1.USER_ROLE.admin), experience_controller_1.ExperienceController.deleteExperience);
exports.ExperienceRoutes = router;
