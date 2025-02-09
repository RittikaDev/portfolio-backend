import { Schema, model } from 'mongoose';
import { IContact } from './contact.interface';

const contactSchema = new Schema<IContact>({
  userName: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

export const ContactModel = model('Contact', contactSchema);
