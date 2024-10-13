import { Router } from 'express';
import {
  contactsController,
  contactByIdController,
  createContactController,
  deleteContactController,
  patchContactController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utilis/ctrlWrapper.js';

const contactsRouter = Router();

contactsRouter.get('/contacts', ctrlWrapper(contactsController));

contactsRouter.get('/contacts/:contactId', ctrlWrapper(contactByIdController));

contactsRouter.post('/contacts', ctrlWrapper(createContactController));

contactsRouter.delete(
  '/contacts/:contactId',
  ctrlWrapper(deleteContactController)
);

contactsRouter.patch(
  '/contacts/:contactId',
  ctrlWrapper(patchContactController)
);

export default contactsRouter;
