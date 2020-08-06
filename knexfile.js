const user = require('./user');

module.exports = {
  development: {
    client: 'pg',
    connection: {
      ...user,
      database: 'dazn_tech_test'
    },
    migrations: './db/migrations'
  }
};
