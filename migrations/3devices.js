exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('devices', (table) => {
      table.increments('id');
      table.string('type', 255);
      table.string('location', 255);
      table.string('macaddr', 255);
      table.boolean('registered').defaultTo(false);
      table.integer('owned_by').unsigned();

      table.foreign('owned_by')
        .references('id')
        .inTable('people');
    })
  ]);
}

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('devices')
  ]);
}
