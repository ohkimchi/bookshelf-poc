exports.up = (knex) => {
  return knex.schema
    .createTable('people', (table) => {
      table.increments('id');
      table.string('email', 255);
      table.string('name', 255);
      table.string('company', 255);
    });
}

exports.down = (knex) => {
  return knex.schema
    .dropTable('people')
}
