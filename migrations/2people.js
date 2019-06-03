exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('people', (table) => {
      table.increments('id');
      table.string('email', 255);
      table.string('name', 255);
      table.string('company', 255);
      table.string('role', 255);

      table.foreign('role')
        .references('name')
        .inTable('roles');
    })
  ])
}

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('people')
  ]);
}
