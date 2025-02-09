import { IContact } from './contact.interface';
import { ContactModel } from './contact.model';

const createContactMessage = async (contact: IContact) => {
  const result = await ContactModel.create(contact);
  return result;
};

export const ContactService = {
  createContactMessage,
};
