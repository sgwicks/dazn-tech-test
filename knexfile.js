const user = require('./user');

module.exports = {
  development: {
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
  }
};
