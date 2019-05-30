import { bookshelf } from '../bookshelf'

var Person = bookshelf.Model.extend({
  tableName: 'people',
});

module.exports = Person;
