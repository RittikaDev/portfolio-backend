import express from 'express';
import { SkillController } from './skills.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../auth/auth.constant';

const router = express.Router();

router.get('/', SkillController.getAllSkills);
router.post('/', auth(USER_ROLE.admin), SkillController.createSkill);
router.put('/:id', auth(USER_ROLE.admin), SkillController.updateSkill);
router.delete('/:id', auth(USER_ROLE.admin), SkillController.deleteSkill);

export const SkillRoutes = router;
