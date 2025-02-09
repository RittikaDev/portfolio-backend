import express from 'express';

import validateRequest from '../../middlewares/validateRequest';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../auth/auth.constant';
import { BlogController } from './blog.controller';

const router = express.Router();

router.get('/', BlogController.getAllBlog);
router.post(
  '/',
  //   auth(USER_ROLE.admin),
  // validateRequest(ProjectValidationSchema.projectValidationSchema),
  BlogController.createABlog,
);

router.get('/:blogId', BlogController.getSingleBlog);

export const BlogRoute = router;
