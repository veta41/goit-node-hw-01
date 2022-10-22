const fs = require("fs").promises;
const path = require("path");
import { nanoid } from "nanoid";

const contactsPath = path.join(__dirname, "./db//contacts.json");

const readContact = async () => {
  const contactJson = await fs.readFile(contactsPath, "utf8");
  return JSON.parse(contactJson);
};

const listContact = async () => await readContact();

const getContactById = async (contactId) => {
  const contacts = await readContact();
  const [contact] = contacts.filter(({ id }) => id === contactId);
  return contact;
};

const removeContact = async (contactId) => {
  const contacts = await readContact();
  const id = contacts.findIndex(({ id }) => id.toString() === contactId);
  if (id === -1) return;
  const update = contacts.splice(id, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return update;
};

const addContact = async (name, email, phone) => {
  const contacts = await readContact();
  const add = {
    id: nanoid(10),
    name,
    email,
    phone,
  };
  contacts.push(add);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return add;
};

module.exports = { listContact, getContactById, removeContact, addContact };
