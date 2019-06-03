exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('roles', (table) => {
      table.increments('id');
      table.string('name', 255);
      table.unique(['name']);
    })
  ]);
}

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('roles')
  ]);
}





