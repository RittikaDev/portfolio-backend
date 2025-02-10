import { IContact } from './contact.interface';
import { ContactModel } from './contact.model';

const createContactMessage = async (contact: IContact) => {
  const result = await ContactModel.create(contact);
  return result;
};

const getAllMessagesFromDB = async () => {
  const result = await ContactModel.find().sort({ createdAt: -1 });
  return result;
};

export const ContactService = {
  createContactMessage,
  getAllMessagesFromDB,
};
