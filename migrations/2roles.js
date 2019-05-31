exports.up = (knex) => {
  return knex.schema
    .createTable('roles', (table) => {
      table.increments('id');
      table.string('name', 255);

      table.unique(['name']);
      table..foreign('person_id')
        .references('id')
        .inTable('people');
    });
}

exports.down = (knex) => {
  return knex.schema
    .dropTable('roles');
}
