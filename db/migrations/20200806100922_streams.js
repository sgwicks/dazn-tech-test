
exports.up = function(knex) {
  return knex.schema.createTable('streams', (streamsTable) => {
    streamsTable.string('stream_id').primary();
    streamsTable.string('stream_key').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('streams')
};
