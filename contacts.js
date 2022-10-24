const fs = require("fs").promises;
const path = require("path");
const { v4: uuid } = require("uuid");

const contactsPath = path.join(__dirname, "./db/contacts.json");

const readContact = async () => {
  const contactJson = await fs.readFile(contactsPath, "utf8");
  return JSON.parse(contactJson);
};

async function listContacts() {
  try {
    const contacts = await readContact();

    return contacts;
  } catch (error) {
    console.error(error);
  }
}

async function getContactById(contactId) {
  try {
    const contacts = await readContact();
    const [contact] = contacts.filter(({ id }) => id === contactId);

    if (!contact) {
      return null;
    }

    return contact;
  } catch (error) {
    console.error(error);
  }
}

async function removeContact(contactId) {
  try {
    const contacts = await readContact();
    const id = contacts.findIndex(({ id }) => id.toString() === contactId);
    if (id === -1) return null;
    const update = contacts.splice(id, 1);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return update;
  } catch (error) {
    console.error(error);
  }
}

async function addContact(name, email, phone) {
  try {
    const contacts = await readContact();
    const add = {
      id: uuid(),
      name,
      email,
      phone,
    };
    contacts.push(add);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return add;
  } catch (error) {
    console.error(error);
  }
}

module.exports = { listContacts, getContactById, removeContact, addContact };
