exports.up = (knex) => {
  return knex.schema
    .createTableIfNotExists('devices', (table) => {
      table.increments('id');
      table.string('type', 255);
      table.string('location', 255);
      table.string('macaddr', 255);
      table.boolean('registered').defaultTo(false);
      table.integer('owned_by').unsigned();

      table.foreign('owned_by')
        .references('id')
        .inTable('people');
    });
}

exports.down = (knex) => {
  return knex.schema
    .dropTableIfExists('devices');
}
