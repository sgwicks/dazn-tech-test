const user = require('./user');

const dbConfig = {
  client: 'pg',
  connection: {
    ...user,
    database: 'dazn_tech_test'
    },
  migrations: {
    directory: './db/migrations'
    },
  seeds: {
    directory: './db/seeds'
    }
};

module.exports = dbConfig