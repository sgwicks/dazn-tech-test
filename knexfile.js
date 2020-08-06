const { DB_URL } = process.env;
const user = require('./user');

const dbConfig = {
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
  },
  production: {
    client: 'pg',
    connection: {
      connectionString: DB_URL,
      ssl: {
        rejectUnauthorized: false,
      }
    },
    migrations: {
      directory: './db/migrations'
      },
    seeds: {
      directory: './db/seeds'
      }
  },
 
};

module.exports = dbConfig