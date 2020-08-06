const streams = require('../data/streams')
const users = require('../data/users')

exports.seed = function(knex) {
  // Tear down and reset the database
  return knex.migrate.rollback()
    .then(() => {
      return knex.migrate.latest()
    })
    .then(() => {
      // Inserts seed entries
      return knex('streams').insert(streams);
    })
    .then(() => {
      return knex('users').insert(users)
    });
};
