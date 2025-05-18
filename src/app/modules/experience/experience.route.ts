import express from 'express';
import { ExperienceController } from './experience.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../auth/auth.constant';

const router = express.Router();

router.get('/', ExperienceController.getAllExperiences);
router.post('/', auth(USER_ROLE.admin), ExperienceController.createExperience);
router.put(
  '/:id',
  auth(USER_ROLE.admin),
  ExperienceController.updateExperience,
);
router.delete(
  '/:id',
  auth(USER_ROLE.admin),
  ExperienceController.deleteExperience,
);

export const ExperienceRoutes = router;
