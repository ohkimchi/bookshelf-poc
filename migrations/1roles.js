exports.up = (knex) => {
  return knex.schema
    .createTable('roles', (table) => {
      table.increments('id');
      table.string('name', 255);

      table.unique(['name']);
    });
}

exports.down = (knex) => {
  return knex.schema
    .dropTable('roles');
}
