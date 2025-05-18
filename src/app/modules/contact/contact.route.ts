import express from 'express';

import { ContactController } from './contact.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../auth/auth.constant';

const router = express.Router();

router.post('/', ContactController.sendMessage);
router.get('/', auth(USER_ROLE.admin), ContactController.getAllMessages);

export const ContactRoute = router;
