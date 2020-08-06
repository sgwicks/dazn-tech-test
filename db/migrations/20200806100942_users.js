
exports.up = function(knex) {
  return knex.schema.createTable('users', (usersTable) => {
      usersTable.increments('user_id');
      usersTable.string('username').notNullable();
      usersTable.integer('stream_count').defaultTo(0)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users')
};
