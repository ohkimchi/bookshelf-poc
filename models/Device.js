var bookshelf = require('../bookshelf');

var Device = bookshelf.Model.extend({
  tableName: 'devices',
  person: function() {
    return this.belongsTo(Person)
  }
});

module.exports = Device;
