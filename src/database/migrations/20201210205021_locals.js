
exports.up = function (knex) {
  return knex.schema.createTable('locals', function (table) {
    table.increments("local_id").primary().notNullable()
    table.string('title').notNullable();
    table.string('country').notNullable();
    table.string('description').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("locals");
};