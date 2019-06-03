var bookshelf = require('../bookshelf');

var Role = bookshelf.Model.extend({
  tableName: 'roles',
  people: function() {
    return this.hasMany(Person)
  }
});

module.exports = Role;
