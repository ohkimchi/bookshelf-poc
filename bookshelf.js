var knex = require('knex')(require('./knexfile'));

var bookshelfpoc = require('bookshelf')(knex);

module.exports = bookshelfpoc;
