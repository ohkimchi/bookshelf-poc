var bookshelf = require('../bookshelf');

var Person = bookshelf.Model.extend({
  tableName: 'people',
  role: function() {
    return this.belongsTo(Role)
  },
  device: function() {
    return this.belongsTo(Person)
  }
});

module.exports = Person;
