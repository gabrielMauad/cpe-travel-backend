
exports.up = function (knex) {
  return knex.schema.createTable("sublocals", function (table) {
    table.increments("sublocal_id").primary().notNullable();
    table.string("local_id").notNullable();
    table
      .foreign("local_id")
      .references("local_id")
      .inTable("locals")
      .onDelete("cascade");
    table.string("title").notNullable();
    table.string("description").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("sublocals");
};