exports.up = (knex) => {
  return knex.schema
    .createTableIfNotExists('roles', (table) => {
      table.increments('id');
      table.string('person_id', 255);
      table.string('name', 255);

      table.unique(['name']);
      table.foreign('person_id')
        .references('id')
        .inTable('people');
    });
}

exports.down = (knex) => {
  return knex.schema
    .dropTableIfExists('roles');
}
