"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectRoute = void 0;
const express_1 = __importDefault(require("express"));
const projects_controller_1 = require("./projects.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const auth_1 = __importDefault(require("../../middlewares/auth"));
const auth_constant_1 = require("../auth/auth.constant");
const projects_validation_1 = require("./projects.validation");
const router = express_1.default.Router();
router.get('/featured', projects_controller_1.ProjectController.getAllProjects);
router.post('/', (0, auth_1.default)(auth_constant_1.USER_ROLE.admin), 
// validateRequest(ProjectValidationSchema.projectValidationSchema),
projects_controller_1.ProjectController.createAProject);
router.get('/:projectId', projects_controller_1.ProjectController.getSingleProject);
router.put('/:projectId', (0, auth_1.default)(auth_constant_1.USER_ROLE.admin), (0, validateRequest_1.default)(projects_validation_1.ProjectValidationSchema.updateProjectValidationSchema), projects_controller_1.ProjectController.updateAProject);
router.delete('/:projectId', (0, auth_1.default)(auth_constant_1.USER_ROLE.admin), (0, validateRequest_1.default)(projects_validation_1.ProjectValidationSchema.updateProjectValidationSchema), projects_controller_1.ProjectController.deleteAProject);
exports.ProjectRoute = router;
