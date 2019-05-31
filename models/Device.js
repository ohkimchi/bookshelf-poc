var bookshelf = require('../bookshelf');

var Device = bookshelf.Model.extend({
  tableName: 'devices',
});

module.exports = Device;
