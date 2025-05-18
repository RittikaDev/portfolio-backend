import express from 'express';
import { SkillController } from './skills.controller';

const router = express.Router();

router.get('/', SkillController.getAllSkills);
router.post('/', SkillController.createSkill);
router.put('/:id', SkillController.updateSkill);
router.delete('/:id', SkillController.deleteSkill);

export const SkillRoutes = router;
