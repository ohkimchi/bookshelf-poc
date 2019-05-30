import { bookshelf } from '../bookshelf'

var Role = bookshelf.Model.extend({
  tableName: 'roles',
});

module.exports = Role;
