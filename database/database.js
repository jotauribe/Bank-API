const knex = require('knex');

const db = knex({
  client: 'mssql',
  connection: {
    server: 'LAPTOP-0P0566KB',
    user: 'Accenture',
    password: 'Accenture',
    database: 'ABank',
    options: {
      port: 1433,
      encrypt: true
    }
  }
});

module.exports = db;
