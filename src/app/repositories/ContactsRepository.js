const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'Lucas',
    email: 'lucas@gmail.com',
    phone: '99999999',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Jose',
    email: 'Jose@gmail.com',
    phone: '99999999545',
    category_id: v4(),
  },
];

class ContactsRepository {
  findALL() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }

  findById(id) {
    return new Promise((resolve) => {
      resolve(contacts.find((contact) => contact.id === id));
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }
}

module.exports = new ContactsRepository();
