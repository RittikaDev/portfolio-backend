"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogRoute = void 0;
const express_1 = __importDefault(require("express"));
const blog_controller_1 = require("./blog.controller");
const router = express_1.default.Router();
router.get('/', blog_controller_1.BlogController.getAllBlog);
router.post('/', 
//   auth(USER_ROLE.admin),
// validateRequest(ProjectValidationSchema.projectValidationSchema),
blog_controller_1.BlogController.createABlog);
router.get('/:blogId', blog_controller_1.BlogController.getSingleBlog);
router.put('/:blogId', 
// auth(USER_ROLE.admin),
// validateRequest(ProjectValidationSchema.updateProjectValidationSchema),
blog_controller_1.BlogController.updateABlog);
router.delete('/:blogId', 
// validateRequest(ProjectValidationSchema.updateProjectValidationSchema),
blog_controller_1.BlogController.deleteABlog);
exports.BlogRoute = router;
