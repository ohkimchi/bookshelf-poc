var bookshelf = require('../bookshelf');

var Person = bookshelf.Model.extend({
  tableName: 'people',
});

module.exports = Person;
