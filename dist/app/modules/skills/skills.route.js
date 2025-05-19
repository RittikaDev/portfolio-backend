"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillRoutes = void 0;
const express_1 = __importDefault(require("express"));
const skills_controller_1 = require("./skills.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const auth_constant_1 = require("../auth/auth.constant");
const router = express_1.default.Router();
router.get('/', skills_controller_1.SkillController.getAllSkills);
router.post('/', (0, auth_1.default)(auth_constant_1.USER_ROLE.admin), skills_controller_1.SkillController.createSkill);
router.put('/:id', (0, auth_1.default)(auth_constant_1.USER_ROLE.admin), skills_controller_1.SkillController.updateSkill);
router.delete('/:id', (0, auth_1.default)(auth_constant_1.USER_ROLE.admin), skills_controller_1.SkillController.deleteSkill);
exports.SkillRoutes = router;
