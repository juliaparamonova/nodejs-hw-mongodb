import { ContactsCollection } from '../db/models/contacts.js';

export const getAllContacts = async () => {
  const contacts = await ContactsCollection.find();
  return contacts;
};

export const getContactById = async contactId => {
  const contact = await ContactsCollection.findById(contactId);
  return contact;
};

export const createContact = async payload => {
  const contact = await ContactsCollection.create(payload);
  return contact;
};

export const deleteContact = async contactId => {
  const contact = await ContactsCollection.findOneAndDelete({
    _id: contactId,
  });
  return contact;
};

export const patchContact = async (contactId, payload) => {
  const result = await ContactsCollection.findOneAndUpdate(
    {
      _id: contactId,
    },
    payload,
    {
      new: true,
    }
  );

  if (!result) return null;

  return {
    contact: result,
  };
};
