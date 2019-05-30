exports.up = (knex) => {
  return knex.schema
    .createTable('people', (table) => {
      table.increments('id');
      table.string('email', 255);
      table.string('name', 255);
      table.string('company', 255);
      table.string('role_id', 255);

      table.foreign('role_id')
        .references('name')
        .inTable('roles');
    });
}

exports.down = (knex) => {
  return knex.schema
    .dropTable('people')
}
