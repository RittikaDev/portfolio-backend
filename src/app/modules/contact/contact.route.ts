import express from 'express';

import { ContactController } from './contact.controller';

const router = express.Router();

router.post('/', ContactController.sendMessage);
router.get('/', ContactController.getAllMessages);

export const ContactRoute = router;
