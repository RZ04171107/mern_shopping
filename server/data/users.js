const bcrypt = require('bcryptjs');

const users = [
  {
    name: 'Ingrid',
    email: 'admin@example.com',
    password: bcrypt.hashSync('ingrid', 10),
    isAdmin: true,
  },
  {
    name: 'John Smith',
    email: 'john@example.com',
    password: bcrypt.hashSync('john', 10),
  },
  {
    name: 'Ragdoll Cat',
    email: 'ragdoll@example.com',
    password: bcrypt.hashSync('meow', 10),
  },
];

module.exports = users;
