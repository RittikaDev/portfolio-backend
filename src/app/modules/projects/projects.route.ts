import express from 'express';

import { ProjectController } from './projects.controller';

import validateRequest from '../../middlewares/validateRequest';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../auth/auth.constant';
import { ProjectValidationSchema } from './projects.validation';

const router = express.Router();

router.get('/featured', ProjectController.getAllProjects);
router.post(
  '/',
  //   auth(USER_ROLE.admin),
  // validateRequest(ProjectValidationSchema.projectValidationSchema),
  ProjectController.createAProject,
);

router.get('/:projectId', ProjectController.getSingleProject);

export const ProjectRoute = router;
