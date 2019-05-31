var bookshelf = require('../bookshelf');

var Role = bookshelf.Model.extend({
  tableName: 'roles',
});

module.exports = Role;
