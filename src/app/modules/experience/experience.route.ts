import express from 'express';
import { ExperienceController } from './experience.controller';

const router = express.Router();

router.get('/', ExperienceController.getAllExperiences);
router.post('/', ExperienceController.createExperience);
router.put('/:id', ExperienceController.updateExperience);
router.delete('/:id', ExperienceController.deleteExperience);

export const ExperienceRoutes = router;
